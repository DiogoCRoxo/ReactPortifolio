import IntroFile from "./components/Intro/IntroFile";
import Portifolio from "./components/Portifolio/Portifolio";
import Testimonials from "./components/Testimonials/Testimonials";
import TopBar from "./components/TopBar/TopBar";
import Contact from "./components/Contact/Contact";
import Works from "./components/Works/Works";
import "./App.scss";

function App() {
	return (
		<div className="App">
			<TopBar />
     
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
