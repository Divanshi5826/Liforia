import { useState } from "react";

const emotions = [
  { emoji: "😊", label: "Happy" },
  { emoji: "😔", label: "Sad" },
  { emoji: "😡", label: "Angry" },
  { emoji: "😌", label: "Calm" },
  { emoji: "🤩", label: "Excited" },
  { emoji: "😴", label: "Tired" },
];

export default function EmotionSelector() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="p-6 border rounded-xl shadow-md text-center">
      <h3 className="text-xl font-bold mb-4">How are you feeling today?</h3>
      
      <div className="flex justify-center flex-wrap gap-4">
        {emotions.map((emo) => (
          <button
            key={emo.label}
            onClick={() => setSelected(emo.label)}
            className={`text-3xl p-3 rounded-xl transition ${
              selected === emo.label
                ? "bg-indigo-600 text-white scale-110"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {emo.emoji}
          </button>
        ))}
      </div>

      {selected && (
        <p className="mt-4 text-lg">
          You feel <span className="font-semibold">{selected}</span> today 🌟
        </p>
      )}
    </div>
  );
}
