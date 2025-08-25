import { useState, useEffect } from "react";

export default function Settings() {
  // Theme toggle state
  const [darkMode, setDarkMode] = useState(false);

  // Voice changer state
  const [voice, setVoice] = useState("default");

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 text-gray-900 dark:text-gray-100">
      <h1 className="text-3xl font-bold text-purple-700 dark:text-purple-400 mb-6">
        Settings
      </h1>

      {/* Profile Section */}
      <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Profile</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Username</label>
            <input
              type="text"
              placeholder="Enter username"
              className="mt-1 w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter email"
              className="mt-1 w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
          >
            Save Profile
          </button>
        </form>
      </div>

      {/* Theme Section */}
      <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Theme</h2>
        <div className="flex items-center gap-4">
          <span>Light / Dark Mode</span>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-4 py-2 rounded-md font-medium ${
              darkMode
                ? "bg-gray-700 text-white"
                : "bg-purple-600 text-white hover:bg-purple-700"
            }`}
          >
            {darkMode ? "Dark" : "Light"}
          </button>
        </div>
      </div>

      {/* AI Voice Changer */}
      <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">AI Voice Changer</h2>
        <select
          value={voice}
          onChange={(e) => setVoice(e.target.value)}
          className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
        >
          <option value="default">Default</option>
          <option value="calm">Calm Speaker</option>
          <option value="energetic">Energetic Speaker</option>
          <option value="robotic">Robotic</option>
        </select>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          Current voice: {voice}
        </p>
      </div>
    </div>
  );
}
