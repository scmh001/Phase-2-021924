import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import ProjectListItem from './ProjectListItem'

function ProjectDetails() {
  // ✅ 5b. Use a fetch request in `ProjectDetails` to access a single project.  Use `useParams` to access the id. 
  
  const { id } = useParams()
  const [ project, setProject ] = useState({})
  
  useEffect(() => {
    fetch(`http://localhost:4000/projects/${id}`)
    .then(res => res.json())
    .then(data => setProject(data))
  }, [])

  return (
    <div >
      <ProjectListItem project={project} />
    </div>
  )
}

export default ProjectDetails