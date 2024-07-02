import { CustomersService } from './CustomersService';
import { CustomersRepository } from '../repository/CustomersRepository';
import { Customer } from '../domain/Customer';
import { addEmailToCustomers } from '../middlewares/EmailMiddleware';

export class CustomersServiceImpl implements CustomersService {
  constructor(private repository: CustomersRepository) {}

  async findByFilter(customer: Customer): Promise<Customer[]> {
    // logger.info(`Trae a ${customer}...`);
    const customers = await this.repository.findByFilter(customer);
    // logger.info(`Resultado: ${customers}...`);
    return addEmailToCustomers(customers);
  }
}
