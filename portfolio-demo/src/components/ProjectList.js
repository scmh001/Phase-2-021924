import { useState, useEffect } from 'react'
import ProjectListItem from "./ProjectListItem";

function ProjectList({ projects }) {

	const [ searchQuery, setSearchQuery ] =  useState('')
	const [phaseState, setPhase] = useState(0)
	// ✅ 4a. Create a state for filteredProjects in ProjectList.js
	// 💡 what should we set filteredProjects initial state to?
	const [filteredProjects, setFilteredProjects] = useState(projects)

	// ✅ 4b. Create a useEffect with phaseState, searchQuery and projects in the dependency array
	//💡 why would we want to include projects in the dependancy array?
	useEffect(() => {
		// ✅ 4c. Filter through projects based on phaseState and searchQuery inside the useEffect
		const newFilter = projects.filter(
			(project) => {
				return (
					(phaseState === 0 || project.phase === phaseState) &&  
					(searchQuery === '' || project.name.toLowerCase().includes(searchQuery.toLowerCase())) 
				)
			}
		)
		// ✅ 4d. Set filteredProjects to new result
		setFilteredProjects(newFilter)
	}, [searchQuery, phaseState, projects])

	return (
		<section>
			<h2>Project List</h2>
			<div className="filter">
				<button onClick={() => setPhase(0)}>All</button>
				<button onClick={() => setPhase(5)}>Phase 5</button>
				<button onClick={() => setPhase(4)}>Phase 4</button>
				<button onClick={() => setPhase(3)}>Phase 3</button>
				<button onClick={() => setPhase(2)}>Phase 2</button>
				<button onClick={() => setPhase(1)}>Phase 1</button>
			</div>
			<input
				type="text"
				placeholder="Search..."
				name="search"
				value={searchQuery}
				onChange={(e) => setSearchQuery(e.target.value)}
			/>
			<ul className="cards">
				{filteredProjects.map((project) => (
					<ProjectListItem key={project.id} project={project} />
				))}
			</ul>
		</section>
	);
}

export default ProjectList;
