import { useState } from "react";

export default function QuestCard({ task, xp }) {
  const [done, setDone] = useState(false);

  return (
    <div className="border rounded-xl p-4 shadow mb-4 flex justify-between items-center">
      <div>
        <h3 className={`text-lg font-semibold ${done ? "line-through" : ""}`}>
          {task}
        </h3>
        <p className="text-sm text-gray-500">{xp} XP</p>
      </div>
      <button
        onClick={() => setDone(!done)}
        className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
      >
        {done ? "Undo" : "Complete"}
      </button>
    </div>
  );
}
