import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import wf1 from "../assets/wf1.png";
import wf2 from "../assets/wf2.png";
import wf3 from "../assets/wf3.png";
import wf4 from "../assets/wf4.png";
import wf5 from "../assets/wf5.png";
import wf6 from "../assets/wf6.png";
import wf7 from "../assets/wf7.png";
import wf8 from "../assets/wf8.png";
import wf9 from "../assets/wf9.png";
import wf10 from "../assets/wf10.png";
import "../styles/Carousel.css";

function Carousel() {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };
  return (
    <>
      <div className="title-caro">
        <h2>A la decouverte des Wireframe</h2>
      </div>
      <div className="slider-container">
        <div>
          <h4>Globe Guide</h4>
        </div>
        <Slider {...settings} className="caro1">
          <div>
            <img src={wf2} />
          </div>
          <div>
            <img src={wf1} />
          </div>
          <div>
            <img src={wf3} />
          </div>
          <div>
            <img src={wf4} />
          </div>
          <div>
            <img src={wf5} />
          </div>
        </Slider>
        <div>
          <h4>AfAC 974</h4>
        </div>
        <Slider {...settings} className="caro2">
          <div>
            <img src={wf6} />
          </div>
          <div>
            <img src={wf7} />
          </div>
          <div>
            <img src={wf8} />
          </div>
          <div>
            <img src={wf9} />
          </div>
          <div>
            <img src={wf10} />
          </div>
        </Slider>
      </div>
    </>
  );
}

export default Carousel;
