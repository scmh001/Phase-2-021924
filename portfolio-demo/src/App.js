import { useState } from "react";
import Header from "./components/Header";
import ProjectList from "./components/ProjectList";
import ProjectForm from "./components/ProjectForm";

// ✅ 1. Add a button to our App that will use json-server to fetch `projects.js` and store them in state 

// ✅ 2. Use inverse data flow to implement Light-Dark mode
// ✅ 2a. Move the dark mode button to `Header`
// ✅ 2b. Create a callback function that updates `isDarkMode` and pass the callback function as a prop to the `Header` component

function App() {
	const [darkMode, setDarkMode] = useState(true);
	// ✅ 1a. Create a state for projects array
	//💡 what should we intialize projects state with
	//🛑 has to be [] because we call .filter on projects in ProjectList.js
	const [projects, setProjects] = useState([]);

	const [phaseState, setPhase] = useState(0);

	// ✅ 3b. Write a callback function inside the App component:
	// ✅ - pass the callback function down as a prop to `ProjectList`
	function updatePhase(phaseNumber) {
		setPhase(phaseNumber);
	}

	const updateDarkMode = () => {
		setDarkMode((prevDarkMode) => !prevDarkMode);
	};

	const loadProjects = () => {
		fetch("http://localhost:4000/projects")
			.then((res) => res.json())
			//🛑 setProjects causes view to re-render
			.then((data) => setProjects(data));
	};

	return (
		<div className={darkMode ? "App" : "App light"}>
			<Header handleClick={updateDarkMode} darkMode={darkMode} />
			<ProjectForm />
			{/* ✅ 1b. Add a button 'Load Projects' to `App` */}
			{/* ✅ 1c. Add a 'click' event to the button */}
			{/* ✅ 1d. When the button is clicked, make a fetch request to "http://localhost:4000/projects" and set the `projects` state to the value returned by the response */}
			<button onClick={loadProjects}>Load Projects</button>
			<ProjectList
				phaseState={phaseState}
				updatePhase={updatePhase}
				projects={projects}
			/>
		</div>
	);
}

export default App;

/*
inverse flow

1. parent component
- create state
- create callback that updates state

2. parent -> child
- pass down state
- pass down callback

3. child -> parent
- child triggers callback (through an event)
- results in setState in parent
- results in a state change -> re-render
*/
