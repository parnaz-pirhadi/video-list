const { Router } = require('express');
const router = Router();

const { videos } = require('../controllers/videos');

router.get('/getAll',videos );

module.exports = router;
