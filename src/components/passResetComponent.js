import '../css/loginPage.css'
import headerLogo from '../images/headerLogo.png'

function ForgetPasswordComponent() {
  return (
    <div className="ForgetComponent">
          {/* PAGE */}
          <div className="page">
      <div>
          {/* CONTAINER OPEN */}
        <div className="col mx-auto text-center">
          <a href="index.html">
            <img src="../assets/images/brand/logo.png" className="header-brand-img" alt="" />
          </a>
        </div>
        <div className="container-login100">
            <div className="wrap-login100 p-0">
              <div className="card-body">
                <form className="login100-form validate-form">
                      <span className="login100-form-title">
                        Forgot Password
                      </span>
                      <p className="text-muted">Enter the email address registered on your account</p>
              
                  <div className="pt-3" id="forgot">
                    <div className="form-group">
                      <label className="form-label" htmlFor="eMail">E-Mail:</label>
                      <input className="form-control" id="eMail" placeholder="Enter Your Email" type="email" />
                    </div>
                    <div className="submit">
                      <a className="btn btn-primary d-grid" href="index.html">Submit</a>
                    </div>
                    <div className="text-center mt-4">
                      <p className="text-dark mb-0">Forgot It?<a className="text-primary ms-1" href="#">Send me Back</a></p>
                    </div>
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
      </div>
              {/* CONTAINER CLOSED */}
            </div>
          </div>
      );
    }
export default ForgetPasswordComponent;