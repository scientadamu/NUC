import logo1 from '../images/logo1.png';
import slide1 from '../images/slide1.png';
import '../css/login.css';

function Login() {
  return (
    <div className="login">
       
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


