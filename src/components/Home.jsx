import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import himg from '../img/hero/hero-img.png'
import service1 from '../img/icon/services1.svg'
import service2 from '../img/icon/services2.svg'
import service3 from '../img/icon/services3.svg'
import about1 from '../img/gallery/about1.jpg'
import ratting from '../img/icon/notification.svg'
import notify1 from '../img/icon/notification1.svg'
import cusicon1 from '../img/icon/stack1.svg';
import cusicon2 from '../img/icon/stack2.svg';
import cusicon3 from '../img/icon/stack3.svg';
import cusicon4 from '../img/icon/stack4.svg';
import stuff1 from '../img/gallery/stuffs1.jpg';
import stuff2 from '../img/gallery/stuffs2.jpg';
import stuff3 from '../img/gallery/stuffs3.jpg';
import stufficon1 from '../img/icon/icon1.svg';
import logo from '../img/logo/logo2_footer.png';

export default class Home extends Component {
render() {
return (
<>
    <section id="home">
        <div className="container position-relative">
            <div className="row">
                <div className="col-md-6">
                    <div className="header-left">
                        <h1>We provide best IT solution</h1>
                        <p>Naxly bring the power of data science and artificial intelligence to every business.</p>
                        <NavLink className="service-btn" to="">Our Services</NavLink>
                    </div>
                </div>
                <div className="header-right">
                    <img className="img-fluid" src={himg} alt="" />
                </div>
            </div>
        </div>
    </section>
    <section id="services">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="heading">
                        <span>Our Services</span>
                        <h2>IT solutions for startup and enterprises</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 text-center">
                    <div className="single-service">
                        <div className="logo-icon">
                            <img src={service1} alt="" />
                        </div>
                        <div className="service-caption">
                            <h4>Managed IT services</h4>
                            <p>Naxly bring the power of data science and artificial intelligence to every business.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 text-center">
                    <div className="single-service">
                        <div className="logo-icon">
                            <img src={service2} alt="" />
                        </div>
                        <div className="service-caption">
                            <h4>Backup and recovery</h4>
                            <p>Naxly bring the power of data science and artificial intelligence to every business.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 text-center">
                    <div className="single-service">
                        <div className="logo-icon">
                            <img src={service3} alt="" />
                        </div>
                        <div className="service-caption">
                            <h4>Cyber security</h4>
                            <p>Naxly bring the power of data science and artificial intelligence to every business.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="growup">
        <div className="container">
            <div className="row">
                <div className="col-md-6 d-none d-lg-block">
                    <div className="left-grow">
                        <img className="img-fluid" src={about1} alt="" />
                    </div>
                    <div className="ratting-point">
                        <div className="ratting-img">
                            <img src={ratting} alt="" />
                        </div>
                        <div className="ratting-caption">
                            <h3>New Features</h3>
                            <p>You have received notification</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="right-content">
                        <div className="right-grow-c">
                            <h2>Grow your<br></br> business fast.</h2>
                        </div>
                        <div className="single-right-grow">
                            <div className="grow-r-logo">
                                <img src={notify1} alt="" />
                            </div>
                            <div className="right-grow-caption">
                                <h3>Engage Teammates</h3>
                                <p>Naxly bring the power of data science and artificial intelligence to every business.
                                </p>
                            </div>
                        </div>
                        <div className="single-right-grow mb-5">
                            <div className="grow-r-logo">
                                <img src={notify1} alt="" />
                            </div>
                            <div className="right-grow-caption">
                                <h3>Level Up Productivity</h3>
                                <p>Naxly bring the power of data science and artificial intelligence to every business.
                                </p>
                            </div>
                        </div>
                        <NavLink className="service-btn" to="">Our Services</NavLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="customized">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="cus-sec-title">
                        <span>Industries We Serve</span>
                        <h2>IT services customized for your industry</h2>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="cus-right-content">
                        <p>No matter the business, NanoSoft has you covered with industry compliant solutions,
                            customized to your company’s specific needs.</p>
                    </div>
                </div>
            </div>
            <div className="row mb-5">
                <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
                    <div className="cus-item">
                        <div className="cus-item-icon">
                            <img src={cusicon1} alt="" />
                        </div>
                        <div className="cus-item-title">
                            <h5>Manufacturing</h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
                    <div className="cus-item">
                        <div className="cus-item-icon">
                            <img src={cusicon2} alt="" />
                        </div>
                        <div className="cus-item-title">
                            <h5>Education & Health</h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
                    <div className="cus-item">
                        <div className="cus-item-icon">
                            <img src={cusicon3} alt="" />
                        </div>
                        <div className="cus-item-title">
                            <h5>Retail & Ecommerce</h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
                    <div className="cus-item">
                        <div className="cus-item-icon">
                            <img src={cusicon4} alt="" />
                        </div>
                        <div className="cus-item-title">
                            <h5>Travel & Hospitality</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="cus-bottom-title">
                        <p>Need a Technology support? <NavLink className="cus-get" to="">Get Started Now</NavLink>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="count-down-area">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="count-down-title">
                        <h2>ITKol - Partner for Your Business</h2>
                        <p>We understand the complexities of modern markets and translate them into real business
                            solutions for automotive, financial, insurance, pharma & life sciences, and real estate with
                            more to come.</p>
                        <NavLink to="" className="get-btn">Request a Quote</NavLink>
                    </div>
                </div>
            </div>
            <div className="row pt-3">
                <div className="col-md-4">
                    <div className="single-count">
                        <h1 className="counter">2500+</h1>
                        <p>We understand the complexities of modern markets</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="single-count">
                        <h1 className="counter">350+</h1>
                        <p>We understand the complexities of modern markets</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="single-count">
                        <h1 className="counter">20+</h1>
                        <p>We understand the complexities of modern markets</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="great-stuffs">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="stuff-title">
                        <h2>Some of Our Great Stuffs</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="stuff-img">
                        <img className="img-fluid" src={stuff1} alt="" />
                    </div>
                    <div className="location-details">
                        <span className="location-btn"></span>
                        <h4>INSPIRE</h4>
                        <p>design studio</p>
                        <img src={stufficon1} alt="" />
                    </div>
                    <div className="stuff-f-title">
                        <h4>The Security Risks of Changing Package Owners</h4>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="stuff-img">
                        <img className="img-fluid" src={stuff2} alt="" />
                    </div>
                    <div className="location-details">
                        <span className="location-btn"></span>
                        <h4>INSPIRE</h4>
                        <p>design studio</p>
                        <img src={stufficon1} alt="" />
                    </div>
                    <div className="stuff-f-title">
                        <h4>The Security Risks of Changing Package Owners</h4>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="stuff-img">
                        <img className="img-fluid" src={stuff3} alt="" />
                    </div>
                    <div className="location-details">
                        <span className="location-btn"></span>
                        <h4>INSPIRE</h4>
                        <p>design studio</p>
                        <img src={stufficon1} alt="" />
                    </div>
                    <div className="stuff-f-title">
                        <h4>The Security Risks of Changing Package Owners</h4>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="solution">
        <div className="container">
            <div className="row">
                <div className="col-12 justify-content-center">
                    <div className="single-question text-center">
                        <div className="solution-icon">
                            <i class="fa fa-play" aria-hidden="true"></i>
                        </div>
                        <h2>Innovative IT Solution for your Business & Startup</h2>
                        <NavLink to="" className="get-btn">Get Started Now</NavLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <footer id="footer-section">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="footer-1">
                        <div className="footer-logo">
                            <img src={logo} alt="" />
                        </div>
                        <div className="footer-content">
                            <p>Duis aute irure dolor inasfa reprehenderit in voluptate velit esse cillum</p>
                            <div className="for-number">
                                <Link className="number" to="#">10 (87) 738-3940</Link>
                            </div>
                            <div className="for-mail">
                                <Link className="mail" to="#">contact@it-kol.com</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="footer-2">
                        <div className="f-heading">
                            <h5>Navigation</h5>
                        </div>
                        <ul className="f-list">
                            <li>
                                <Link className="f-list-item" to="#">Home</Link>
                            </li>
                            <li>
                                <Link className="f-list-item" to="#">About</Link>
                            </li>
                            <li>
                                <Link className="f-list-item" to="#">Services</Link>
                            </li>
                            <li>
                                <Link className="f-list-item" to="#">Blog</Link>
                            </li>
                            <li>
                                <Link className="f-list-item" to="#">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="footer-3">
                        <div className="f-heading">
                            <h5>Services</h5>
                        </div>
                        <ul className="f-list">
                            <li>
                                <Link className="f-list-item" to="#">Drone Mapping</Link>
                            </li>
                            <li>
                                <Link className="f-list-item" to="#">Real State</Link>
                            </li>
                            <li>
                                <Link className="f-list-item" to="#">Commercial</Link>
                            </li>
                            <li>
                                <Link className="f-list-item" to="#">Construction</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="footer-4">
                        <div className="f-heading">
                            <h5>Subscribe newsletter</h5>
                        </div>
                        <div className="footer-content">
                            <p>Subscribe our newsletter to get updates about our services and offers.</p>
                            <div className="for-input">
                                <input className="form-control" type="email" placeholder="Email Address" />
                                <Link className="f-arrow" to="#"><i class="fa fa-arrow-right" aria-hidden="true"></i>
                                </Link>
                            </div>
                            <div className="for-socials">
                                <Link className="f-s-icon" to="#"><i class="fa fa-facebook-official"
                                    aria-hidden="true"></i></Link>
                                <Link className="f-s-icon" to="#"><i class="fa fa-instagram" aria-hidden="true"></i>
                                </Link>
                                <Link className="f-s-icon" to="#"><i class="fa fa-linkedin" aria-hidden="true"></i>
                                </Link>
                                <Link className="f-s-icon" to="#"><i class="fa fa-youtube" aria-hidden="true"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <div className="copyright">
        <p>Copyright &copy; 2021 All rights reserved | This template is made with by <Link className="my-website" to="//minhazahmedrafi.github.io/coderminhaz/" target="_blank">coderminhaz</Link></p>
    </div>
</>
)
}
}