import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import Header from './components/Header';
//import DarkMode from "./components/DarkMode";
//import Counter from './components/Counter';
//import Timer from './components/Timer';
function App() {
  return (
    <div className="App">
     <h1>from 'stenciljs-components' npm package</h1>
    <my-card user-name="CodingLocker"></my-card>
    <my-pie-chart  data='[{"tag":"height","value":180},{"tag":"weight","value":75},{"tag":"age","value":30},{"tag":"score","value":95},{"tag":"yearsExperience","value":5}]'></my-pie-chart>
    <my-rich-text-editor initial-value="this is Reaact value" placeholder="React placeholder"></my-rich-text-editor>
    <my-progress-bar value="2" max="10"></my-progress-bar>
    <my-progress-ring percentage="30"></my-progress-ring>
    <test-button button-id="test-button">Click me!</test-button>
    <test-counter>Number: </test-counter>
    <search-world search-text="bmw"> </search-world>
    <my-payment-gateway></my-payment-gateway>
    <my-component first="Sanjeet" last="Kumar"></my-component>
    <simple-form></simple-form>
    <custom-form></custom-form>
    <complex-ionic-form></complex-ionic-form>
   <combo-box allow-input='true' label='Album:'></combo-box>
      </div>
  );
}

export default App;
