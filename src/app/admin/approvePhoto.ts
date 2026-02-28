"use server"
import { db, drive } from "@/lib/server-configs"
import { revalidatePath } from "next/cache"

export async function ApprovePhoto(id: string, driveId: string,) {
    try {

        // change drive permission
        await drive.permissions.create({
            fileId: driveId,
            requestBody: {
                role: "reader",
                type: "anyone",
            },

        })
        // changes the status to published in firebase

        await db.collection('submissions').doc(id).update({
            status: "published"
        })

        revalidatePath("/admin")

        return { success: true }
    } catch (error) {
        console.log("error publishing photo", error)

        return { success: false }
    }
}