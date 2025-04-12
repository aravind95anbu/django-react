import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EmployeeForm = ({ fetchEmployees, selectedEmployee, clearSelected }) => {
  const [form, setForm] = useState({
    name: '', age: '', address: '', email: '', id_number: ''
  });

  useEffect(() => {
    if (selectedEmployee) {
      setForm(selectedEmployee);
    }
  }, [selectedEmployee]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (selectedEmployee) {
      axios.put(`http://localhost:8000/api/employees/${selectedEmployee.id}/`, form)
        .then(() => {
          fetchEmployees();
          clearSelected();
        });
    } else {
      axios.post('http://localhost:8000/api/employees/', form)
        .then(() => fetchEmployees());
    }
    setForm({ name: '', age: '', address: '', email: '', id_number: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
      <input name="age" value={form.age} onChange={handleChange} placeholder="Age" required type="number" />
      <input name="address" value={form.address} onChange={handleChange} placeholder="Address" required />
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
      <input name="id_number" value={form.id_number} onChange={handleChange} placeholder="ID Number" required />
      <button type="submit">{selectedEmployee ? 'Update' : 'Add'} Employee</button>
    </form>
  );
};

export default EmployeeForm;
