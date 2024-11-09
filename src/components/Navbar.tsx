'use client';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import Image from 'next/image';

const Navbar = () => {
    return (
        <nav className={`min-w-screen h-full py-4 px-6 bg-blue-600 text-white shadow-md flex justify-between items-center`}>
            {/* Logo Section */}
            <div className="flex items-center space-x-2">
                <Image height={32} width={32} src="/rasoi.png" alt="Food Saver Logo" className="h-8 w-8" />
                <h1 className="text-xl font-bold">RASOI SAATHI</h1>
            </div>

            {/* Account Section */}
            <div className="relative">
                <Menu as="div" className="relative">
                    <Menu.Button className="flex items-center space-x-2 focus:outline-none">
                        <span>Account</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="h-5 w-5"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
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
                        <Menu.Items className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                                {['Profile', 'Settings', 'Logout'].map((item) => (
                                    <Menu.Item key={item}>
                                        {({ active }) => (
                                            <a
                                                href={`/${item.toLowerCase()}`}
                                                className={`${
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                                                } flex justify-between w-full px-4 py-2 text-sm leading-5`}
                                            >
                                                {item}
                                            </a>
                                        )}
                                    </Menu.Item>
                                ))}
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </nav>
    );
};

export default Navbar;
