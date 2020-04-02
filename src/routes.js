import { Router } from 'express';
import UserController from './app/controllers/usercontroller';
import SessionController from './app/controllers/sessioncontroller';

const routes = new Router();

routes.post('/users', UserController.store);
routes.put('/users', UserController.update);
routes.get('/signin', SessionController.store);


export default routes;
