'use client';
import Link from 'next/link';
import { useAuth } from '../context/AuthContext';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const { isAuthenticated, userData } = useAuth();
  const pathname = usePathname();

  return (
    <div className="navbar-container">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52">
            <li><Link href="/" className={pathname === '/' ? 'active' : ''}>Home</Link></li>
            {/* <li><Link href="/features" className={pathname === '/features' ? 'active' : ''}>Features</Link></li> */}
            {/* <li><Link href="/about" className={pathname === '/about' ? 'active' : ''}>About</Link></li> */}
            {isAuthenticated && (
              <li><Link href="/dashboard" className={pathname === '/dashboard' ? 'active' : ''}>Dashboard</Link></li>
            )}
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl">ChatBOT</Link>
        <ul className="menu menu-horizontal px-1 hidden lg:flex ml-2">
          <li><Link href="/" className={pathname === '/' ? 'active' : ''}>Home</Link></li>
          {isAuthenticated && (
            <li><Link href="/dashboard" className={pathname === '/dashboard' ? 'active' : ''}>Dashboard</Link></li>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        {isAuthenticated ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost gap-1 normal-case">
              <div className="avatar placeholder">
                <div className="bg-neutral text-neutral-content rounded-full w-8">
                  <span>{userData?.name?.charAt(0) || userData?.email?.charAt(0) || 'U'}</span>
                </div>
              </div>
              <span className="hidden md:inline">{userData?.name || userData?.email || 'User'}</span>
              <svg width="12px" height="12px" className="hidden md:inline-block ml-1 h-3 w-3 fill-current opacity-60" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048">
                <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
              </svg>
            </div>
            <ul tabIndex={0} className="dropdown-content z-[1] p-2 shadow-lg bg-base-300 rounded-box w-52">
              <li>
                <Link href="/dashboard" className="justify-between">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/profile" className="justify-between">
                  Profile
                </Link>
              </li>
              <li>
                <Link href="/logout">Logout</Link>
              </li>
            </ul>
          </div>
        ) : (
          <div className="flex gap-2">
            <Link href="/register" className="btn btn-outline btn-sm">Register</Link>
            <Link href="/login" className="btn btn-primary btn-sm">Login</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
