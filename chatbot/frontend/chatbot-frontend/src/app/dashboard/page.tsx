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
          <div className="lg:col-span-1 space-y-6">
            <div className="stat bg-base-200 shadow rounded-lg">
              <div className="stat-title">Total Queries</div>
              <div className="stat-value text-primary">24</div>
              <div className="stat-desc">↗︎ 14% from last month</div>
            </div>

            <div className="stat bg-base-200 shadow rounded-lg">
              <div className="stat-title">Response Time</div>
              <div className="stat-value text-secondary">2.4s</div>
              <div className="stat-desc">↘︎ 0.5s from last week</div>
            </div>

            <div className="stat bg-base-200 shadow rounded-lg">
              <div className="stat-title">Accuracy</div>
              <div className="stat-value text-accent">92%</div>
              <div className="stat-desc">↗︎ 3% from last month</div>
            </div>
          </div>

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
