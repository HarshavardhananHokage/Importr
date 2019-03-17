import { google } from 'googleapis';
import dotenv from 'dotenv';
import * as tknMgr from './tokenManager';

dotenv.config();

const scopes = ['https://www.googleapis.com/auth/calendar'];

function getOAuthClient () {
    const clientId = process.env.CLIENT_ID;
    const clientSecret = process.env.CLIENT_SECRET;
    const redirectUrls = process.env.REDIRECT_URL;

    const oAuthClient = new google.auth.OAuth2(clientId, clientSecret, redirectUrls);

    return oAuthClient;
}

function getAuthUrl () {
    const gClient = getOAuthClient();

    return gClient.generateAuthUrl({
        access_type: "offline",
        prompt: "consent",
        scope: scopes
    });
}

export function getGoogleAuthUrl () {
    return getAuthUrl();
}

export function getAuthTokens (code) {
    const gClient = getOAuthClient();
    return new Promise((resolve, reject) => {
        gClient.getToken(code, (err, token) => {
            if (err) {
                reject(err);
            }
            tknMgr.writeTokenToFile(token);
            resolve("Success");
        });
    });
}

export async function getTokenFromFile () {
    let token = null;
    try {
        token = await tknMgr.readTokenFromFile();
    } catch (err) {
        console.log(err);
    }

    return token;
}

export async function listEvents () {
    const gClient = getOAuthClient();
    let token = await getTokenFromFile();
    gClient.setCredentials(JSON.parse(token));

    const calendar = google.calendar({ version: 'v3', gClient });

    calendar.events.list({
        auth: gClient,
        calendarId: 'primary',
        timeMin: (new Date()).toISOString(),
        maxResults: 10,
        singleEvents: true,
        orderBy: 'startTime'
    },
    (err, res) => {
        if (err) return console.log(err);
        const events = res.data.items;
        if (events.length) {
            events.map((event) => {
                console.log(event.summary);
            });
        } else {
            console.log("No Evnts found");
        }
    });
}

export async function insertEvent (birthdayList) {
    const gClient = getOAuthClient();
    let token = await getTokenFromFile();
    gClient.setCredentials(JSON.parse(token));

    const calendar = google.calendar({ version: 'v3', gClient });

    var event = {
        'summary': null,
        'start': {
            'date': null
        },
        'end': {
            'date': null
        },
        'recurrence': [ 'RRULE:FREQ=YEARLY;COUNT=1' ]
    };
    let newBirList = birthdayList.map((birthday) => {
        let bir = Object.assign({}, event);
        bir.summary = `${birthday.Name} Birthday`;
        let bDate = birthday.Date.split('-');
        let year = new Date().getFullYear().toString();
        bir.start = { 'date': `${year}-${bDate[1]}-${bDate[0]}` };
        // start.date = `${year}-${bDate[1]}-${bDate[0]}`;
        bir.end = { 'date': `${year}-${bDate[1]}-${bDate[0]}` };
        return bir;
    });
    newBirList.forEach((bir) => insertIntoGoogle(calendar, gClient, bir));
}

function insertIntoGoogle (calendar, gClient, bir) {
    calendar.events.insert({
        auth: gClient,
        calendarId: 'primary',
        resource: bir
    }, (err, event) => {
        if (err) return console.log(err);
        console.log("Event Created: " + event.summary);
    });
}