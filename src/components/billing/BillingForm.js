import React, {PropTypes, Component}  from 'react';
import {reduxForm} from 'redux-form';
import _ from 'lodash';

export const FIELDS = {
  firstName: {
    type: 'input',
    label: 'First Name',
    required: true
  },
  lastName: {
    type: 'input',
    label: 'Last Name',
    required: true
  },
  email: {
    type: 'input',
    label: 'Email Id',
    required: true
  },
  address: {
    type: 'input',
    label: 'Address',
    required: false
  }
};

class BillingForm extends Component {
  renderField(fieldConfig, field) {
    const fieldHelper = this.props.fields[field];
    return (
      <div key={field} className={`form group ${fieldHelper.touched && fieldHelper.invalid ? 'has-error' : ''}`}>
        <label htmlFor={field}>{fieldConfig.label}</label>
        <fieldConfig.type type="text" className="form-control" {...fieldHelper} />
        <div>
          {fieldHelper.touched ? fieldHelper.error : ''}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="row">
        <section className="col-sm-6 col-sm-offset-1">
          <h1>Personal Information</h1>
          <form>
            {_.map(FIELDS, this.renderField.bind(this))}
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </section>
        <section className="col-sm-3">
          <h1>Items</h1>
        </section>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  _.each(FIELDS, (type, field)=> {
    if (!values[field] && type.required) {
      errors[field] = `Enter a  ${field}`;
    }
  });

  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  return errors;
}

BillingForm.prototypes = {
  initialValues: PropTypes.object.isRequired
};

export default reduxForm({
  form: 'BillingForm',
  fields: _.keys(FIELDS),
  validate
})(BillingForm);
