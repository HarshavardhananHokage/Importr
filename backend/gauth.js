import { google } from 'googleapis';
import dotenv from 'dotenv';

dotenv.config();

const scopes = ['https://www.googleapis.com/auth/calendar'];

function getOAuthClient () {
    const clientId = process.env.CLIENT_ID;
    const clientSecret = process.env.CLIENT_SECRET;
    const redirectUrls = process.env.REDIRECT_URL;
    // console.log(clientId);
    // console.log(clientSecret);
    // console.log(redirectUrls);

    const oAuthClient = new google.auth.OAuth2(clientId, clientSecret, redirectUrls);

    return oAuthClient;
}

function getAuthUrl () {
    const gClient = getOAuthClient();

    return gClient.generateAuthUrl({
        access_type: "offline",
        scope: scopes
    });
}

export function getGoogleAuthUrl () {
    return getAuthUrl();
}