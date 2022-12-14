import '../css/login.css';
import loginpic from '../images/loginpic.png';
function StpOtp() {
  return (
      <div className='otp-page'>
        <main>
          <div className='login-form'>
            <h1 className="form-name">CENTER FOR EXCELLENCE PORTAL (SPESSE)</h1>
            <form>
              <div className="form-outline mb4" id='form-outline'>
                <p className='sigin-text'>Authentication</p>
                <p className='login-instruction'>Enter the OTP sent to tour email.</p>
                <div className='spesse-otp-group'>
                        <input className="otpInput" type="text" oninput='digitValidate(this)' onkeyup='tabChange(1)' maxlength='1' />
                        <input className="otpInput" type="text" oninput='digitValidate(this)' onkeyup='tabChange(2)' maxlength='1' />
                        <input className="otpInput" type="text" oninput='digitValidate(this)' onkeyup='tabChange(3)' maxlength='1' />
                        <input className="otpInput" type="text" oninput='digitValidate(this)' onkeyup='tabChange(4)' maxlength='1' />
                        <input className="otpInput" type="text" oninput='digitValidate(this)' onkeyup='tabChange(5)' maxlength='1' />
                </div>
              </div>
                <div class='pass-remember-pass-foget'>
                  <a className="text-muted" href="#!">Return to Login</a>
                  <a className="text-muted" href="#!">Resend the OTP?</a>
                </div>
              <div className=" pt-1 mb-5 pb-1" id='form-sumbit-funct'>
                <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" id='signinbtn' type="button"><a href='../StdDashBoard'> Log
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
export default StpOtp;