import Image from "next/image";
export default function AboutMe() {
  return (
    <section className="make-customer-area customar-padding fix ">
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-xl-5 col-lg-6">
            <div className="customer-img mb-120 ">
              <Image
                src="/assets/img/customer/about.jpeg"
                className="customar-img1"
                layout="fill"
                alt="About"
              />
              <img
                src="assets/img/customer/about.jpeg"
                className="customar-img1"
                alt="about"
              />
              <img
                src="assets/img/customer/hijau.jpg"
                className="customar-img2"
                alt="background"
              />
              <div className="service-experience heartbeat">
                <h3>
                  12 Years <br />
                  Established
                </h3>
              </div>
            </div>
          </div>
          <div className=" col-xl-4 col-lg-4">
            <div className="customer-caption">
              <span>About Our Community</span>
              <h2>Get more experience with us</h2>
              <div className="caption-details">
                <p className="pera-dtails">
                  Berdiri sejak 03 Juni 2015, komunitas ini merupakan salah satu
                  UKM yang ada di STIKOM PGRI Banyuwangi. KLOSO bergerak
                  dibidang pemrograman dan sistem operasi linux
                </p>
                <a
                  href="https://chat.whatsapp.com/F1zgMQrbk9aBphPM2Tc1I9"
                  className="btn more-btn1"
                >
                  Join Us <i className="ti-angle-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
