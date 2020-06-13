import { Router } from 'express';

import CreateOpportunityService from '../../services/CreateOpportunities';

const opportunitiesRouter = Router();

opportunitiesRouter.post('/', async (req, res) => {
  const { name, value } = req.body;

  const CreateOpportunities = new CreateOpportunityService();

  const opportunities = await CreateOpportunities.execute({
    name,
    value,
  });

  return res.json(opportunities);
});

export default opportunitiesRouter;
