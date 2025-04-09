const express = require('express');
const Rejisori = require('../MoviesDaRejisorebi/rejisori');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const rejisori = new Rejisori(req.body);
    await rejisori.save();
    res.status(201).json(rejisori);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const rejisoris = await Rejisori.find();
    res.json(rejisoris);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
