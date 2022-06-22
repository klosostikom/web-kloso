export default function Slider(){
    return(
        <div className="slider-area ">
          <div className="slider-active dot-style">
            <div className="single-slider  hero-overly slider-height d-flex align-items-center" data-background="assets/img/hero/Camping.JPG">
              <div className="container">
                <div className="row justify-content-center text-center">
                  <div className="col-xl-9">
                    <div className="h1-slider-caption">
                      <h1 data-animation="fadeInUp" data-delay=".4s">Komunitas Linux Open Source</h1>
                      <h3 data-animation="fadeInDown" data-delay=".4s">STIKOM PGRI BANYUWANGI</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-slider  hero-overly slider-height d-flex align-items-center" data-background="assets/img/hero/pelatihan.jpg">
              <div className="container">
                <div className="row justify-content-center text-center">
                  <div className="col-xl-9">
                    <div className="h1-slider-caption">
                      <h1 data-animation="fadeInUp" data-delay=".4s">Pelatihan Web Desain</h1>
                      <h3 data-animation="fadeInDown" data-delay=".4s">SMA/SMK Sederajat</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-slider  hero-overly slider-height d-flex align-items-center" data-background="assets/img/hero/pelatihan2.jpg">
              <div className="container">
                <div className="row justify-content-center text-center">
                  <div className="col-xl-9">
                    <div className="h1-slider-caption">
                      <h1 data-animation="fadeInUp" data-delay=".4s">Pelatihan Web Desain</h1>
                      <h3 data-animation="fadeInDown" data-delay=".4s">SMA/SMK Sederajat</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};