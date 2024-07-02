import 'source-map-support/register';
import { APIGatewayProxyEvent } from 'aws-lambda';
import { controller } from '../controller';
import { apiResponseBadRequestError } from './apiResponses';

export const customersHandler = async (event: APIGatewayProxyEvent) => {
  if (event.resource === '/customers' && event.httpMethod === 'GET') {
    return controller.findByFilter(event);
  }
  return apiResponseBadRequestError();
};
