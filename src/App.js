import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Frontpage from './pages/Frontpage'
import Event from './pages/Event'
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import Navbar from './header/navBar'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Frontpage} />
            <Route path="/event" component={Event} />
            <Route path="/Shop" component={Shop} />
            <Route path="/contact" component={Contact} />
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
