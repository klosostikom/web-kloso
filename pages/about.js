import Head from "next/head";
import Image from "next/image";
import AboutMe from "../component/aboutme";
import Blog from "../component/blog";
import Layout from "../component/layout";
import OurDivision from "../component/ourdivision";
import Proker from "../component/proker";
import Slider from "../component/slider";
import styles from "../styles/Home.module.css";

export default function About() {
  return (
      <Layout>
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
                    <a href="rooms.html"><img src="assets/img/rooms/Banner.png" height="235px" alt /></a>
                </div>
                <div className="room-caption">
                    <h3><a href="rooms.html">Pelatihan Instalasi Sistem Operasi Linux </a></h3>
                    <div className="per-night">
                    <span><u>26</u>Februari <span>2022</span></span>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="single-room mb-50">
                <div className="room-img">
                    <a href="rooms.html"><img src="assets/img/rooms/fullstack(1).png" height="235px" alt /></a>
                </div>
                <div className="room-caption">
                    <h3><a href="rooms.html">Pelatihan Fullstack Developer</a></h3>
                    <div className="per-night">
                    <span><u>12 &amp; 13</u>Maret<span>2022</span></span>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="single-room mb-50">
                <div className="room-img">
                    <a href="rooms.html"> <img src="assets/img/rooms/Camping.JPG" height="235px" alt /></a>
                </div>
                <div className="room-caption">
                    <h3><a href="rooms.html">Out Bond Dies Natalies UKM</a></h3>
                    <div className="per-night">
                    <span><u>4 &amp; 5</u>Juni<span>2022</span></span>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="single-room mb-50">
                <div className="room-img">
                    <a href="rooms.html"><img src="assets/img/rooms/web design.jpg" height="235px" alt /></a>
                </div>
                <div className="room-caption">
                    <h3><a href="rooms.html">Workshop Desain Web dengan SMA/SMK Sederajat</a></h3>
                    <div className="per-night">
                    <span><u>25 &amp; 26</u>Juni<span>2022</span></span>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="single-room mb-50">
                <div className="room-img">
                    <a href="rooms.html"><img src="assets/img/rooms/web.jpg" height="235px" alt /></a>
                </div>
                <div className="room-caption">
                    <h3><a href="rooms.html">Lomba Desain Web tingkat SMA/SMK Sederajat</a></h3>
                    <div className="per-night">
                    <span><u>2 &amp; 3</u>Juli <span>2022</span></span>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="single-room mb-50">
                <div className="room-img">
                    <a href="rooms.html"> <img src="assets/img/rooms/CangKir GaDing.jpg" height="235px" alt /></a>
                </div>
                <div className="room-caption">
                    <h3><a href="rooms.html">Cangkruk Mikir Garap Koding (CangKir GaDing)</a></h3>
                    <div className="per-night">
                    <span><u>09</u>Juli<span>2022</span></span>
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
                    <a href="#"><img src="assets/img/gallery/gallery1.jpg" alt /></a>
                  </div>
                  <div className="gallery-img">
                    <a href="#"><img src="assets/img/gallery/Outbond Di Umbul Bening.jpg" alt /></a>
                  </div>
                  <div className="gallery-img">
                    <a href="#"><img src="assets/img/gallery/gallery3.jpg" alt /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Gallery img End*/}
      </Layout> 
  );
};