// server/routes/users.js
router.post('/add-user', async (req, res) => {
  const { name, email, phone } = req.body;
  // Save to DB
  res.status(201).json({ message: 'User added' });
});