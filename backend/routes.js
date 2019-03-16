import express from 'express';
import * as gauth from './gauth';

let router = express.Router();

router.post('/google/sync', function (req, res) {
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    console.log("Came here!!");
    res.send("Works!!");
    // res.status(500);
    // res.send("None shall pass!");
});

router.get('/google/auth', function (req, res) {
    console.log(req.query.code);
    res.end();
});

router.get('/google/url', function (req, res) {
    let url = gauth.getGoogleAuthUrl();
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(url);
});

export default router;