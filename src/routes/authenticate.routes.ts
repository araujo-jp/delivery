import { Router } from 'express';
import { AuthenticateClientController } from '../modules/account/useCases/authenticateClient/AuthenticateUserController';
import { AuthenticateDeliverymanController } from '../modules/account/useCases/authenticateDeliveryman/AuthenticateDeliverymanController';

const authenticateClientController = new AuthenticateClientController()
const authenticateDeliverymanController = new AuthenticateDeliverymanController()

const authenticateRoutes = Router()

authenticateRoutes.post('/client', authenticateClientController.handle)
authenticateRoutes.post('/deliveryman', authenticateDeliverymanController.handle)

export { authenticateRoutes }