const Services = (props) => {
    return (
        <section className="services ptb_90">
            <div className="section_title flex mb_50">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 flex-left">
                            <div className="top_heading">
                                <h2>Our Services</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="services_box flex">
                <div className="container">
                    <div className="row">

                        {props.services.map((item, index) => {
                            return (
                                <div className="col-sm-3" key={index}>
                                    <div className="service_box">
                                        <div className="icon_box mb_30">
                                            <img src={`http://localhost:1337${item.image}`} alt={item.title} />
                                        </div>
                                        <h4>{item.title}</h4>
                                        <p>{item.description}</p>
                                        <a href="#" className="cmn_link green">
                                            Explore
                                        </a>
                                    </div>
                                </div>
                            );
                        })}

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;