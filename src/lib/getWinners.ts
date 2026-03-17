"use server"
import { db } from "./server-configs"

export async function getWinners() {
    try {
        const snapshot = await db.collection("winnersOfVihan").get();
        const winners = snapshot.docs.map(doc => {
            const data = doc.data();
            return {
                id: doc.id,
                ...data,
                // Optimize: winner cards are only ~188px wide, 250px is plenty
                imageUrl: data.imageUrl
                    ? (data.imageUrl as string).replace('/upload/', '/upload/f_auto,q_auto,w_250,c_limit/')
                    : undefined,
            };
        });
        return winners;
    } catch (error) {
        console.error("Error fetching winners:", error);
        return [];
    }
}
