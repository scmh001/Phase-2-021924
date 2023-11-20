import { useState } from "react";

//✅ 2. Make the ProjectForm component a controlled component
//✅ 3. Handle submitting the form and update state in parent using inverse data flow
function ProjectForm({ addProject }) {
	//✅ 2a. Initialize state for all the form fields found in the component
	
	//🛑 bad, repetitive, not dynamic way
	// const [ about, setAbout ] = useState('')
	// const [ name, setName ] = useState('')
	// const [ phase, setPhase ] = useState(0)
	// const [ link, setLink ] = useState('')
	// const [image, setImage] = useState('')

	//💚 our empty form initially
	const formOutline = {
		name: "",
		about: "",
		link: "",
		image: "",
		phase: 0,
		claps: 0,
	};

	//🛑 form state initialized to empty form outline
	const [form, setForm] = useState(formOutline);

	//✅ 2b. Add an onChange event to each field that will update state associated to the field that is interacted with
	//✅ 2c. Provide a value attribute to each form field that will return the associated piece of state
	const handleChange = (e) => {
		setForm({
			...form,
			//🛑  update input field (e.target.name) with new value (e.target.value)
			[e.target.name]: e.target.value,
		});
	};

	//✅ 2d. Add an onSubmit event handler to the form
	const handleSubmit = (e) => {
		e.preventDefault(); //🛑 we still need this in synthetic events

		//💚 more dynamic way:
		// addProject({
		// 	name,  //🛑 no curly braces, because not in JSX
		// 	about, //🛑 shortcut for about: about when both key/variable is same name
		// 	link: link,
		// 	image: image,
		// 	phase: parseInt(phase),
		// 	claps: 0
		// })

		//🛑 bad, not dynamic way
		// setAbout('')
		// setName('')
		// setPhase(0)
		// setLink('')
		// setImage('')

		//✅ 3a. Use inverse data flow to include the new project in the projects state in App
		addProject(form); 
		//🛑 reset form state
		setForm(formOutline);
	};


	
	return (
		<section>
			<form
				className="form"
				autoComplete="off"
				onSubmit={(e) => handleSubmit(e)}
			>
				<h3>Add New Project</h3>

				<label htmlFor="name">Name</label>
				<input
					type="text"
					id="name"
					name="name"
					value={form.name}
					onChange={(e) => handleChange(e)}
				/>

				<label htmlFor="about">About</label>
				<textarea
					id="about"
					name="about"
					value={form.about}
					onChange={(e) => handleChange(e)}
				/>

				<label htmlFor="phase">Phase</label>
				<select
					name="phase"
					id="phase"
					value={form.phase}
					onChange={(e) => handleChange(e)}
				>
					<option value="">Pick a Phase</option>
					<option value="1">Phase 1</option>
					<option value="2">Phase 2</option>
					<option value="3">Phase 3</option>
					<option value="4">Phase 4</option>
					<option value="5">Phase 5</option>
				</select>

				<label htmlFor="link">Project Homepage</label>
				<input
					type="text"
					id="link"
					name="link"
					value={form.link}
					onChange={(e) => handleChange(e)}
				/>

				<label htmlFor="image">Screenshot</label>
				<input
					type="text"
					id="image"
					name="image"
					value={form.image}
					onChange={(e) => handleChange(e)}
				/>

				<button type="submit">Add Project</button>
			</form>
		</section>
	);
}

export default ProjectForm;


/*

controlled form process

1. make state that represents form values (and ultimately the structure of what gets added to the database)
2. add value to each JSX input so that it displays what is in state ( value = {formState.name} )
3. create onChange callback to dynamically update form state { ...form, [e.target.name]: e.target.value }
4. add onChange to every input field
5. create onSubmit callback that adds form values to appropriate place, reset form (state)
- don't forget your e.preventDefault()

*/