import { useState, useEffect } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      text: "Lifora turned my boring routine into an epic adventure! I actually look forward to doing my daily tasks now.",
      author: "Alex, Level 47 Productivity Warrior",
      emoji: "⚔️"
    },
    {
      text: "The journal feature feels like writing quest logs. My personal growth has never been this engaging!",
      author: "Maya, Level 32 Self-Discovery Mage",
      emoji: "✨"
    },
    {
      text: "Finally, an app that makes habit tracking feel like playing my favorite RPG. Absolutely addictive!",
      author: "Sam, Level 55 Habit Champion",
      emoji: "🏆"
    }
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Create Your Character",
      description: "Set up your profile and choose your life goals. Every journey begins with a hero.",
      icon: "👤",
      color: "from-purple-500 to-pink-500"
    },
    {
      step: "02", 
      title: "Accept Daily Quests",
      description: "Turn your daily tasks into exciting missions. Each completion earns you XP and brings you closer to your goals.",
      icon: "🎯",
      color: "from-blue-500 to-cyan-500"
    },
    {
      step: "03",
      title: "Level Up & Unlock",
      description: "Track your progress, earn achievements, and watch yourself grow. Your stats tell your success story.",
      icon: "📈",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
        </div>

        <div className={`relative z-10 text-center px-6 max-w-6xl mx-auto transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="mb-6">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full text-purple-300 font-semibold mb-6 backdrop-blur-sm">
              🎮 Life Gamification Platform
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight mb-6">
            LEVEL UP<br />YOUR LIFE
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
            <span className="text-cyan-400 font-semibold">Lifora</span> transforms your daily routine into an epic RPG adventure. 
            Complete quests, gain XP, unlock achievements, and become the <span className="text-purple-400 font-semibold">hero of your own story</span>. 
            No more boring to-do lists – just pure gaming excitement applied to real life! 🚀
          </p>

          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-600/30">
              <div className="text-3xl mb-3">📓</div>
              <h3 className="font-bold text-white mb-2">Quest Journal</h3>
              <p className="text-gray-400 text-sm">Write like a hero documenting epic adventures</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-600/30">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-bold text-white mb-2">Daily Quests</h3>
              <p className="text-gray-400 text-sm">Turn boring tasks into exciting missions with XP rewards</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-600/30">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="font-bold text-white mb-2">Power Stats</h3>
              <p className="text-gray-400 text-sm">Track progress like a pro gamer with detailed analytics</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-2xl shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300">
              <span className="relative z-10">🚀 START YOUR ADVENTURE</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              How <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Lifora</span> Works
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Three simple steps to transform your life into the ultimate RPG experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map((item, index) => (
              <div key={index} className="relative group">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-600/30 group-hover:border-purple-400/50 transition-all duration-300">
                  <div className={`inline-block p-4 rounded-2xl bg-gradient-to-r ${item.color} mb-6`}>
                    <span className="text-3xl">{item.icon}</span>
                  </div>
                  <div className="text-3xl font-black text-purple-400 mb-2">{item.step}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </div>
                {index < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="text-purple-400 text-2xl">→</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-gray-950/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-12">
            Join <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">10,000+</span> Life Adventurers
          </h2>
          
          <div className="relative">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-600/30">
              <div className="text-6xl mb-4">{testimonials[currentTestimonial].emoji}</div>
              <blockquote className="text-xl text-gray-300 mb-6 italic leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              <div className="text-purple-400 font-semibold">
                {testimonials[currentTestimonial].author}
              </div>
            </div>
            
            {/* Testimonial indicators */}
            <div className="flex justify-center space-x-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentTestimonial === index ? 'bg-purple-400' : 'bg-gray-600'
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm rounded-3xl p-12 border border-purple-500/30">
            <h2 className="text-4xl font-black text-white mb-6">
              Ready to Start Your <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Epic Journey</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Don't let another day pass living life on autopilot. Transform your routine into an adventure and unlock your potential!
            </p>
            <button className="group relative px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300">
              <span className="relative z-10">🎮 JOIN THE ADVENTURE</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <p className="text-gray-400 text-sm mt-4">Free to start • No credit card required • Instant setup</p>
          </div>
        </div>
      </section>
    </div>
  );
}