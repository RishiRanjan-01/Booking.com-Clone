import React from 'react'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


const PopularflightdomesticCarousal = () => {
  const sliderSettings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    speed:500,
    dots:true,
  }

  
  return (
    <div>
      <h2> Single Item</h2>
        <Slider {...sliderSettings}>
        <button type="button" class="slick-next">Next</button>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <button type="button" class="slick-prev" style={{backgroundColor:"blue"}}>Previous</button>
        </Slider>
    </div>
  )
}




