import React from 'react'

function Filter({ handleClick }) {
  return (
    <div> className="filter"


        <button onClick={() => handleClick(0)}>All</button>
        <button onClick={() => handleClick(5)}>Phase 5</button>
        <button onClick={() => handleClick(4)}>Phase 4</button>
        <button onClick={() => handleClick(3)}>Phase 3</button>
        <button onClick={() => handleClick(2)}>Phase 2</button>
        <button onClick={() => handleClick(1)}>Phase 1</button>
        
    </div>
  )
}


export default Filter