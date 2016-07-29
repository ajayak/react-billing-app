import React, {PropTypes} from 'react';

const EmployeeListRow = ({employee}) => {
  return (
    <tr>
      <td>{employee.firstName}</td>
      <td>{employee.lastName}</td>
    </tr>
  );
};

EmployeeListRow.propTypes = {
  employee: PropTypes.object.isRequired
};

export default EmployeeListRow;
