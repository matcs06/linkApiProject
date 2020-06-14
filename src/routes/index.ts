import { Router } from 'express';
import opportunitiesRoutes from './opportunities/opportunities.routes';

const routes = Router();

routes.use('/addtobling', opportunitiesRoutes);

export default routes;
