// src/components/Settings.jsx
import React, { useContext, useState } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';

const Settings = () => {
    const { profile, setProfile } = useContext(ExpenseContext);
    const [error, setError] = useState('');
    
    // Phone number regex pattern
    const phoneRegex = /^\+?[0-9]{1,4}?[-.\s]?(\(?\d{1,3}?\)?[-.\s]?)?\d{3}[-.\s]?\d{4}$/;

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validate phone number
        if (!phoneRegex.test(profile.number)) {
            setError('Please enter a valid phone number.');
            return;
        }

        // Clear error if valid
        setError('');
        
        // You can add logic here to save the profile, e.g., sending to an API
        console.log('Profile updated:', profile);
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Profile Settings</h2>
            <div className="flex items-center bg-white shadow-md rounded-lg p-6 mb-4">
                <img src={profile.photo} alt="Profile" className="w-24 h-24 rounded-full mr-4" />
                <div>
                    <h3 className="text-xl font-semibold">{profile.email}</h3>
                    <p className="text-gray-600">{profile.number}</p>
                </div>
            </div>

            <h3 className="text-xl font-semibold mb-2">Edit Profile</h3>
            <form className="bg-white shadow-md rounded-lg p-6" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        value={profile.email} 
                        onChange={(e) => setProfile({ ...profile, email: e.target.value })} 
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="number" className="block text-gray-700">Phone Number:</label>
                    <input 
                        type="text" 
                        id="number" 
                        value={profile.number} 
                        onChange={(e) => setProfile({ ...profile, number: e.target.value })} 
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
                </div>
                <button 
                    type="submit" 
                    className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                >
                    Save Changes
                </button>
            </form>
        </div>
    );
};

export default Settings;
