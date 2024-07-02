import { addEmailToCustomers } from '../EmailMiddleware';
import { Customer } from '../../domain/Customer';

describe('addEmailToCustomers', () => {
  it('should add email to each customer', () => {
    const customers = [
      new Customer({ id: '1', name: 'John', lastName: 'Doe' }),
      new Customer({ id: '2', name: 'Jane', lastName: 'Smith' }),
    ];

    const result = addEmailToCustomers(customers);

    expect(result[0].email).toBe('JDoe@miblum.com');
    expect(result[1].email).toBe('JSmith@miblum.com');
  });
});
