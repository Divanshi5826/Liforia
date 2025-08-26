export default function Footer() {
  return (
    <footer className="relative bg-gray-950 border-t border-gray-800">
  <div className="relative container mx-auto px-6 py-6">
    <div className="flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm gap-4">
      
      {/* Left */}
      <div className="md:w-1/3 text-center md:text-left">
        Made with ❤️ for life adventurers.
      </div>

      {/* Center */}
      <div className="md:w-1/3 text-center">
        © {new Date().getFullYear()} Lifora. All rights reserved.
      </div>

      {/* Right */}
      <div className="md:w-1/3 text-center md:text-right">
        🔥 Always improving
      </div>

    </div>
  </div>
</footer>


  );
}