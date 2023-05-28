import IntroFile from "./components/Intro/IntroFile";
import Portifolio from "./components/Portifolio/Portifolio";
import Testimonials from "./components/Testimonials/Testimonials";
import TopBar from "./components/TopBar/TopBar";
import Contact from "./components/Contact/Contact";
import Works from "./components/Works/Works";
import "./App.scss";
import { useState } from "react";
import Menu from "./components/Menu/Menu";

function App() {
	const [menuOpen, setMenuOpen] = useState(false)
	return (
		<div className="App">
			<TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<div className="sections">
				<IntroFile />
				<Portifolio />
				<Works />
				<Testimonials />
				<Contact />
			</div>
		</div>
	);
}

export default App;
