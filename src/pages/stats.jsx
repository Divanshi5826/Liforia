import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

export default function Stats() {
  // Dummy mood data
  const moodData = [
    { day: "Mon", mood: 6 },
    { day: "Tue", mood: 7 },
    { day: "Wed", mood: 5 },
    { day: "Thu", mood: 8 },
    { day: "Fri", mood: 6 },
    { day: "Sat", mood: 9 },
    { day: "Sun", mood: 7 },
  ];

  // Dummy quest progress data
  const questData = [
    { name: "Week 1", completed: 3 },
    { name: "Week 2", completed: 5 },
    { name: "Week 3", completed: 4 },
    { name: "Week 4", completed: 6 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-purple-700 mb-6">Your Stats</h1>

      {/* Mood Tracker Line Chart */}
      <div className="bg-white p-5 rounded-lg shadow-md mb-10">
        <h2 className="text-xl font-semibold mb-4">Mood Tracker (Weekly)</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={moodData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis domain={[0, 10]} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="mood"
              stroke="#7C3AED"
              strokeWidth={3}
              dot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Quest Progress Bar Chart */}
      <div className="bg-white p-5 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Quest Progress</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={questData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="completed" fill="#9333EA" barSize={40} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
