import React, { FC } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import bannerPlaceholder from "../../assets/banner-placeholder.png";
import arrowBack from "../../assets/arrow-back-icon.png";

interface BannerProps {
  bannerImages: any;
}

//slider config
const settings = {
  dots: false,
  fade: true,
  infinite: true,
  arrows: false,
  autoplay: true,
  speed: 3000,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: false,
};

const Banner: FC<BannerProps> = ({ bannerImages }) => {

  return (
    <div className="banner_Container">
      <div className="banner_overlay"></div>
      <Link to="/">
        <img
          className="banner_goBackArrow"
          src={arrowBack}
          alt="go back arrow"
        />
      </Link>
      {bannerImages?.length > 0 ?
       (<Slider {...settings}>
          {bannerImages.map((image: any) => (
            <img key={bannerImages?.id} className="banner_image" src={image?.resolutions?.original?.url} alt="movie banner"/>
          ))}
        </Slider>) : 
        (<img className="banner_placeholder"src={bannerPlaceholder} alt="banner placeholder" />)}
    </div>
  );
};

export default Banner;
