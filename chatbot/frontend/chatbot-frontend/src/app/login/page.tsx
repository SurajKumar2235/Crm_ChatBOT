'use client';
import LoginComponent from '../components/login';
import Navbar from '../components/Navbar';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="page-container">
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-[80vh]">
        <div className="w-full max-w-md">
          <LoginComponent />
          <div className="text-center mt-4">
            <p>
              Don&apos;t have an account?{' '}
              <Link href="/register" className="link link-primary">
                Register here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
