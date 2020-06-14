import { Router } from 'express';

import CreateOpportunityService from '../../services/CreateOpportunities';

const opportunitiesRouter = Router();

opportunitiesRouter.post('/', async (req, res) => {
  const CreateOpportunities = new CreateOpportunityService();

  const opportunities = await CreateOpportunities.execute();

  return res.json(opportunities);
});

opportunitiesRouter.get('/', async (req, res) => {
  const CreateOpportunities = new CreateOpportunityService();

  const opportunities = await CreateOpportunities.show();

  return res.json(opportunities);
});

export default opportunitiesRouter;
