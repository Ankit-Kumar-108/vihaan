import { NextResponse, NextRequest } from "next/server";
import { appendToSheet } from "@/lib/sheet";
import sendConfirmationEmail from "@/lib/mailer";
import { db } from "@/lib/server-configs";


export async function POST(req: NextRequest) {
    try {
        // check if upload is disabled
        const settingDoc = await db.collection('config').doc('siteSettings').get()
        const settings = settingDoc?.data()
        if(settings?.registrationEnabled === false){
            return NextResponse.json({error: "Registration is currently closed."}, {status: 403})
        }

        const { name, email, enrollment, phone, department, event, teamMembers } = await req.json();

        if (!name || !email || !enrollment || !phone || !department || !event || !teamMembers) {
            return NextResponse.json({ error: "All fields are required" }, { status: 400 });
        }

        await appendToSheet({ name, email, enrollment, phone, department, event, teamMembers });

        await sendConfirmationEmail({name, email, enrollment, phone, department, event, teamMembers});

        return NextResponse.json({ message: "Registration successful" }, { status: 200 });
    } catch (error: any) {
        console.error("Error registering user:", error);
        return NextResponse.json({ error: "Failed to register" }, { status: 500 });
    }
}
