import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './SlideEffect.css'
function SlideEffect() {
  return (
    <div>
        <div>
        <Carousel>

        <Carousel.Item>
            <img style= {{height:550}}
              className="d-block w-100"
              src="https://cdn2.unrealengine.com/Diesel/blog/epic-mega-sale-2020/EN_EGS_MegaSale_Blog_News_Secondary-1920x600-47741101df961a19bbc10ddd4bf4a3340964655d.jpg" // Replace with the path to your first image
              alt="First slide"
            />
            <Carousel.Caption>
              
            </Carousel.Caption>
          </Carousel.Item>


          <Carousel.Item>
            <img style= {{height:550}}
              className="d-block w-100"
              src="https://cdn2.unrealengine.com/en-egs-showcasesale-social-1920x1080-1920x1080-540ea2589862.jpg" // Replace with the path to your first image
              alt="First slide"
            />
            <Carousel.Caption>
              
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img style= {{height:550}}
              className="d-block w-100"
              src="https://akm-img-a-in.tosshub.com/sites/itgaming/resources/202103/epic-games-store-spring-sale-2021290321115904.jpeg" // Replace with the path to your first image
              alt="First slide"
            />
            <Carousel.Caption>
              
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img style= {{height:550}}
              className="d-block w-100"
              src="https://uploads.dailydot.com/568/c6/b8d6748e990bb894.jpg?auto=compress%2Cformat&fit=scale&h=1024&ixlib=php-3.3.0&w=2048&wpsize=2048x2048" // Replace with the path to your first image
              alt="First slide"
            />
            <Carousel.Caption>
              
            </Carousel.Caption>
          </Carousel.Item>



          
         
        </Carousel>
      </div>
    </div>
  )
}

export default SlideEffect