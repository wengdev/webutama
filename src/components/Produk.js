import image1 from "../assets/img/products/1.jpg";
import image2 from "../assets/img/products/5.jpg";
import image3 from "../assets/img/products/7.jpg";
import image4 from "../assets/img/products/6.jpg";
import image5 from "../assets/img/products/8.jpg";

const Produk = () => {
  return (
    <section className="py-5">
      <div className="container py-5">
        <div className="row mb-5">
          <div className="col-md-8 col-xl-6 text-center mx-auto">
            <h2 className="fw-bold">Our Sample Product</h2>
            <p className="text-muted">
              some examples of our products, be it website, android or desktop
              applications, and coaching
            </p>
          </div>
        </div>
        <div
          className="row row-cols-1 row-cols-md-2 mx-auto"
          style={{ maxWidth: "900px" }}
        >
          <div className="col mb-4">
            <div>
              <a href="#">
                <img
                  className="rounded img-fluid shadow w-100 fit-cover"
                  src={image1}
                  style={{ height: "250px" }}
                />
              </a>
              <div className="py-4">
                <span className="badge bg-primary mb-2">Website</span>
                <h4 className="fw-bold">SIAGELO</h4>
                <p className="text-muted">
                  a location-based attendance system intended for employee
                  attendance was built using the PHP Laravel 8.0 framework for
                  backend and Bootstrap 5.0 for frontend
                </p>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div>
              <a href="#">
                <img
                  className="rounded img-fluid shadow w-100 fit-cover"
                  src={image5}
                  style={{ height: "250px" }}
                />
              </a>
              <div className="py-4">
                <span className="badge bg-primary mb-2">Website</span>
                <h4 className="fw-bold">PEMILU</h4>
                <p className="text-muted">
                  Dummy application for online elections created using express js 
                </p>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div>
              <a href="#">
                <img
                  className="rounded img-fluid shadow w-100 fit-cover"
                  src={image2}
                  style={{ height: "250px" }}
                />
              </a>
              <div className="py-4">
                <span className="badge bg-primary mb-2">
                  Desktop Application
                </span>
                <h4 className="fw-bold">Sistem Penjualan Makanan</h4>
                <p className="text-muted">
                  a food sales system created to record food data and food sales
                  (cashiers) and built using the C# .NET programming language.
                </p>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div>
              <a href="#">
                <img
                  className="rounded img-fluid shadow w-100 fit-cover"
                  src={image3}
                  style={{ height: "250px" }}
                />
              </a>
              <div className="py-4">
                <span className="badge bg-primary mb-2">Android</span>
                <h4 className="fw-bold">Dwilingo Kids</h4>
                <p className="text-muted">
                  Mobile Learning application for language learning. For the
                  Android side it is built using the Java Programming Language
                  and for the server side it uses Laravel
                </p>
              </div>
            </div>
          </div>

          <div className="col mb-4">
            <div>
              <a href="#">
                <img
                  className="rounded img-fluid shadow w-100 fit-cover"
                  src={image4}
                  style={{ height: "250px" }}
                />
              </a>
              <div className="py-4">
                <span className="badge bg-primary mb-2">Coaching</span>
                <h4 className="fw-bold">Coaching Programming</h4>
                <p className="text-muted">
                  Coding training for elementary to high school students. Basic
                  programming training from using scratch, Appinventor, and to
                  web programming
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Produk;
