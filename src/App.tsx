import { List } from "./components/list"
import React, { useState } from "react";

function App() {
  const [projects, setProjects] = useState<string[]>([])
  function handleAddProject() {
    setProjects([...projects, `Novo projeto ${Date.now()}`]);
  }
  return (
    <>
      <header>Conteúdo da Home</header>
      <main>
        <ul>
          {projects.map(item => <List key={item}>{item}</List>)}
        </ul>
        <button onClick={handleAddProject}>Adiciona</button>
      </main>
    </>
  )
}

export default App
