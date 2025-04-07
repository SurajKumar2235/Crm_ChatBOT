'use client';
import LogoutComponent from '../components/logout';
import Navbar from '../components/Navbar';

export default function Logout() {
  return (
    <div className="page-container">
      <Navbar />
      <LogoutComponent />
    </div>
  );
}
