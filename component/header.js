import Link from "next/link";
export default function Header() {
  return (
    <header>
      <div className="header-area header-sticky">
        <div className="main-header ">
          <div className="container">
            <div className="row align-items-center">
              {/* logo */}
              <div className="col-xl-2 col-lg-2">
                <div className="logo">
                  <a href="index.html">
                    <img src="assets/img/logo/logo.jpg" alt="logo-kloso" />
                  </a>
                </div>
              </div>
              <div className="col-xl-8 col-lg-8">
                {/* main-menu */}
                <div className="main-menu f-right d-none d-lg-block">
                  <nav>
                    <ul id="navigation">
                      <li>
                        <Link href="/">
                          <a>Home</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/about">
                          <a>About</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/division">
                          <a>Division</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/gallery">
                          <a>Gallery</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/contact">
                          <a>Contact</a>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>

              <div className="col-12">
                <div className="mobile_menu d-block d-lg-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Header End */}
    </header>
  );
}
