import React from 'react'

function Header({ handleClick, darkMode, setDarkMode }) {
  return (
    <header>
        <h1><span className="logo">{'//'}</span>Portfolio Showcase</h1>
        {/* ✅ 2c.  Inside the `Header` component, invoke the callback function to update state in `App` */}
        <button onClick={handleClick}>{ darkMode ? "Light Mode" : "Dark Mode" }</button>
    </header>
  )
}

export default Header