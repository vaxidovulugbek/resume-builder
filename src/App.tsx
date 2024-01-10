import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
	const [darkTheme, setDarkTheme] = useState(false);
	return (
		<div className={darkTheme ? "App dark-theme" : "App"}>
			<Header setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
			<h1 className="text-6xl text-tahiti bg-midnight font-bold">hello world tt</h1>
		</div>
	);
}

export default App;
