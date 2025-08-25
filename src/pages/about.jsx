export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8 text-gray-900 dark:text-gray-100">
      <h1 className="text-4xl font-bold text-purple-700 dark:text-purple-400 mb-8">
        About Lifora
      </h1>

      {/* What is Lifora */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-3">🌱 What is Lifora?</h2>
        <p className="text-lg leading-relaxed">
          Lifora is your personal companion for emotional wellness and self-growth. 
          It combines <span className="font-semibold">daily quests</span>, 
          <span className="font-semibold"> mood tracking</span>, and 
          <span className="font-semibold"> journaling</span> to help you 
          reflect, improve, and build better habits — all in one simple app.
        </p>
      </div>

      {/* Mission */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-3">🎯 Our Mission</h2>
        <p className="text-lg leading-relaxed">
          Our mission is to make mental wellness accessible and engaging for 
          everyone. Lifora blends <span className="font-semibold">science</span> 
          and <span className="font-semibold">simplicity</span> so you can 
          take small, consistent steps towards a happier, healthier life.
        </p>
      </div>

      {/* Vision */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold mb-3">🚀 Our Vision</h2>
        <p className="text-lg leading-relaxed">
          We envision a world where self-care feels natural, 
          and emotional growth is celebrated. 
          Lifora is not just an app — it’s a community movement 
          towards <span className="font-semibold">resilience, positivity, and balance</span>.
        </p>
      </div>
    </div>
  );
}
