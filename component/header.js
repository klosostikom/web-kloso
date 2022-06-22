export default function Header() {
    return (
        <header>
            <div classname="header-area header-sticky">
            <div classname="main-header ">
                <div classname="container">
                <div classname="row align-items-center">
                    <div classname="col-xl-2 col-lg-2">
                    <div classname="logo">
                        <a href="/index"><img src="assets/img/logo/logo.jpg" alt="logo-kloso" /></a>
                    </div>
                    </div>
                    <div classname="col-xl-8 col-lg-8">
                    <div classname="main-menu f-right d-none d-lg-block">
                        <nav>
                        <ul id="navigation">   
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/division">Division</a></li>
                            <li><a href="/gallery">Gallery</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                        </nav>
                    </div>
                    </div>
                    <div classname="col-xl-2 col-lg-2">
                    <div classname="header-btn">
                        <a href="#" classname="btn btn1 d-none d-lg-block ">Log In</a>
                    </div>
                    </div>
                    <div classname="col-12">
                    <div classname="mobile_menu d-block d-lg-none">
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </header>
    )
};