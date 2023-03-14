import Home404 from "./pages/home404/Home404";
import Main from "./pages/main/Main";
import SelectedVideo from "./pages/selectedVideo/SelectedVideo";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/video/:id" element={<SelectedVideo />} />
      <Route path="*" element={<Home404 />} />
      <Route path="/404" element={<Home404 />} />
    </Routes>
  );
}

export default App;
