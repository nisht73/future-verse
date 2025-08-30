import { useState } from "react";
import { motion } from "framer-motion";

export default function VisionForm({ onAddVision }) {
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");
  const [year, setYear] = useState(2070);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddVision({ author, text, year });
    setText("");
  };

  // Floating particle animation config
  const particleVariants = {
    float: {
      y: [0, -10, 0],
      transition: { yoyo: Infinity, duration: 2, ease: "easeInOut" },
    },
  };

  return (
    <div className="relative max-w-lg mx-auto">
      {/* Floating particles */}
      <motion.div
        className="absolute w-2 h-2 bg-cyan-400 rounded-full top-5 left-10 opacity-70"
        variants={particleVariants}
        animate="float"
      />
      <motion.div
        className="absolute w-2 h-2 bg-pink-400 rounded-full top-20 right-14 opacity-70"
        variants={particleVariants}
        animate="float"
      />
      <motion.div
        className="absolute w-2 h-2 bg-purple-400 rounded-full top-32 left-24 opacity-70"
        variants={particleVariants}
        animate="float"
      />

      {/* Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="relative z-10 mb-8 p-6 rounded-2xl bg-gradient-to-br from-purple-900/40 to-cyan-900/40 border border-cyan-500 shadow-[0_0_15px_#00ffff]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-bold text-cyan-400 mb-4 text-center">
          Share Your Vision
        </h3>

        {/* Name Input */}
        <input
          type="text"
          placeholder="Your name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full mb-3 p-3 rounded-xl bg-white/10 placeholder-gray-300 text-white border border-cyan-400 focus:border-pink-400 focus:outline-none transition-colors duration-300"
        />

        {/* Vision Textarea */}
        <textarea
          placeholder="Your vision..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full mb-3 p-3 rounded-xl bg-white/10 placeholder-gray-300 text-white border border-cyan-400 focus:border-pink-400 focus:outline-none transition-colors duration-300"
        />

        {/* Year Select */}
        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="w-full mb-4 p-3 rounded-xl bg-purple/10 text-white border border-cyan-400 focus:border-pink-400 focus:outline-none transition-colors duration-300 appearance-none"
        >
          {[2025, 2030, 2040, 2050, 2060, 2070].map((y) => (
            <option
              key={y}
              value={y}
              className="bg-gradient-to-br from-purple-900/40 to-cyan-900/40 text-black"
            >
              {y}
            </option>
          ))}
        </select>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px #ff00ff" }}
          whileTap={{ scale: 0.95 }}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-bold uppercase tracking-wide shadow-[0_0_15px_#00ffff]"
        >
          Post Vision
        </motion.button>
      </motion.form>
    </div>
  );
}
