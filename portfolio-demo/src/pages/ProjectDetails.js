import { useEffect, useState } from 'react'
import ProjectListItem from './ProjectListItem'

function ProjectDetails() {
  // ✅ 5b. Use a fetch request in `ProjectDetails` to access a single project.  Use `useParams` to access the id. 
  
  const [ project, setProject ] = useState({})

  return (
    <div >
      <ProjectListItem project={project} />
    </div>
  )
}

export default ProjectDetails