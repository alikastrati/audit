const express = require('express');
const router = express.Router();
const { Password } = require('../models');


router.get('/', async (req, res) => {
  const listAllPasswords = await Password.findAll();
  res.json(listAllPasswords);

});



router.post('/', async (req, res) => {
  const password = req.body;

  await Password.create(password);

  res.json(password);


});


router.delete('/password/:id', async (req, res) => {
  const passwordId = req.params.id;
  try {
    const password = await Password.findByPk(passwordid);
    if (!password) {
      return res.status(404).json({ error: "Password not found" });
    }

    await res.json({ success: true });
  } catch (error) {
    console.error("Error deleting the password", error);
    res.status(500).json({ error: 'Internal Server error' });
  }
});





module.exports = router;
