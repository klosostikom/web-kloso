import Layout from "../component/layout";

export default function Gallery() {
  return (
    <Layout>
      {/* slider Area Start*/}
      <div className="slider-area">
        <div
          className="single-slider hero-overly slider-height2 d-flex align-items-center"
          data-background="assets/img/hero/koding.jpg"
        >
          <div className="container">
            <div className="row ">
              <div className="col-md-11 offset-xl-1 offset-lg-1 offset-md-1">
                <div className="hero-caption">
                  <span>Gallery</span>
                  <h2>Our Galleries</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* slider Area End*/}
      {/* Room Start */}
      <section className="room-area r-padding1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              {/*font-back-tittle  */}
              <div className="font-back-tittle mb-45">
                <div className="archivment-front">
                  <h3>Our Galleries</h3>
                </div>
                <h3 className="archivment-back">Our Galleries</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-6">
              {/* Single Room */}
              <div className="single-room mb-50">
                <div className="room-img">
                  <img
                    height="275px"
                    src="assets/img/gallery/Mikrotik Jaringan.jpg"
                    alt
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              {/* Single Room */}
              <div className="single-room mb-50">
                <div className="room-img">
                  <img
                    height="275px"
                    src="assets/img/gallery/gallery2.JPG"
                    alt
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              {/* Single Room */}
              <div className="single-room mb-50">
                <div className="room-img">
                  <img
                    height="275px"
                    src="assets/img/gallery/Materi (1).jpg"
                    alt
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              {/* Single Room */}
              <div className="single-room mb-50">
                <div className="room-img">
                  <img
                    height="275px"
                    src="assets/img/gallery/pelatihan.jpg"
                    alt
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="single-room mb-50">
                <div className="room-img">
                  <img
                    height="275px"
                    src="assets/img/gallery/Sambutan Pembina UKM K.L.O.S.O.jpg"
                    alt
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="single-room mb-50">
                <div className="room-img">
                  <img
                    height="275px"
                    src="assets/img/gallery/proker2.jpg"
                    alt
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="room-btn pt-70">
              <a
                href="https://www.instagram.com/kloso_stikombwi/"
                className="btn view-btn1"
              >
                View more <i className="ti-angle-right" />{" "}
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Room End */}
      {/* Gallery img Start*/}
      <div className="gallery-area fix">
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-md-12">
              <div className="gallery-active owl-carousel">
                <div className="gallery-img">
                  <a href="#">
                    <img src="assets/img/gallery/gallery1.jpg" alt />
                  </a>
                </div>
                <div className="gallery-img">
                  <a href="#">
                    <img
                      src="assets/img/gallery/Outbond Di Umbul Bening.jpg"
                      alt
                    />
                  </a>
                </div>
                <div className="gallery-img">
                  <a href="#">
                    <img src="assets/img/gallery/gallery3.jpg" alt />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Gallery img End*/}
    </Layout>
  );
}
