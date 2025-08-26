import { useState } from "react";

export default function SimpleSettings() {
  const [settings, setSettings] = useState({
    username: "Player123",
    email: "hero@lifora.com",
    notifications: "enabled",
    theme: "dark",
    difficulty: "medium",
    soundEffects: true,
    dailyGoal: 5,
    language: "english",
    timezone: "UTC+5:30"
  });

  const handleInputChange = (field, value) => {
    setSettings(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    console.log("Settings saved:", settings);
    // Add your save logic here
  };

  const handleReset = () => {
    setSettings({
      username: "Player123",
      email: "hero@lifora.com", 
      notifications: "enabled",
      theme: "dark",
      difficulty: "medium",
      soundEffects: true,
      dailyGoal: 5,
      language: "english",
      timezone: "UTC+5:30"
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 px-6 py-12 pt-24">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              ⚙️ GAME SETTINGS
            </h1>
            <p className="text-xl text-gray-300">
              Customize your adventure experience
            </p>
          </div>

          {/* Settings Form */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-600/30 space-y-8">
            
            {/* Account Settings */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="text-purple-400 mr-3">👤</span>
                Account Settings
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-purple-300 font-semibold mb-3">Username</label>
                  <input
                    type="text"
                    value={settings.username}
                    onChange={(e) => handleInputChange('username', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-700/50 backdrop-blur-sm text-white rounded-xl border border-gray-600/50 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 outline-none transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-purple-300 font-semibold mb-3">Email</label>
                  <input
                    type="email"
                    value={settings.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-700/50 backdrop-blur-sm text-white rounded-xl border border-gray-600/50 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 outline-none transition-all duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Game Preferences */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="text-cyan-400 mr-3">🎮</span>
                Game Preferences
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-purple-300 font-semibold mb-3">Difficulty Level</label>
                  <select
                    value={settings.difficulty}
                    onChange={(e) => handleInputChange('difficulty', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-700/50 backdrop-blur-sm text-white rounded-xl border border-gray-600/50 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 outline-none transition-all duration-300"
                  >
                    <option value="easy">🟢 Easy Explorer</option>
                    <option value="medium">🟡 Balanced Adventurer</option>
                    <option value="hard">🔴 Hardcore Warrior</option>
                  </select>
                </div>
                <div>
                  <label className="block text-purple-300 font-semibold mb-3">Daily Quest Goal</label>
                  <input
                    type="number"
                    min="1"
                    max="20"
                    value={settings.dailyGoal}
                    onChange={(e) => handleInputChange('dailyGoal', parseInt(e.target.value))}
                    className="w-full px-4 py-3 bg-gray-700/50 backdrop-blur-sm text-white rounded-xl border border-gray-600/50 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 outline-none transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-purple-300 font-semibold mb-3">Theme</label>
                  <select
                    value={settings.theme}
                    onChange={(e) => handleInputChange('theme', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-700/50 backdrop-blur-sm text-white rounded-xl border border-gray-600/50 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 outline-none transition-all duration-300"
                  >
                    <option value="dark">🌙 Dark Mode</option>
                    <option value="light">☀️ Light Mode</option>
                    <option value="auto">🔄 Auto Switch</option>
                  </select>
                </div>
                <div>
                  <label className="block text-purple-300 font-semibold mb-3">Language</label>
                  <select
                    value={settings.language}
                    onChange={(e) => handleInputChange('language', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-700/50 backdrop-blur-sm text-white rounded-xl border border-gray-600/50 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 outline-none transition-all duration-300"
                  >
                    <option value="english">🇺🇸 English</option>
                    <option value="hindi">🇮🇳 Hindi</option>
                    <option value="spanish">🇪🇸 Spanish</option>
                    <option value="french">🇫🇷 French</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Notifications & Sound */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="text-pink-400 mr-3">🔔</span>
                Notifications & Audio
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-purple-300 font-semibold mb-3">Notifications</label>
                  <select
                    value={settings.notifications}
                    onChange={(e) => handleInputChange('notifications', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-700/50 backdrop-blur-sm text-white rounded-xl border border-gray-600/50 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 outline-none transition-all duration-300"
                  >
                    <option value="enabled">🔔 All Notifications</option>
                    <option value="quest-only">🎯 Quest Only</option>
                    <option value="disabled">🔕 Disabled</option>
                  </select>
                </div>
                <div>
                  <label className="block text-purple-300 font-semibold mb-3">Timezone</label>
                  <select
                    value={settings.timezone}
                    onChange={(e) => handleInputChange('timezone', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-700/50 backdrop-blur-sm text-white rounded-xl border border-gray-600/50 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 outline-none transition-all duration-300"
                  >
                    <option value="UTC+5:30">🇮🇳 India (UTC+5:30)</option>
                    <option value="UTC+0">🇬🇧 GMT (UTC+0)</option>
                    <option value="UTC-5">🇺🇸 EST (UTC-5)</option>
                    <option value="UTC+8">🇨🇳 CST (UTC+8)</option>
                  </select>
                </div>
              </div>

              {/* Sound Effects Toggle */}
              <div className="mt-6 flex items-center justify-between p-4 bg-gray-700/30 rounded-xl">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center">
                    <span className="mr-2">🔊</span>
                    Sound Effects
                  </h3>
                  <p className="text-gray-400 text-sm">Enable epic sound effects for completed quests</p>
                </div>
                <button
                  onClick={() => handleInputChange('soundEffects', !settings.soundEffects)}
                  className={`relative w-16 h-8 rounded-full transition-all duration-300 ${
                    settings.soundEffects 
                      ? 'bg-gradient-to-r from-purple-500 to-cyan-500' 
                      : 'bg-gray-600'
                  }`}
                >
                  <div className={`absolute w-6 h-6 bg-white rounded-full top-1 transition-all duration-300 ${
                    settings.soundEffects ? 'left-9' : 'left-1'
                  }`}></div>
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-8">
              <button
                onClick={handleSave}
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-2xl shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300"
              >
                <span className="relative z-10">💾 SAVE SETTINGS</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button
                onClick={handleReset}
                className="px-8 py-4 bg-gray-800/50 backdrop-blur-sm text-gray-300 font-bold rounded-2xl border border-gray-600 hover:border-purple-400 hover:text-white transition-all duration-300"
              >
                🔄 RESET TO DEFAULT
              </button>
            </div>
          </div>

          {/* Status Message */}
          <div className="mt-8 bg-gradient-to-r from-purple-900/50 to-cyan-900/50 backdrop-blur-sm rounded-3xl p-6 border border-purple-500/30 text-center">
            <p className="text-purple-300 font-semibold">
              ⚡ Your preferences are automatically saved • Last updated: Just now
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}