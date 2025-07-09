import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { BellIcon, Bars3Icon as MenuAlt1Icon, PlusIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';

/* IMPORTANT: To use a thicker "Inter" font, you must include the desired weights in your main HTML file.
  Update the <link> in your public/index.html <head> section to include weights like 600 (semibold) or 800 (extrabold).

  The new link should look like this:
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
*/

// A utility function for conditional class names.
const cn = (...inputs) => inputs.filter(Boolean).join(' ');

export default function Navbar({ setSidebarOpen }) {
  // Data for navigation links remains unchanged
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Accounts', href: '/accounts' },
    { name: 'Projects', href: '/projects' },
    { name: 'Updates', href: '/updates' },
  ];

  const tasksNavigation = [
    { name: 'View Assigned Tasks', href: '/tasks' },
    { name: 'My Tasks', href: '/my-tasks' },
    { name: 'Create New Task', href: '/create-task' },
  ];
  
  const createNavigation = [
      { name: 'New Account', href: '/create-account' },
      { name: 'New Project', href: '/create-project' },
      { name: 'New Update', href: '/create-update' },
      { name: 'New Task', href: '/create-task' },
  ];

  const userNavigation = [
    { name: 'Your Profile', href: '/profile' },
    { name: 'Sign out', href: '/logout' },
  ];

  return (
    // The header now has a default font weight applied via the style prop.
    <header 
      className="sticky top-0 z-30 flex h-16 w-full flex-shrink-0 items-center bg-card shadow-md"
      style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }} // Changed: Applied a medium font weight (500)
    >
      
      {/* Mobile Menu Button - opens the sidebar */}
      <button
        type="button"
        className="border-r border-border px-4 text-muted-foreground md:hidden"
        onClick={() => setSidebarOpen(true)}
      >
        <span className="sr-only">Open sidebar</span>
        <MenuAlt1Icon className="h-6 w-6" aria-hidden="true" />
      </button>

      {/* This div separates the mobile menu button from the rest of the navbar */}
      <div className="flex flex-1 items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* START: Left-aligned section including Logo and Navigation */}
        <div className="flex items-center space-x-8">
          {/* Logo and Title */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              className="h-8 w-auto"
              src="/rian-logo-footer.svg" // Assuming your logo is in the public folder
              alt="Rian Logo"
            />
            
          </Link>

          {/* Central Navigation Links */}
          <nav className="hidden md:flex items-center space-x-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors duration-150"
              >
                {item.name}
              </Link>
            ))}

            {/* Tasks Dropdown Menu */}
            <Menu as="div" className="relative">
              <Menu.Button className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 transition-colors duration-150">
                <span>Tasks</span>
                <ChevronDownIcon className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute left-0 mt-2 w-48 origin-top-left rounded-md bg-card py-1 shadow-lg ring-1 ring-white ring-opacity-10 focus:outline-none">
                  {tasksNavigation.map((item) => (
                    <Menu.Item key={item.name}>
                      {({ active }) => (
                        <Link
                          to={item.href}
                          className={cn(
                            active ? 'bg-secondary' : '',
                            'block px-4 py-2 text-sm text-foreground'
                          )}
                        >
                          {item.name}
                        </Link>
                      )}
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </Transition>
            </Menu>
          </nav>
        </div>
        {/* END: Left-aligned section */}

        {/* This div contains the right-aligned icons */}
        <div className="flex items-center space-x-2 md:space-x-4">

          {/* "Quick Create" (+) Dropdown */}
          <Menu as="div" className="relative">
             <Menu.Button className="rounded-full bg-card p-1.5 text-muted-foreground hover:text-foreground focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-card transition-colors duration-150">
                <span className="sr-only">Quick Create</span>
                <PlusIcon className="h-6 w-6" aria-hidden="true" />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-card py-1 shadow-lg ring-1 ring-white ring-opacity-10 focus:outline-none">
                {createNavigation.map((item) => (
                  <Menu.Item key={item.name}>
                    {({ active }) => (
                      <Link
                        to={item.href}
                        className={cn(
                          active ? 'bg-secondary' : '',
                          'block px-4 py-2 text-sm text-foreground'
                        )}
                      >
                        {item.name}
                      </Link>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </Menu>

          {/* Notifications Button */}
          <button
            type="button"
            className="rounded-full bg-card p-1.5 text-muted-foreground hover:text-foreground focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-card transition-colors duration-150"
          >
            <span className="sr-only">View notifications</span>
            <BellIcon className="h-6 w-6" aria-hidden="true" />
          </button>

          {/* Profile Dropdown */}
          <Menu as="div" className="relative">
            <div>
              <Menu.Button className="flex max-w-xs items-center rounded-full bg-card text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-card">
                <span className="sr-only">Open user menu</span>
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="User avatar"
                />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-card py-1 shadow-lg ring-1 ring-white ring-opacity-10 focus:outline-none">
                {userNavigation.map((item) => (
                  <Menu.Item key={item.name}>
                    {({ active }) => (
                      <Link
                        to={item.href}
                        className={cn(
                          active ? 'bg-secondary' : '',
                          'block px-4 py-2 text-sm text-foreground'
                        )}
                      >
                        {item.name}
                      </Link>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </Menu>

        </div>
      </div>
    </header>
  );
}
