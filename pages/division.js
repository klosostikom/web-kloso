import Layout from "../component/layout";

export default function Division() {
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
                  <span>Division</span>
                  <h2>Our Division</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* slider Area End*/}
      {/* Dining Start */}
      <div className="dining-area dining-padding-top">
        {/* Single Left img */}
        <div className="single-dining-area left-img">
          <div className="container">
            <div className="row justify-content-end">
              <div className="col-lg-8 col-md-8">
                <div className="dining-caption">
                  <span>Our Division</span>
                  <h3>Programming Division</h3>
                  <p>
                    Divisi Programming adalah salah satu divisi yang ada di UKM
                    K.L.O.S.O yang mempelajari tentang ilmu pemrograman. Nah,
                    programming itu sendiri berasal dari kata program.Dalam
                    programming, kita akan berkutak pada script-script atau
                    source code pun bahasa pemrograman. Keuntungan dari
                    bergabung di programming ialah kita bisa membuat suatu
                    website sendiri dan juga mengetahui bahasa pemrograman agar
                    bisa menjadi seorang programer.
                  </p>
                  <a href="#" className="btn border-btn">
                    Learn More <i className="ti-angle-right" />{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* single Right img */}
        <div className="single-dining-area right-img">
          <div className="container">
            <div className="row justify-content-start">
              <div className="col-lg-8 col-md-8">
                <div className="dining-caption text-right">
                  <span>Our Division</span>
                  <h3>Development Division</h3>
                  <p>
                    Divisi pengembangan minat bakat merupakan divisi yang
                    bertanggung jawab atas perkembangan minat dan bakat yang
                    dimiliki oleh anggota maupun pengurus UKM K.L.O.S.O. Yang
                    mana divisi ini mengarah pada pengembangan minat bakat
                    melalui adanya kelas pengembangan dan pendelegasian. Dengan
                    adanya divisi ini diharapkan anggota dan pengurus dapat
                    mengembangkan softskill yang dimiliki dan nantinya dapat
                    bermanfaat untuk diri sendiri, orang lain, juga untuk UKM
                    K.L.O.S.O.
                  </p>
                  <a href="#" className="btn border-btn">
                    Learn More <i className="ti-angle-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Single Left img */}
        <div className="single-dining-area left-img">
          <div className="container">
            <div className="row justify-content-end">
              <div className="col-lg-8 col-md-8">
                <div className="dining-caption">
                  <span>Our Division</span>
                  <h3>Business Division</h3>
                  <p>
                    Divisi Bisnis adalah salah satu divisi yang ada di UKM
                    K.L.O.S.O yang mempelajari tentang ilmu bisnis. Nah, Bisnis
                    itu sendiri merupakan kegiatan yang dilakukan oleh individu
                    dan organisasi yang menciptakan nilai melalui produk barang
                    dan jasa untuk memperoleh keuntungan dan memenuhi kebutuhan
                    masyarakat.Dengan mengelola website dan media sosial milik
                    UKM yang ada.
                  </p>
                  <a href="#" className="btn border-btn">
                    Learn More <i className="ti-angle-right" />{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Dining End */}
      {/* Gallery img Start*/}
      <div className="gallery-area fix">
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-md-12">
              <div className="gallery-active owl-carousel">
                <div className="gallery-img">
                  <a href="#">
                    <img src="assets/img/gallery/outbond.JPG" alt />
                  </a>
                </div>
                <div className="gallery-img">
                  <a href="#">
                    <img src="assets/img/gallery/acara.JPG" alt />
                  </a>
                </div>
                <div className="gallery-img">
                  <a href="#">
                    <img src="assets/img/gallery/briefing.JPG" alt />
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
