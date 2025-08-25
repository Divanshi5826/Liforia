import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-purple-100 to-white text-center px-6">
      {/* Logo / App Name */}
      <h1 className="text-5xl font-bold text-purple-700 mb-4">Lifora</h1>
      <p className="text-lg text-gray-600 max-w-xl mb-8">
        Turn your daily life into an epic adventure 🎯.  
        Track moods, complete quests, and level up every single day.
      </p>

      {/* Call to Action */}
      <Link to="/dashboard">
        <button className="px-6 py-3 bg-purple-600 text-white rounded-2xl shadow-lg hover:bg-purple-700 transition">
          Start Your Journey 🚀
        </button>
      </Link>

      {/* Footer Note */}
      <p className="mt-10 text-gray-400 text-sm">
        Built with ❤️ using React + Tailwind
      </p>
    </div>
  );
}
