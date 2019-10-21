import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';

import Navigation from './components/Navigation';
import CreateNote from './components/CreateNote';
import CreateUser from './components/CreateUser';
import NotesList from './components/NotesList';


function App() {
  return (
    <Router>
      <Navigation/>
      <Route path="/" exact component={NotesList}/>
      <Route path="/edit/:id" exact component={CreateNote}/>
      <Route path="/create" exact component={CreateNote}/>
      <Route path="/user" exact component={CreateUser}/>
    </Router>
  );
}

export default App;
