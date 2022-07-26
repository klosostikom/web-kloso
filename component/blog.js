export default function Blog() {
  return (
    <div className="blog-area blog-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            {/* Seciton Tittle  */}
            <div className="font-back-tittle mb-50">
              <div className="archivment-front">
                <h3>Our News</h3>
              </div>
              <h3 className="archivment-back">Recent News</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-6">
            {/* Single Blog */}
            <div className="single-blog mb-30">
              <div className="blog-img">
                <a href="">
                  <img src="assets/img/our_blog/Mikrotik Jaringan.jpg" alt />
                </a>
              </div>
              <div className="blog-caption">
                <div className="blog-cap-top d-flex justify-content-between mb-40">
                  <span>news</span>
                  <ul>
                    <li>
                      by<a href="#">Renaldi Sigit P.</a>
                    </li>
                  </ul>
                </div>
                <div className="blog-cap-mid">
                  <p>
                    <a href="">Program Kerja Pelatihan Mikrotik Jaringan </a>
                  </p>
                </div>
                {/* Comments */}
                <div className="blog-cap-bottom d-flex justify-content-between">
                  <span>Feb 28, 2020</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6">
            {/* Single Blog */}
            <div className="single-blog mb-30">
              <div className="blog-img">
                <a href="">
                  <img src="assets/img/our_blog/pelantikan.jpeg" alt />
                </a>
              </div>
              <div className="blog-caption">
                <div className="blog-cap-top d-flex justify-content-between mb-40">
                  <span>news</span>
                  <ul>
                    <li>
                      by<a href="#"> Dedi Kurniawan</a>
                    </li>
                  </ul>
                </div>
                <div className="blog-cap-mid">
                  <p>
                    <a href="">Pelantikan Ketua UKM Periode 2022/2022</a>
                  </p>
                </div>
                {/* Comments */}
                <div className="blog-cap-bottom d-flex justify-content-between">
                  <span>Feb 28, 2020</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6">
            {/* Single Blog */}
            <div className="single-blog mb-30">
              <div className="blog-img">
                <a href="">
                  <img src="assets/img/our_blog/workshop.jpg" alt />
                </a>
              </div>
              <div className="blog-caption">
                <div className="blog-cap-top d-flex justify-content-between mb-40">
                  <span>news</span>
                  <ul>
                    <li>
                      by<a href="#"> Dinda Inne</a>
                    </li>
                  </ul>
                </div>
                <div className="blog-cap-mid">
                  <p>
                    <a href="">
                      Workshop Web Desain Pemula Tingkat SMA/SMK Sederajat
                    </a>
                  </p>
                </div>
                {/* Comments */}
                <div className="blog-cap-bottom d-flex justify-content-between">
                  <span>Feb 28, 2020</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
