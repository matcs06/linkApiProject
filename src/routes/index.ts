import { Router } from 'express';
import opportunitiesRoutes from './opportunities/opportunities.routes';

const routes = Router();

routes.use('/opportunities', opportunitiesRoutes);

export default routes;
