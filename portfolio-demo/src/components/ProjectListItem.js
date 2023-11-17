import { useState } from "react";
import { FaPencilAlt, FaTrash } from "react-icons/fa";

// ✅ 4. For the clap button, update the onClick event handler to send a PATCH request to save the updated claps in the database
// ✅ 4a. Send this information to App and include it in projects

// ✅ 5. Add a delete button to ProjectListItem
// ✅ 5a. Create an onClick event handler
// ✅ 5b. When clicked, use a fetch request to delete the project from the database
// ✅ 5c. Pass this information to App and remove the appropriate project from projects
function ProjectListItem({ project, editProject, updateProjectToEdit, deleteProject }) {
	let { id, name, about, image, claps, link, phase } = project;
	const [projectClaps, setProjectClaps] = useState(claps);

	const handleClap = () => {
		//🛑 patch request, callback function editProject in App.js
		editProject({
			...project,
			claps: project.claps + 1
		})
		setProjectClaps((prevProjectClaps) => prevProjectClaps + 1);
	};

	const handleDelete = () => {
		fetch(`http://localhost:4000/projects/${project.id}`, {
			method: 'DELETE'
		})
		.then(res => res.json())
		.then(() => deleteProject(project))
	}

	return (
		<li className="card">
			<figure className="image">
				<img src={image} alt={name} />
				{/* patch statement for claps in App.js */}
				<button onClick={handleClap} className="claps">
					👏{projectClaps}
				</button>
			</figure>
			<section className="details">
				<h4>{name}</h4>
				<p>{about}</p>
				<p>
					<a href={link}>Link</a>
				</p>
			</section>

			<footer className="extra">
				<span className="badge blue">Phase {phase}</span>
				<div className="manage">
					{/* edit button, update projectToEdit state in App.js */}
					<button onClick={() => updateProjectToEdit(project)}>
						<FaPencilAlt />
					</button>
					{/* delete button */}
					<button onClick={() => handleDelete()}>
						<FaTrash />
					</button>
				</div>
			</footer>
		</li>
	);
}

export default ProjectListItem;
