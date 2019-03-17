import fs from 'fs';

const FILE_NAME = "tokens.json";

export function writeTokenToFile (token) {
    fs.writeFile(FILE_NAME, JSON.stringify(token), (err) => {
        if (err) return console.log(err);
        console.log("Token stored in: " + FILE_NAME);
    });
}

export function readTokenFromFile () {
    return new Promise((resolve, reject) => {
        fs.readFile(FILE_NAME, (err, token) => {
            if (err) reject(err);
            resolve(token);
        });
    });
}