import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

// You will need to create this Button component or adapt it.
// A basic version is provided in the UI Components section below.
import { Button } from '../ui/button'; 

// A simplified Dropdown for mobile view.
// You can build this out using the Radix UI components you installed.
const DropdownMenu = ({ children }) => <div className="relative">{children}</div>;
const DropdownMenuTrigger = ({ children }) => <div>{children}</div>;
const DropdownMenuContent = ({ children }) => (
  <div className="absolute right-0 mt-2 w-screen max-w-xs p-4 border border-white/10 bg-[#1D1D1D] rounded-2xl shadow-2xl">
    {children}
  </div>
);


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const navLinks = [
    { href: "/", label: "Dashboard" },
    { href: "/accounts", label: "Accounts" },
    { href: "/projects", label: "Projects" },
    { href: "/orders", label: "Orders" },
  ];

  return (
    <AnimatePresence>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 120, damping: 18 }}
        className="w-full max-w-[1920px] px-4 sm:px-8 md:px-12 mx-auto flex items-center justify-center text-white"
      >
        <div className="container flex items-center justify-between w-full lg:py-12 py-8">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            {/* Replace with your logo or the new one */}
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="8" fill="white"/>
            </svg>
          </Link>

          {/* Nav Links (Desktop) */}
          <nav className="hidden xl:flex text-lg items-center space-x-10 relative">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <div key={link.href} className="relative flex flex-col items-center">
                  <Link to={link.href} className="hover:text-white/80 transition">
                    {link.label}
                  </Link>
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        layoutId="navbar-underline"
                        className="absolute -bottom-2 left-0 right-0 h-[3px] rounded-full bg-white"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      />
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>
          
          {/* Actions (Desktop) */}
          <div className="hidden xl:flex items-center space-x-3">
             <Button variant="outline">Login</Button>
             <Button>Book a Demo</Button>
          </div>


          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center">
            <button
                onClick={() => setOpen(!open)}
                aria-label="Open menu"
                className="w-12 h-12 flex items-center justify-center border border-white/10 rounded-sm bg-transparent"
            >
                <span className="flex flex-col items-center justify-center w-6 h-6 gap-1.5">
                    <span className="w-6 h-0.5 bg-white rounded-full"/>
                    <span className="w-6 h-0.5 bg-white rounded-full"/>
                </span>
            </button>
          </div>
          {open && (
             <div className="xl:hidden absolute top-24 right-4 z-20">
                 <DropdownMenu>
                     <DropdownMenuContent>
                         <nav className="flex flex-col gap-8 text-lg text-white">
                             {navLinks.map(link => (
                                 <Link key={link.href} to={link.href} className="hover:text-white/80 transition" onClick={() => setOpen(false)}>{link.label}</Link>
                             ))}
                         </nav>
                         <div className="flex flex-col items-center gap-3 w-full mt-6">
                            <Button variant="outline" className="w-full h-[46px]">Login</Button>
                            <Button className="w-full h-[46px]">Book a Demo</Button>
                         </div>
                     </DropdownMenuContent>
                 </DropdownMenu>
             </div>
          )}
        </div>
      </motion.header>
    </AnimatePresence>
  );
}