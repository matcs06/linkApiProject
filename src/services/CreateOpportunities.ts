/* eslint-disable class-methods-use-this */
import Opportunities from '../database/models/Opportunities';

interface Request {
  name: string;
  value: number;
}

class CreateOpportunities {
  public async execute({ name, value }: Request): Promise<Request> {
    const userExists = await Opportunities.findOne({ name });

    if (userExists) {
      console.log('Already exists');
    }

    const opportunities = await Opportunities.create({
      name,
      value,
    });

    return opportunities;
  }
}

export default CreateOpportunities;
