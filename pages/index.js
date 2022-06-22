// import Head from "next/head";
// import Image from "next/image";
import AboutMe from "../component/aboutme";
import Blog from "../component/blog";
import Layout from "../component/layout";
import OurDivision from "../component/ourdivision";
// import Preloader from "../component/preload";
import Proker from "../component/proker";
import Slider from "../component/slider";
// import styles from "../styles/Home.module.css";
// import Script from "next/script";

export default function Home() {
  return (
    <Layout>
      <Slider />
      {/* Make customer Start*/}
      <AboutMe />
      {/* Make customer End*/}
      {/* Annual Work Start */}
      <Proker />
      {/* Annual Work End */}
      {/* Division Start */}
      <OurDivision />
      {/* Division End */}
      {/* Blog Start */}
      <Blog />
      {/* Blog End */}
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
