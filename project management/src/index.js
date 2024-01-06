const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const databaseConnection = require('./utils/db')
const errorMiddleware = require('./middleware/error');

//<------------------------- Importing Routes ------------------------------------->
const { AuthRoute, UserRoute, AdminRoute, TaskRoute, s3Route } = require('./routes/index')


dotenv.config();

app.use(cors());

app.use(express.json()); // Parse incoming JSON data

// Connect to the MongoDB database
databaseConnection.connect();

const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 50,
  message: 'Too many requests from this IP, please try again later.',
});

// limiter middleware to your routes
app.use('/api', limiter);

//routes
app.use('/api/auth', AuthRoute); // Route for authentication
app.use('/api/user', UserRoute); // Route for user-related operations
app.use('/api/admin', AdminRoute); //Route for admin-related operation
app.use('/api/task', TaskRoute); //Route for task-realted operation
app.use('/api/s3', s3Route); //Route for upload docs to s3
app.use(errorMiddleware);


app.get('/', (req, res) => {
  res.send('Hello World');
});


// Start the server and listen for incoming requests
app.listen(5000, () => {
  console.log('Backend server is running on 5000!');
});
