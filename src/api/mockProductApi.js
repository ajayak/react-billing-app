import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const products = [
  {
    id: 1,
    Name: 'Pen',
    Category : 'Stationary'
  },
  {
    id: 2,
    Name: 'Pencil',
    Category : 'Stationary'
  },
  {
    id: 3,
    Name: 'Lays',
    Category : 'Grocery'
  },
  {
    id: 4,
    Name: 'Ketchup',
    Category : 'Grocery'
  }
];

class ProductApi {
  static getAllProducts() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(Object.assign([], products));
      }, delay);
    });
  }
}

export default ProductApi;
