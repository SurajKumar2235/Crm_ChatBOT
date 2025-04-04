'use client';
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import Cookies from 'js-cookie';
import { API_ENDPOINTS } from '../config';

interface UserData {
  id?: number;
  email?: string;
  name?: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  token: string | null;
  userData: UserData | null;
  login: (token: string, userData: UserData) => void;
  logout: () => void;
  updateUserData: (data: Partial<UserData>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Cookie configuration
const COOKIE_OPTIONS = {
  expires: 7, // 7 days
  path: '/',
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'strict' as const
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);

  // Function to validate authentication with the backend
  const validateAuth = async () => {
    try {
      const response = await fetch(`${API_ENDPOINTS.USER_PROFILE}`, {
        credentials: 'include' // Required to send cookies
      });

      if (response.ok) {
        const data = await response.json();
        setUserData(data);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Authentication validation error:', error);
      return false;
    }
  };

  useEffect(() => {
    // Check for user data in cookies
    const storedUserData = Cookies.get('userData');

    // If we have stored user data, set it immediately to prevent flashing
    if (storedUserData) {
      try {
        const parsedUserData = JSON.parse(storedUserData);
        setUserData(parsedUserData);
        setIsAuthenticated(true);
        setToken('cookie-auth'); // Just a placeholder since actual token is in HttpOnly cookie
      } catch (error) {
        console.error('Error parsing stored user data:', error);
        Cookies.remove('userData', { path: '/' });
      }
    }

    // Always validate with the backend
    validateAuth().then(isValid => {
      if (!isValid && isAuthenticated) {
        // If validation fails but we thought we were authenticated, log out
        handleLogout();
      } else if (isValid && !isAuthenticated) {
        // If validation succeeds but we weren't authenticated, update state
        setIsAuthenticated(true);
        setToken('cookie-auth');
      }
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const login = (newToken: string, newUserData: UserData) => {
    // Store user data in cookies (token is stored as HttpOnly cookie by the backend)
    Cookies.set('userData', JSON.stringify(newUserData), COOKIE_OPTIONS);

    // Update state
    setToken(newToken); // This is just a placeholder since the actual token is in HttpOnly cookie
    setUserData(newUserData);
    setIsAuthenticated(true);
  };

  const handleLogout = async () => {
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

    // Remove our cookies (backend will clear the HttpOnly cookies)
    Cookies.remove('userData', { path: '/' });

    // Update state
    setToken(null);
    setUserData(null);
    setIsAuthenticated(false);
  };

  const updateUserData = (data: Partial<UserData>) => {
    if (userData) {
      const updatedData = { ...userData, ...data };
      Cookies.set('userData', JSON.stringify(updatedData), COOKIE_OPTIONS);
      setUserData(updatedData);
    }
  };

  // Create a memoized logout function that doesn't change on re-renders
  const logout = React.useCallback(handleLogout, [token]);

  return (
    <AuthContext.Provider value={{
      isAuthenticated,
      token,
      userData,
      login,
      logout,
      updateUserData
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}