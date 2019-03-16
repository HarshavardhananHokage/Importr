import axios from 'axios';

const API_BASE = 'http://localhost:3001/api';
const PATH_GOOGLE_SYNC = '/google/sync';
const PATH_GET_AUTH_URL = '/google/url';

export function syncWithGoogle(birthdays) {
    const GSYNC_URL = `${API_BASE}${PATH_GOOGLE_SYNC}`;
    return axios.post(GSYNC_URL, { birthdays: birthdays })
        .then(result => {
            return result.data
        })
        .catch(err => { throw err.data });
}

export function getAuthenticateURL() {
    const GET_AUTH_URL = `${API_BASE}${PATH_GET_AUTH_URL}`;
    return axios.get(GET_AUTH_URL)
        .then((result) => { 
            console.log("Came Here");
            return result.data
        })
        .catch(err => err.data);
}