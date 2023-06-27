const LatestBlogs = () => {
    return (
        <section className="blog ptb_90 bg_lightgray">
        <div className="section_title flex mb_60">
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 flex-left">
                        <div className="top_heading">
                            <h2>Latest Blogs</h2>
                        </div>
                    </div>
                    <div className="col-sm-3 flex-right">
                        <div className="top_link">
                            <a href="#" className="link_btn">See All Blogs</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="blog_box flex">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="box-img-content">
                            <div className="box-img">
                                <img src="images/case-study.png" />
                            </div>
                            <div className="box-content">
                                <div className="box-content__block1 mb-20">
                                    <span className="badge-th-gray">In Blogs</span>
                                    <span className="blog_date">March 28, 2022</span>
                                </div>
                                <a href="#" className="cmn_linkblog  mb_20">Why does your website need a wordpress expert?</a>
                                <a href="#" className="cmn_link green">Explore</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="box-img-content">
                            <div className="box-img">
                                <img src="images/case-study.png" />
                            </div>
                            <div className="box-content">
                                <div className="box-content__block1 mb-20">
                                    <span className="badge-th-gray">In Blogs</span>
                                    <span className="blog_date">March 28, 2022</span>
                                </div>
                                <a href="#" className="cmn_linkblog  mb_20">Why does your website need a wordpress expert?</a>
                                <a href="#" className="cmn_link green">Explore</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="box-img-content">
                            <div className="box-img">
                                <img src="images/case-study.png" />
                            </div>
                            <div className="box-content">
                                <div className="box-content__block1 mb-20">
                                    <span className="badge-th-gray">In Blogs</span>
                                    <span className="blog_date">March 28, 2022</span>
                                </div>
                                <a href="#" className="cmn_linkblog  mb_20">Why does your website need a wordpress expert?</a>
                                <a href="#" className="cmn_link green">Explore</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    )
}

export default LatestBlogs