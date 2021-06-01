const router = require('express').Router();
const {check} = require('express-validator')
const {validateFields} = require('../middlewares');
const {getAlbums} = require('../controllers/albums');

router.get('/:album',[
    check('album','The parameter "album" is required').not().isEmpty(),
    validateFields
], getAlbums);

module.exports = router;