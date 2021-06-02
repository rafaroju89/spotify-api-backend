const router = require('express').Router();
const {check} = require('express-validator');
const {validateFields} = require('../middlewares');
const {getArtists, getArtistDetails} = require('../controllers/artists');

/*GET API method that handles the http://localhost:8081/v1/artists/${artist} */
router.get('/:artist',[
    check('artist','The parameter "artist" is required').not().isEmpty(),
    validateFields
], getArtists);

/*GET API method that handles the http://localhost:8081/v1/artists/details/${id} */
router.get('/details/:id',[
    check('id','The parameter "id" is required').not().isEmpty(),
    validateFields
],getArtistDetails)

module.exports = router;