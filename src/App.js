 
 import './App.css';
 import Home from './components/Home';
 import Adopt from './components/Adopt';
 import ContactUs from './components/ContactUs';
  
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


 function App() {
  
  return (
    <Router> 
    <div className="App">
       <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/adopt">
            <Adopt />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
        </Switch>
      </div>
      </Router>
  );
}

export default App;
