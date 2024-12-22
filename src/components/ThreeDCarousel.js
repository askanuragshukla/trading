import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ThreeDCarousel.css'; // Custom CSS for 3D effect

const ThreeDCarousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: '0',
    arrows: true,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div className="carousel-item">
          <div className="carousel-content">
            <h2>Trading Services</h2>
            <p>We offer comprehensive trading solutions for the stock market.</p>
          </div>
        </div>
        <div className="carousel-item">
          <div className="carousel-content">
            <h2>Stock Market Courses</h2>
            <p>Learn the fundamentals of the stock market and advanced strategies.</p>
          </div>
        </div>
        <div className="carousel-item">
          <div className="carousel-content">
            <h2>Live Trading Sessions</h2>
            <p>Participate in real-time market analysis and trading sessions.</p>
          </div>
        </div>
        <div className="carousel-item">
          <div className="carousel-content">
            <h2>Expert Analysts</h2>
            <p>Get insights and predictions from seasoned market analysts.</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default ThreeDCarousel;
