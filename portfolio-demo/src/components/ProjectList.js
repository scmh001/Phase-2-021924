import { useState } from "react";
import ProjectListItem from "./ProjectListItem";

//✅ 4. Create a search by name filter in ProjectList
function ProjectList({ projects, phaseState, updatePhase }) {
	//✅ 4a. Create state for the searchQuery in ProjectList
	//✅ 4b. Create a controlled form for the search query
	//✅ 4c. On search query change update the searchQuery

	const [searchQuery, setSearchQuery] = useState("");
	const filteredProjects = projects.filter(
		//🛑 check if phase matches: phaseState === 0 || project.phase === phaseState AND
		//🛑 check if query matches: searchQuery === '' || project.name.toLowerCase().includes(searchQuery.toLowerCase())
		(project) => {
			//🛑 return (
			// 	(phaseState === 0 || project.phase === phaseState) &&
			// 	(searchQuery === '' || project.name.toLowerCase().includes(searchQuery.toLowerCase()))
			// )
			if (phaseState === 0 || project.phase === phaseState) {
				if (project.name.toLowerCase().includes(searchQuery.toLowerCase())) {
					return true;
				} else {
					return false;
				}
			} else {
				return false;
			}
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
