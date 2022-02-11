import { Router } from 'express';
import { AuthenticateClientController } from '../modules/account/useCases/authenticateClient/AuthenticateUserController';

const authenticateClientController = new AuthenticateClientController()

const authenticateRoutes = Router()

authenticateRoutes.post('/', authenticateClientController.handle)

export { authenticateRoutes }