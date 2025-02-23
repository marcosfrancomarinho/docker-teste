import { Router } from 'express';
import { LoginControllers } from '../controllers/LoginCotrollers';
import { LoginServices } from '../services/LoginServices';

const loginControllers = new LoginControllers(new LoginServices());

const routers = Router();

routers.get('/', loginControllers.execute);

export { routers };
