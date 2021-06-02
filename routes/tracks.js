const router = require('express').Router();
const {validateFields} = require('../middlewares');
const {getTracks} = require('../controllers/tracks');

/*GET API method that handles the http://localhost:8081/v1/tracks/${track}*/
router.get('/:track',[
    validateFields
], getTracks);

module.exports = router;