import Navbar from "../components/navbar";
import template_img from "../assets/images/template.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Navbar />

      <div className="home-continer">
        <img src={template_img} className="img-fluid  position-absolute home-continer-img_opacity" alt="..." style={{ width: "100%", height: "70vh" }}></img>

        <div className=" home-continer-img-texts ">
          <p className="mb-0  text-warning home-continer-paragraph-sizing">
            Just Enjoy the Cinemas .
          </p>
          <p className="mb-0 fs-3 fw-bolder text-light">
            Cinema is a reflection of society and, in most cases, has the
            ability to be a mirror and not just <br />
            show the problems but also give solutions and help them reach a
            large number of <br />
            people through faces and voices that matter.
          </p>

          <Link className="btn btn-warning fs-3 mt-3 rounded-3" to="/Dashboard">
            view All Genere
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
