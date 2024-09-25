// src/components/ProfileSettings.jsx
import React from 'react';

const ProfileSettings = ({ user }) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="flex items-center justify-center bg-gray-200 py-4">
        <img
          src={user.photo}
          alt="Profile"
          className="w-24 h-24 rounded-full border-4 border-gray-300"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
        <p className="text-gray-600 mt-2">
          <strong>Phone:</strong> {user.number}
        </p>
        <p className="text-gray-600">
          <strong>Email:</strong> {user.email}
        </p>
        {/* Add more fields as needed */}
      </div>
      <div className="p-4 bg-gray-100">
        <h3 className="text-lg font-semibold">Additional Details</h3>
        <p className="text-gray-600">You can add more details here.</p>
      </div>
    </div>
  );
};

export default ProfileSettings;
