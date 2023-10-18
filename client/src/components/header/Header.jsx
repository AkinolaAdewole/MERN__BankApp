import React from 'react'

const Header = () => {
  return (
    <>
          <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>

            <div class="carousel-inner">
              <div class="carousel-item active">
                  <div>
                      <div className='col-12 col-md-7 p-5'>
                        <div className='col-10 mx-auto'>
                            <h1 className='fw-bold'>
                              Deliver a frictionless payment experience that delights customers.
                            </h1>

                            <h1 className='fw-light'>
                              Creating a business is a challenging endeavor. Receiving payments should be straightforward.
                            </h1>
                        </div>
                      </div>
                  </div>
              </div>

              <div class="carousel-item">
              </div>

              <div class="carousel-item">
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>


        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">

            <div class="carousel-inner">
                <div class="carousel-item active">
                  <div>
                    <div className='col-12 col-md-7 p-5'>
                      <div className='col-10 mx-auto'>
                        <h1 className='fw-bold'>
                          Deliver a frictionless payment experience that delights customers.
                        </h1>

                        <h1 className='fw-light'>
                          Creating a business is a challenging endeavor. Receiving payments should be straightforward.
                        </h1>
                      </div>
                    </div>
                  </div>            
                </div>

                <div class="carousel-item">
                  <div>
                    <div className='col-12 col-md-7 p-5'>
                      <div className='col-10 mx-auto'>
                        <h1 className='fw-bold'> Banking is personal</h1>
                        <h1 className='fw-light'> We understand personal</h1>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="carousel-item">
                 <div>
                  <div className='col-12 col-md-7 p-5'>
                    <div className='col-10 mx-auto'>
                      <h1 className='fw-bold'>
                        <div className='text-danger'>Safeguard</div>
                      </h1>
                    </div>
                  </div>
                 </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default Header