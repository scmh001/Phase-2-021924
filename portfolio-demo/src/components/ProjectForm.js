import { useState } from "react";
//✅ 2. Make the ProjectForm component a controlled component
//✅ 3. Handle submitting the form and update state in parent using inverse data flow
function ProjectForm({ addProject }) {
	//✅ 2a. Initialize state for all the form fields found in the component
	// const [name, setName] = useState('')
	// const [about, setAbout] = useState('')
	// const [phase, setPhase] = useState(null)
	// const [homepage, setHomepage] = useState('')
	// const [screenshot, setScreenshot] = useState('')

	const initForm = {
		name: "",
		about: "",
		phase: null,
		homepage: "",
		screenshot: "",
	};
	const [form, setForm] = useState(initForm);

	//✅ 2b. Add an onChange event to each field that will update state associated to the field that is interacted with
	//✅ 2c. Provide a value attribute to each form field that will return the associated piece of state
	const handleChange = (e) => {
		//e.target represents the input the user typed in
		//e.target.name is the 'name' in the input field THAT JUST HAPPENS to match with the keys in the form state 
		//e.target.value is the new value the user just typed into the input field

		let newForm = {...form} //creating copy of form state using destructuring
		newForm[e.target.name] = e.target.value //updating a value based on the target name
		setForm(newForm) //updating state


		// setForm({
		// 	...form, //deconstruct form state, thus creating a new object
		// 	[e.target.name]: e.target.value //overwrite the existing key/value pair with the target's
		// })
	};
	

	//✅ 2d. Add an onSubmit event handler to the form
	const handleSubmit = (e) => {
		e.preventDefault()
		let submitForm = {
			...form, 
			phase: parseInt(form.phase)
		}
		//✅ 3a. Use inverse data flow to include the new project in the projects state in App
		addProject(submitForm)
	}



	return (
		<section>
			<form onSubmit={handleSubmit} className="form" autoComplete="off">
				<h3>Add New Project</h3>

				<label htmlFor="name">Name</label>
				<input
					type="text"
					id="name"
					name="name"
					value={form.name}
					onChange={handleChange}
				/>

				<label htmlFor="about">About</label>
				<textarea
					id="about"
					name="about"
					value={form.about}
					onChange={handleChange}
				/>

				<label htmlFor="phase">Phase</label>
				<select name="phase" id="phase" value={form.phase} onChange={handleChange}>
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
					id="homepage"
					name="homepage"
					value={form.homepage}
					onChange={handleChange}
				/>

				<label htmlFor="image">Screenshot</label>
				<input
					type="text"
					id="screenshot"
					name="screenshot"
					value={form.screenshot}
					onChange={handleChange}
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
