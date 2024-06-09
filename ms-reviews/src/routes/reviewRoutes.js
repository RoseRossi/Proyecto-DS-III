const { Router } = require('express');
const { addReview, getReviews} = require('../controllers/reviewController');

const router = Router();

router.post('/add-review', addReview);
router.get('/get-reviews', getReviews);

module.exports = router;
