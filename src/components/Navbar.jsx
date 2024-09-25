// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between">
                <h1 className="text-white text-2xl font-bold">Expense Tracker</h1>
                <div>
                    <a href="/" className="text-gray-300 hover:text-white mx-4">Home</a>
                    <a href="/reports" className="text-gray-300 hover:text-white mx-4">Reports</a>
                    <a href="/settings" className="text-gray-300 hover:text-white mx-4">Settings</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
