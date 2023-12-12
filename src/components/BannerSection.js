import React from 'react';

const BannerSection = () => {
  return (
    <div className="bannerSection main-banner-area-four" style={{ backgroundImage: 'url("")' }}>
      <div className="container-fluid nopadding">
        {/* Add your owl-carousel initialization here */}
        <div className="owl-carousel owl-loaded owl-drag">
          {/* Repeat the following block for each banner */}
          <div className="owl-item">
            <div className="row align-items-center" style={{ backgroundImage: 'url()', backgroundSize: 'cover' }}>
              <div className="col-lg-6">
                <div className="main-banner-content">
                  <span>Grow your business with the help of our SEO Service</span>
                  <h2>We take responsibility for your business</h2>
                  <p>We take care of your business and grow your business sales with our expert SEO skills.</p>
                  
                </div>
              </div>
              <div className="col-lg-6">
                <div className="banner-image">
                  <img src="/Content/website/1/media/20230327225146_1_359.png" alt="We take responsibility for your business" />
                </div>
              </div>
            </div>
          </div>
          {/* Repeat the above block for each banner */}

          {/* Add your additional banners here */}

        </div>
        <div className="default-shape">
          <div className="shape-1">
            <img src="/Content/themes/comman/images/shape/shape4.png" alt="image" />
          </div>
          <div className="shape-2 rotateme">
            <img src="/Content/themes/comman/images/shape/shape5.svg" alt="image" />
          </div>
          <div className="shape-3">
            <img src="/Content/themes/comman/images/shape/shape6.svg" alt="image" />
          </div>
          <div className="shape-4">
            <img src="/Content/themes/comman/images/shape/shape7.png" alt="image" />
          </div>
          <div className="shape-5">
            <img src="/Content/themes/comman/images/shape/shape8.png" alt="image" />
          </div>
        </div>
        <div className="banner-btn">
                    <a className="default-btn" href="/Contact">
                      Contact Us
                    </a><br/>
                    <a className="default-btn" href="https://wa.link/fp6f7">
                      Talk Now
                    </a>
                  </div>
      </div>
    </div>
  );
};

export default BannerSection;
