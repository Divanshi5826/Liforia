import { useState } from "react";

export default function Dashboard() {
  const [emotion, setEmotion] = useState("😊");
  const [quests, setQuests] = useState([
    { id: 1, text: "Drink 2L of water 💧", done: false },
    { id: 2, text: "Meditate for 10 min 🧘", done: false },
    { id: 3, text: "Write 3 gratitude notes ✍️", done: false },
  ]);

  const toggleQuest = (id) => {
    setQuests(
      quests.map((q) =>
        q.id === id ? { ...q, done: !q.done } : q
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-purple-700 mb-6">
        Dashboard
      </h1>

      {/* Emotion Selector */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">How do you feel today?</h2>
        <div className="flex gap-3 text-2xl">
          {["😊", "😐", "😔", "😡", "🤩"].map((emo) => (
            <button
              key={emo}
              onClick={() => setEmotion(emo)}
              className={`p-2 rounded-lg border ${
                emotion === emo ? "bg-purple-200 border-purple-500" : "bg-white"
              }`}
            >
              {emo}
            </button>
          ))}
        </div>
        <p className="mt-2 text-gray-600">You selected: {emotion}</p>
      </div>

      {/* Daily Quests */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Daily Quests</h2>
        <ul className="space-y-3">
          {quests.map((quest) => (
            <li
              key={quest.id}
              className={`flex items-center gap-3 p-3 rounded-lg shadow-sm ${
                quest.done ? "bg-green-100" : "bg-white"
              }`}
            >
              <input
                type="checkbox"
                checked={quest.done}
                onChange={() => toggleQuest(quest.id)}
                className="w-5 h-5 accent-purple-600"
              />
              <span
                className={quest.done ? "line-through text-gray-500" : ""}
              >
                {quest.text}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Quick Stats */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Quick Stats</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 bg-white rounded-xl shadow text-center">
            <p className="text-2xl font-bold text-purple-600">3</p>
            <p className="text-sm text-gray-500">Quests Done</p>
          </div>
          <div className="p-4 bg-white rounded-xl shadow text-center">
            <p className="text-2xl font-bold text-purple-600">7</p>
            <p className="text-sm text-gray-500">Days Streak</p>
          </div>
          <div className="p-4 bg-white rounded-xl shadow text-center">
            <p className="text-2xl font-bold text-purple-600">😊</p>
            <p className="text-sm text-gray-500">Today’s Mood</p>
          </div>
        </div>
      </div>
    </div>
  );
}
