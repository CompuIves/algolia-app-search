import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as bodyParser from 'koa-bodyparser';

import log from './utils/log';

// --- MIDDLEWARE ---
import errorHandler from './middleware/error-handler';
import logger from './middleware/logger';
import notFoundHandler from './middleware/not-found';

// --- ROUTES ---
import { deleteRoute, createRoute } from './routes/items';

const DEFAULT_PORT = 4000;

const app = new Koa();

app.use(bodyParser());
app.use(errorHandler);
app.use(logger);
app.use(notFoundHandler);

const router = new Router();

router.post('/api/1/apps', createRoute).delete('/api/1/apps/:id', deleteRoute);
app.use(router.routes()).use(router.allowedMethods());

log(`Listening to ${DEFAULT_PORT}`);
app.listen(DEFAULT_PORT);
