const mongoose = require('mongoose');

const userModel = mongoose.Schema(
	{
		mobNumber: {
			type: Number,
			required: true,
			unique: true,
		},
		enrollNo: { type: String, required: true, unique: true },
		college: { type: String, required: true },
		dept: { type: String, required: true },
		semester: { type: Number, required: true },
		// DOB: { type: String, required: true },
		name: { type: String, required: true },
		pic: {
			type: String,
		},
		booksDonated: { type: Number },
	},
	{
		timestamps: true,
	}
);

const User = mongoose.model('User', userModel);

module.exports = User;

// mobNumber
// enrollNo
// college
// dept
// semester
// booksDonated
// DOB
// name
// pic
