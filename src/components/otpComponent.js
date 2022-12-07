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
                    Verify OTP
                  </span>
                  <p className="text-muted">Kindly check your email to validate your otp credentials.</p>

                  <div className="pt-3" id="forgot">
                
                    <div className="form-group">
                      <div className='otp-group'>
                      <label className="form-label" htmlFor="otp">OTP:</label>
                     
                      <input class="otpInput" type="text" oninput='digitValidate(this)' onkeyup='tabChange(1)' maxlength='1' />
                        <input class="otpInput" type="text" oninput='digitValidate(this)' onkeyup='tabChange(2)' maxlength='1' />
                          <input class="otpInput" type="text" oninput='digitValidate(this)' onkeyup='tabChange(3)' maxlength='1' />
                            <input class="otpInput" type="text" oninput='digitValidate(this)' onkeyup='tabChange(4)' maxlength='1' />
                            <input class="otpInput" type="text" oninput='digitValidate(this)' onkeyup='tabChange(5)' maxlength='1' />
                            </div>
                            <div className="container-login100-form-btn" >
                               <a href="../dashboard"  className="login100-form-btn btn-green" >Submit</a>
                             </div>
                              <div className="text-center mt-4">
                                <p className="text-dark mb-0">Forgot It?<a className="text-primary ms-1" href="#">Send me Back</a></p>
                              </div>
                        

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
          {/* CONTAINER CLOSED */}
        </div>
      </div>
    </div>



  );
}
export default ForgetPasswordComponent;