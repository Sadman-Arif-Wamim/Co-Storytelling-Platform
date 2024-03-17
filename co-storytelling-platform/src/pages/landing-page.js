import React, { useState } from 'react';

const LoginPage = () => {
  const [isLoginFormActive, setIsLoginFormActive] = useState(true);

  const toggleForm = () => {
    setIsLoginFormActive(prevState => !prevState);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 transition-opacity duration-1000 ease-in-out">
      <div className="max-w-3xl w-full flex justify-between">
        {/* Left Section */}
        <div className="w-full max-w-md flex flex-col justify-between bg-white rounded-lg shadow-lg p-8 transition-opacity duration-1000 ease-in-out">
          <div className="transition-opacity duration-1000 ease-in-out">
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              {isLoginFormActive ? 'Sign in to your account' : 'Create an account'}
            </h2>
          </div>
          <form className="mt-8 space-y-6 transition-opacity duration-1000 ease-in-out" action="#" method="POST">
            
            {/* Login Form */}
            <div className={`${isLoginFormActive ? 'block' : 'hidden'} transition-opacity duration-1000 ease-in-out`}>
              <div className="mb-4">
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required={isLoginFormActive}
                  className={`appearance-none rounded-md block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ${isLoginFormActive ? 'mb-4' : ''}`}
                  placeholder="Email address"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required={isLoginFormActive}
                  className={`appearance-none rounded-md block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ${isLoginFormActive ? 'mb-4' : ''}`}
                  placeholder="Password"
                />
              </div>
              <div className="flex justify-center mt-4">
              <button
                type="button"
                className="px-4 py-2 bg-indigo-600 text-white rounded-full text-sm font-semibold hover:bg-indigo-700 mr-4"
              >
                Login
              </button>
              
            </div>
            <div className="flex justify-center mt-4">
              <button
                type="button"
                className="text-sm text-gray-600 hover:underline cursor-pointer"
              >
                Forgot Password?
              </button>
            </div>
            </div>

            {/* Sign Up Form */}
            <div className={`${!isLoginFormActive ? 'block' : 'hidden'} transition-opacity duration-1000 ease-in-out`}>
            <div className="mb-4">
                <label htmlFor="signup-username" className="sr-only">
                  Username
                </label>
                <input
                  id="signup-username"
                  name="signup-username"
                  type="text"
                  required={!isLoginFormActive}
                  className={`appearance-none rounded-md block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ${!isLoginFormActive ? 'mb-4' : ''}`}
                  placeholder="Username"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="signup-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="signup-email"
                  name="signup-email"
                  type="email"
                  autoComplete="email"
                  required={!isLoginFormActive}
                  className={`appearance-none rounded-md block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ${!isLoginFormActive ? 'mb-4' : ''}`}
                  placeholder="Email address"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="signup-password" className="sr-only">
                  Password
                </label>
                <input
                  id="signup-password"
                  name="signup-password"
                  type="password"
                  autoComplete="new-password"
                  required={!isLoginFormActive}
                  className={`appearance-none rounded-md block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ${!isLoginFormActive ? 'mb-4' : ''}`}
                  placeholder="Password"
                />
              </div>
              <div className="flex justify-center mt-4">
              <button
                type="button"
                className="px-4 py-2 bg-indigo-600 text-white rounded-full text-sm font-semibold hover:bg-indigo-700"
              >
                Sign Up
              </button>
            </div>
            </div>

            <div className="flex justify-center">
              <button
                type="button"
                onClick={toggleForm}
                className="text-sm text-blue-600 hover:underline cursor-pointer"
              >
                {isLoginFormActive ? "Don't have an account? Sign up" : 'Already have an account? Sign in'}
              </button>
            </div>
                     
              
          </form>
        </div>
        
        {/* Right Section */}
        <div className={`w-full max-w-md flex items-center justify-center p-8 ${isLoginFormActive ? 'bg-green-100' : 'bg-blue-100'}`}>
          <div className="text-center">
            <h3 className="text-2xl font-bold">
              {isLoginFormActive ? 'Welcome Back!' : 'Create Your Account'}
            </h3>
            <p className="text-gray-600 mt-2">
              {isLoginFormActive ? 'Enter your credentials to sign in.' : 'Fill in the form to create your account.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
