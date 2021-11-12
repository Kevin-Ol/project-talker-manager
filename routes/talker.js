const express = require('express');
const { getTalkers, getOneTalker, validateToken, validateTalkerName, validateTalkerAge,
  validateTalkerTalk, createTalker, editTalker, deleteTalker,
  searchTalker } = require('../middlewares');

const router = express.Router();

router.get('/', getTalkers);

router.get('/search', [validateToken, searchTalker]);

router.get('/:id', getOneTalker);

router.post('/', [validateToken, validateTalkerName, validateTalkerAge,
  validateTalkerTalk, createTalker]);

router.put('/:id', [validateToken, validateTalkerName, validateTalkerAge,
    validateTalkerTalk, editTalker]);

router.delete('/:id', [validateToken, deleteTalker]);

module.exports = router;
