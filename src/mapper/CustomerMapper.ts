import { Customer } from '../domain/Customer';
import { RandomUser } from '../entities/RandomUser';

export function mapToDomain(randomUser: RandomUser): Customer {
  return new Customer({
    id: randomUser.id.value,
    name: randomUser.name.first,
    lastName: randomUser.name.last,
    phone: randomUser.phone,
  });
}
