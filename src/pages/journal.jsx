import { useState } from "react";

export default function Journal() {
  const [entry, setEntry] = useState("");
  const [journal, setJournal] = useState([]);

  const addEntry = () => {
    if (entry.trim() === "") return;
    setJournal([
      ...journal,
      { id: Date.now(), text: entry, date: new Date().toLocaleDateString() },
    ]);
    setEntry("");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-purple-700 mb-6">Journal</h1>

      {/* Journal Input */}
      <div className="mb-6">
        <textarea
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
          placeholder="Write your thoughts here..."
          className="w-full h-32 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          onClick={addEntry}
          className="mt-3 px-5 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
        >
          Save Entry
        </button>
      </div>

      {/* Saved Entries */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Your Entries</h2>
        {journal.length === 0 ? (
          <p className="text-gray-500">No entries yet. Start writing 🌱</p>
        ) : (
          <ul className="space-y-4">
            {journal.map((item) => (
              <li
                key={item.id}
                className="p-4 bg-white rounded-lg shadow-md border"
              >
                <p className="text-gray-700">{item.text}</p>
                <p className="text-sm text-gray-400 mt-2">
                  {item.date}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
