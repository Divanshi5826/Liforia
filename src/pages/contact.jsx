export default function ContactSection() {
  return (
    <section className="relative bg-gray-950 text-white py-20">
      <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-start">

        {/* LEFT SIDE → Contact Form */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-600/30 shadow-xl">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm text-gray-400 mb-2">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-xl bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-purple-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">Your Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-xl bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-purple-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">Message</label>
              <textarea
                placeholder="Write your message..."
                rows="4"
                className="w-full px-4 py-3 rounded-xl bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-purple-500 outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 font-bold hover:scale-105 transform transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* RIGHT SIDE → FAQ */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-600/30 h-full shadow-xl">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <span>❓</span> Quick Answers
          </h3>
          <div className="space-y-6">
            <div>
              <div className="text-purple-400 font-semibold text-sm">
                How do I reset my password?
              </div>
              <div className="text-gray-400 text-sm">
                Visit Settings → Account → Password Reset
              </div>
            </div>

            <div>
              <div className="text-purple-400 font-semibold text-sm">
                Where are my quest rewards?
              </div>
              <div className="text-gray-400 text-sm">
                Check your Profile → Achievements tab
              </div>
            </div>

            <div>
              <div className="text-purple-400 font-semibold text-sm">
                How to sync across devices?
              </div>
              <div className="text-gray-400 text-sm">
                Enable Cloud Save in Settings
              </div>
            </div>

            <div>
              <div className="text-purple-400 font-semibold text-sm">
                Can I change my avatar?
              </div>
              <div className="text-gray-400 text-sm">
                Yes, go to Profile → Customize Avatar
              </div>
            </div>

            <div>
              <div className="text-purple-400 font-semibold text-sm">
                Do you offer premium plans?
              </div>
              <div className="text-gray-400 text-sm">
                Yes, visit our Pricing section for more info
              </div>
            </div>

            <div>
              <div className="text-purple-400 font-semibold text-sm">
                How do I contact support?
              </div>
              <div className="text-gray-400 text-sm">
                Use the contact form on this page or email support@lifora.com
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
