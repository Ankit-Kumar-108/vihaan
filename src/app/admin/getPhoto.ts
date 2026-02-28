"use server"

import { db, drive } from "@/lib/server-configs"

export default async function GetPhoto() {
  try {
    const data = await db.collection('submissions').orderBy('createdAt', 'desc').get()

    const photos = await Promise.all(
      data.docs.map(async (doc) => {
        const docData = doc.data()
        const driveId = docData.driveId

        // Make the file publicly viewable so the image loads in the browser
        try {
          await drive.permissions.create({
            fileId: driveId,
            requestBody: {
              role: "reader",
              type: "anyone",
            },
          })
        } catch {
          // Permission may already exist — ignore
        }

        return {
          id: doc.id,
          ...docData,
          dataUrl: `https://drive.google.com/thumbnail?id=${driveId}&sz=w500`,
          timestamp: docData.createdAt,
        }
      })
    )

    return photos
  } catch (error) {
    console.error("Error fetching photos", error)
    return []
  }
}

