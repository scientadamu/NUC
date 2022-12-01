import logo1 from '../images/logo1.png';
import slide1 from '../images/slide1.png';
import '../css/login.css';

function Login() {
  return (
    <div className="login">
        <div className="loginContainer">
                          <header>
                                <div className='logoImg'>
                                    <img src={logo1}  alt="logo" />
                                </div>
                              
                              <p id="projectTitle">
                                      SPESSE &nbsp;
                                      <span>Platform</span>
                                </p>
                          </header>

                          <main>
                              <form>
                              <p className="logIn">Log in</p>
                              <p className='loginInfor'>
                                    Welcome to Electronic Platform for Performance Monitoring of Centers login
                                    credential bellow to start using the app
                                    </p>
                                <div className='loginInputField'>
                                    <label className='formLabel' for="email">Email</label>
                                    <input className="loginTextField" type="email" placeholder="Enter Your Email Address" name='email'></input>
                                </div>

                                <div className='loginInputField'>
                                    <label className='formLabel' for="password">Password</label>
                                    <input className="loginTextField" type="password" placeholder="Enter Your Password" name='password'></input>
                                </div>
                                <div class="passwordReset">
                                  <p className='forgotPassword'>Forgot Password?</p>
                                </div>

                                <div className="hr">&nbsp;</div>

                                <div class="login-functions">
                                <div className='checkBoxDiv'>
                                  <input type="checkbox" id="rememberCheck" name="remember" value="remember"/>
                                  <label id="rememberLabel" for="remember">Remember Me</label>
                                </div>

                                <button className='loginBtn'><a href="./otp"> Login</a></button>

                                </div>
                              </form>
                          </main>
                      </div>



       
{/* This is login slider */}
<div className="loginSlider">
                  <div className='slidePic'> <img src={slide1}  alt="slide1" /></div>

                  <div className='slideDetails'>
                      <div className='title'>Reporting System</div>

                      <div className='details'>
                        Electronic Platform for Performance Monitoring of Centers login
                        credential bellow to start using the app
                      </div>

                      <div className='view'>
                          <div className='circle'>&#60;</div>
                          <div className='circle'>&gt;</div>
                      </div>

                  </div>
        </div>

    </div>
  );
}

export default Login;
