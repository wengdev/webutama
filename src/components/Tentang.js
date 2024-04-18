//File: scr/components/Tentang.js

import image1 from "../assets/img/products/1.jpg";
import image2 from "../assets/img/products/4.jpg";
import image3 from "../assets/img/products/5.jpg";
import image4 from "../assets/img/products/6.jpg";

const Tentang = () => {
  return (
    <section className="py-5">
      <div className="container py-5">
        <div className="row mb-4 mb-lg-5">
          <div className="col-md-8 col-xl-6 text-center mx-auto">
            <p className="fw-bold text-success mb-2">Mengajar</p>
            <h3 className="fw-bold">Berbagai Bahasa Pemrograman</h3>
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
              <h5 className="fw-bold">Pemrograman Website&nbsp;</h5>
              <p className="text-muted mb-4">
                Kami mengajar pemrograman website dengan teknologi yang
                digunakan di masa kini seperti PHP, Javascript, dan Python
              </p>
              <a
                className="btn btn-primary shadow"
                type="button"
                href="https://en.wikipedia.org/wiki/Website"
              >
                Baca Selengkapnya
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
              <h5 className="fw-bold">Pemrograman Android&nbsp;</h5>
              <p className="text-muted mb-4">
                Kami mengajar pemrograman Android dengan berbagai bahasa
                pemrograman modern seperti Java, Kotlin, React Native, dan
                Flutter{" "}
              </p>
              <a
                href="https://android.com"
                className="btn btn-primary shadow"
                type="button"
              >
                Baca Selengkapnya
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
              <h5 className="fw-bold">Pemrograman Desktop&nbsp;</h5>
              <p className="text-muted mb-4">
                Kami mengajar pemrograman desktop dengan berbagai bahasa
                pemrograman seperti VB .NET, Java, dan C# .NET
              </p>
              <a
                href="https://learn.microsoft.com/en-us/windows/apps/desktop/"
                className="btn btn-primary shadow"
                type="button"
              >
                Baca Selengkapnya
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
              src={image4}
              alt="Service 4"
            />
          </div>
          <div className="col d-md-flex align-items-md-end align-items-lg-center mb-5">
            <div>
              <h5 className="fw-bold">Pemrograman Berbasis Block&nbsp;</h5>
              <p className="text-muted mb-4">
                Kami mengajar pemrograman berbasis block seperti Scratch,
                Blockly, App Inventor, dan lain sebagainya yang cocok bagi Anda
                yang masih pemula dalam bidang pemrograman namun ingin membuat
                aplikasi yang powerful
              </p>
              <a
                href="https://ai2.appinventor.mit.edu/"
                className="btn btn-primary shadow"
                type="button"
              >
                Baca Selengkapnya
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tentang;
