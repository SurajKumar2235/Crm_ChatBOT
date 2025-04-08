'use client';
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import Cookies from 'js-cookie';
// import { API_CONFIG } from '../api';
import { API_ENDPOINTS } from '../config/index';


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
      // Get token from localStorage as a fallback
      const storedToken = localStorage.getItem('token');
      const authToken = token || storedToken;

      console.log('Validating auth with token:',
        authToken ? (typeof authToken === 'string' && authToken.length > 10 ?
          authToken.substring(0, 10) + '...' : authToken) : 'none'
      );

      const response = await fetch(`${API_ENDPOINTS.USER_PROFILE}`, {
        headers: {
          'Authorization': `Bearer ${authToken || ''}`,
        },
        credentials: 'include' // Required to send cookies
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Auth validation successful, user data:', data);
        setUserData(data);
        return true;
      } else {
        let errorMessage = 'Authentication failed';
        try {
          const errorData = await response.json();
          console.error('Auth validation error response:', errorData);
          errorMessage = errorData.detail || errorData.message || errorMessage;
        } catch (e) {
          console.log(e);
          console.error('Non-JSON auth error response:', response.statusText);
          errorMessage = `Error ${response.status}: ${response.statusText}`;
        }
        console.error('Auth validation failed:', errorMessage);
        return false;
      }
    } catch (error) {
      console.error('Authentication validation error:', error);
      return false;
    }
  };

  useEffect(() => {
    // Check for token in localStorage
    const storedToken = localStorage.getItem('token');
    // Check for user data in cookies
    const storedUserData = Cookies.get('userData');

    console.log('Initial auth check - stored token:', storedToken ? 'exists' : 'none');
    console.log('Initial auth check - stored userData:', storedUserData ? 'exists' : 'none');

    // If we have a stored token, set it immediately
    if (storedToken) {
      setToken(storedToken);
      setIsAuthenticated(true);

      // If we also have stored user data, set it
      if (storedUserData) {
        try {
          const parsedUserData = JSON.parse(storedUserData);
          setUserData(parsedUserData);
        } catch (error) {
          console.error('Error parsing stored user data:', error);
          Cookies.remove('userData', { path: '/' });
        }
      }

      // Validate the token with the backend
      validateAuth().then(isValid => {
        if (!isValid) {
          console.warn('Stored token validation failed, logging out');
          handleLogout();
        } else {
          console.log('Stored token validated successfully');
        }
      });
    } else {
      // No stored token, check if we can get one from the backend
      validateAuth().then(isValid => {
        if (isValid) {
          console.log('Backend validation successful without token');
          setIsAuthenticated(true);
          // We don't have a real token, but we're authenticated via cookies
          setToken('cookie-auth');
        }
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const login = (newToken: string, newUserData: UserData) => {
    // Check if we have a valid token
    if (!newToken || newToken === 'cookie-auth') {
      console.warn('Login called with potentially invalid token:', newToken);
      // Try to proceed anyway - we might be using cookie-based auth
    }

    // Store token in state and localStorage (if it's a string)
    if (typeof newToken === 'string') {
      console.log('Storing token:',
        newToken.length > 10 ? newToken.substring(0, 10) + '...' : newToken
      );
      setToken(newToken);
      localStorage.setItem('token', newToken);
    } else {
      console.warn('Token is not a string:', newToken);
    }

    // Store user data in cookies
    if (newUserData) {
      console.log('Storing user data:', newUserData);
      Cookies.set('userData', JSON.stringify(newUserData), COOKIE_OPTIONS);
      setUserData(newUserData);
    } else {
      console.warn('No user data provided during login');
    }

    setIsAuthenticated(true);

    // Validate the token immediately to ensure it works
    setTimeout(() => {
      validateAuth().then(isValid => {
        if (!isValid) {
          console.warn('Token validation failed immediately after login');
        } else {
          console.log('Token validated successfully after login');
        }
      });
    }, 500); // Small delay to ensure token is properly stored
  };


  const handleLogout = async () => {
    // Get the current token for logging
    const currentToken = token || localStorage.getItem('token');
    console.log('Logging out with token:',
      currentToken ? (typeof currentToken === 'string' && currentToken.length > 10 ?
        currentToken.substring(0, 10) + '...' : currentToken) : 'none'
    );

    try {
      // Call the logout API with both cookie and token-based auth
      const response = await fetch(API_ENDPOINTS.LOGOUT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Include Authorization header if we have a token
          ...(currentToken && { 'Authorization': `Bearer ${currentToken}` })
        },
        credentials: 'include', // Required to send cookies
      });

      if (response.ok) {
        console.log('Logout API call successful');
      } else {
        console.warn('Logout API call failed with status:', response.status);
      }
    } catch (error) {
      console.error('Logout API error:', error);
    }

    // Always clean up local storage and cookies regardless of API response
    console.log('Clearing auth data from browser storage');
    Cookies.remove('userData', { path: '/' });
    Cookies.remove('access_token', { path: '/' });
    Cookies.remove('refresh_token', { path: '/' });
    localStorage.removeItem('token');

    // Update state
    setToken(null);
    setUserData(null);
    setIsAuthenticated(false);

    console.log('Logout complete');
  };

  const updateUserData = (data: Partial<UserData>) => {
    if (userData) {
      const updatedData = { ...userData, ...data };
      Cookies.set('userData', JSON.stringify(updatedData), COOKIE_OPTIONS);
      setUserData(updatedData);
    }
  };

  // Create a memoized logout function that doesn't change on re-renders
  const logout = React.useCallback(handleLogout, []);

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
  console.log(AuthContext);
  // console.log("")
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  console.log(context);
  console.log("======================================");
  return context;
}