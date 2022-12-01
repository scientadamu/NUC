import logo1 from '../images/logo1.png'
import slide1 from '../images/slide1.png'
import '../css/login.css'
import '../css/loginOtp.css'

function Otp() {
  return (
    <div className="Otp">

        <div className="otpContainer">
                         
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
                           <form >
                              <p className="logIn">Log in</p>

                              <p className='loginInfor'>
                               Kindly check your email address to validate otp credentials.
                                </p>

                              <div className='inputField'>
                                    <label className='formLabel' for="otp">OTP</label>
                                    <input class="otp" type="text" oninput='digitValidate(this)' onkeyup='tabChange(1)' maxlength='1' />
                                    <input class="otp" type="text" oninput='digitValidate(this)' onkeyup='tabChange(1)' maxlength='1' />
                                    <input class="otp" type="text" oninput='digitValidate(this)' onkeyup='tabChange(1)' maxlength='1' />
                                    <input class="otp" type="text" oninput='digitValidate(this)' onkeyup='tabChange(1)' maxlength='1' />
                                    <input class="otp" type="text" oninput='digitValidate(this)' onkeyup='tabChange(1)' maxlength='1' />
                              </div>

                              <div className="hr">&nbsp;</div>

                              <div class="loginButton">
                                <button className='loginBtn'><a href="./dashboard">Login</a></button>
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

//Javascript for OTP
let digitValidate = function(ele){
  console.log(ele.value);
    ele.value = ele.value.replace(/[^0-9]/g,'');
  }
  
  let tabChange = function(val){
      let ele = document.querySelectorAll('input');
      if(ele[val-1].value != ''){
        ele[val].focus()
      }else if(ele[val-1].value == ''){
        ele[val-2].focus()
      }   
   }
}

export default Otp;
