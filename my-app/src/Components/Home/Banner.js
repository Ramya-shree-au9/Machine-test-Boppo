import PhonesBanner from "../images/phonesBanner.jpg";
import fashionBanner from "../images/men-fashion.jpg";
import TvBanner from "../images/Philips-tv-banner.jpg";
import Carousel from "react-bootstrap/Carousel";

const Banner = () => {
  return (
    <Carousel>
      <Carousel.Item interval={2000}>
          <img
            style={{ height: "350px" }}
            className="d-block w-100"
            src={PhonesBanner}
            alt="First slide"
          />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      
          <img
            style={{ height: "350px" }}
            className="d-block w-100"
            src={fashionBanner}
            alt="Second slide"
          />
      
      </Carousel.Item>
      <Carousel.Item interval={2000}>       
          <img
            style={{ height: "350px" }}
            className="d-block w-100"
            src={TvBanner}
            alt="Third slide"
          />
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
