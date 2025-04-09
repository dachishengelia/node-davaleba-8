const express = require('express');
const Movie = require('../MoviesDaRejisorebi/movie');
const Rejisori = require('../MoviesDaRejisorebi/rejisori');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { rejisoriId, title, releaseYear } = req.body;
    const rejisori = await Rejisori.findById(rejisoriId);

    if (!rejisori) {
      return res.status(404).json({ error: 'Rejisori not found' });
    }

    const movie = new Movie({
      title,
      releaseYear,
      director: rejisoriId
    });

    await movie.save();
    res.status(201).json(movie);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const movies = await Movie.find().populate('rejisori');
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id).populate('rejisori');
    if (!movie) {
      return res.status(404).json({ error: 'Movie not found' });
    }
    res.json(movie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
