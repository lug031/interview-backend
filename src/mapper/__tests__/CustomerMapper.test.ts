import { mapToDomain } from '../CustomerMapper';
import { RandomUser } from '../../entities/RandomUser';

describe('CustomerMapper', () => {
  it('should map RandomUser to Customer', () => {
    const randomUser: RandomUser = {
      id: { value: '123' },
      name: { first: 'John', last: 'Doe' },
      phone: '123456789',
    };

    const customer = mapToDomain(randomUser);

    expect(customer.id).toBe('123');
    expect(customer.name).toBe('John');
    expect(customer.lastName).toBe('Doe');
    expect(customer.phone).toBe('123456789');
  });
});
