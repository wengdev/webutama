//File: scr/components/Home.js
import image1 from "../assets/img/products/1.jpg";
import image2 from "../assets/img/products/5.jpg";
import image3 from "../assets/img/products/4.jpg";
import googleLogo from "../assets/img/brands/google.png";
import microsoftLogo from "../assets/img/brands/microsoft.png";
import appleLogo from "../assets/img/brands/apple.png";
import androidLogo from "../assets/img/brands/android.png";
import twitterLogo from "../assets/img/brands/twitter.png";

const Home = () => {
  return (
    <div>
      <header className="bg-dark">
        <div className="container pt-4 pt-xl-5">
          <div className="row pt-5">
            <div className="col-md-8 col-xl-6 text-center text-md-start mx-auto">
              <div className="text-center">
                <p className="fw-bold text-success mb-2">
                  Voted #1 Code Community
                </p>
                <h1 className="fw-bold">
                  The best solution for you and your customers
                </h1>
              </div>
            </div>
            <div className="col-12 col-lg-10 mx-auto">
              <div
                className="position-relative"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "flex-end",
                }}
              >
                <div
                  style={{
                    flex: "0 0 45%",
                    transform: "translate3d(-15%, 35%, 0)",
                  }}
                >
                  <img
                    className="img-fluid"
                    data-bss-parallax=""
                    data-bss-parallax-speed="0.8"
                    src={image1}
                    alt="Product 1"
                  />
                </div>
                <div
                  style={{
                    flex: "0 0 45%",
                    transform: "translate3d(-5%, 20%, 0)",
                  }}
                >
                  <img
                    className="img-fluid"
                    data-bss-parallax=""
                    data-bss-parallax-speed="0.4"
                    src={image2}
                    alt="Product 2"
                  />
                </div>
                <div
                  style={{
                    flex: "0 0 60%",
                    transform: "translate3d(0, 0%, 0)",
                  }}
                >
                  <img
                    className="img-fluid"
                    data-bss-parallax=""
                    data-bss-parallax-speed="0.25"
                    src={image3}
                    alt="Product 3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="py-5">
        <div className="container text-center py-5">
          <p className="mb-4" style={{ fontSize: "1.6rem" }}>
            Build Application For:
          </p>

          <a href="#">
            {" "}
            <img className="m-3" src={microsoftLogo} alt="Microsoft" />
          </a>
          <a href="#">
            {" "}
            <img className="m-3" src={googleLogo} alt="Google" />
          </a>
          <a href="#">
            {" "}
            <img className="m-3" src={appleLogo} alt="Apple" />
          </a>
          <a href="#">
            {" "}
            <img className="m-3" src={androidLogo} alt="Apple" />
          </a>
        </div>
      </section>
    </div>
  );
};
export default Home;
