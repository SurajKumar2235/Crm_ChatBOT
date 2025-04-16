'use client';
import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar';
import ChatInterface from '../components/ChatInterface';

export default function Dashboard() {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Redirect to login if not authenticated
    if (!isAuthenticated) {
      router.push('/login');
      return;
    }
  }, [isAuthenticated, router]);

  return (
    <div className="page-container">
      <Navbar />

      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Stats */}
          
          {/* Right Column - Chat Interface */}
          <div className="lg:col-span-2">
            <div className="card bg-base-100 shadow-xl h-full">
              <div className="card-body p-0">
                <ChatInterface />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
