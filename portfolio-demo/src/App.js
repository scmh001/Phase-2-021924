import { useState } from 'react'
import Header from "./components/Header";
import ProjectList from "./components/ProjectList";
import ProjectForm from "./components/ProjectForm";
import projectsData from './projects'

//✅ 1. Create a ProjectForm component that will create a new project
function App() {

  const [darkMode, setDarkMode] = useState(true)
  const [ projects, setProjects ] = useState(projectsData)
  const [phaseState, setPhase] = useState(0)

  const updatePhase = (phaseNumber) => {
		setPhase(phaseNumber)
	}

  const updateDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }

  const addProject = (project) => {
    setProjects([...projects, project])
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
