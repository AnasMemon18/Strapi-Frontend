const HomeBanner = () => {
    return (
        <section className="home_banner">
        <div className="container">
            <div className="banner_slider_main">
                <span className="top_title">We are Technomark</span>
                <h1>Your Partner for</h1>
                <div className="text-animation">
                    <div className="text1">
                        <ul className="bxslider">
                            <li>Mobile Apps</li>
                            <li style={{color: "#4c48c8"}}>Websites</li>
                            <li style={{color: "#138b44"}}>Ecommerce</li>
                            <li style={{color: "#4c48c8"}}>Digital Marketing</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="arrow-container">
            <a className="arrow arrow-down" href="#wetechnomark"><img src="images/arrow.svg"/></a>
        </div>
        <a className="chatmsg" href="#">
            <img src="images/chat.svg"/>
        </a>
    </section>
    )
}

export default HomeBanner;