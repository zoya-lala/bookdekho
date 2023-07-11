const mongoose = require('mongoose');

const wishlistModel = mongoose.Schema(
	{
		user: { type: String, required: true },
		books: { type: String, required: true },
	},
	{
		timestamps: true,
	}
);

const Wishlist = mongoose.model('Wishlist', wishlistModel);

module.exports = Wishlist;

//user
//books
