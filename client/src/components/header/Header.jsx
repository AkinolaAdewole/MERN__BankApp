import React from 'react'

const Header = () => {
  return (
    <>
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
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
                    <div className='col-10 mx-auto'></div>
                  </div>
                 </div>
                </div>

                {/* <div className='carousel-item'></div> */}
            </div>
        </div>
    </>
  )
}

export default Header