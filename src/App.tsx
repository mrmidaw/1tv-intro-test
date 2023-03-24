import { Route, Routes } from "react-router-dom";

import Layout from "./layout/Layout";
import Main from "./pages/allVideos/AllVideos";
import Home404 from "./pages/home404/Home404";
import SelectedVideo from "./pages/selectedVideo/SelectedVideo";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route path="/" element={<Main />} />
				<Route path="/video/:id" element={<SelectedVideo />} />
				<Route path="*" element={<Home404 />} />
				<Route path="/404" element={<Home404 />} />
			</Route>
		</Routes>
	);
}

export default App;
