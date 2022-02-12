import { Router } from 'express';
import { CreateDeliverymanController } from '../modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController';

const createDeliverymanController = new CreateDeliverymanController()

const deliverymanRoutes = Router()

deliverymanRoutes.post('/', createDeliverymanController.handle)

export { deliverymanRoutes }