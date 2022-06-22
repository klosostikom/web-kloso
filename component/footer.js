export default function Footer(){
    return(
        <footer>
        {/* Footer Start*/}
        <div className="footer-area black-bg footer-padding">
          <div className="container">
            <div className="row d-flex justify-content-between">
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="single-footer-caption mb-30">
                  {/* logo */}
                  <div className="footer-logo">
                    <a href="index.js"><img src="assets/img/logo/logo.jpg" alt /></a>
                  </div>
                  <div className="footer-social footer-social2">
                    <a href="https://mobile.facebook.com/groups/K.L.O.S.O/?refsrc=deprecated#_="><i className="fab fa-facebook-f" /></a>
                    <a href="https://www.instagram.com/kloso_stikombwi/"><i className="fab fa-instagram" /></a>
                    <a href="komunitaslinuxopensource@gmail.com"><i className="fab fa-google" /></a>
                    <a href="https://www.youtube.com/channel/UC-yiq811d63kuX2PK2Zc3SQ"><i className="fab fa-youtube" /></a>
                  </div>
                  <div className="footer-pera">
                    <p>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                      Copyright © All rights reserved | This template is made with <i className="ti-heart" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                      {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-5">
                <div className="single-footer-caption mb-30">
                  <div className="footer-tittle">
                    <h4>Quick Links</h4>
                    <ul>
                      <li><a href="about.js">Our Division</a></li>
                      <li><a href="division.js">Our Work Program</a></li>
                      <li><a href="division.js">Our Photo Gallery</a></li>
                      <li><a href="about.js">About UKM K.L.O.S.O</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3">
                <div className="single-footer-caption mb-30">
                  <div className="footer-tittle">
                    <h4>Reservations</h4>
                    <ul>
                      <li><a href="whatsapp://send?text=Hello&phone=+6281216799462">Tel: (+62) 8121 -679 - 9462 </a></li>
                      <li><a href="https://mobile.facebook.com/groups/K.L.O.S.O/?refsrc=deprecated#_=">Facebook : K.L.O.S.O</a></li>
                      <li><a href="mailto:komunitaslinuxopensource@gmail.com">Email : kloso@gmail.com</a></li>
                      <li><a href="https://www.instagram.com/kloso_stikombwi/">Instagram : @kloso_stikombwi</a></li>
                      <li><a href="https://www.youtube.com/channel/UC-yiq811d63kuX2PK2Zc3SQ">You Tube : UKM KLOSO STIKOM PGRI Bwi</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4  col-sm-5">
                <div className="single-footer-caption mb-30">
                  <div className="footer-tittle">
                    <h4>Our Location</h4>
                    <ul>
                      <li><a href="#">Jl. Jenderal Ahmad Yani No.80, </a></li>
                      <li><a href="#">Taman Baru, Kec. Banyuwangi, Kabupaten Banyuwangi, Jawa Timur</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer End*/}
      </footer>
    )
}