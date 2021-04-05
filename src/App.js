import React from 'react';
import './App.css';
import ClassCounter from './Components/ClassCounter';
import ClassCounter2 from './Components/ClassCounter2';
import HookCounter from './Components/HookCounter';
import HookCounter2 from './Components/HookCounter2';
import HookCounter3 from './Components/HookCounter3';

function App() {
  return (
    <div className="App">
      <ClassCounter/>
      <hr/>
      <HookCounter/>
      <hr/>
      <hr/>
      <ClassCounter2/>
      <hr/>
      <HookCounter2/>
      <hr/>
      <HookCounter3/>
    </div>
  );
}

export default App;
