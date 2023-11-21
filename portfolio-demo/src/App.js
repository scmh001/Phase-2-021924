import { useState } from 'react'
import Header from "./components/Header";
import ProjectList from "./components/ProjectList";
import ProjectForm from "./components/ProjectForm";
import projectsData from './projects'

//✅ 1. Create a ProjectForm component that will create a new project
function App() {

  const [darkMode, setDarkMode] = useState(true)
  const [phaseState, setPhase] = useState(0)
  const [projects, setProjects] = useState(projectsData)

  const updatePhase = (phaseNumber) => {
		setPhase(phaseNumber)
	}

  const updateDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }

  const addProject = (newProject) => {
    console.log(newProject)
    //...projects, destructuring allows us to create new array with elements from destructured array
    setProjects([...projects, newProject])
  }

  return (
    <div className={darkMode ? "App" : "App light"}>
      <Header handleClick={updateDarkMode} darkMode={darkMode} />
      <ProjectForm addProject={addProject} />
      <ProjectList phaseState={phaseState} updatePhase={updatePhase} projects={projects}/>
    </div>
  );
}


export default App;
