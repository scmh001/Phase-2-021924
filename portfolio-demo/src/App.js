import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from "./components/Header";
//all pages to be used as routes
import Home from './pages/Home'
import About from './pages/About'
import CreateProject from './pages/CreateProject'
import EditProject from './pages/EditProject'
import ProjectDetails from './pages/ProjectDetails'
import ProjectsPage from './pages/ProjectsPage'

function App() {

  const [darkMode, setDarkMode] = useState(true)

  const updateDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }

  //✅ 2. Creater a Router tree in `App.js` with the routes in the README
  return (
    <div className={darkMode ? "App" : "App light"}>
      {/* ✅ 3. Add `Link`s and `NavLink`s in `Header` for the new routes */}
      {/* ✅ 3a. Include a `Link` on button `View All Projects` in `Home` that navigates to `/projects` */}
      {/* ✅ 3b. In `ProjectsPage` replace `<CreateProjectForm />` with a `Link` to the appropriate route */}
      <Header updateDarkMode={updateDarkMode} darkMode={darkMode} />

      <Routes>
      <Route path="/projects/:id/edit" element={<EditProject />} />

        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<ProjectsPage  />} />
        <Route path="/new" element={<CreateProject />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}


export default App;
