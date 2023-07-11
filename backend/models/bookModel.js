const mongoose = require('mongoose');

const bookModel = mongoose.Schema(
	{
		// owner: { type: String, required: true },
		// owner:{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }
		// category: { type: String },
		title: { type: String, required: true },
		bookCond: { type: String, required: true },
		author: { type: String, required: true },
		year: { type: Number, required: true },
		pics: {
			type: [String],
			required: true,
		},
		description: { type: String },
		language: { type: String, required: true },
		mrp: { type: Number, required: true },
		rate: { type: Number, required: true },
		// dept: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
	},
	{
		timestamps: true,
	}
);

const Books = mongoose.model('Books', bookModel);

module.exports = Books;

//owner
//category
//title
//author
//year
//pics
//description
//mrp
//rate
