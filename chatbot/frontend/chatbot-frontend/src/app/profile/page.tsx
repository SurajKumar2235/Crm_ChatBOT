'use client';
import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar';
import { API_ENDPOINTS } from '../config';

interface ProfileData {
  id?: number;
  email?: string;
  name?: string;
  last_login?: string;
  date_joined?: string;
}

export default function ProfilePage() {
  const { isAuthenticated, token, userData } = useAuth();
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Redirect to login if not authenticated
    if (!isAuthenticated) {
      router.push('/login');
      return;
    }

    const fetchProfileData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Get token from localStorage as a fallback
        const storedToken = localStorage.getItem('token');
        const authToken = token || storedToken;

        console.log('Using token for profile fetch:', authToken);

        const response = await fetch(API_ENDPOINTS.USER_PROFILE, {
          headers: {
            'Authorization': `Bearer ${authToken}`,
          },
          credentials: 'include',
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.error('Profile fetch error:', errorData);
          throw new Error(errorData.detail || 'Failed to fetch profile data');
        }

        const data = await response.json();
        console.log('Profile data:', data);
        setProfileData(data);
      } catch (err) {
        console.error('Error fetching profile:', err);
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, [isAuthenticated, router, token]);

  return (
    <div className="page-container">
      <Navbar />
      <div className="max-w-4xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6">User Profile</h1>

        {loading ? (
          <div className="flex justify-center">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : error ? (
          <div className="alert alert-error">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{error}</span>
          </div>
        ) : (
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <div className="flex items-center gap-4 mb-6">
                <div className="avatar placeholder">
                  <div className="bg-neutral text-neutral-content rounded-full w-24">
                    <span className="text-3xl">{profileData?.email?.charAt(0).toUpperCase() || 'U'}</span>
                  </div>
                </div>
                <div>
                  <h2 className="card-title text-2xl">{profileData?.name || profileData?.email?.split('@')[0] || 'User'}</h2>
                  <p className="text-sm opacity-70">{profileData?.email}</p>
                </div>
              </div>

              <div className="divider"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="stat">
                  <div className="stat-title">User ID</div>
                  <div className="stat-value text-lg">{profileData?.id}</div>
                </div>

                <div className="stat">
                  <div className="stat-title">Last Login</div>
                  <div className="stat-value text-lg">
                    {profileData?.last_login ? new Date(profileData.last_login).toLocaleString() : 'N/A'}
                  </div>
                </div>

                <div className="stat">
                  <div className="stat-title">Account Created</div>
                  <div className="stat-value text-lg">
                    {profileData?.date_joined ? new Date(profileData.date_joined).toLocaleString() : 'N/A'}
                  </div>
                </div>
              </div>

              <div className="card-actions justify-end mt-6">
                <button className="btn btn-primary" onClick={() => router.push('/dashboard')}>Go to Dashboard</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
