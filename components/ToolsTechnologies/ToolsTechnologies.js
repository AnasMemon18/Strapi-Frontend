const ToolsTechnologies = () => {
    return (
        <section className="tools ptb_90">
        <div className="section_title flex mb_60">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="top_heading text-center">
                            <h2>Tools & Technologies</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="tabsection">
            <div className="container">
                <header>
                    <div id="material-tabs">
                        <a id="tab1-tab" href="#tab1" className="active">Web</a>
                        <a id="tab2-tab" href="#tab2">Mobile</a>
                        <a id="tab3-tab" href="#tab3">Database</a>
                        <a id="tab4-tab" href="#tab4">Marketing</a>
                        <span className="yellow-bar"></span>
                    </div>
                </header>

                <div className="tab-content">
                    <div id="tab1">
                        <ul className="tab_content">
                            <li>
                                <img src="images/html.png" alt="img" />
                                <h5>HTML5</h5>
                            </li>
                            <li>
                                <img src="images/php.png" alt="img" />
                                <h5>PHP</h5>
                            </li>
                            <li>
                                <img src="images/dotnet.png" alt="img" />
                                <h5>.Net</h5>
                            </li>
                            <li>
                                <img src="images/angular.png" alt="img" />
                                <h5>Angular.js</h5>
                            </li>
                            <li>
                                <img src="images/nodejs.png" alt="img" />
                                <h5>Node.js</h5>
                            </li>
                            <li>
                                <img src="images/laravel.png" alt="img" />
                                <h5>Laravel</h5>
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>

    )
}

export default ToolsTechnologies;