const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const dotenv = require('dotenv');

dotenv.config();

//api/users/ (post)(login)
const login = asyncHandler(async (req, res) => {
	const { enrollNo } = req.body;
	console.log(enrollNo);

	const user = await User.findOne({ enrollNo: enrollNo });
	console.log(user);

	if (user) {
		const maskedNumber = maskNumber(user.mobNumber);
		res.status(201).send(maskedNumber);
	} else {
		res.status(400).json({ message: 'Not Found' });
	}
});

const maskNumber = (mobNumber) => {
	const str = mobNumber.toString();
	const first = str.slice(0, 1);
	const last = str.slice(-3);
	const middle = str.slice(1, -3).replace(/./g, '*');
	return first + middle + last;
};

//api/users/register (post)
const register = asyncHandler(async (req, res) => {
	// const { enrollNo, mobNumber, name, college, dept, semester } = req.body;
	const { enrollNo, mobNumber, name, college, dept, semester, pic } = req.body;
	const userExists = await User.findOne({ enrollNo });

	if (userExists) {
		res.status(400).json({ message: 'User already exists' });
	}

	if ((enrollNo, mobNumber, name, college, dept, semester)) {
		const newUser = await User.create({
			enrollNo,
			mobNumber,
			name,
			college,
			dept,
			semester,
			pic,
		});
		if (newUser) {
			res.send('New User Added');
		} else {
			// res.status(400).send("Couldn't create User, Try Again.");
			res.status(400).json({ message: "Couldn't create User, Try Again." });
		}
	} else {
		// res.status(400).send('Details are missing, Try Again');
		res.status(400).json({ message: 'Details are missing, Try Again' });
	}
});

module.exports = { login, register };

//login (enrollno)
//registration (enrollno, contactno, name, college, dept, sem,dp)
