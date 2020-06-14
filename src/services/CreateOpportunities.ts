/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
import { uuid } from 'uuidv4';
import Opportunities from '../database/models/Opportunities';

import pipedriveApi from '../api/pipedrive/index';
import blingApi from '../api/bling/index';
import credentials from '../credentials/index';

interface Deal {
  org_name: string;
  title: string;
  value: string;
  update_time: string;
}

class CreateOpportunities {
  public async execute(): Promise<Omit<Deal, 'xml'>> {
    const pipeResponse = await pipedriveApi.get('', {
      params: { api_token: credentials.pipederiveapitoken },
    });

    const newResponse = pipeResponse.data;

    const wonDeal = newResponse.data.filter(data => data.status === 'won');

    const filterdDealFields = wonDeal.map(deals => {
      return {
        xml: `<?xml version="1.0" encoding="UTF-8"?><pedido><cliente><nome>${deals.person_name}</nome></cliente><itens><item><codigo>${deals.id}</codigo><descricao>${deals.title}</descricao><vlr_unit>${deals.value}</vlr_unit><qtde>${deals.products_count}</qtde><un>Un</un></item></itens></pedido>`,
        org_name: deals.org_name,
        title: deals.title,
        value: deals.value,
        update_time: deals.update_time,
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
      const dealExists = await Opportunities.findOne({
        update_time: deals.update_time,
      });

      if (!dealExists) {
        await Opportunities.create({
          org_name: deals.org_name,
          title: deals.title,
          value: deals.value,
          update_time: deals.update_time,
        });
      }
    });

    return filterdDealFields;
  }

  public async show(): Promise<Deal[]> {
    const opportunities = await Opportunities.find();

    return opportunities;
  }
}

export default CreateOpportunities;
