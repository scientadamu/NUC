import '../css/login.css';
import loginpic from '../images/loginpic.png';
function StdLogin() {
  return (
      <div className='loginpage'>
        <main>
          <div className='login-form'>
            <h1 className="form-name">CENTER FOR EXCELLENCE PORTAL (SPESSE)</h1>
            <form>
              <div className="form-outline mb4" id='form-outline'>
                <p className='sigin-text'>Sign In</p>
                <p className='login-instruction'>Enter the email and password provided to log in.</p>
                <label className="form-label" htmlFor="form2Example11">Email</label>
                <input type="email" id="form2Example11" className="form-control" placeholder="lagoscenter@spesse.edu.ng" />
              </div>
              <div className="form-outline mb-4" id='form-outline-mb-4'>
                <label className="form-label" htmlFor="form2Example22">Password</label>
                <input type="password" id="form2Example22" className="form-control" />
              </div>
                <div class='pass-remember-pass-foget'>
                  <div className='for-chek form-switch'>
                    <input className='form-check-input' type='checkbox'  /><span className='text-muted'>Remember me</span>
                  </div> 
                  <a className="text-muted" href="#!">Forgot password?</a>
                </div>
              <div className=" pt-1 mb-5 pb-1" id='form-sumbit-funct'>
                <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" id='signinbtn' type="button"><a href='../StdOtp'> Log
                  in</a></button>
              </div>
            </form>
          </div>
          <img className='login-picture' src={loginpic} />
        </main>

        <footer><p>Copyright © 2022 Sustainable Procurement, Environmenta Social Standards Enhancement (SPESSE)</p></footer>
      </div>
  );
}
export default StdLogin;