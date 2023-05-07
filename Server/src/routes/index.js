const { Router } = require('express');
const { deleteFav } = require('../controllers/deleteFav');
const { getCharById } = require('../controllers/getCharById');
const { getFavs } = require('../controllers/getFavs');
const { login } = require('../controllers/login');
const { postFav } = require('../controllers/postFav');
const { postUser } = require('../controllers/postUser');

const router = Router();

router.get('/character/:id', getCharById);
router.get('/login', login);
router.get('/fav', getFavs);

router.post('/fav', postFav);
router.post('/login', postUser);

router.delete('/fav/:id', deleteFav);

module.exports = { router };
