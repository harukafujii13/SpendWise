import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8000/login', { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === 'Success') {
          navigate('/home');
        }
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-6 bg-white rounded-lg shadow-lg w-96">
        <div className="text-2xl font-bold mb-4">Login</div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter email"
              autoComplete="off"
              name="email"
              className="mt-1 p-2 w-full border rounded-md"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              name="password"
              className="mt-1 p-2 w-full border rounded-md"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Login
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text-sm">Don't have an account?</p>
          <Link
            to="/login"
            className="text-blue-500 hover:underline">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
