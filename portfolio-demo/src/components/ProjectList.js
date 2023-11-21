import { useState } from "react";
import ProjectListItem from "./ProjectListItem";

//✅ 4. Create a search by name filter in ProjectList
function ProjectList({ projects, phaseState, updatePhase }) {
	//✅ 4a. Create state for the searchQuery in ProjectList
	//✅ 4b. Create a controlled form for the search query
	//✅ 4c. On search query change update the searchQuery

	const [search, setSearch] = useState('')

	const handleChange = (e) => {
		setSearch(e.target.value)
	}

	//filter by both phaseState and search
	//&& project.name contains search ? 
	const filteredProjects = projects.filter(
		(project) => {
			return (project.phase === phaseState || phaseState === 0) && 
			//check if search is (exclusively) a substring of project.name
			(project.name.toLowerCase().includes(search.toLowerCase()))
		}
	);


	return (
		<section>
			<h2>Project List</h2>
			<div className="filter">
				<button onClick={() => updatePhase(0)}>All</button>
				<button onClick={() => updatePhase(5)}>Phase 5</button>
				<button onClick={() => updatePhase(4)}>Phase 4</button>
				<button onClick={() => updatePhase(3)}>Phase 3</button>
				<button onClick={() => updatePhase(2)}>Phase 2</button>
				<button onClick={() => updatePhase(1)}>Phase 1</button>
			</div>
			<input
				type="text"
				placeholder="Search..."
				name="search"
				value={search}
				onChange={handleChange}
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
