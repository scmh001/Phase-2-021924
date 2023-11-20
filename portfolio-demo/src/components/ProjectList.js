import React from "react";
import Project from "./Project"; //child component

//props is a object containing key value pairs
//where each key is the name of the prop
//and the value is the value of the prop
//props {projectsProp: [{...}, {...}, {...}, ...]}

//props comes in as object, destructure to access keys directly
//using: { keyOne, keyTwo, keyThree, ... }

//function ProjectList(props) {
function ProjectList({ projects }) {
	return (
		<ul>
			<h3>ProjectList</h3>

			{ 
				/* V1: hardcode each component

				<Project project={project[0]} />
				<Project project={project[1]} />

				*/

 
				/* V2: render as array
					[
						<Project project={project[0]} />, 
						<Project project={project[1]} />,
						<Project project={project[2]} />,
						<Project project={project[3]} />, 
						...
					]
				*/
			}

			{ 	// V3: use .map to dynamically render
				projects.map(el => {
					return <Project project={el} />
				})
				
			}
		</ul>
	);
}

export default ProjectList;
