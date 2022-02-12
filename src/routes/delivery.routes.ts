import { Router } from 'express';
import { CreateDeliveryController } from '../modules/deliveries/useCases/createDeliveryUseCase/CreateDeliveryController';

const createDeliveryController = new CreateDeliveryController()

const deliveryRoutes = Router()

deliveryRoutes.post('/', createDeliveryController.handle)

export { deliveryRoutes }