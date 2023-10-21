import React from 'react'
import fraud from '../resources/fraud.jpg'
import '../header/header.css';

const Header = () => {
  return (
    <>
          <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1" className='bg-warning'></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2" className='bg-warning'></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3" className='bg-warning'></button>
            </div>

            <div className="carousel-inner">
              <div className="carousel-item active">
                  <div className="row vh-100 bg-dark align-items-center">
                      <div className='col-12 col-md-7 p-5'>
                        <div className='col-10 mx-auto'>
                            <h1 className='fw-bold text-warning'>
                              Deliver a frictionless payment experience that delights customers.
                            </h1>

                            <h1 className='fw-light text-white'>
                              Creating a business is a challenging endeavor. 
                              Receiving payments should be straightforward.
                            </h1>

                            <button className="btn px-4 btn-warning rounded-0 text-white">
                              Learn More
                            </button>
                        </div>
                      </div>
                      <div className="col-5 d-none d-md-block h-100 carousel-1"></div>
                  </div>
              </div>


              <div class="carousel-item">
                 <div className="row vh-100 bg-white align-items-center"> 
                    <div className='col-12 col-md-7 p-5'>
                      <div className='col-10 mx-auto'>
                        <h1 className='fw-bold text-dark'> Banking is personal</h1>
                        <h1 className='fw-light text-dark'> We understand personal ...</h1>
                      </div>
                    </div>
                    <div className="col-5 d-none d-md-block h-100 carousel-2"></div>
                  </div>
              </div>

              <div class="carousel-item">
                <div className="row vh-100 bg-secondary align-items-center">
                  <div className='col-12 col-md-7 p-5'>
                    <div>
                        <div className='col-10 mx-auto'>
                            <h1 className='fw-bold'>
                              <div className='text-danger'>Safeguard</div>
                              <div className='text-white'> Your Account</div>
                            </h1>
                            <p className='text-white'>
                              We will <strong>NEVER</strong> contact you via phone calls, SMS, or email to request 
                              your card details, PIN, token codes, mobile/internet banking login details, 
                              or any other account-related information.
                            </p>
                        </div>
                    </div>
                  </div>
                  <div className="col-5 d-none d-md-block h-100 carousel-3"></div>
                 </div>
              </div>
            </div>
          </div>

    </>
  )
}

export default Header