import express from 'express';
import morgan from 'morgan';
import setRoutes from './routes/blog-routes';
//import bodyParser from 'body-parser';
import decodeToken from './controllers/decode-token';

// express app
const app = express();
// const router = express.Router();

// middleware & static files
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
//app.use(bodyParser.json());
app.use(decodeToken);

// blog routes
setRoutes(app);
app.listen(3001);