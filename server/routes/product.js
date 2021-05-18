const express = require('express')
const router = express.Router();



const { newProduct } = require('../controllers/product_controller');


// router.route('/products').get(getProducts);
router.route('./product/new').post(newProduct);

module.exports = router;
