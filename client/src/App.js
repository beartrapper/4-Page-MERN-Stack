import React from 'react';
import './App.css';
import Home from './Components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CategoriesPage from './Components/CategoriesPage';
import DescriptionPage from './Components/DescriptionPage';

function App() {
  return (
    <>
    <Router>
    <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/categories">
            <CategoriesPage />
          </Route>
          <Route path="/ad">
            <DescriptionPage />
          </Route>
        </Switch>
        </Router>
</>
  );
}

export default App;
