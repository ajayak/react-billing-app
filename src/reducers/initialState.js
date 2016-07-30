export default {
  fuelSavings: {
    newMpg: '',
    tradeMpg: '',
    newPpg: '',
    tradePpg: '',
    milesDriven: '',
    milesDrivenTimeframe: 'week',
    displayResults: false,
    dateModified: null,
    necessaryDataIsProvidedToCalculateSavings: false,
    savings: {
      monthly: 0,
      annual: 0,
      threeYear: 0
    }
  },
  products: [],
  employees: [],
  ajaxCallsInProgress: 0,
  billing: {
    id: 0,
    firstName: 'ads',
    lastName: '',
    email: '',
    address: '',
    items: [],
    total: 0
  }
};
