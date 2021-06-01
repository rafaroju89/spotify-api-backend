const router = require('express').Router();
const {validateFields} = require('../middlewares');
const {getArtists} = require('../controllers/artists');

router.get('/:artist',[
    validateFields
], getArtists);

module.exports = router;