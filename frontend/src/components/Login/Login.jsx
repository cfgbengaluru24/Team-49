import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import './Login.css';
import {useNavigate} from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/login', { email, password, role });
      const { token, user } = response.data;
      // Save the token to localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      // Show an alert message based on role
      if (role === 'student') {
        alert('You are logged in as a student.');
        navigate('/student');
      } else if (role === 'volunteer') {
        alert('You are logged in as a volunteer.');
        navigate('/volunteer');
      }
    } catch (error) {
      alert('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <form onSubmit={handleSubmit} className="w-50 p-4 bg-light rounded shadow">
        <h2 className="text-center mb-4">Login</h2>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password:</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="role" className="form-label">Role:</label>
          <select id="role" className="form-select" value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="student">Student</option>
            <option value="volunteer">Volunteer</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
};

export default Login;
