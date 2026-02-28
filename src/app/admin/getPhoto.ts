"use server"

import { db } from "@/lib/server-configs"

export default async function GetPhoto() {
  try {
    // 1. Fetch only from Firestore (Super fast)
    const data = await db.collection('submissions').orderBy('createdAt', 'desc').get()

    // 2. Map the data locally without any async Drive API calls
    const photos = data.docs.map((doc) => {
      const docData = doc.data()
      const driveId = docData.driveId

      return {
        id: doc.id,
        ...docData,
        // Use the smart URL patterns we discussed
        dataUrl: `https://drive.google.com/thumbnail?id=${driveId}&sz=w500`,
        fullResImg: `https://drive.google.com/uc?export=view&id=${driveId}`,
        timestamp: docData.createdAt,
      }
    })

    return photos
  } catch (error) {
    console.error("Error fetching photos", error)
    return []
  }
}