import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

import Landing from "./components/Landing";
import Timeline from "./components/Timeline";
import VisionForm from "./components/VisionForm";
import FutureWallPage from "./pages/FutureWallPage";

const API_URL = "http://localhost:5000/api/visions";

export default function App() {
  const [visions, setVisions] = useState([]);

  useEffect(() => {
    axios.get(API_URL).then((res) => setVisions(res.data));
  }, []);

  const addVision = async (data) => {
    const res = await axios.post(API_URL, data);
    setVisions([res.data, ...visions]); // instant update
  };

  return (
    <Router>
      <main className="font-sans bg-black min-h-screen text-white">
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Landing />
                <section className="max-w-5xl mx-auto p-8">
                 <Timeline visions={visions} />
                  <VisionForm onAddVision={addVision} />
                </section>
              </>
            }
          />

          {/* Future Wall Page */}
          <Route
            path="/futurewall"
            element={<FutureWallPage visions={visions} />}
          />
        </Routes>
      </main>
    </Router>
  );
}
