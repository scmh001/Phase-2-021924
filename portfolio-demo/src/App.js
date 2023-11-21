import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from "./pages/Header";
// ✅ 3. Update `App.js` to include `Header` on every page.
// ✅ 3a. Import `Outlet` from `react-router-dom`.
function App() {

  const [darkMode, setDarkMode] = useState(true)

  const updateDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }

  return (
    <div className={darkMode ? "App" : "App light"}>
      <Header updateDarkMode={updateDarkMode} darkMode={darkMode} />
      {/* ✅ 3b. Include the `Outlet` component in the `JSX`. */}
      <Outlet />
    </div>
  );
}


export default App;
