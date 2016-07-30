import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import BillingForm from './BillingForm';

const BillingPage = ({initialValues}) => {
  return <BillingForm initialValues={initialValues}/>;
};

BillingPage.propTypes = {
  initialValues: PropTypes.object.isRequired
};

function mapStateToProps({billing}) {
  return {
    initialValues: billing
  };
}

export default connect(
  mapStateToProps
)(BillingPage);

