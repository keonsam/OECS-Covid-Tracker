import './App.css';
import Navbar from './components/navbar/Navbar';
import { useState } from 'react'

function App() {
  const [search, setSearch] = useState("")

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const handleSubmit = (e) => {
    console.log(search)
  }

  return (
    <div className="App">
      <Navbar searchValue={search} handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;
