'use client';
import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';
import { API_ENDPOINTS } from '../config/index';

const LogoutComponent = () => {
  const { logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const performLogout = async () => {
      try {
        // Call the logout API - no need to send token in headers as it's in cookies
        await fetch(API_ENDPOINTS.LOGOUT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include', // Required to send cookies
        });
      } catch (error) {
        console.error('Logout API error:', error);
      }

      // Always perform local logout
      logout();
      router.push('/');
    };

    performLogout();
  }, [logout, router]);

  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-xl justify-center">Logging out...</h2>
            <div className="flex justify-center mt-4">
              <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
            <p className="mt-4">Please wait while we log you out.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoutComponent;