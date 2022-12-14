import LoginPage from './pages/login'
import OtpPage from './pages/otp'
import ForgetPassword from './pages/forgotPassword'
import Dashboard from './pages/dashboard'
import StdDashboard from './pages/StdDashboard'

import StdLogin from './spesse/pages/StdLogin'
import StdOtp from './spesse/pages/StdOtp'

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
        
          <Route path="/passRest" >
            <ForgetPassword />
          </Route>
          
          <Route path="/login" >
            <LoginPage />
          </Route>
        <Route path="/otp" >
            <OtpPage />
          </Route>
    
           <Route path="/dashboard" >
            <Dashboard />
          </Route>

          <Route path="/StdLogin" >
           <StdLogin />
         </Route>
         <Route path="/StdOtp" >
           <StdOtp />
         </Route>
           <Route path="/StdDashboard" >
            <StdDashboard />
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
