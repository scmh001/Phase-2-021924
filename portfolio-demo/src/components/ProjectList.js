import ProjectListItem from "./ProjectListItem";

//✅ 3. implement filter by phase feature
function ProjectList({ projects }) {
	//✅ 3b. initialize state to represent phase to filter by

	//✅ 3d. filter projects by phase

	return (
		<section>
			<h2>Project List</h2>
			<div className="filter">
				{/*✅ 3a. create buttons to represent each phase to filter by */}
				{/*✅ 3c. add onclick events to each button to update phase state */}
			</div>
			<ul className="cards">
				{projects.map((project) => (
					<ProjectListItem key={project.id} project={project} />
				))}
			</ul>
		</section>
	);
}

export default ProjectList;
