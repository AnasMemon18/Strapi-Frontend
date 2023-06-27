const Team = (props) => {
    console.log(props)
    return (
        <section className="services ptb_90 bg_lightgray">
            <div className="section_title flex mb_50">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-9 flex-left">
                            <div className="top_heading">
                                <h2>Hire a team</h2>
                            </div>
                        </div>
                        <div className="col-sm-3 flex-right">
                            <div className="top_link">
                                <a href="#" className="link_btn">See all resources</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="services_box flex">
                <div className="container">
                    <div className="row">


                        {props.teams.map((team, index) => {
                            return (
                            <div className="col-sm-3">
                                <div className="service_box">
                                    <div className="icon_box mb_30">
                                    <img src={`http://localhost:1337${team.image}`} alt={team.title} />
                                    </div>
                                    <h4>{team.title}</h4>
                                    <p>
                                       {team.description}
                                    </p>
                                    <a href="#" className="cmn_link blue">Explore</a>
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

export default Team