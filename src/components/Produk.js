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
            <h2 className="fw-bold">
              Beberapa Sample Aplikasi yang Pernah Kami Buat Bersama Murid-murid
              kami
            </h2>
            <p className="text-muted">
              Terdapat beragam aplikasi yang kami buat yaitu berbasis website,
              Android, dan Desktop
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
                <h4 className="fw-bold">
                  Aplikasi Absensi Berbasis Geo lokasi
                </h4>
                <p className="text-muted">
                  Aplikasi ini merupakan hasil karya seorang siswa yang kami
                  latih untuk membuat sebuah aplikasi dengan bahasa pemrograman
                  PHP dan menggunakan framework laravel yang pada akhirnya
                  membuat absensi berbasis lokasi
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
                <h4 className="fw-bold">Aplikasi E-Voting</h4>
                <p className="text-muted">
                  Aplikasi ini merupakan hasil karya seorang siswa yang kami
                  latih untuk membuat sebuah aplikasi dengan bahasa javascript
                  dengan menggunakan teknologi express js yang pada akhirnya
                  membuat aplikasi dummy untuk E-Voting
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
                <span className="badge bg-primary mb-2">Desktop</span>
                <h4 className="fw-bold">Aplikasi Sistem Penjualan Makanan</h4>
                <p className="text-muted">
                  Aplikasi ini merupakan hasil karya siswa yang kami latih yang
                  ditujukan untuk perlombaan LKS tingkat kota Cimahi dan
                  memenangkan juara 1. Aplikasi ini dibangun dengan database SQL
                  Server dan bahasa Pemrograman C#
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
                <h4 className="fw-bold">Aplikasi Dwilingo Kids</h4>
                <p className="text-muted">
                  Aplikasi ini merupakan hasil karya seorang siswa yang kami
                  latih untuk membuat sebuah aplikasi berbasis android dengan
                  bahasa java yang bertujuan untuk membuat sebuah aplikasi
                  E-Learning sederhana
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
