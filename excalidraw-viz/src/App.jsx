import { useEffect, useState } from "react";
import "@excalidraw/excalidraw/index.css";
import { buildScene } from "./scene";

function App() {
  const [Excalidraw, setExcalidraw] = useState(null);

  useEffect(() => {
    import("@excalidraw/excalidraw").then((mod) => {
      setExcalidraw(() => mod.Excalidraw);
    });
  }, []);

  if (!Excalidraw) {
    return (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh", fontFamily: "sans-serif", color: "#666" }}>
        Loading Excalidraw…
      </div>
    );
  }

  const initialData = {
    elements: buildScene(),
    appState: {
      viewBackgroundColor: "#ffffff",
      gridSize: null,
      theme: "light",
    },
  };

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Excalidraw
        initialData={initialData}
        UIOptions={{
          canvasActions: {
            loadScene: true,
            export: { saveFileToDisk: true },
          },
        }}
      />
    </div>
  );
}

export default App;
