const { Router } = require('express');
const { getUser , 
        // updateUser,
        // addUser,
        // listProduct,
        // getProduct,
        // addProduct,
        // updateProduct
} = require('../control/controls');

const router = Router();

router.post('/get-user', getUser);
// router.post('/update-user', updateUser);
// router.post('/add-user', addUser);
// router.post('/list-product', listProduct);
// router.post('/get-product', getProduct);
// router.post('/add-product', addProduct);
// router.post('/update-product', updateProduct);

module.exports = router;