import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import router from './router.js';
import responseMiddleware from './middlewares/response.js';
import { errorHandler } from '#middlewares/error-handler';

const app = express();

// Middlewares
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(responseMiddleware);

app.use(router);
app.use(errorHandler);

export default app;
