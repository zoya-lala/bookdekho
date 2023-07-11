const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const colors = require('colors');
const dotenv = require('dotenv');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');
// const books = require('./data/data');
const bookRoutes = require('./routes/bookRoutes');
const userRoutes = require('./routes/userRoutes');
const path = require('path');

dotenv.config();
connectDB();
const app = express();
app.use(cors());
app.use(express.json()); // To accept JSON Data

app.get('/', (req, res) => {
	res.send('API is running');
	console.log('backend');
});

app.use('/api/books', bookRoutes);
app.use('/api/users', userRoutes);

const dirname = path.resolve();
if (process.env.NODE_ENV === 'development') {
	app.use(express.static(path.join(dirname, '/frontend/build')));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(dirname, 'frontend', 'build', 'index.html'));
	});
} else {
	app.get('/', (req, res) => {
		res.send('API is running');
	});
}

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log('Server started on PORT ${PORT}'));
