import axios from 'axios';

const API_BASE = 'http://localhost:3001/api';
const PATH_GOOGLE_SYNC = '/google/sync';

export function syncWithGoogle(birthdays) {
    const GSYNC_URL = `${API_BASE}${PATH_GOOGLE_SYNC}`;
    return Promise.reject("success");
    // axios.post(GSYNC_URL, { birthdays: birthdays })
    //     .then(result => result.data)
    //     .catch(err => err.data);
}