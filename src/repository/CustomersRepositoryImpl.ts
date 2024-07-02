import axios from 'axios';
import { CustomersRepository } from './CustomersRepository';
import { Customer } from '../domain/Customer';
import { RandomUser } from '../entities/RandomUser';
import { mapToDomain } from '../mapper/CustomerMapper';

import { logger } from '../utils/logger';

const { API_URL } = require('../utils/environments');

export class CustomersRepositoryImpl implements CustomersRepository {
  async findByFilter(customer: Customer): Promise<Customer[]> {
    const url = `${API_URL}/api/?results=100`;
    try {
      const result = await axios.get(url);
      if (!result.data.results) {
        return [];
      }

      return result.data.results
        .filter((item: RandomUser) =>
          item.name.first.toLowerCase().startsWith(customer.name.toLowerCase())
        )
        .map((item: RandomUser) => mapToDomain(item));
    } catch (error) {
      logger.info(`Error fetching customers:', ${error}...`);
      throw error;
    }
  }
}
