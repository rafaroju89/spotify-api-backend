const router = require('express').Router();
const {validateFields} = require('../middlewares');
const {getTracks} = require('../controllers/tracks');

router.get('/:track',[
    validateFields
], getTracks);

module.exports = router;