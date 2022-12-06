import LoginComponent from '../components/loginComponent'
import SliderComponent from '../components/sliderComponent'
import '../css/loginPage.css'

function LoginPage() {
  return (
    <div className="loginPage">
      <LoginComponent />
      <SliderComponent /> 
    </div>
  );
}

export default LoginPage;
