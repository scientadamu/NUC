import slide1 from '../images/slide1.png'
import slide2 from '../images/slide2.png'
import slide3 from '../images/slide3.png'
import '../css/carousel.css'
import '../css/loginPage.css'


const SliderComponent = () => {
    return (
      <div className='sliderComponent'>
        <div className='slider'  >
       
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to={1} aria-label="Slide 2" />
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to={2} aria-label="Slide 3" />
        </div>
        <div className="carousel-inner" id='slideContainer'>
          {/* Slide 1 */}
          <div className="carousel-item active">
            <img src={slide1} alt="slide1"  aria-hidden="true" preserveaspectratio="xMidYMid slice" focusable="false" />
           
              <div className="container">
                <div className="carousel-caption text-start">
                </div>
              </div>
            </div>
          {/* Slide 2 */}
          <div className="carousel-item">
            <img src={slide2} alt="slide2"  />
            
              <div className="container">
                <div className="carousel-caption text-end">
                </div>
              </div>
            </div>
          {/* Slide 3 */}
          <div className="carousel-item">
            <img src={slide3} alt="slide3"  />
            
              <div className="container">
                <div className="carousel-caption text-end">
                </div>
              </div>
            </div>
        </div>
        {/* Previous */}
        <button className="carousel-control-prev"  type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        {/* Next */}
        <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
        </div>
        <p className='slideTitle'>
             Reporting System
        </p>
        <p className='slideDetail'>
           Electronic Platform for Performance Monitoring of Centers login
          credential bellow to start using the app

        </p>
        
      </div>
      </div>
    );
}
export default SliderComponent;
