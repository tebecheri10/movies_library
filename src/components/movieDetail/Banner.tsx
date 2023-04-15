import React, { FC, useMemo } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../app/store";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface BannerProps {
  bannerImages: any;
}

const settings = {
  dots: false,
  fade: true,
  infinite: true,
  arrows: false,
  autoplay: true,
  speed: 3000,
  autoplaySpeed: 6000,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: false
};

const Banner: FC<BannerProps> = ({ bannerImages }) => {
  const moviesState = useSelector((state: RootState) => state.movies);

  console.log("banner images", bannerImages)
  console.log("movie data", moviesState?.movieExtraData?.image?.medium)
   
  return (
    <div className="banner_Container">
      <Slider {...settings}>
           {bannerImages &&
            bannerImages.map((image:any)=> <img src={image?.resolutions?.original?.url}/> )
          } 
      </Slider>
    </div>
  );
};

export default Banner;
