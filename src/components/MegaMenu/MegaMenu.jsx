import React from 'react'
import './MegaMenu.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function MegaMenu() {
  return (
    <div>
        <div className="APP">

<nav className="navbar navbar-expand-lg navbar-light  py-3 shadow-sm" style={{backgroundColor:'black'}}>
  <img className='w-1' src="https://gameone.ph/pub/media/logo/stores/1/Gameone_Logo-01_2.png" alt="" />
  <Form className="d-flex w-5">
    <Form.Control
      type="search"
      placeholder="Search"
      className="me-2 ms-5"
      id='m1'
      aria-label="Search"
    />
    <Button variant="outline-success me-5 ">Search</Button>
  </Form>
  <div className="container-fluid" id='two'>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="tu"> <i class="fa-solid fa-bars" style={{color:'white'}}></i></span>
    </button>
    <div id="navbarSupportedContent" className="collapse navbar-collapse">
      <ul className="navbar-nav mx-auto">

        <li className="nav-item dropdown megamenu"><a id="megamneu" href="#" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" className="nav-link dropdown-toggle font-weight-bold text-uppercase dropdown-toggle"><h7>Trending&nbsp;<i class="fa-solid fa-caret-down" style={{color:'white'}}></i></h7></a>
          <div aria-labelledby="dropdownMenuButton1" className="dropdown-menu border-0 p-0 m-0">
            <div className="container">
              <div className="row bg-white rounded-0 m-0 shadow-sm">
                <div className="col-lg-7 col-xl-8">
                  <div className="p-4">
                    <div className="row">
                      <div className="col-lg-6 mb-4">
                        <h6 className="font-weight-bold text-uppercase">Shooting</h6>
                        <ul className="list-unstyled">
                          <li className="nav-item"><a href="" className="nav-link text-small pb-0">Valorant</a></li>
                          <li className="nav-item"><a href="" className="nav-link text-small pb-0 ">Apex legend</a></li>
                        </ul>
                      </div>
                      <div className="col-lg-6 mb-4">
                        <h6 className="font-weight-bold text-uppercase">Action</h6>
                        <ul className="list-unstyled">
                          <li className="nav-item"><a href="" className="nav-link text-small pb-0 ">GTA V</a></li>
                          <li className="nav-item"><a href="" className="nav-link text-small pb-0 ">Doom Eternal</a></li>
                        </ul>
                      </div>
                      <div className="col-lg-6 mb-4">
                        <h6 className="font-weight-bold text-uppercase">Adventure</h6>
                        <ul className="list-unstyled">
                          <li className="nav-item"><a href="" className="nav-link text-small pb-0 ">God of War </a></li>
                          <li className="nav-item"><a href="" className="nav-link text-small pb-0 ">Inside</a></li>
                        </ul>
                      </div>
                      <div className="col-lg-6 mb-4">
                        <h6 className="font-weight-bold text-uppercase">Strategy</h6>
                        <ul className="list-unstyled">
                          <li className="nav-item"><a href="" className="nav-link text-small pb-0 ">Civilization VI</a></li>
                          <li className="nav-item"><a href="" className="nav-link text-small pb-0 ">Stellaris</a></li>
                        </ul>
                      </div>
                      <img src="https://uploads.dailydot.com/568/c6/b8d6748e990bb894.jpg?auto=compress%2Cformat&fit=scale&h=1024&ixlib=php-3.3.0&w=2048&wpsize=2048x2048" alt="" />
                    </div>
                  </div>
                </div>
                <div class="col-lg-5 col-xl-4 px-0 d-none d-lg-block megaimaga"></div>
              </div>
            </div>
          </div>

        </li>
        <li className="nav-item"><a href="" className="nav-link font-weight-bold text-uppercase"><h7>About</h7></a></li>
        <li className="nav-item"><a href="" className="nav-link font-weight-bold text-uppercase"><h7>Services</h7></a></li>
        <li className="nav-item"><a href="" className="nav-link font-weight-bold text-uppercase"><h7>Contact</h7></a></li>
      </ul>
      <ul className="navbar-nav">
        <li className="nav-item dropdown megamenu"><a id="megamenu" href="#" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" className="nav-link dropdown-toggle font-weight-bold text-uppercase dropdown-toggle"><h7>FREE GAMES&nbsp;<i class="fa-solid fa-caret-down" style={{color:'white'}}></i></h7></a>
          <div aria-labelledby="dropdownMenuButton1  color-light" className="dropdown-menu border-0 p-0 m-0">
            <div className="container">
              <div className="row bg-white rounded-0 m-0 shadow-sm">
                <div className="col-lg-7 col-xl-8">
                  <div className="p-4">
                    <div className="row">
                      <div className="col-lg-6 mb-4">
                        <h6 className="font-weight-bold text-uppercase">Shooting</h6>
                        <ul className="list-unstyled">
                          <li className="nav-item"><a href="" className="nav-link text-small pb-0">Valorant</a></li>
                          <li className="nav-item"><a href="" className="nav-link text-small pb-0 ">Apex legend</a></li>
                          
                        </ul>
                      </div>
                      <div className="col-lg-6 mb-4">
                        <h6 className="font-weight-bold text-uppercase">Action</h6>
                        <ul className="list-unstyled">
                          <li className="nav-item"><a href="" className="nav-link text-small pb-0 ">GTA V</a></li>
                          <li className="nav-item"><a href="" className="nav-link text-small pb-0 ">Doom Eternal</a></li>
                          
                        </ul>
                      </div>
                      <div className="col-lg-6 mb-4">
                        <h6 className="font-weight-bold text-uppercase">Adventure</h6>
                        <ul className="list-unstyled">
                          <li className="nav-item"><a href="" className="nav-link text-small pb-0 ">God of War</a></li>
                          <li className="nav-item"><a href="" className="nav-link text-small pb-0 "></a>Inside</li>
                          
                        </ul>
                      </div>
                      <div className="col-lg-6 mb-4">
                        <h6 className="font-weight-bold text-uppercase">Strategy</h6>
                        <ul className="list-unstyled">
                          <li className="nav-item"><a href="" className="nav-link text-small pb-0 ">Civilization VI</a></li>
                          <li className="nav-item"><a href="" className="nav-link text-small pb-0 ">Stellaris</a></li>
                        </ul>
                      </div>
                      <img src="https://akm-img-a-in.tosshub.com/sites/itgaming/resources/202103/epic-games-store-spring-sale-2021290321115904.jpeg" alt="" />
                      <img src="https://cdn2.unrealengine.com/epic-games-summer-sale-2021-1920x1080-b25d38eba357.jpg" alt="" />
                    </div>
                  </div>
                </div>
                <div class="col-lg-5 col-xl-4 px-0 d-none d-lg-block megaimaga"></div>
              </div>
            </div>
          </div>
        </li>
        <li className="nav-item"><a href="" className="nav-link font-weight-bold text-uppercase"><h7>CART</h7></a></li>
        <li className="nav-item"><a href="" className="nav-link font-weight-bold text-uppercase"><h7>WHISHLIST</h7></a></li>
        <li className="nav-item"><a href="" className="nav-link font-weight-bold text-uppercase"><h7>EVENTS&nbsp;&nbsp;</h7></a></li>
        <li className="nav-item"><a href="" className="nav-link font-weight-bold text-uppercase ms-5"><h7><i class="fa-solid fa-user" style={{color:'white'}}></i></h7></a></li>

      </ul>
    </div>
  </div>
</nav>
</div>
    </div>
  )
}

export default MegaMenu