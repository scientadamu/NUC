import '../css/loginPage.css'
import slide1 from '../images/slide1.png'
import {AiOutlineLeftCircl} from 'react-icons/fa';
import {AiOutlineRightCircl} from 'react-icons/fa';



function SliderComponent() {
  return (
    <div className="sliderComponent">
        <div className='slideImages'>
          <img src={slide1} alt='slide1'></img>
        </div>
        <p className='slideTitle'>
             Reporting System
        </p>
        <p className='slideDetail'>
           Electronic Platform for Performance Monitoring of Centers login
          credential bellow to start using the app

        </p>
        <p className='slideIcons'>
             {/* <AiOutlineLeftCircl />
            <AiOutlineRightCircl />  */}
        </p> 
    </div>
)
}

export default SliderComponent;
