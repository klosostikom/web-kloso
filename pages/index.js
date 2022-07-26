import AboutMe from "../component/aboutme";
import Blog from "../component/blog";
import Layout from "../component/layout";
import OurDivision from "../component/ourdivision";
import Proker from "../component/proker";
import Slider from "../component/slider";

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
                    <img src="assets/img/gallery/nyanyi.JPG" alt />
                  </a>
                </div>
                <div className="gallery-img">
                  <a href="#">
                    <img src="assets/img/gallery/outbond.JPG" alt />
                  </a>
                </div>
                <div className="gallery-img">
                  <a href="#">
                    <img src="assets/img/gallery/sawer.JPG" alt />
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
