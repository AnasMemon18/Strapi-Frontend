const Footer = () => {
    return (
        <>
           <footer>
        <div className="container">
            <div className="row">
                <div className="col-sm-3">
                    <img src="images/white-logo.png" className="mb_20" />
                    <p className="gray-txt mb_30 w-230">
                        Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl
                        nunc quam ac sed turpis volutpat. Cursus sed massa non nisi,
                        placerat.
                    </p>
                    <div className="social-icons">
                        <a href="#" className="social-circle"><img src="images/Vector.png" /></a>
                        <a href="#" className="social-circle"><img src="images/linkedin.png" /></a>
                        <a href="#" className="social-circle"><img src="images/Path.png" /> </a>
                        <a href="#" className="social-circle"><img src="images/Path-1.png" /></a>
                    </div>
                </div>
                <div className="col-sm-3 pad_left_60">
                    <h5 className="text-white fw-bold mb-20">Quick Links</h5>
                    <a href="#" className="foot_link">About Us</a>
                    <a href="#" className="foot_link">Blogs</a>
                    <a href="#" className="foot_link">Case Study</a>
                    <a href="#" className="foot_link">Testimonials</a>
                    <a href="#" className="foot_link">Careers<span className="hiring_txt">We’re hiring</span></a>
                </div>
                <div className="col-sm-3">
                    <h5 className="text-white fw-bold mb-20">Services</h5>
                    <a href="#" className="foot_link">Creatives</a>
                    <a href="#" className="foot_link">Digital Marketing</a>
                    <a href="#" className="foot_link">Mobile Apps</a>
                    <a href="#" className="foot_link">Accelerators</a>
                    <a href="#" className="foot_link">Contact Us</a>
                </div>
                <div className="col-sm-3">
                    <h5 className="text-white fw-bold mb-20">Reach us</h5>
                    <a href="mailto:info@TechnoMark.io" className="foot_link mb_25 align-items-center"> <img src="images/Message.png" className="mr-10" />info@TechnoMark.io</a>
                    <a href="te:+1 763-572-8984" className="foot_link mb_25 align-items-center"><img src="images/phone.png" className="mr-10" />+1 763-572-8984</a>
                    <p className="mb_25 foot_link d-flex align-items-top">
                        <img src="images/Location.png" className="mr-10" height="100%" />
                        <span> 526 Hillcrest Circle Fridley, MN 55432 </span>
                    </p>
                </div>
            </div>
        </div>
        <div className="copyright-block">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 d-flex align-items-center justify-content-between">
                        <div>
                            <span className="copyright">Copyright © 2022 Technomark. All Rights Reserved.</span>
                        </div>
                        <div className="terms">
                            <a href="#">Terms &amp; Conditions</a>
                            <a href="#">Privacy Policy</a>
                            <a href="#">Disclaimer</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer></>
    )
}

export default Footer