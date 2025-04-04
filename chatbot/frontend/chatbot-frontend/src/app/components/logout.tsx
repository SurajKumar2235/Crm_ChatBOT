'use client';
import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';
import { API_ENDPOINTS } from '../config';

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
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-8 auth-card text-center">
        <h2 className="text-xl font-medium">Logging out...</h2>
        <p className="mt-2">Please wait while we log you out.</p>
      </div>
    </div>
  );
};

export default LogoutComponent;