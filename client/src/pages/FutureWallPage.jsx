
import FutureWall from "../components/FutureWall";


export default function FutureWallPage({ visions }) {
  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-6 text-cyan-400">
        🚀 The Future Wall
      </h1>
      <FutureWall visions={visions} />
    </div>
  );
}
