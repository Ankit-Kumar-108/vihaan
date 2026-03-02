"use server"
import { db} from "@/lib/server-configs"
import { revalidatePath } from "next/cache"

export async function ApprovePhoto(id: string) {
    try {
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