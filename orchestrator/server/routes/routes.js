const { Router } = require('express');
const { getUser , 
        listProduct_,
        addProduct,
        updateProduct_,
        getProduct,
        addUser_,
        updateUser_,
        loggedUser_,
        createRepair_,
        updateRepair_
} = require('../control/controls');

const router = Router();

// Ms-products
router.post('/get-product', getProduct);
router.post('/add-product', addProduct);
router.put('/update-product', updateProduct_);
router.post('/list-product', listProduct_);

// Ms-user
router.post('/get-user', getUser);
router.post('/add-user', addUser_);
router.put('/update-user', updateUser_);
router.post('/logged-user', loggedUser_);

//Ms-repairs
router.post('/create-repair', createRepair_);
router.patch('/reparaciones/:id/finalizar', updateRepair_);


module.exports = router;