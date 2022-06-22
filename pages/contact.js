import Head from "next/head";
import Image from "next/image";
import Layout from "../component/layout";
import styles from "../styles/Home.module.css";

export default function Contact() {
    return (
        <Layout>
        <div className="slider-area">
        <div className="single-slider hero-overly slider-height2 d-flex align-items-center" data-background="assets/img/hero/koding.jpg">
            <div className="container">
            <div className="row ">
                <div className="col-md-11 offset-xl-1 offset-lg-1 offset-md-1">
                <div className="hero-caption">
                    <span>Contact</span>
                    <h2>Contact</h2>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        {/* ================ contact section start ================= */}
        <section className="contact-section">
        <div className="container">
            <div className="d-none d-sm-block mb-5 pb-4">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.8150191135132!2d114.36550231413582!3d-8.221349694083623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd14532ca02e0f1%3A0x487748494ecef50b!2sSekolah%20Tinggi%20Ilmu%20Komputer%20PGRI%20Banyuwangi!5e0!3m2!1sen!2sid!4v1653996510860!5m2!1sen!2sid" width={1200} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
        </div>
        </section>
        {/* ================ contact section end ================= */}
        </Layout>
    )
};