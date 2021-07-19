import React from 'react';
import { AnimatePresence } from "framer-motion";
import { Switch, Route, useLocation } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Nav from './components/nav.js'




const App = () => {

  const location = useLocation();

  return (
    <div className='App'>
      <Nav />
      <AnimatePresence exitBeforeEnter initial={true}>
        <Switch location={location} key={location.pathname}>
          <Route path='/' exact component={Home} />
          <Route path='/projects' component={Projects} />
          <Route path='/about' component={About} />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
