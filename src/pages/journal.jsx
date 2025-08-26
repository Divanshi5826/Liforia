import { useState } from "react";

export default function Journal() {
  const [entries, setEntries] = useState([
    {
      id: 1,
      text: "Started my epic journey today! Completed my first morning workout quest and earned 50 XP. The adventure begins! 🚀",
      timestamp: "2025-08-25 08:30",
      mood: "excited",
      xpEarned: 50
    },
    {
      id: 2,  
      text: "Conquered the dreaded 'Clean Room' side quest. It was more challenging than expected, but the sense of accomplishment is real! Level up mentality is working.",
      timestamp: "2025-08-24 19:45",
      mood: "accomplished",
      xpEarned: 75
    }
  ]);
  
  const [text, setText] = useState("");
  const [selectedMood, setSelectedMood] = useState("neutral");

  const moods = [
    { value: "excited", emoji: "🚀", label: "Excited", color: "from-yellow-400 to-orange-400" },
    { value: "accomplished", emoji: "🏆", label: "Accomplished", color: "from-purple-400 to-pink-400" },
    { value: "focused", emoji: "🎯", label: "Focused", color: "from-blue-400 to-cyan-400" },
    { value: "grateful", emoji: "✨", label: "Grateful", color: "from-green-400 to-emerald-400" },
    { value: "neutral", emoji: "😊", label: "Neutral", color: "from-gray-400 to-slate-400" },
    { value: "challenging", emoji: "⚔️", label: "Challenged", color: "from-red-400 to-orange-400" }
  ];

  const addEntry = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    
    const newEntry = {
      id: Date.now(),
      text: text.trim(),
      timestamp: new Date().toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit', 
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
      }),
      mood: selectedMood,
      xpEarned: Math.floor(Math.random() * 50) + 25 // Random XP between 25-75
    };
    
    setEntries([newEntry, ...entries]);
    setText("");
    setSelectedMood("neutral");
  };

  const getMoodData = (mood) => {
    return moods.find(m => m.value === mood) || moods[4]; // default to neutral
  };

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
            📓 QUEST JOURNAL
          </h1>
          <p className="text-xl text-gray-300">
            Chronicle your epic adventures and document your heroic journey
          </p>
        </div>

        {/* Entry Form */}
        <div className="max-w-4xl mx-auto mb-12">
          <form onSubmit={addEntry} className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-600/30">
            <div className="space-y-6">
              {/* Mood Selection */}
              <div>
                <label className="block text-purple-300 font-semibold mb-4">
                  Choose your current mood:
                </label>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                  {moods.map((mood) => (
                    <button
                      key={mood.value}
                      type="button"
                      onClick={() => setSelectedMood(mood.value)}
                      className={`p-3 rounded-xl border-2 transition-all duration-300 ${
                        selectedMood === mood.value
                          ? `bg-gradient-to-r ${mood.color} border-white/50 scale-105`
                          : 'bg-gray-700/30 border-gray-600/50 hover:border-purple-400/50'
                      }`}
                    >
                      <div className="text-2xl mb-1">{mood.emoji}</div>
                      <div className={`text-xs font-medium ${
                        selectedMood === mood.value ? 'text-white' : 'text-gray-400'
                      }`}>
                        {mood.label}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Text Input */}
              <div>
                <label className="block text-purple-300 font-semibold mb-3">
                  Document your adventure:
                </label>
                <textarea
                  placeholder="Write about your quests, achievements, challenges, or any thoughts from your heroic journey..."
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-4 bg-gray-700/50 backdrop-blur-sm text-white rounded-xl border border-gray-600/50 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 outline-none transition-all duration-300 placeholder-gray-400 resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-2xl shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300"
                >
                  <span className="relative z-10">📝 RECORD ENTRY</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Entries List */}
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold text-white flex items-center justify-center">
              <span className="text-3xl mr-3">📜</span>
              Adventure Log ({entries.length} entries)
            </h2>
          </div>

          {entries.length === 0 ? (
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-12 border border-gray-600/30 text-center">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-xl font-bold text-gray-300 mb-2">Your journal awaits!</h3>
              <p className="text-gray-400">
                Start documenting your epic journey. Every hero needs a quest log!
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {entries.map((entry) => {
                const moodData = getMoodData(entry.mood);
                return (
                  <div
                    key={entry.id}
                    className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-600/30 hover:border-purple-400/30 transition-all duration-300"
                  >
                    {/* Entry Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${moodData.color} mr-3`}>
                          <span className="text-xl">{moodData.emoji}</span>
                        </div>
                        <div>
                          <div className="text-purple-300 font-semibold">{moodData.label}</div>
                          <div className="text-gray-500 text-sm">{entry.timestamp}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-cyan-400 font-bold">+{entry.xpEarned} XP</div>
                        <div className="text-gray-500 text-sm">Experience Gained</div>
                      </div>
                    </div>

                    {/* Entry Content */}
                    <div className="text-gray-300 leading-relaxed">
                      {entry.text}
                    </div>

                    {/* Entry Footer */}
                    <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-600/30">
                      <div className="text-gray-500 text-sm">
                        Entry #{entry.id}
                      </div>
                      <div className="flex items-center text-purple-400 text-sm">
                        <span className="mr-1">⭐</span>
                        Legendary Entry
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Stats Summary */}
          {entries.length > 0 && (
            <div className="mt-12 bg-gradient-to-r from-purple-900/50 to-cyan-900/50 backdrop-blur-sm rounded-3xl p-6 border border-purple-500/30 text-center">
              <h3 className="text-xl font-bold text-white mb-4">
                📊 Journal Statistics
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="text-2xl font-black text-cyan-400">
                    {entries.length}
                  </div>
                  <div className="text-purple-300 text-sm">Total Entries</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-purple-400">
                    {entries.reduce((sum, entry) => sum + entry.xpEarned, 0)}
                  </div>
                  <div className="text-purple-300 text-sm">Total XP Earned</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-pink-400">
                    {entries.length > 0 ? Math.round(entries.reduce((sum, entry) => sum + entry.xpEarned, 0) / entries.length) : 0}
                  </div>
                  <div className="text-purple-300 text-sm">Avg XP per Entry</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}