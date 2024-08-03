import React from 'react'

export default function Carousel() {
  return (
    <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="10000">
          <img src="https://i.insider.com/4edf7250ecad04967f000030" class="d-block w-100 image" alt="..." />
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <h3 className='headline'>Air Pollution</h3>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/483897main_Global-PM2.5-map.JPG/1200px-483897main_Global-PM2.5-map.JPG" class="d-block w-100 image" alt="..." />
          {/* <div class="carousel-caption d-none d-md-block heading">
            <h3>Air Pollution</h3>
          </div> */}
        </div>
        <div class="carousel-item">
          <img src="https://c7.alamy.com/comp/2PAB6XW/world-map-with-average-yearly-temperature-per-country-2PAB6XW.jpg" class="d-block w-100 image" alt="..." />
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

  )
}