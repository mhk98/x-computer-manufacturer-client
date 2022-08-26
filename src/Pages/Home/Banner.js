import React from 'react';
import banner1 from '../../image/banner/banner1.png'
import banner2 from '../../image/banner/banner2.png'
import banner3 from '../../image/banner/banner3.png'
import banner5 from '../../image/banner/banner5.png'
import banner6 from '../../image/banner/banner6.png'


const Banner = () => {
    return (
        <div class="carousel w-full">
  <div id="slide1" class="carousel-item relative w-full">
    <img src={banner1} alt='' class="w-full"  />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" class="btn btn-circle">❮</a> 
      <a href="#slide2" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" class="carousel-item relative w-full">
    <img src={banner2} alt='' class="w-full"  /> 
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" class="btn btn-circle">❮</a> 
      <a href="#slide3" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" class="carousel-item relative w-full">
    <img src={banner3} alt='' class="w-full  "/>
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" class="btn btn-circle">❮</a> 
      <a href="#slide4" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" class="carousel-item relative w-full">
    <img src={banner5} alt='' class="w-full  "/>
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" class="btn btn-circle">❮</a> 
      <a href="#slide4" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide5" class="carousel-item relative w-full">
    <img src={banner6} alt='' class="w-full  "/>
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" class="btn btn-circle">❮</a> 
      <a href="#slide4" class="btn btn-circle">❯</a>
    </div>
  </div> 
  
</div>

    );
};

export default Banner;