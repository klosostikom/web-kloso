export default function Proker(){
    return(
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
                    <a href="gallery.js"><img src="assets/img/rooms/Banner.png" height="235px" alt /></a>
                  </div>
                  <div className="room-caption">
                    <h3><a href="gallery.js">Pelatihan Instalasi Sistem Operasi Linux </a></h3>
                    <div className="per-night">
                      <span><u>26</u>Februari <span>2022</span></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="single-room mb-50">
                  <div className="room-img">
                    <a href="gallery.js"><img src="assets/img/rooms/fullstack(1).png" height="235px" alt /></a>
                  </div>
                  <div className="room-caption">
                    <h3><a href="gallery.js">Pelatihan Fullstack Developer</a></h3>
                    <div className="per-night">
                      <span><u>12 &amp; 13</u>Maret<span>2022</span></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="single-room mb-50">
                  <div className="room-img">
                    <a href="gallery.js"> <img src="assets/img/rooms/Camping.JPG" height="235px" alt /></a>
                  </div>
                  <div className="room-caption">
                    <h3><a href="gallery.js">Out Bond Dies Natalies UKM</a></h3>
                    <div className="per-night">
                      <span><u>4 &amp; 5</u>Juni<span>2022</span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="room-btn pt-70">
                <a href="about.js" className="btn view-btn1">View more  <i className="ti-angle-right" /> </a>
              </div>
            </div>
          </div>
        </section>
    )
}