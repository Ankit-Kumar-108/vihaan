import { google } from "googleapis";
import * as admin from "firebase-admin";

// 1. Google Drive OAuth2 Setup
const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  "https://developers.google.com/oauthplayground"
);

oauth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
});

export const drive = google.drive({ version: 'v3', auth: oauth2Client });

// CONNECTION TEST: This will print in your VS Code terminal
drive.about.get({ fields: 'user' })
  .then(res => console.log("🚀 Drive Connected as:", res.data.user?.emailAddress))
  .catch(err => console.error("❌ Drive Auth Error:", err.message));

// 2. Firebase Admin Setup
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.PROJECT_ID,
      clientEmail: process.env.CLIENT_EMAIL,
      privateKey: process.env.PRIVATE_KEY?.replace(/\\n/g, '\n'),
    }),
  });
}

export const db = admin.firestore();