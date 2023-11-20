import {useState} from 'react'

//TODO: when user clicks on clap button, increment by one

//put state in view -> onClick update state -> re-renders view
function ProjectListItem({ project }) {
	let { name, about, image, initClaps, link, phase } = project;

	//✅ 2b. create state for claps
	//set state to claps from database
	const [claps, setClaps] = useState(project.claps)


	//✅ 2c. create callback to update clap state on button click
	// function handleClick {}
	const handleClick = () => {
		setClaps(prev => prev + 1)
	}
	return (
		<li className="card">
			<figure className="image">
				<img src={image} alt={name} />
				{ /*✅ 2a. create a clap button */ }
				{ /*✅ 2d. attach an event handler to the button */ }
				<button onClick={handleClick} className="claps">👏{claps}</button>
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
			</footer>
		</li>
	);
}

export default ProjectListItem;
