import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const products = [
  {
    id: 1,
    name: 'Pen',
    category : 'Stationary',
    left: 10
  },
  {
    id: 2,
    name: 'Pencil',
    category : 'Stationary',
    left: 10
  },
  {
    id: 3,
    name: 'Lays',
    category : 'Grocery',
    left: 10
  },
  {
    id: 4,
    name: 'Ketchup',
    category : 'Grocery',
    left: 10
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
