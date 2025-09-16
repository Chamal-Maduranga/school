'use client';

import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const AuthForm = () => {
  // State to track whether to show the Login or Signup form.
  // `true` shows Login, `false` shows Signup.
  const [isLoginView, setIsLoginView] = useState(true);

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
      {/* Conditionally render either the Login or Signup form */}
      {isLoginView ? <LoginForm /> : <SignupForm />}

      {/* The text and button to toggle between the two views */}
      <div className="text-center mt-4">
        <p className="text-sm text-gray-600">
          {isLoginView ? "Don't have an account?" : 'Already have an account?'}
          <button
            onClick={() => setIsLoginView(!isLoginView)}
            className="font-medium text-blue-600 hover:text-blue-500 ml-1 focus:outline-none"
          >
            {isLoginView ? 'Sign Up' : 'Log In'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;