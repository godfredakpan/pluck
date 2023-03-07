/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

// import images
import logo from "../../assets/images/logo.png";

// image shape
// import shape from "../../assets/images/shape/shape-1.svg";

import footerShape from "../../assets/images/footer-shape.svg";

import headerShape from "../../assets/images/header-shape-2.svg";

import headerApp from "../../assets/images/header-app.png";

const Home = () => {
return (
<>
    <div>
        <header class="header-area">
            <div class="navbar-area">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <nav class="navbar navbar-expand-lg">
                                <a class="navbar-brand" href="/">
                                    <img src={logo} alt="Logo" />
                                </a>
                                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="toggler-icon"></span>
                                    <span class="toggler-icon"></span>
                                    <span class="toggler-icon"></span>
                                </button>

                                <div class="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                                    <ul id="nav" class="navbar-nav ml-auto">
                                        <li class="nav-item active">
                                            <a class="page-scroll" href="#home">Home</a>
                                        </li>
                                        {/* <li class="nav-item">
                                            <a class="page-scroll" href="#why">Why</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="page-scroll" href="#features">Features</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="page-scroll" href="#screenshots">Screenshots</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="page-scroll" href="#pricing">Pricing</a>
                                        </li> */}
                                        <li class="nav-item">
                                            <a class="page-scroll" href="#download">Get Pluck</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            <div id="home" class="header-hero bg_cover d-lg-flex align-items-center">

                <div class="shape shape-1"></div>
                <div class="shape shape-2"></div>
                <div class="shape shape-3"></div>
                <div class="shape shape-4"></div>
                <div class="shape shape-5"></div>
                <div class="shape shape-6"></div>

                <div class="container">
                    <div class="row align-items-center justify-content-center justify-content-lg-between">
                        <div class="col-lg-6 col-md-10">
                            <div class="header-hero-content">
                                <h3 class="header-title wow fadeInLeftBig" data-wow-duration="1.3s" data-wow-delay="0.2s"><span>Pluck all your Links</span> in one place. </h3>
                                <p class="text wow fadeInLeftBig" data-wow-duration="1.3s" data-wow-delay="0.6s">You only need to share this one and that's it!</p>
                                <ul class="d-flex">
                                    <li><a href="https://rebrand.ly/appland-ud" rel="nofollow" class="main-btn wow fadeInLeftBig" data-wow-duration="1.3s" data-wow-delay="0.8s">Sign Up for free</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6 col-10">
                            <div class="header-image">
                                <img src={headerApp} alt="app" class="image wow fadeInRightBig" data-wow-duration="1.3s" data-wow-delay="0.5s" />
                                <div class="image-shape wow fadeInRightBig" data-wow-duration="1.3s" data-wow-delay="0.8s">
                                    {/* <img src={shape} alt="shape" /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="header-shape-1"></div>
                <div class="header-shape-2">
                    <img src={headerShape} alt="shape" />
                </div>
            </div>
        </header>

        <footer id="footer" class="footer-area">

            <div class="footer-shape shape-1"></div>
            {/* <div class="footer-shape shape-2"></div>
            <div class="footer-shape shape-3"></div> */}
            {/* <div class="footer-shape shape-4"></div>
            <div class="footer-shape shape-5"></div> */}
            <div class="footer-shape shape-6"></div>
            <div class="footer-shape shape-7"></div>
            <div class="footer-shape shape-8">
                <img class="svg" src={footerShape} alt="Shape" />
            </div>


            <div class="footer-copyright">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="copyright d-sm-flex justify-content-between">
                                <div class="copyright-text text-center">
                                    <p class="text">Built by <a rel="nofollow" href="https://irunauto.com">Irun Technology</a></p>
                                </div>

                                <div class="copyright-privacy text-center">
                                    <a href="#">Report Issues</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <a href="#" class="back-to-top"><i class="lni lni-chevron-up"></i></a>
    </div>
</>
);
}

export default Home;
