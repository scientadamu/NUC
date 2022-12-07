import slide1 from '../images/slide1.png'
import slide2 from '../images/slide2.png'
import slide3 from '../images/slide3.png'
const Slider = () => {
    return (
        <div>
            div id="myCarousel" class="carousel slide" data-bs-ride="carousel"&gt;
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to={1} aria-label="Slide 2" />
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to={2} aria-label="Slide 3" />
            </div>
            <div className="carousel-inner">
                {/* Slide 1 */}
                <div className="carousel-item active">
                    <img src={slide1} alt="slide1" className="bd-placeholder-img" aria-hidden="true" preserveaspectratio="xMidYMid slice" focusable="false" />
                    <rect width="100%" height="100%" fill="#777">
                        <div className="container">
                            <div className="carousel-caption text-start">
                            </div>
                        </div>
                    </rect></div>
                {/* Slide 2 */}
                <div className="carousel-item">
                    <img src={slide2} alt="slide2" />
                    <rect width="100%" height="100%" fill="#777">
                        <div className="container">
                            <div className="carousel-caption text-end">
                            </div>
                        </div>
                    </rect></div>
                {/* Slide 3 */}
                <div className="carousel-item">
                    <img src={slide3} alt="slide3" />
                    <rect width="100%" height="100%" fill="#777">
                        <div className="container">
                            <div className="carousel-caption text-end">
                            </div>
                        </div>
                    </rect></div>
            </div>
            {/* Previous */}
            <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            {/* Next */}
            <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}
