"use server"
import { db } from "@/lib/server-configs"
import { revalidatePath } from "next/cache"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"

export async function ApprovePhoto(id: string) {
    try {
        const session = await getServerSession(authOptions)
        if (!session) return { success: false }
        // changes the status to published in firebase

        await db.collection('submissions').doc(id).update({
            status: "published",
            publishedAt: new Date().toISOString()
        })

        revalidatePath("/admin")
        revalidatePath("/gallery")

        return { success: true }
    } catch (error) {
        console.log("error publishing photo", error)

        return { success: false }
    }
}

// Batch approve multiple photos in a single Firestore batch write
export async function BulkApprovePhotos(ids: string[]) {
    try {
        const session = await getServerSession(authOptions)
        if (!session) return { success: false, count: 0 }

        const batch = db.batch();
        const now = new Date().toISOString();

        for (const id of ids) {
            const docRef = db.collection('submissions').doc(id);
            batch.update(docRef, {
                status: "published",
                publishedAt: now,
            });
        }

        await batch.commit();

        revalidatePath("/admin");
        revalidatePath("/gallery");

        return { success: true, count: ids.length };
    } catch (error) {
        console.error("Error bulk approving photos:", error);
        return { success: false, count: 0 };
    }
}