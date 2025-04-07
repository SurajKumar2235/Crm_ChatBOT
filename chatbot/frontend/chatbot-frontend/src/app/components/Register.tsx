'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { API_ENDPOINTS } from '../config/index';
// Uncomment the next line if you want to auto-login after registration
// import { useAuth } from '../context/AuthContext';

const RegisterComponent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  // Uncomment the next line if you want to auto-login after registration
  // const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await fetch(API_ENDPOINTS.REGISTER, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Required to send cookies
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Registration failed');
      }

      // Show success message or redirect to login page
      router.push('/');

      // Alternatively, you could automatically log the user in:
      // const userData = {
      //   id: data.id,
      //   email: data.email,
      //   name: name
      // };
      // login(data.access, userData);
      // router.push('/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Registration failed');
    }
  };

  return (
    <div className="card bg-base-200 shadow-xl w-full">
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold justify-center">Register</h2>
        {error && (
          <div className="error-message">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="form-control gap-4">
          <div className="form-control">
            <label htmlFor="name" className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input input-bordered w-full"
              placeholder="Your name"
            />
          </div>
          <div className="form-control">
            <label htmlFor="email" className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered w-full"
              placeholder="your.email@example.com"
            />
          </div>
          <div className="form-control">
            <label htmlFor="password" className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input input-bordered w-full"
              placeholder="••••••••"
            />
          </div>
          <div className="form-control">
            <label htmlFor="confirmPassword" className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              id="confirmPassword"
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="input input-bordered w-full"
              placeholder="••••••••"
            />
          </div>
          <div className="form-control mt-4">
            <button
              type="submit"
              className="btn btn-primary"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterComponent;
