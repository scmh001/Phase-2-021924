function ProjectEditForm() {

	// ✅ 3. Submit the edit project form and make a PATCH request
	// ✅ 3a. In App create a function that executes the PATCH request.
	// ✅ 3b. In App update projects with the revised project and reset projectToEdit.
	// ✅ 3c. Pass this function down to ProjectEditForm

	return (
		<form className="form" autoComplete="off" style={{"display": "flex"}}>
			<h3>Edit Project</h3>

			<label htmlFor="name">Name</label>
			<input
				type="text"
				id="name"
				name="name"
			/>

			<label htmlFor="about">About</label>
			<textarea
				id="about"
				name="about"
			/>

			<label htmlFor="phase">Phase</label>
			<select
				name="phase"
				id="phase"
			>
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
			/>

			<label htmlFor="image">Screenshot</label>
			<input
				type="text"
				id="image"
				name="image"
			/>

			<button type="submit">Update Project</button>
		</form>
	);
}

export default ProjectEditForm;
