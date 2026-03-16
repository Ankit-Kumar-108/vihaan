"use server"
import { db, cloudinary } from "@/lib/server-configs"
import { revalidatePath } from "next/cache"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"

export default async function DeletePhoto(id: string, cloudyId: string) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) return { success: false, error: "Unauthorized" }

    const cloudinaryRes = await cloudinary.uploader.destroy(cloudyId)

    if (cloudinaryRes.result !== 'ok') {
      console.warn(`Cloudinary image not deleted (may be orphaned): ${cloudyId}`, cloudinaryRes)
    }

    await db.collection('submissions').doc(id).delete()

    revalidatePath("/admin")

    return { success: true }

  } catch (error) {

    console.error("Error Deleting Image", error)

    return { success: false, error: "error deleting photo" }

  }
}