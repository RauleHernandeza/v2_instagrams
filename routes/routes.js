const { Router } = require('express');
const express = require('express');
const path =require('path');
const router = Router();
const { getusers, postusers } = require('../controllers/instagramdb.js')
const { index, create, like, comment, remove } = require('../controllers/img.js')
const { homeindex } = require('../controllers/home.js')

router.get('/users', getusers )
router.post('/users', postusers)

router.get('/', homeindex )
router.get('/images/:image_id', index)
router.post('/images', create )
router.post('/images/:image_id/like', like )
router.post('/images/:image_id/comment', comment )
router.delete('/images/:image_id', remove )

router.use('/public', express.static(path.join(__dirname, '../public')))

module.exports = router;
