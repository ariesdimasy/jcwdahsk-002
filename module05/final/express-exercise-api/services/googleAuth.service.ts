import {
    OAuth2Client
} from "google-auth-library";

export async function verifyGoogleToken(idToken: string) {
    const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
    const ticket = await client.verifyIdToken({
        idToken: idToken,
        audience: process.env.GOOGLE_CLIENT_ID || ""
    });


    const payload = ticket.getPayload();

    if (!payload || !payload.email) {
        throw new Error("Invalid token payload");
    }

    return {
        email: payload.email,
        name: payload.name || "",
        googleId: payload.sub || "",
        picture: payload.picture || ""
    };
}