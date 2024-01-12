import "./navbar.css";
import { Link } from "react-router-dom";
const NavBar = (props) => {
  return (
    <div className="container-fluid p-0 navbar__main__main">
      <nav className="navbar navbar-expand-lg navbar-light ">
        <a className="navbar-brand" href="/">
          <img src="./assets/logo.svg" alt="logo" className=" logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse custom__nav justify-content-end align-items-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto me-auto mb-4 d-lg-none nav__my__ul">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/fact">
                Facts
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                How it works
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Commercial Orders
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                FAQS
              </Link>
            </li>
          </ul>
          <div className="right__side__btn">
            <div className="mx-2">
              <button className="sign__up__btn common__btn">Sign Up</button>
            </div>
            <div className="mx-2">
              <button
                onClick={() => props.sufi("musfi")}
                className="login__btn common__btn "
              >
                Login
              </button>
            </div>
            <div className="mx-2">
              <img src="./assets/shooping.svg" alt="shopping icon" />
            </div>
          </div>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg navbar-light ">
        {/* <a className="navbar-brand" href="/">
          <img src='./assets/logo.svg' alt="logo" className=" logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <div className="collapse navbar-collapse custom__nav justify-content-space-between align-items-center">
          <ul className="navbar-nav ms-auto me-auto mb-4 second__nav__ul">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Facts
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                How it works
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Commercial Orders
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                FAQS
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
