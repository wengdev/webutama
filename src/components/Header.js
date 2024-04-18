import React from "react";

const Header = () => {
  return (
    <React.Fragment>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Website Wengdev" />
      <nav
        className="navbar navbar-dark navbar-expand-md sticky-top py-3"
        id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="/">
            <span>Wengdev Community</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navcol-1"
          >
            <span className="visually-hidden">Toggle navigation</span>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navcol-1">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/tentang">
                  Tentang
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/kontak">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/produk">
                  Product
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Header;
