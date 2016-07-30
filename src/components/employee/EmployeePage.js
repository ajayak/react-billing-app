import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import EmployeeList from './EmployeeList';

export const EmployeePage = ({employees}) => {
  return <EmployeeList employees={employees}/>;
};

EmployeePage.propTypes = {
  employees: PropTypes.array.isRequired
};

function mapStateToProps({employees}) {
  return {
    employees
  };
}

export default connect(
  mapStateToProps
)(EmployeePage);
