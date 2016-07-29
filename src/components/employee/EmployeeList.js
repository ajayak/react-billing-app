import React, {PropTypes} from 'react';
import EmployeeListRow from './EmployeeListRow';

const EmployeeList = ({employees}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
      </tr>
      </thead>
      <tbody>
      {employees.map(employee =>
        <EmployeeListRow key={employee.id} employee={employee}/>
      )}
      </tbody>
    </table>
  );
};

EmployeeList.propTypes = {
  employees: PropTypes.array.isRequired
};

export default EmployeeList;
