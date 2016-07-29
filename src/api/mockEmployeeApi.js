import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const employees = [
  {
    id: 'john-doe',
    firstName: 'John',
    lastName: 'Doe'
  },
  {
    id: 'jane-doe',
    firstName: 'Jane',
    lastName: 'Doe'
  },
  {
    id: 'ajay-kumar',
    firstName: 'Ajay',
    lastName: 'Kumar'
  }
];

class EmployeeApi {
  static getAllEmpoyees() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(Object.assign([], employees));
      }, delay);
    });
  }
}

export default EmployeeApi;
