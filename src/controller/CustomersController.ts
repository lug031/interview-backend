import { APIGatewayProxyEvent } from 'aws-lambda';
import { CustomersService } from '../service/CustomersService';
import { Customer } from '../domain/Customer';
import {
  apiResponseBadRequestError,
  apiResponseOk,
} from '../handlers/apiResponses';

export class CustomersController {
  constructor(private service: CustomersService) {}

  async findByFilter(event: APIGatewayProxyEvent) {
    if (!event.queryStringParameters?.name) {
      return apiResponseBadRequestError();
    }
    const { name } = event.queryStringParameters;

    const customers = await this.service.findByFilter(new Customer({ name }));
    return apiResponseOk(customers);
  }
}
