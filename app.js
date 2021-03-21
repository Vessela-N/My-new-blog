import express from 'express';
import morgan from 'morgan';
import setRoutes from './routes/blogRoutes';
import bodyParser from 'body-parser';

// express app
const app = express();
// const router = express.Router();

// middleware & static files
//app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(bodyParser.json());

// blog routes
setRoutes(app);
app.listen(3001);