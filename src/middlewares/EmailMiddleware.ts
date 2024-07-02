import { Customer } from '../domain/Customer';

/**
 * Middleware para generar un correo electrónico para cada cliente.
 * @param customers - Lista de clientes a procesar.
 * @returns Lista de clientes con el correo electrónico generado.
 */
export function addEmailToCustomers(customers: Customer[]): Customer[] {
  return customers.map((customer) => {
    const email = `${customer.name.charAt(0)}${customer.lastName}@miblum.com`;
    return new Customer({ ...customer, email });
  });
}
