import React, { useState } from 'react';
import backgroundImage from '../assets/landing-page.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faTwitter, faReddit, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const LoginPage = () => {
  const [isLoginFormActive, setIsLoginFormActive] = useState(true);

  const toggleForm = () => {
    setIsLoginFormActive(prevState => !prevState);
  };

  return (
    <>
    <div className="min-h-screen flex flex-col items-center justify-center bg-cover" style={{ backgroundImage: `url(${backgroundImage})` }}>
    <h1 className="text-4xl font-extrabold text-gray-900 mb-12">StoryWeave</h1>
      <div className="max-w-4xl w-full flex justify-between">
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
                <input id="email" name="email" type="email" autoComplete="email" required={isLoginFormActive} placeholder="Email address"
                  className={`appearance-none rounded-md block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ${isLoginFormActive ? 'mb-4' : ''}`}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password" name="password" type="password" autoComplete="current-password" required={isLoginFormActive} placeholder="Password"
                  className={`appearance-none rounded-md block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ${isLoginFormActive ? 'mb-4' : ''}`}                
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
              <div className="flex justify-center mt-4">
                <FontAwesomeIcon icon={faFacebook} className="text-2xl mr-4 cursor-pointer hover:text-blue-600" style={{ color: '#4267B2' }} />
                <FontAwesomeIcon icon={faGoogle} className="text-2xl mr-4 cursor-pointer hover:text-blue-600" style={{ color: '#DB4437' }} />
                <FontAwesomeIcon icon={faTwitter} className="text-2xl mr-4 cursor-pointer hover:text-blue-600" style={{ color: '#1DA1F2' }} />
                <FontAwesomeIcon icon={faReddit} className="text-2xl mr-4 cursor-pointer hover:text-orange-500" style={{ color: '#FF4500' }} />
                <FontAwesomeIcon icon={faLinkedinIn} className="text-2xl mr-4 cursor-pointer hover:text-blue-700" style={{ color: '#0A66C2' }} />
              </div>
            </div>

            {/* Sign Up Form */}
            <div className={`${!isLoginFormActive ? 'block' : 'hidden'} transition-opacity duration-1000 ease-in-out`}>
              <div className="mb-4">
                <label htmlFor="signup-username" className="sr-only">
                  Username
                </label>
                <input
                  id="signup-username" name="signup-username" type="text" required={!isLoginFormActive} placeholder="Username"
                  className={`appearance-none rounded-md block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ${!isLoginFormActive ? 'mb-4' : ''}`}
                  
                />
              </div>
              <div className="mb-4">
                <label htmlFor="signup-email" className="sr-only">
                  Email address
                </label>
                <input id="signup-email" name="signup-email" type="email" autoComplete="email" required={!isLoginFormActive} placeholder="Email address"
                  className={`appearance-none rounded-md block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ${!isLoginFormActive ? 'mb-4' : ''}`}               
                />
              </div>
              <div className="mb-4">
                <label htmlFor="signup-password" className="sr-only">
                  Password
                </label>
                <input id="signup-password" name="signup-password" type="password" autoComplete="new-password" required={!isLoginFormActive} placeholder="Password"
                  className={`appearance-none rounded-md block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ${!isLoginFormActive ? 'mb-4' : ''}`}              
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
        <div className={`w-full max-w-md flex items-center rounded-lg justify-center p-8 ${isLoginFormActive ? 'bg-green-100' : 'bg-blue-200'}`}>
          <div className="text-center">
            <h3 className="text-2xl font-bold">
              {isLoginFormActive ? 'Welcome Back!' : 'Create Your Account'}
            </h3>
            <p className="text-gray-600 mt-2">
              {isLoginFormActive ? 'Where stories intertwine, and imagination meets reality. Unleash your creativity, one line at a time, as we craft tales together.' : 'Embark on your storytelling journey! Join our community by filling out the form and begin weaving your tales.'}
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default LoginPage;
