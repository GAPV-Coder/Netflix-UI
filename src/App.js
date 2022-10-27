import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Netflix from "./pages/Netflix/Netflix";
import Signup from "./pages/Signup/Signup";
import Player from "./pages/Player/Player";
import Movies from "./pages/Movies/Movies";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/login" element={<Login />} />
				<Route exact path="/signup" element={<Signup />} />
				<Route exact path="/player" element={<Player />} />
				<Route exact path="/movies" element={<Movies />} />
				<Route exact path="/" element={<Netflix />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
