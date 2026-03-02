import { cloudinary, db } from '@/lib/server-configs';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        const file = formData.get('file') as File;
        const category = formData.get('category') as string;
        const uploaderName = formData.get('uploaderName') as string;

        if (!file) return NextResponse.json({ error: "No file" }, { status: 400 });

        // 1. Convert File to Buffer
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // 2. Upload to Cloudinary
        const cloudinaryRes = await new Promise<any>((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream(
                {
                    folder: "submission",
                    public_id: `${category}_${Date.now()}_${file.name.split('.')[0]}`,
                    resource_type: "auto",
                },
                (error, result) => {
                    if (error) {
                        console.error("Cloudinary Stream Error:", error);
                        return reject(error);
                    } else {
                        resolve(result);
                    }
                }
            )
            uploadStream.end(buffer)
        })

        const cloudyId = cloudinaryRes?.public_id
        const secureUrl = cloudinaryRes?.secure_url

        if (!secureUrl) {
            return NextResponse.json({ error: "Cloudinary upload incomplete" }, { status: 500 });
        }

        // Save Record to Firebase Firestore
        // This acts as your "Pending Queue"
        await db.collection('submissions').add({
            cloudyId: cloudyId,
            url: secureUrl,
            category: category,
            uploaderName: uploaderName,
            fileName: file.name,
            status: 'pending', // IMPORTANT: Admin will change this later
            createdAt: new Date().toISOString(),
        });

        return NextResponse.json({ success: true, cloudyId, url: secureUrl });

    } catch (error: any) {
        console.error("Upload Error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}