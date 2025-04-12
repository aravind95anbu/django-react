import React from 'react';

const EmployeeList = ({ employees, onEdit, onDelete }) => {
  return (
    <div>
      <h2>Employees</h2>
      <ul>
        {employees.map(emp => (
          <li key={emp.id}>
            {emp.name} ({emp.email}) - {emp.id_number}
            <button onClick={() => onEdit(emp)}>Edit</button>
            <button onClick={() => onDelete(emp.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
