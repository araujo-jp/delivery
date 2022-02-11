import { Router } from 'express';
import { authenticateRoutes } from './authenticate.routes';
import { clientRoutes } from './clients.routes';

const routes = Router()

routes.use('/clients', clientRoutes)
routes.use('/authenticate', authenticateRoutes)

export { routes }