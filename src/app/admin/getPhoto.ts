"use server"
import { db } from "@/lib/server-configs"

export default async function GetPhoto() {
  try {
    const data = await db.collection('submissions').orderBy('createdAt', 'desc').get()

    const photos = data.docs.map((doc) => {
      const docData = doc.data()
      const originalUrl = docData.url

      return {
        id: doc.id,
        ...docData,
        //500px, auto-optimized thumbnail
        dataUrl: originalUrl.replace('/upload/', '/upload/f_auto,q_auto,w_500,c_limit/'),

        // 3. FULL RES: Use the original URL (but still add f_auto/q_auto for speed)
        fullResImg: originalUrl.replace('/upload/', '/upload/f_auto,q_auto/'),

        timestamp: docData.createdAt?.toDate?.()?.toISOString() || docData.createdAt,
      }
    })

    return JSON.parse(JSON.stringify(photos));
  } catch (error) {
    console.error("Error fetching photos", error)
    return []
  }
}