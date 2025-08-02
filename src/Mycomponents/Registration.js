import React, { useState } from 'react';
import './Registration.css'; // CSS file for styling

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    password: ''
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://127.0.0.1:8000/api/register/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      setSubmittedData({
        full_name: formData.full_name,
        email: formData.email
      });
      setFormData({ full_name: '', email: '', password: '' });
    } else {
      alert('Registration failed');
    }
  };

  return (
    <div className="container">
      {/* Left Box - Display submitted data */}
      <div className="box display-box">
        <h3>User Details</h3>
        {submittedData ? (
          <div>
            <p><strong>Name:</strong> {submittedData.full_name}</p>
            <p><strong>Email:</strong> {submittedData.email}</p>
          </div>
        ) : (
          <p>No user registered yet.</p>
        )}
      </div>

      {/* Right Box - Form */}
      <div className="box form-box">
        <h3>Register</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" name="full_name" placeholder="Full Name" value={formData.full_name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
