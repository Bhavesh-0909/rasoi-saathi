'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import Navbar from './Navbar'; // import Navbar component
import Sidebar from './Sidebar'; // import Sidebar component

const AppLayout = ({ children }) => {
    const pathname = usePathname();
    const excludedPaths = ['/login', '/signup'];

    if (excludedPaths.includes(pathname)) {
        return <>{children}</>;
    }

    return (
        <div className="h-screen grid grid-cols-1 grid-rows-10 md:grid-cols-4 lg:grid-cols-4">
            {/* Navbar spanning the full width */}
            <div className='col-span-1 row-span-1  md:col-span-4 h-full'>
                <Navbar />
            </div>

            {/* Sidebar is hidden on small devices */}
            <aside className="col-span-1 row-span-9  bg-gray-800 text-white">
                <Sidebar />
            </aside>

            {/* Main content section */}
            <main className="col-span-1 row-span-9 max-h-[90vh] overflow-y-auto md:col-span-3 lg:col-span-3">
                {children}
            </main>
        </div>
    );
};

export default AppLayout;
