import LoginPage from './pages/login'
import OtpPage from './pages/otp'
import ForgetPassword from './pages/forgotPassword'
import InvalidPage from './pages/invalidPage'

import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className='App'>
          <Switch>
          <Route exact path="/" >
            <LoginPage />
          </Route>
          
          <Route path="/otp" >
            <OtpPage />
          </Route>

          <Route path="/passRest" >
            <ForgetPassword />
          </Route>

          <Route path="#" >
            <InvalidPage />
          </Route>

          </Switch>
        </div>
     
    </Router>
  );
}

export default App;
