import React from 'react';
//import logo from './logo.svg';
//https://stackoverflow.com/questions/69843615/switch-is-not-exported-from-react-router-dom
//https://www.w3schools.com/react/react_router.asp
import { BrowserRouter as Router,   Routes,Route, Link } from "react-router-dom";
//Routes instead of Switch from v6
//elements instead of component
//CSS or CSS-in-JS (if you prefer inline styles or styled-components).
import './App.css';
import './Navbar.css';
import Header from './components/Header';
import DarkMode from "./components/DarkMode";
import Counter from './components/Counter';
import Timer from './components/Timer';
import LibraryComponents from './components/LibraryComponents';
import FluidForm from './components/FluidForm';
import FluidUpload from './components/FluidUpload';
import AxiosCall from './components/AxiosCall';
function App() {
  return (
    <div className="App">
       <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/library-components">Library Components</Link>
          </li>
          <li>
            <Link to="/fluid-form">Fluid Form</Link>
          </li>
          <li>
            <Link to="/darkmode">Darkmode</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/timer">timer</Link>
          </li>
          <li>
            <Link to="/fluid-upload">Upload</Link>
          </li>
          <li>
            <Link to="/axios-call">Axios Call</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/"  element={<Header/>} />
        <Route path="/library-components" element={<LibraryComponents/>} />
        <Route path="/fluid-form" element={<FluidForm/>} />
        <Route path="/darkmode" element={<DarkMode/>} />
        <Route path="/counter" element={<Counter/>} />
        <Route path="/timer" element={<Timer/>} />
        <Route path="/fluid-upload" element={<FluidUpload/>} />
        <Route path="/axios-call" element={<AxiosCall/>} />
      </Routes>
    </Router>
       </div>
  );
}

export default App;
