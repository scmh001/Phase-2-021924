import { useState } from 'react'
import Header from "./components/Header";
import ProjectList from "./components/ProjectList";
import ProjectForm from "./components/ProjectForm";
import projects from "./projects.js";

//✅ 1. create a dark mode button in App
function App() {
	//✅ 1a. initialize darkMode state
	//darkMode is the variable name for the variable we're creating
	const [darkMode, setDarkMode] = useState(true)
	//✅ 1b. callback to toggle and set dark mode state
	function handleClick(){
		//get opposite of what darkMode currently is: !darkMode
		//use prev to access previous version of state
		//where current version is the updated state
		setDarkMode(prev => !prev)
		//darkMode = true 🛑 NO. doesn't cause re-render, bad for React
	}

	return (
		<div className={darkMode ? "App" : "App light"}>
			<Header />
			{/*✅ 1c. add click event to button*/}
			<button onClick={handleClick}>Light Mode</button>
			<ProjectForm />
			<ProjectList projects={projects} />
		</div>
	);
}
export default App;
