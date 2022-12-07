import '../css/loginPage.css'
import headerLogo from '../images/headerLogo.png'


function LoginComponent() {
  return (
    <div className="LoginComponent">
      {/* PAGE */}
      <div className="page">
        <div>
          {/* CONTAINER OPEN */}
          <div className="col col-login mx-auto text-center">
            <a href="index.html" className="text-center">
              <img src="../assets/images/brand/logo.png" className="header-brand-img" alt="" />
            </a>
          </div>
          <div className="container-login100">
            <div className="wrap-login100 p-0">
              <div className="card-body">
                <form className="login100-form validate-form">
                  <span className="login100-form-title">
                    Login
                  </span>
                  <div className="wrap-input100 validate-input" data-bs-validate="Valid email is required: ex@abc.xyz">
                    <input className="input100" type="text" name="email" placeholder="Email" />
                    <span className="focus-input100" />
                    <span className="symbol-input100">
                      <i className="zmdi zmdi-email" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="wrap-input100 validate-input" data-bs-validate="Password is required">
                    <input className="input100" type="password" name="pass" placeholder="Password" />
                    <span className="focus-input100" />
                    <span className="symbol-input100">
                      <i className="zmdi zmdi-lock" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="text-end pt-1">
                    <p className="mb-0"><a href="../passRest" className="text-primary ms-1">Forgot Password?</a></p>
                  </div>
                  <div className="container-login100-form-btn">
                    <a href="../otp" className="login100-form-btn btn-primary">
                      Login
                    </a>
                  </div>
                  <div className="text-center pt-3">
                    <p className="text-dark mb-0">Not a member?<a href="register.html" className="text-primary ms-1">Create an Account</a></p>
                  </div>
                </form>
              </div>
            </div>
            <div className='loginHeader'>
              <img className='headerLogo' src={headerLogo} alt='headerLogo'></img>

              <span className='SPESSE'>SPESSE&nbsp;</span>
              <span className='Platform'>&nbsp;Platform</span>
            </div>
          </div>
          {/* CONTAINER CLOSED */}
        </div>
      </div>
    </div>
  );
}
export default LoginComponent;
