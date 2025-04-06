'use client';
import RegisterComponent from '../components/Register';
import Navbar from '../components/Navbar';
import Link from 'next/link';

export default function Register() {
  return (
    <div className="page-container">
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-[80vh]">
        <div className="w-full max-w-md">
          <RegisterComponent />
          <div className="text-center mt-4">
            <p>
              Already have an account?{' '}
              <Link href="/login" className="link link-primary">
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
