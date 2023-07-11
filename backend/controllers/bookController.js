const asyncHandler = require('express-async-handler');
const dotenv = require('dotenv');
// const User = require('../models/userModel');
const Books = require('../models/bookModel');

dotenv.config();

// /api/books?books
const getBooks = asyncHandler(async (req, res) => {
	// const userDept = req.query.dept;
	try {
		// const books = await Books.find().limit(3);
		const books = await Books.find();
		res.send(books);
	} catch (error) {
		res.status(500).send('Server Error');
	}
});

// /api/books/addBook (post)
const addBook = asyncHandler(async (req, res) => {
	const {
		// owner,
		// category,
		title,
		author,
		year,
		description,
		language,
		mrp,
		rate,
		bookCond,
	} = req.body;

	const images = req.files.images;
	if (!images) {
		res.status(400).json({ message: 'No images were uploaded' });
		return;
	}

	const newBook = await Books.create({
		// owner,
		// category,
		title,
		author,
		year,
		pics: images.map((image) => image.filename),
		description,
		language,
		mrp,
		rate,
		bookCond,
	});

	if (newBook) {
		res.send('New Book Added');
	} else {
		// res.status(400).send("Couldn't add Book, Try Again");
		res.status(400).json({ message: "Couldn't add Book, Try Again." });
	}
});

// /api/books/details?_id=${bookId}
const getBookDetails = asyncHandler(async (req, res) => {
	console.log('backend');
	try {
		const bookId = req.query._id;
		console.log(bookId);
		const book = await Books.find({ _id: bookId });
		console.log(book);
		res.send(book);
	} catch (error) {
		res.status(500).json({ message: 'Server Error' });
	}
});

//----------------------------------
// res.send({
// 	owner,
// 	category,
// 	title,
// 	author,
// 	year,
// 	pics,
// 	description,
// 	mrp,
// 	rate,
// });

module.exports = { getBooks, addBook, getBookDetails };
