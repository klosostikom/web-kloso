import AboutMe from "../component/aboutme";
import Layout from "../component/layout";
export default function About() {
  return (
    <>
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
                    <span>About</span>
                    <h2>Our About</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* slider Area End*/}
        {/* Make customer Start*/}
        <AboutMe />
        {/* Make customer End*/}
        {/* Annual Work Start */}
        <section className="room-area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-8">
                <div className="font-back-tittle mb-45">
                  <div className="archivment-front">
                    <h3>Our Annual Work Program</h3>
                  </div>
                  <h3 className="archivment-back">Our Rooms</h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="single-room mb-50">
                  <div className="room-img">
                    <a href="rooms.html">
                      <img
                        src="assets/img/gallery/Foto bersama.jpg"
                        height="235px"
                        alt
                      />
                    </a>
                  </div>
                  <div className="room-caption">
                    <h3>
                      <a href="rooms.html">
                        Pelatihan Instalasi Sistem Operasi Linux{" "}
                      </a>
                    </h3>
                    <div className="per-night">
                      <span>
                        <u>26</u>Februari <span>2022</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="single-room mb-50">
                  <div className="room-img">
                    <a href="rooms.html">
                      <img
                        src="assets/img/gallery/proker2.jpg"
                        height="235px"
                        alt
                      />
                    </a>
                  </div>
                  <div className="room-caption">
                    <h3>
                      <a href="rooms.html">Pelatihan Fullstack Developer</a>
                    </h3>
                    <div className="per-night">
                      <span>
                        <u>12 &amp; 13</u>Maret<span>2022</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="single-room mb-50">
                  <div className="room-img">
                    <a href="rooms.html">
                      <img
                        src="assets/img/gallery/jeongmara.JPG"
                        height="235px"
                        alt
                      />
                    </a>
                  </div>
                  <div className="room-caption">
                    <h3>
                      <a href="rooms.html">Out Bond Dies Natalies UKM</a>
                    </h3>
                    <div className="per-night">
                      <span>
                        <u>4 &amp; 5</u>Juni<span>2022</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="single-room mb-50">
                  <div className="room-img">
                    <a href="rooms.html">
                      <img
                        src="assets/img/gallery/cangkruk.jpg"
                        height="235px"
                        alt
                      />
                    </a>
                  </div>
                  <div className="room-caption">
                    <h3>
                      <a href="rooms.html">
                        Cangkruk Mikir Garap Koding (CangKir GaDing)
                      </a>
                    </h3>
                    <div className="per-night">
                      <span>
                        <u>03</u>Juli<span>2022</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="single-room mb-50">
                  <div className="room-img">
                    <a href="rooms.html">
                      <img
                        src="assets/img/hero/pelatihan2.jpg"
                        height="235px"
                        alt
                      />
                    </a>
                  </div>
                  <div className="room-caption">
                    <h3>
                      <a href="rooms.html">
                        Workshop Desain Web SMA/SMK Sederajat
                      </a>
                    </h3>
                    <div className="per-night">
                      <span>
                        <u>26 &amp; 27</u>Juli<span>2022</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="single-room mb-50">
                  <div className="room-img">
                    <a href="rooms.html">
                      <img src="assets/img/rooms/web.jpg" height="235px" alt />
                    </a>
                  </div>
                  <div className="room-caption">
                    <h3>
                      <a href="rooms.html">
                        Lomba Desain Web Antar Pelajar Se-Banyuwangi
                      </a>
                    </h3>
                    <div className="per-night">
                      <span>
                        <u>23 Juli &ndash; 01</u>Agustus <span>2022</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Annual Work End */}
        {/* Gallery img Start*/}
        <div className="gallery-area fix">
          <div className="container-fluid p-0">
            <div className="row">
              <div className="col-md-12">
                <div className="gallery-active owl-carousel">
                  <div className="gallery-img">
                    <a href="#">
                      <img src="assets/img/gallery/pelatihan.jpg" alt />
                    </a>
                  </div>
                  <div className="gallery-img">
                    <a href="#">
                      <img src="assets/img/gallery/Mikrotik Jaringan.jpg" alt />
                    </a>
                  </div>
                  <div className="gallery-img">
                    <a href="#">
                      <img src="assets/img/gallery/umbul.jpg" alt />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Gallery img End*/}
      </Layout>
    </>
  );
}
