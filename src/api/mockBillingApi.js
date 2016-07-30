import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const bills = [];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (course) => {
  return replaceAll(course.title, ' ', '-');
};

class BillingApi {
  static getAllBills() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(Object.assign([], bills));
      }, delay);
    });
  }

  static saveBill(bill) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minCourseTitleLength = 1;
        if (bill.title.length < minCourseTitleLength) {
          reject(`Title must be at least ${minCourseTitleLength} characters.`);
        }

        //Just simulating creation here.
        //The server would generate ids for new bill in a real app.
        //Cloning so copy returned is passed by value rather than by reference.
        bill.id = generateId(bill);
        bills.push(bill);
        resolve(Object.assign({}, bill));
      }, delay);
    });
  }

  static deleteBill(billId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const indexOfBillToDelete = bills.findIndex(bill => {
          bill.id == billId;
        });
        bills.splice(indexOfBillToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default BillingApi;
