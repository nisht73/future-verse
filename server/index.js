import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connect
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error(err));

// Vision schema
const visionSchema = new mongoose.Schema({
  author: { type: String, required: true },
  text: { type: String, required: true },
  year: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now }
});

const Vision = mongoose.model("Vision", visionSchema);

// Routes
app.get("/api/visions", async (req, res) => {
  const visions = await Vision.find().sort({ timestamp: -1 }).limit(100);
  res.json(visions);
});

app.post("/api/visions", async (req, res) => {
  try {
    const vision = new Vision(req.body);
    await vision.save();
    res.status(201).json(vision);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));