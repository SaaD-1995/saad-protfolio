import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <nav className="bg-[#222222] top-0 fixed w-full">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-20">
          <div className="flex-1 flex items-center justify-between sm:items-stretch sm:justify-between">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-white font-bold">
                <img className='w-full h-12' src='/saadrasool.png' alt='logo'/>
              </Link>
            </div>
            <div className="hidden sm:block flex items-center justify-between">
              <div className="flex space-x-3">
                <Link
                  to="/"
                  className={`text-white px-2 py-2 mx-3 text-base font-medium ${
                    location.pathname === '/' ? 'border-b-2 border-white' : ''
                  }`}
                  onClick={closeSidebar}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className={`text-white px-2 py-2 mx-3  text-base font-medium ${
                    location.pathname === '/about' ? 'border-b-2 border-white' : ''
                  }`}
                  onClick={closeSidebar}
                >
                  About
                </Link>
                {/* <Link
                  to="/project"
                  className={`text-white px-2 py-2 mx-3  text-base font-medium ${
                    location.pathname === '/project' ? 'border-b-2 border-white' : ''
                  }`}
                  onClick={closeSidebar}
                >
                  Project
                </Link> */}
                <Link
                  to="/experience"
                  className={`text-white px-2 py-2 mx-3  text-base font-medium ${
                    location.pathname === '/experience' ? 'border-b-2 border-white' : ''
                  }`}
                  onClick={closeSidebar}
                >
                  Experience
                </Link>
                <Link
                  to="/contact"
                  className={`text-white px-2 py-2 mx-3  text-base font-medium ${
                    location.pathname === '/contact' ? 'border-b-2 border-white' : ''
                  }`}
                  onClick={closeSidebar}
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className="flex-shrink-0 flex items-center sm:hidden">
              <button
                className="text-white p-2 focus:outline-none"
                onClick={toggleSidebar}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isSidebarOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar menu */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-gray-800 w-80  ">
          <div className="max-w-xs w-40 bg-gray-800 h-full text-white">
            <div className="p-4">
              <div className="mb-6">
                <Link
                  to="/"
                  className={`block px-4 py-2 text-xl hover:bg-gray-700 rounded ${
                    location.pathname === '/' ? 'text-white border-s-2 border-white' : 'text-gray-400'
                  }`}
                  onClick={closeSidebar}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className={`block px-4 py-2 text-xl hover:bg-gray-700 rounded ${
                    location.pathname === '/about' ? 'text-white border-s-2 border-white' : 'text-gray-400'
                  }`}
                  onClick={closeSidebar}
                >
                  About
                </Link>
                {/* <Link
                  to="/project"
                  className={`block px-4 py-2 text-xl hover:bg-gray-700 rounded ${
                    location.pathname === '/project' ? 'text-white border-s-2 border-white' : 'text-gray-400'
                  }`}
                  onClick={closeSidebar}
                >
                  Project
                </Link> */}
                <Link
                  to="/experience"
                  className={`block px-4 py-2 text-xl hover:bg-gray-700 rounded ${
                    location.pathname === '/experience' ? 'text-white border-s-2 border-white' : 'text-gray-400'
                  }`}
                  onClick={closeSidebar}
                >
                  Experience
                </Link>
                <Link
                  to="/contact"
                  className={`block px-4 py-2 text-xl hover:bg-gray-700 rounded ${
                    location.pathname === '/contact' ? 'text-white border-s-2 border-white' : 'text-gray-400'
                  }`}
                  onClick={closeSidebar}
                >
                  Contact
                </Link>

               
              </div>
              
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
