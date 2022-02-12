import { Router } from 'express';
import { authenticateRoutes } from './authenticate.routes';
import { clientRoutes } from './clients.routes';
import { deliverymanRoutes } from './deliveryman.routes';

const routes = Router()

routes.use('/clients', clientRoutes)
routes.use('/authenticate', authenticateRoutes)
routes.use('/deliveryman', deliverymanRoutes)

export { routes }