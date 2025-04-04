'use client';
import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Dashboard() {
  const { isAuthenticated, userData } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Redirect to login if not authenticated
    if (!isAuthenticated) {
      router.push('/');
      return;
    }
  }, [isAuthenticated, router]);

  return (
    <div className="min-h-screen">
      <nav className="auth-card shadow-sm mb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold">Chatbot Dashboard</h1>
            </div>
            <div className="flex items-center">
              <span className="mr-4 font-medium">Welcome, {userData?.name || userData?.email || 'User'}</span>
              <Link
                href="/logout"
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-200"
              >
                Logout
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="auth-card rounded-lg h-96 p-6 flex items-center justify-center">
            <p className="text-xl font-medium">Dashboard content will go here</p>
          </div>
        </div>
      </main>
    </div>
  );
}
