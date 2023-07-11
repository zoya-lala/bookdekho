const express = require('express');
const multer = require('multer');
const {
	getBooks,
	addBook,
	getBookDetails,
} = require('../controllers/bookController');
const router = express.Router();
const upload = multer();

router.get('/', getBooks);
router.post('/addBook', upload.array('images'), addBook);
router.get('/details', getBookDetails);

module.exports = router;
