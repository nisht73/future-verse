import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const years = [2025, 2030, 2040, 2050, 2060, 2070];

export default function Timeline({ visions }) {
  const [selectedYear, setSelectedYear] = useState(null);

  // Filter visions for selected year
  const filteredVisions = selectedYear
    ? visions.filter((v) => Number(v.year) === Number(selectedYear))
    : [];

  return (
    <div className="mb-16">
      <h2 className="text-3xl text-cyan-400 font-bold mb-6 text-center drop-shadow-[0_0_10px_#00ffff]">
        Explore the Future
      </h2>

      {/* Timeline */}
      <div className="relative flex justify-between items-center max-w-5xl mx-auto">
        {/* Neon Line */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 opacity-40 -translate-y-1/2 rounded-full"></div>

        {years.map((y) => (
          <motion.div
            key={y}
            className="relative z-10 cursor-pointer"
            onClick={() => setSelectedYear(y)}
            whileHover={{ scale: 1.3 }}
            animate={{
              scale: selectedYear === y ? 1.5 : 1,
              textShadow:
                selectedYear === y
                  ? "0 0 15px #ff00ff, 0 0 25px #00ffff"
                  : "none",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Neon Circle */}
            <div
              className={`w-8 h-8 rounded-full border-2 ${
                selectedYear === y
                  ? "border-pink-400 bg-pink-400/50 shadow-[0_0_15px_#ff00ff]"
                  : "border-cyan-400 bg-cyan-400/30 shadow-[0_0_10px_#00ffff]"
              } flex items-center justify-center text-white font-bold`}
            >
              {y}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Display Visions */}
      {selectedYear && (
        <div className="mt-8 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence>
            {filteredVisions.length > 0 ? (
              filteredVisions.map((v) => (
                <motion.div
                  key={v._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="p-4 rounded-2xl bg-gradient-to-br from-purple-900/40 to-cyan-900/40 border border-cyan-400 shadow-[0_0_15px_#00ffff]"
                >
                  <p className="text-white text-lg mb-2">“{v.text}”</p>
                  <div className="flex justify-between text-sm text-cyan-300 mt-2">
                    <span>— {v.author || "Anonymous"}</span>
                    <span>{v.year}</span>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-gray-400 col-span-full text-center"
              >
                No visions for {selectedYear} yet.
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
} 