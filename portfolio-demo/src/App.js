import { useState, useEffect } from 'react'
import Header from "./components/Header";
import ProjectList from "./components/ProjectList";
import ProjectForm from "./components/ProjectForm";

// ✅ 2. Implement useEffect in App component to load projects
// ✅ 2a. Import the useEffect hook from the React library
function App() {

  const [darkMode, setDarkMode] = useState(true)
  const [ projects, setProjects ] = useState([])

  // ✅ 2b. Use useEffect and make a GET request using the fetch method
  // ✅ 2c. Update projects state to the response from the server
  // ✅ 3. Demonstrate the order of operations between rendering a component and running the side effect
  // ✅ - Place a console.log() inside the App component as well as the useEffect method
  // ✅ - Open up the devtools to observe when each phase of the component will
  // ✅ 4. Demonstrate useEffect dependency array with phaseState, searchQuery, and projects in ProjectList.js occur
  useEffect(() => {
    loadProjects()
  }, []) //🛑 run without dependency array to show infinite loop

  const updateDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }

  const loadProjects = () => {
    fetch('http://localhost:4000/projects')
    .then(res => res.json())
    .then(data => setProjects(data))
  }

  const addProject = (project) => {
    setProjects([...projects, project])
  }
  
  return (
    <div className={darkMode ? "App" : "App light"}>
      <Header handleClick={updateDarkMode} darkMode={darkMode} />
      <ProjectForm addProject={addProject} />
      <ProjectList projects={projects}/>
    </div>
  );
}


export default App;
