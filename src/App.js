// Third part modules
import React, { Component } from 'react';

// Resources & Custom Components
import './App.css';
import Controls from './components/Controls';
import Counter from './components/Counter';
import Header from './components/Header';
import ToDoList from './components/ToDoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ToDoList />
        <Controls />
        <Counter />
      </div>
    );
  }
}

export default App;
