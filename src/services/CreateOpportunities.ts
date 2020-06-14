/* eslint-disable class-methods-use-this */
import Opportunities from '../database/models/Opportunities';
import pipedriveApi from '../api/pipedrive/index';
import blingApi from '../api/bling/index';
import credentials from '../credentials/index';

interface Deal {
  xml: string;
}

class CreateOpportunities {
  public async execute(): Promise<Deal> {
    const pipeResponse = await pipedriveApi.get('', {
      params: { api_token: credentials.pipederiveapitoken },
    });

    const newResponse = pipeResponse.data;

    const wonDeal = newResponse.data.filter(data => data.status === 'won');

    const filterdDealFields = wonDeal.map(deals => {
      return {
        xml: `<?xml version="1.0" encoding="UTF-8"?><pedido><cliente><nome>${deals.person_name}</nome></cliente><itens><item><codigo>${deals.id}</codigo><descricao>${deals.title}</descricao><vlr_unit>${deals.value}</vlr_unit><qtde>10</qtde><un>Un</un></item></itens></pedido>`,
      };
    });

    // Setting deals with won status as a order On bling
    filterdDealFields.map(async deals => {
      await blingApi.post('', null, {
        params: { apikey: credentials.blingApiKey, xml: deals.xml },
      });
    });

    // Saving into database
    filterdDealFields.map(async deals => {
      const dealExists = Opportunities.findOne({ order: deals.xml });

      await Opportunities.create({
        order: deals.xml,
      });
    });

    return filterdDealFields;
  }

  public async show(): Promise<Deal> {
    const opportunities = await Opportunities.find();

    return opportunities;
  }
}

export default CreateOpportunities;
