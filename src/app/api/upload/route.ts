import { drive, db } from '@/lib/server-configs';
import { NextResponse } from 'next/server';
import { Readable } from 'stream';

export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        const file = formData.get('file') as File;
        const category = formData.get('category') as string;
        const uploaderName = formData.get('uploaderName') as string;

        if (!file) return NextResponse.json({ error: "No file" }, { status: 400 });

        // 1. Convert File to Buffer for Google Drive
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // 2. Upload to Google Drive (Private Folder)
        const driveRes = await drive.files.create({
            requestBody: {
                name: `${category}_${Date.now()}_${file.name}`,
                parents: [process.env.DRIVE_FOLDER_ID!],
            },
            media: {
                mimeType: file.type,
                body: Readable.from(buffer),
            },
            fields: "id"
        });

        const driveId = driveRes.data.id;

        // 3. Save Record to Firebase Firestore
        // This acts as your "Pending Queue"
        await db.collection('submissions').add({
            driveId: driveId,
            category: category,
            uploaderName: uploaderName,
            fileName: file.name,
            status: 'pending', // IMPORTANT: Admin will change this later
            createdAt: new Date().toISOString(),
        });

        return NextResponse.json({ success: true, driveId });

    } catch (error: any) {
        console.error("Upload Error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}