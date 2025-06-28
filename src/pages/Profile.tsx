import React from 'react';
import me from '../../src/images/me.jpg';
const user = {
  name: 'Salah Tabet',
  email: 'salaheddinetabet05@gmail.com',
  role: 'Admin',
  photo: me, // Replace with your image import
 };

const Profile: React.FC = () => {
  return (
    <div className="max-w-xl mx-auto mt-10 p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <div className="flex flex-col items-center">
        <img
          src={user.photo}
          alt="User"
          className="w-24 h-24 rounded-full border-4 border-[color:var(--theme-500)] mb-4 object-cover"
        />
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{user.name}</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{user.role}</p>
        <p className="text-md text-gray-700 dark:text-gray-300 mb-4">{user.email}</p>
        <div className="w-full border-t border-gray-200 dark:border-gray-700 mt-4 pt-4">
          <p className="text-center text-xs text-gray-400">Profile information cannot be changed.</p>
        </div>
      </div>
    </div>
  );
};

export default Profile; 