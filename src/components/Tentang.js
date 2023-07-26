//File: scr/components/Tentang.js

import image1 from "../assets/img/products/1.jpg";
import image2 from "../assets/img/products/4.jpg";
import image3 from "../assets/img/products/5.jpg";
const Tentang = () => {
  return (
    <section className="py-5">
      <div className="container py-5">
        <div className="row mb-4 mb-lg-5">
          <div className="col-md-8 col-xl-6 text-center mx-auto">
            <p className="fw-bold text-success mb-2">Our Services</p>
            <h3 className="fw-bold">What we can do for you</h3>
          </div>
        </div>
        <div
          className="row row-cols-1 row-cols-md-2 mx-auto"
          style={{ maxWidth: "900px" }}
        >
          <div className="col mb-5">
            <img
              className="rounded img-fluid shadow"
              src={image1}
              alt="Service 1"
            />
          </div>
          <div className="col d-md-flex align-items-md-end align-items-lg-center mb-5">
            <div>
              <h5 className="fw-bold">Web Application&nbsp;</h5>
              <p className="text-muted mb-4">Website Application Development</p>
              <a
                className="btn btn-primary shadow"
                type="button"
                href="https://en.wikipedia.org/wiki/Website"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
        <div
          className="row row-cols-1 row-cols-md-2 mx-auto"
          style={{ maxWidth: "900px" }}
        >
          <div className="col order-md-last mb-5">
            <img
              className="rounded img-fluid shadow"
              src={image2}
              alt="Service 2"
            />
          </div>
          <div className="col d-md-flex align-items-md-end align-items-lg-center mb-5">
            <div>
              <h5 className="fw-bold">Android Application Development&nbsp;</h5>
              <p className="text-muted mb-4">Android Application Development</p>
              <a
                href="https://android.com"
                className="btn btn-primary shadow"
                type="button"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
        <div
          className="row row-cols-1 row-cols-md-2 mx-auto"
          style={{ maxWidth: "900px" }}
        >
          <div className="col mb-5">
            <img
              className="rounded img-fluid shadow"
              src={image3}
              alt="Service 3"
            />
          </div>
          <div className="col d-md-flex align-items-md-end align-items-lg-center mb-5">
            <div>
              <h5 className="fw-bold">Desktop Application Development&nbsp;</h5>
              <p className="text-muted mb-4">Desktop Application Development</p>
              <a
                href="https://learn.microsoft.com/en-us/windows/apps/desktop/"
                className="btn btn-primary shadow"
                type="button"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tentang;
