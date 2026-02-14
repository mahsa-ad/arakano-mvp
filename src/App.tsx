import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layouts from "./pages/Layouts";
import Customize from "./pages/Customize";
import LayoutsArchive from "./pages/LayoutsArchive";
import ARPreview from "./pages/ARPreview";


function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/layout/:id" element={<Layouts />} />
        <Route path="/layouts" element={<LayoutsArchive />} />
        <Route path="/customize/:id" element={<Customize />} />
        <Route path="/ar/:id" element={<ARPreview />} />

      </Routes>
  );
}

export default App;





