const router = require('express').Router();
const {check} = require('express-validator');
const {validateFields} = require('../middlewares');
const {getAlbums, getAlbumDetails} = require('../controllers/albums');

/*GET API method that handles the http://localhost:8081/v1/albums/${album} */
router.get('/:album',[
    check('album','The parameter "album" is required').not().isEmpty(),
    validateFields
], getAlbums);

/*GET API method that handles the http://localhost:8081/v1/albums/details/${id}*/
router.get('/details/:id',[
    check('id','The parameter "id" is required').not().isEmpty(),
    validateFields
],getAlbumDetails)

module.exports = router;