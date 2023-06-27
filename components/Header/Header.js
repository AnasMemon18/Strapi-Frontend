export default function Header(props) {
  const menuItems = props.headerItems || [];
  return (
    <header id="home">
      <nav id="gtco-main-nav" className="navbar navbar-expand-lg navbar-light menubar">
        <div className="container-fluid">
          <a className="navbar-brand col-lg-3 col-md-4 col-sm-4" href="#">
            <img src={`${props.logo?`http://localhost:1337${props.logo}`:"images/logo.svg"}`} alt="logo" style={{ maxWidth: '250px' }} />
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#site-nav" aria-controls="site-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse collapse navbar-collapse col-lg-9 col-md-8 col-sm-8" id="site-nav">
            <ul className="navbar-nav text-sm-left ml-auto menulink">
              {menuItems.map((item, index) => {
                return (
                  <li className={`nav-item`} key={item.id}>
                    <a className={`nav-link`}>{item.attributes.header_names}</a>
                  </li>
                );
              })}

              <li className="nav-item text-center"><a className="hire-btn txt-green ">Hire Resources</a></li>
              <li className="nav-item"><a className="link_btn golden-btn">Get a Quote</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
