import express from 'express';
import * as gauth from './gauth';

let router = express.Router();

router.post('/google/sync', function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    // gauth.listEvents().catch((err) => console.log(err));
    // console.log(req.body.birthdays);
    gauth.insertEvent(req.body.birthdays);
    res.end();
});

router.get('/google/auth', function (req, res) {
    let code = req.query.code;
    gauth.getAuthTokens(code);
    res.redirect('http://localhost:3000?status=success');
});

router.get('/google/url', function (req, res) {
    let url = gauth.getGoogleAuthUrl();
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(url);
});

export default router;