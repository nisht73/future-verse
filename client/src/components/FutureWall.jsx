import { motion, AnimatePresence } from "framer-motion";

export default function FutureWall({ visions }) {
  if (!visions || visions.length === 0) {
    return (
      <p className="text-center text-gray-400 mt-6">
        No visions yet. Be the first to share your future!
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      <AnimatePresence>
        {visions.map((v, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="bg-gradient-to-br from-cyan-900/50 to-purple-900/50 p-6 rounded-2xl border border-cyan-400/50 shadow-[0_0_15px_#00ffff] hover:scale-105 transition-transform duration-300"
          >
            <p className="text-white text-lg mb-2 font-mono font-semibold tracking-wide drop-shadow-[0_0_10px_#00ffff]">
              {v.text}
            </p>
            <div className="flex justify-between text-sm text-cyan-300 mt-4 font-mono tracking-wide">
              <span>— {v.author || "Anonymous"}</span>
              <span>{v.year}</span>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
