import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Landing() {
  return (
    <div className="relative h-screen w-full text-white overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-30"
        src="/videos/futuristic.mp4"
      ></video>

      {/* Navbar / Taskbar */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 w-full z-50 px-8 py-4 backdrop-blur-xl border-b border-cyan-400/50 flex justify-between items-center bg-black/30"
      >
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold text-cyan-400 tracking-wider drop-shadow-[0_0_10px_#00ffff] hover:text-pink-400 hover:drop-shadow-[0_0_15px_#ff00ff] transition-all duration-300"
        >
          FutureVerse 🌌
        </Link>

        {/* Menu */}
        <div className="flex space-x-10 text-lg font-medium">
          {["Home", "Future Wall"].map((item, idx) => (
            <Link
              key={idx}
              to={item === "Home" ? "/" : "/futurewall"}
              className="relative text-cyan-300 hover:text-pink-400 transition-colors duration-300"
            >
              <span className="relative z-10">{item}</span>
              <motion.div
                layoutId="underline"
                className="absolute bottom-0 left-0 w-full h-1 bg-pink-400 rounded-full"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          ))}
        </div>

        {/* Neon Floating Particles on Navbar */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 120, ease: "linear" }}
        >
          <div className="absolute w-1 h-1 bg-cyan-400 rounded-full top-3 left-10 opacity-60"></div>
          <div className="absolute w-1 h-1 bg-pink-400 rounded-full top-5 right-14 opacity-60"></div>
          <div className="absolute w-1 h-1 bg-purple-400 rounded-full top-7 left-24 opacity-60"></div>
        </motion.div>
      </motion.nav>

      {/* Hero Section */}
      <header className="relative z-10 flex flex-col justify-center items-center text-center h-full px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-7xl font-extrabold text-cyan-400 drop-shadow-[0_0_25px_#00ffff]"
        >
          FutureVerse 2070
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-4 text-xl md:text-2xl text-gray-300 drop-shadow-[0_0_5px_#00ffff]"
        >
          The World You Imagine
        </motion.p>

        {/* Additional Taglines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-6 space-y-2"
        >
          <p className="text-cyan-300 text-lg md:text-xl drop-shadow-[0_0_15px_#00ffff] animate-pulse">
            🌌 Explore the technologies of tomorrow
          </p>
          <p className="text-purple-400 text-lg md:text-xl drop-shadow-[0_0_15px_#ff00ff] animate-pulse">
            🚀 Share your vision of 2070
          </p>
          <p className="text-pink-400 text-lg md:text-xl drop-shadow-[0_0_15px_#ff00ff] animate-pulse">
            🔮 Be part of the FutureVerse community
          </p>
        </motion.div>
      </header>
    </div>
  );
}
