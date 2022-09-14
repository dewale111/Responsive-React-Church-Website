import React, { Component } from "react";
import './imgSlider.css'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default class ImgSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows: false,
    };
    return (
      <div className="slider">
        <Slider {...settings}>
          <div className="slideimg">
            <h3>1</h3>
          </div>
          <div className="slideimg">
            <h3>2</h3>
          </div>
          <div className="slideimg">
            <h3>3</h3>
          </div>
          <div className="slideimg">
            <h3>4</h3>
          </div>
          <div className="slideimg">
            <h3>5</h3>
          </div>
          <div className="slideimg">
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}