const { Router } = require('express');
const { getUser , 
        listProduct_,
        addProduct,
        updateProduct_,
        getProduct,
        addUser_,
        updateUser_,
        loggedUser_, 
        getReviews_,
        addReview_,
        addSpare_, 
        updateSpare_,
        deleteSpare_
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

// Ms-reviews
router.post('/get-reviews', getReviews_);
router.post('/add-reviews', addReview_);

// Ms-spare-parts
router.post('/agregar', addSpare_);
router.put('/editar/:id', updateSpare_);
router.delete('/eliminar/:id', deleteSpare_);

module.exports = router;