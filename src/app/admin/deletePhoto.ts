"use server"
import { db, drive } from "@/lib/server-configs"
import { revalidatePath } from "next/cache"

export default async function DeletePhoto(docId: string, driveId: string) {
  try {

    await drive.files.delete({ fileId: driveId })
    await db.collection('submissions').doc(docId).delete()

    revalidatePath("/admin")

    return { success: true }

  } catch (error) {

    console.error("Error Deleting Image", error)

    return { success: false, error: "error deleting photo" }

  }
}