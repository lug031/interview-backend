import { CustomersServiceImpl } from '../CustomersServiceImpl';
import { Customer } from '../../domain/Customer';
import { CustomersRepository } from '../../repository/CustomersRepository';

describe('CustomersServiceImpl', () => {
  describe('findByFilter', () => {
    it('should return customers', async () => {
      // Prepare
      const repository = {
        findByFilter: jest.fn(() =>
          Promise.resolve([
            {
              id: 'customerId',
              name: 'name',
              lastName: 'lastName',
              phone: '(272) 790-0888',
            },
          ])
        ),
      } as unknown as CustomersRepository;

      const service = new CustomersServiceImpl(repository);

      // Execute
      const response = await service.findByFilter(new Customer({ name: 'A' }));

      // logger.info(`Resultado: ${JSON.stringify(response)}`);

      // Validate
      expect(response).toEqual([
        {
          id: 'customerId',
          name: 'name',
          lastName: 'lastName',
          phone: '(272) 790-0888',
          email: 'nlastName@miblum.com',
        },
      ]);
      expect(repository.findByFilter).toBeCalledWith({
        name: 'A',
      });
    });
  });
});
