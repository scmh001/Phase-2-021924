import { useState, useEffect } from 'react'
import Header from "./components/Header";
import ProjectList from "./components/ProjectList";
import ProjectForm from "./components/ProjectForm";
import ProjectEditForm from './components/ProjectEditForm';

// ✅ 1. Create a ProjectEditForm component
function App() {

  // ✅ 2. Create state in App to represent the project to edit
  // ✅ 2a. Add a button to ProjectListItem that, when clicked on, will:
  // ✅ - update said state with the appropriate project object
  // ✅ - display the ProjectEditForm with the appropriate data.
  const [darkMode, setDarkMode] = useState(true)
  const [ projects, setProjects ] = useState([])

  useEffect(() => {
    loadProjects()
  }, []) 

  const loadProjects = () => {
    fetch('http://localhost:4000/projects')
    .then(res => res.json())
    .then(data => setProjects(data))
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
      <ProjectEditForm />
      <ProjectList projects={projects}  />
    </div>
  );
}


export default App;
