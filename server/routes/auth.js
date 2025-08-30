// server/routes/auth.js
const { OAuth2Client } = require('google-auth-library');
const router = require('express').Router();
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

router.post('/google-login', async (req, res) => {
  const { token } = req.body;
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.GOOGLE_CLIENT_ID,
  });
  const payload = ticket.getPayload();
  res.status(200).json({ user: payload });
});

module.exports = router;