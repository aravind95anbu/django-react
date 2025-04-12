import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';

function App() {
  const [employees, setEmployees] = useState([]);
  const [selected, setSelected] = useState(null);

  const fetchEmployees = () => {
    axios.get('http://localhost:8000/api/employees/')
      .then(res => setEmployees(res.data));
  };

  const handleDelete = id => {
    axios.delete(`http://localhost:8000/api/employees/${id}/`)
      .then(() => fetchEmployees());
  };

  const handleEdit = emp => setSelected(emp);
  const clearSelected = () => setSelected(null);

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div>
      <h1>Employee Manager</h1>
      <EmployeeForm
        fetchEmployees={fetchEmployees}
        selectedEmployee={selected}
        clearSelected={clearSelected}
      />
      <EmployeeList
        employees={employees}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
