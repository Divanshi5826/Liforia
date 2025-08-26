import { useState, useEffect } from "react";

export default function Dashboard() {
  const [currentXP, setCurrentXP] = useState(2350);
  const [level, setLevel] = useState(12);
  const [selectedMood, setSelectedMood] = useState(null);
  const [completedQuests, setCompletedQuests] = useState([]);
  const [timeOfDay, setTimeOfDay] = useState('');
  
  const maxXP = 3000;
  const xpProgress = (currentXP / maxXP) * 100;

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setTimeOfDay('morning');
    else if (hour < 17) setTimeOfDay('afternoon');
    else setTimeOfDay('evening');
  }, []);

  const moods = [
    { emoji: "😊", label: "Happy", color: "bg-yellow-400" },
    { emoji: "💪", label: "Motivated", color: "bg-red-400" },
    { emoji: "😌", label: "Peaceful", color: "bg-green-400" },
    { emoji: "🤔", label: "Thoughtful", color: "bg-blue-400" },
    { emoji: "🔥", label: "Fired Up", color: "bg-orange-400" },
    { emoji: "😴", label: "Tired", color: "bg-purple-400" }
  ];

  const dailyQuests = [
    { id: 1, title: "Morning Meditation", xp: 50, difficulty: "Easy", icon: "🧘‍♂️", category: "Wellness" },
    { id: 2, title: "Read 20 Pages", xp: 75, difficulty: "Medium", icon: "📚", category: "Learning" },
    { id: 3, title: "Workout Session", xp: 100, difficulty: "Hard", icon: "💪", category: "Fitness" },
    { id: 4, title: "Write Journal Entry", xp: 60, difficulty: "Easy", icon: "📝", category: "Growth" },
    { id: 5, title: "Learn New Skill", xp: 120, difficulty: "Hard", icon: "🎯", category: "Learning" },
    { id: 6, title: "Connect with Friend", xp: 80, difficulty: "Medium", icon: "👥", category: "Social" }
  ];

  const achievements = [
    { title: "Early Bird", icon: "🐦", description: "Complete morning quest 7 days straight", unlocked: true },
    { title: "Bookworm", icon: "🐛", description: "Read 1000 pages", unlocked: true },
    { title: "Zen Master", icon: "🧘", description: "Meditate 30 days in a row", unlocked: false },
    { title: "Social Butterfly", icon: "🦋", description: "Connect with 50 people", unlocked: true }
  ];

  const stats = [
    { label: "Total XP", value: "24,350", icon: "⭐", color: "text-yellow-400", bgColor: "bg-yellow-400/20" },
    { label: "Current Level", value: level, icon: "🏆", color: "text-purple-400", bgColor: "bg-purple-400/20" },
    { label: "Quest Streak", value: "7 days", icon: "🔥", color: "text-orange-400", bgColor: "bg-orange-400/20" },
    { label: "Journal Entries", value: "42", icon: "📓", color: "text-blue-400", bgColor: "bg-blue-400/20" }
  ];

  const toggleQuest = (questId) => {
    if (completedQuests.includes(questId)) {
      setCompletedQuests(completedQuests.filter(id => id !== questId));
    } else {
      setCompletedQuests([...completedQuests, questId]);
      // Simulate XP gain
      setCurrentXP(prev => Math.min(prev + dailyQuests.find(q => q.id === questId)?.xp || 0, maxXP));
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Easy': return 'bg-green-500';
      case 'Medium': return 'bg-yellow-500';
      case 'Hard': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getGreeting = () => {
    const greetings = {
      morning: "Rise and shine, Hero! 🌅",
      afternoon: "Keep conquering, Champion! ☀️", 
      evening: "Evening warrior mode activated! 🌙"
    };
    return greetings[timeOfDay] || "Welcome back, Adventurer! ⚡";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 px-6 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
            COMMAND CENTER
          </h1>
          <p className="text-xl text-gray-300">{getGreeting()}</p>
        </div>

        {/* Player Stats Bar */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-6 border border-gray-600/30 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center text-2xl font-bold text-white">
                {level}
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Level {level} Adventurer</h2>
                <p className="text-gray-400">XP: {currentXP.toLocaleString()} / {maxXP.toLocaleString()}</p>
              </div>
            </div>
            
            {/* XP Progress Bar */}
            <div className="flex-1 max-w-md">
              <div className="flex justify-between text-sm text-gray-400 mb-2">
                <span>Progress to Level {level + 1}</span>
                <span>{Math.round(xpProgress)}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-4">
                <div 
                  className="bg-gradient-to-r from-green-400 to-cyan-400 h-4 rounded-full transition-all duration-500"
                  style={{width: `${xpProgress}%`}}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 border border-gray-600/30 text-center group hover:scale-105 transition-transform">
              <div className={`inline-block p-3 rounded-xl ${stat.bgColor} mb-3`}>
                <span className="text-2xl">{stat.icon}</span>
              </div>
              <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Daily Quests */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-6 border border-gray-600/30">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <span className="text-3xl">🎯</span>
                  Daily Quests
                </h2>
                <div className="text-sm text-gray-400">
                  {completedQuests.length} / {dailyQuests.length} Complete
                </div>
              </div>
              
              <div className="space-y-4">
                {dailyQuests.map((quest) => {
                  const isCompleted = completedQuests.includes(quest.id);
                  return (
                    <div
                      key={quest.id}
                      className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer ${
                        isCompleted 
                          ? 'bg-green-900/30 border-green-500/50 scale-95 opacity-75' 
                          : 'bg-gray-700/50 border-gray-600/50 hover:border-purple-400/50 hover:bg-gray-700/70'
                      }`}
                      onClick={() => toggleQuest(quest.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                            isCompleted ? 'bg-green-500' : 'bg-gray-600'
                          }`}>
                            <span className="text-xl">{isCompleted ? '✅' : quest.icon}</span>
                          </div>
                          <div>
                            <h3 className={`font-bold ${isCompleted ? 'text-green-400 line-through' : 'text-white'}`}>
                              {quest.title}
                            </h3>
                            <div className="flex items-center gap-2 text-sm text-gray-400">
                              <span className={`px-2 py-1 rounded text-xs ${getDifficultyColor(quest.difficulty)} text-white`}>
                                {quest.difficulty}
                              </span>
                              <span>{quest.category}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`font-bold ${isCompleted ? 'text-green-400' : 'text-cyan-400'}`}>
                            +{quest.xp} XP
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-600/30">
                <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all">
                  🎮 VIEW ALL QUESTS
                </button>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Mood Selector */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-6 border border-gray-600/30">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span>💭</span> How are you feeling?
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {moods.map((mood, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedMood(mood)}
                    className={`p-3 rounded-xl text-center transition-all ${
                      selectedMood?.emoji === mood.emoji
                        ? `${mood.color} text-white scale-110`
                        : 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                    }`}
                  >
                    <div className="text-xl mb-1">{mood.emoji}</div>
                    <div className="text-xs font-medium">{mood.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-6 border border-gray-600/30">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span>⚡</span> Quick Actions
              </h3>
              <div className="space-y-3">
                <button className="w-full p-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl hover:scale-105 transition-transform flex items-center gap-3">
                  <span>📓</span>
                  <span>Write Journal Entry</span>
                </button>
                <button className="w-full p-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl hover:scale-105 transition-transform flex items-center gap-3">
                  <span>📊</span>
                  <span>View Progress Stats</span>
                </button>
                <button className="w-full p-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:scale-105 transition-transform flex items-center gap-3">
                  <span>🎯</span>
                  <span>Create New Quest</span>
                </button>
              </div>
            </div>

            {/* Recent Achievements */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-6 border border-gray-600/30">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span>🏆</span> Achievements
              </h3>
              <div className="space-y-3">
                {achievements.slice(0, 3).map((achievement, index) => (
                  <div 
                    key={index} 
                    className={`p-3 rounded-xl flex items-center gap-3 ${
                      achievement.unlocked ? 'bg-yellow-900/30 border border-yellow-500/50' : 'bg-gray-700/50 opacity-50'
                    }`}
                  >
                    <div className="text-xl">{achievement.unlocked ? achievement.icon : '🔒'}</div>
                    <div>
                      <div className={`font-bold text-sm ${achievement.unlocked ? 'text-yellow-400' : 'text-gray-400'}`}>
                        {achievement.title}
                      </div>
                      <div className="text-xs text-gray-500">{achievement.description}</div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 py-2 text-purple-400 hover:text-purple-300 text-sm font-medium">
                View All Achievements →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}