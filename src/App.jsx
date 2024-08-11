import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Root from './Root.jsx';
import './App.css'

function App() {
  return (
    <div>
      <NavBar />
      <Root />
    </div>
  )
}

export default App;
