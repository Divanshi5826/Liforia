export default function Stats() {
  const stats = [
    {
      icon: "🔥",
      value: "80%",
      label: "Habit Consistency",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-500/20 to-red-500/20"
    },
    {
      icon: "⭐",
      value: "Level 5",
      label: "Current Game Level",
      color: "from-yellow-500 to-amber-500",
      bgColor: "from-yellow-500/20 to-amber-500/20"
    },
    {
      icon: "🎯",
      value: "12",
      label: "Quests Completed",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: "📓",
      value: "25",
      label: "Journal Entries",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-500/20 to-pink-500/20"
    }
  ];

  const achievements = [
    { name: "First Steps", description: "Complete your first quest", earned: true, icon: "🥇" },
    { name: "Consistent Warrior", description: "Maintain 7-day streak", earned: true, icon: "⚔️" },
    { name: "Journal Master", description: "Write 20 journal entries", earned: true, icon: "📚" },
    { name: "Level Guardian", description: "Reach Level 10", earned: false, icon: "🛡️" },
    { name: "Quest Crusher", description: "Complete 50 quests", earned: false, icon: "💥" },
    { name: "Habit Legend", description: "100% consistency for a month", earned: false, icon: "👑" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            📊 YOUR POWER STATS
          </h1>
          <p className="text-xl text-gray-300">
            Track your legendary journey and see how far you've come, hero!
          </p>
        </div>

        {/* Main Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="group relative">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-600/30 group-hover:border-purple-400/50 transition-all duration-300 text-center">
                <div className={`inline-block p-4 rounded-2xl bg-gradient-to-r ${stat.bgColor} mb-4 border border-gray-600/20`}>
                  <span className="text-4xl">{stat.icon}</span>
                </div>
                <h2 className={`text-3xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </h2>
                <p className="text-gray-400 font-medium">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Weekly Progress Chart */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-600/30">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="text-3xl mr-3">📈</span>
              Weekly Progress Overview
            </h3>
            
            {/* Mock Progress Bars */}
            <div className="space-y-4">
              {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day, index) => {
                const progress = [85, 92, 76, 100, 88, 95, 90][index];
                return (
                  <div key={day} className="flex items-center">
                    <span className="text-gray-300 w-24 font-medium">{day}</span>
                    <div className="flex-1 mx-4 bg-gray-700/50 rounded-full h-3 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 transition-all duration-1000 ease-out"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                    <span className="text-purple-400 font-bold w-12">{progress}%</span>
                  </div>
                );
              })}
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-gray-400 text-sm">
                🎮 Integration with recharts or other chart libraries coming soon!
              </p>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-600/30">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="text-3xl mr-3">🏆</span>
              Achievement Collection
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className={`rounded-2xl p-6 border transition-all duration-300 ${
                  achievement.earned 
                    ? 'bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border-purple-400/50' 
                    : 'bg-gray-700/30 border-gray-600/30'
                }`}>
                  <div className="text-center">
                    <div className={`text-4xl mb-3 ${achievement.earned ? '' : 'grayscale opacity-50'}`}>
                      {achievement.icon}
                    </div>
                    <h4 className={`font-bold mb-2 ${
                      achievement.earned ? 'text-purple-300' : 'text-gray-500'
                    }`}>
                      {achievement.name}
                    </h4>
                    <p className={`text-sm ${
                      achievement.earned ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {achievement.description}
                    </p>
                    {achievement.earned && (
                      <div className="mt-3 inline-block px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/30">
                        ✓ UNLOCKED
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* XP Progress Bar */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-600/30 text-center">
            <h3 className="text-xl font-bold text-white mb-4">
              🌟 Experience Points: 2,340 / 3,000
            </h3>
            <div className="bg-gray-700/50 rounded-full h-6 overflow-hidden mb-4">
              <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-1000" style={{width: '78%'}}></div>
            </div>
            <p className="text-purple-400 font-semibold">660 XP until Level 6! 🚀</p>
          </div>
        </div>
      </div>
    </div>
  );
}