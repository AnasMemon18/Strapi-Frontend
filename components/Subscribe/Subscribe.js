const Subscribe = () => {
    return (
        
    <section className="newsletter bg_lightgray">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="box-green-th">
                    <div className="row">
                        <div className="col-md-10 mx-auto">
                            <div className="row align-items-center">
                                <div className="col-md-4">
                                    <img src="images/mail.svg" />
                                </div>
                                <div className="col-md-8">
                                    <h3 className="text-white mb_30">
                                        Subscribe to our newsletter and get the latest updated.
                                    </h3>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Your work email address" />
                                        <button className="btn btn-th-black" type="button" style={{cursor: "pointer"}}>
                                            Subscribe
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    )
}

export default Subscribe