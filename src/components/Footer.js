import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
import React from 'react';
function Footer() {
  return (
    <footer className="bg-[#191919] pt-10 pb-10">
      <section className="container mx-auto md:px-16 sm:px-8 px-8">
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-5">
            <h1 className="text-white text-2xl font-medium">Contact Us</h1>
            <div className='flex  gap-4 mt-6'>
            <EnvelopeIcon className="h-6 w-8 mt-1 text-white" />
            <span>
                <a href='mailto:saadrasool381@gmail.com' className='text-white text-lg font-medium'>saadrasool381@gmail.com</a>
            </span>
            </div>
            <div className='flex  gap-4 mt-5'>
            <PhoneIcon  className="h-6 w-8 mt-1 text-white" />
            <span>
                <a href='tel:03024029406' className='text-white text-lg font-medium'>03024029406</a>
            </span>
            </div>
          </div>
          <div className="col-span-5 sm:col-span-6 md:col-span-3 lg:col-span-3 md:mt-0 mt-5">
            <h1 className="text-white text-2xl font-medium">Quick Links</h1>
            <div className="mb-6 mt-4">
                <Link
                  to="/"
                  className="block px-4 py-2 text-white text-lg hover:text-gray-700 rounded ease-out duration-300" 
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="block px-4 py-2 text-lg text-white hover:text-gray-700 rounded ease-out duration-300" 
                >
                  About
                </Link>
                {/* <Link
                  to="/project"
                  className="block px-4 py-2 text-lg text-white hover:text-gray-700 rounded ease-out duration-300" 
                >
                  Project
                </Link> */}
                <Link
                  to="/experienced"
                  className="block px-4 py-2 text-lg text-white hover:text-gray-700 rounded ease-out duration-300" 
                >
                  Experienced
                </Link>
                <Link
                  to="/contact"
                  className="block px-4 py-2 text-lg text-white hover:text-gray-700 rounded ease-out duration-300" 
                  
                >
                  Contact
                </Link>

               
              </div>
          </div>
          <div className="col-span-7 sm:col-span-6 md:col-span-3 lg:col-span-4 md:mt-0 mt-5">
            <h1 className="text-white text-2xl font-medium text-center">Follow Us</h1>
            <div className='mt-5 flex gap-8 justify-center pt-3'>
                <Link to='https://linkedin.com/in/saad-rasool-b306b8171  ' className=' rounded-full'>
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.225 0H1.771C.792 0 0 .774 0 1.729v20.543C0 23.226.792 24 1.771 24h20.451C23.208 24 24 23.226 24 22.272V1.729C24 .774 23.208 0 22.225 0zM7.125 20.452H3.56V9h3.566v11.452zM5.344 7.732c-1.143 0-2.067-.93-2.067-2.075s.923-2.075 2.067-2.075c1.143 0 2.067.93 2.067 2.075s-.924 2.075-2.067 2.075zm15.1 12.72h-3.565v-5.924c0-1.41-.028-3.229-1.966-3.229-1.97 0-2.272 1.536-2.272 3.122v6.031H8.78V9h3.426v1.561h.048c.477-.898 1.64-1.846 3.374-1.846 3.606 0 4.274 2.373 4.274 5.456v6.281z"/>
                    </svg>
                </Link>
                <Link to="https://www.facebook.com/saad.rasool.940" className='rounded-full'>
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12a12 12 0 1 0-13.878 11.898v-8.417H7.077V12h3.045V9.354c0-3.012 1.792-4.688 4.533-4.688 1.312 0 2.688.235 2.688.235v2.96h-1.516c-1.494 0-1.957.927-1.957 1.872V12h3.333l-.533 3.481h-2.8v8.417A12.001 12.001 0 0 0 24 12z"/>
                    </svg>
                </Link>
                <Link to="https://www.instagram.com/saadrasool381/?hl=en" className='rounded-full' >
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.43.414a4.92 4.92 0 011.752 1.018 4.92 4.92 0 011.017 1.752c.174.46.36 1.26.413 2.43.059 1.267.07 1.647.07 4.851s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.414 2.43a4.92 4.92 0 01-1.018 1.752 4.92 4.92 0 01-1.752 1.017c-.46.174-1.26.36-2.43.413-1.267.059-1.647.07-4.851.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.43-.414a4.92 4.92 0 01-1.752-1.018 4.92 4.92 0 01-1.017-1.752c-.174-.46-.36-1.26-.413-2.43-.059-1.267-.07-1.647-.07-4.851s.012-3.584.07-4.85c.054-1.17.24-1.97.414-2.43a4.92 4.92 0 011.018-1.752 4.92 4.92 0 011.752-1.017c.46-.174 1.26-.36 2.43-.413 1.267-.059 1.647-.07 4.851-.07M12 0C8.741 0 8.332.015 7.053.072 5.77.13 4.682.314 3.758.624a6.919 6.919 0 00-2.516 1.631A6.919 6.919 0 00.624 4.758c-.31.924-.495 2.012-.552 3.295C0 8.332 0 8.741 0 12s.015 3.668.072 4.947c.057 1.283.242 2.371.552 3.295a6.919 6.919 0 001.631 2.516 6.919 6.919 0 002.516 1.631c.924.31 2.012.495 3.295.552C8.332 24 8.741 24 12 24s3.668-.015 4.947-.072c1.283-.057 2.371-.242 3.295-.552a6.919 6.919 0 002.516-1.631 6.919 6.919 0 001.631-2.516c.31-.924.495-2.012.552-3.295.057-1.279.072-1.688.072-4.947s-.015-3.668-.072-4.947c-.057-1.283-.242-2.371-.552-3.295a6.919 6.919 0 00-1.631-2.516 6.919 6.919 0 00-2.516-1.631c-.924-.31-2.012-.495-3.295-.552C15.668 0 15.259 0 12 0zm0 5.838a6.162 6.162 0 110 12.324 6.162 6.162 0 010-12.324zm0 10.162a3.999 3.999 0 100-7.998 3.999 3.999 0 000 7.998zm7.8-11.1a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/>
                  </svg>
                </Link>
            </div>
          </div>
        </div>
        <hr/>
      </section>
    </footer>
  );
}

export default Footer;
