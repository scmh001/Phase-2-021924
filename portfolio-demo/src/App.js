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
  const [ projectToEdit, setProjectToEdit ] = useState({})

  //👍 ~~~~GET REQUEST
  useEffect(() => {
    loadProjects()
  }, []) 

  const loadProjects = () => {
    fetch('http://localhost:4000/projects')
    .then(res => res.json())
    .then(data => setProjects(data))
  }

  //👍 ~~~~UPDATE STATES
  const updateProjectToEdit = (project) => {
    setProjectToEdit(project)
  }

  const updateDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }

  //👍 ~~PATCH REQUEST
  //🛑 needed in both ProjectListItem (for claps) and ProjectEditForm
  //🛑 params: fromProjectEditForm {...}
  const editProject = (fromProjectEditForm) => {

    fetch(`http://localhost:4000/projects/${fromProjectEditForm.id}`, {
			method: 'PATCH',
			body: JSON.stringify({
				...fromProjectEditForm,
				phase: parseInt(fromProjectEditForm.phase),
				claps: parseInt(fromProjectEditForm.claps)
			}),
			headers: {
				'content-type': 'application/json'
			}
		})
		.then(res => res.json())
		.then(data => {
			//🛑 set projects state
			setProjects(
        [...projects].map(el => {
          return el.id === fromProjectEditForm.id ? fromProjectEditForm : el
        })
      )
      //🛑 only do inside of fetch statement in case fetch fails
      setProjectToEdit({})
		})
   
  }

  //👍 ~~ FOR POST REQUEST IN PROJECTFORM.JS
  const addProject = (project) => {
    setProjects([...projects, project])
  }

  //👍 ~~~ FOR DELETE REQUEST IN PROJECTLISTITEM.JS
  const deleteProject = (project) => {
    //🛑 remove project from projects state
    setProjects(
      [...projects].filter(el => 
        project.id === el.id ? false : true
      )
    )
  }
  
  //~~~ JSX
  return (
    <div className={darkMode ? "App" : "App light"}>
      <Header handleClick={updateDarkMode} darkMode={darkMode} />
      <ProjectForm addProject={addProject} />
      <ProjectEditForm projectToEdit={projectToEdit} editProject={editProject}/>
      <ProjectList projects={projects} updateProjectToEdit={updateProjectToEdit} editProject={editProject} deleteProject={deleteProject} />
    </div>
  );
}


export default App;
