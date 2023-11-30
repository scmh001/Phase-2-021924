import React from "react";

// ✅ 4. Add `NavLink`'s throughout the site.
// ✅ 4a. Add `NavLink`s in `Header`.
// ✅ 4b. In `Home` add `NavLink` to button `View All Projects`.  Direct it to `/projects`.
function Header({ updateDarkMode, darkMode }) {
	return (
		<header>
			<h1>
				<span className="logo">{"//"}</span>
				Project Showcase
			</h1>
			<button onClick={updateDarkMode}>{darkMode ? "Light Mode" : "Dark Mode"}</button>
			<a className="button">
				Home
			</a>
			<a className="button" >
				About
			</a>
			<a className="button" >
				New Project
			</a>
			<a className="button" >
				All Projects
			</a>
		</header>
	);
}

export default Header;
