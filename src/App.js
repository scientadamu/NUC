import Login from './pages/login'
import Otp from './pages/otp'
import Dashbord from './pages/dashbord'

import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className='App'>
          <Switch>
          <Route exact path="/" >
            <Login />
          </Route>

          <Route  path="/otp" element="./pages/otp">
             <Otp />
          </Route>

          <Route  path="/login" element="./pages/otp">
             <Login />
          </Route>

          <Route path="/dashboard" >
              <Dashbord />
          </Route>

          </Switch>
        </div>
     
    </Router>
  );
}

export default App;
