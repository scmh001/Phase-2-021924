import { useState } from "react";
import ProjectListItem from "./ProjectListItem";

//✅ 3. implement filter by phase feature
function ProjectList({ projects }) {
	//✅ 3b. initialize state to represent phase to filter by
	//if we try to use some function that requires phase to be a number, it will give us an error if phase is null
	const [phase, setPhase] = useState(0); //0 is going to represent All, can also use -1

	//✅ 3d. filter projects by phase
	const filteredProjects = projects.filter((el) => {
		//if phase is 1-5 OR
		//if phase is 0
		//keep that project in filteredProjects
		//el.phase is coming from our data
		//phase is our state
		return el.phase === phase || phase === 0;
	});

	const handleClick = (phase) => {
		setPhase(phase)  //re-render code again. this is how filterd projects keeps getting updated //setPhase causes site to re-render
	}

	const filterPractice = () => {
		//array.filter((el) => { conditional })
		//conditional returns true: keep in array
		//conditional returns false: omit from array

		let nums = [1, 5, 3, 7, 4, 1, 6];
		//filter out numbers greater than 5
		let greaterThanFive = nums.filter((el) => {
			return el > 5; //return true or false (NOT A TRUTHY OR FALSEY VALUE)
		});

		let names = [
			"Thomas",
			"Nick",
			"Statz",
			"Meagan",
			"Nick",
			"Alex",
			"Nick",
			"Sean",
			"Dorahely",
			"Chris",
			"Jennipher",
			"Ibrahima",
			"Elijah",
			"Evan",
		];
		let notNicks = names.filter((el) => {
			return el !== "Nick";
		});
	};

	console.log("i am rendering")

	filterPractice();
	return (
		<section>
			<h2>Project List</h2>
			<div className="filter">
				{/*✅ 3a. create buttons to represent each phase to filter by */}
				{/*✅ 3c. add onclick events to each button to update phase state */}
				<div className="filter">
					{/*DO NOT pass in a function invocation in event handlers or it will cause infinite re-renders*/}
					{/* onClick anonymous function is not returning anything, it is just invoking handleClick*/}
					{/* we need to wrap handleClick in anonymous function beacuse we need to pass in a parameter (there are other cases where we don't pass in a parameter so we can just pass in the function definition like so: onClick={handleClick} - note we are not invoking handleClick*/}
					<button onClick={() => handleClick(0)}>All</button>
					<button onClick={() => handleClick(5)}>Phase 5</button>
					<button onClick={() => handleClick(4)}>Phase 4</button>
					<button onClick={() => handleClick(3)}>Phase 3</button>
					<button onClick={() => handleClick(2)}>Phase 2</button>
					{ /* can also directly update phase state in click event */ }
					<button onClick={() => setPhase(1)}>Phase 1</button>
				</div>
			</div>
			<ul className="cards"> 
				{filteredProjects.map((project) => (
					<ProjectListItem key={project.id} project={project} />
				))}
			</ul>
		</section>
	);
}

export default ProjectList;

// used filtered projects