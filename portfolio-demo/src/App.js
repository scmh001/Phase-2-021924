import Header from "./components/Header";
import Form from "./components/Form";
import ProjectList from "./components/ProjectList";
//random array, not a component that needs to be capitalized
import projects from "./projects"; 

function App() {
  return (
    <div>
      <Header />
      <Form />
      <ProjectList projects={projects} />
    </div>
  )
}

export default App;
