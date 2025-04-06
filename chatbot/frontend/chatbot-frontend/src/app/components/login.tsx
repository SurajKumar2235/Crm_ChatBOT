'use client';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';
// import { API_CONFIG } from '../api';
import { API_ENDPOINTS } from '../config/index';

const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch(API_ENDPOINTS.LOGIN, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Login failed');
      }

      console.log('Login response data:', data);

      // Extract token from response - try multiple possible field names
      const token = data.access || data.token || data.access_token;

      // Log token information for debugging
      if (!token) {
        console.warn('No token found in login response. Using cookie-based auth.');
      } else {
        console.log('Token found:',
          typeof token === 'string' && token.length > 10 ?
            token.substring(0, 10) + '...' :
            token
        );
      }

      // Extract user data from response
      // If id/email not in response, it might be because we're using cookie auth
      // and the backend doesn't return user details directly
      const userData = {
        id: data.id || 0,
        email: data.email || email, // Fall back to the email from the form
        name: data.name || email?.split('@')[0] || 'User'
      };

      console.log('Extracted user data:', userData);

      // Pass token and user data to the login function
      login(token || 'cookie-auth', userData);
      router.push('/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
    }
  };

  return (
    <div className="card bg-base-200 shadow-xl w-full">
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold justify-center">Sign in</h2>
        {error && (
          <div className="error-message">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="form-control gap-4">
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
          <div className="form-control mt-4">
            <button
              type="submit"
              className="btn btn-primary"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;