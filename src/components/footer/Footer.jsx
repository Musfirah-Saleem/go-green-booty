import "./footer.css";

const Footer = () => {
  return (
    <div className="custom__bg">
      <div className="container custom__cont__footer">
        <div className="con__left">
          <img src="./assets/mainlogo.svg" alt="" />
          <div className="icon__footer">
            <a href="/">
              <img src="./assets/facebook.svg" alt="" />
            </a>
            <a href="/">
              <img src="./assets/tiktok.svg" alt="" />
            </a>
            <a href="/">
              <img src="./assets/instagram.svg" alt="" />
            </a>
          </div>
        </div>
        <div className="con__right">
          <p>Subscribe</p>
          <input type="text" placeholder="Enter your email" />
          <button>Subscribe</button>

          <p>
            By subscribing you agree to our Terms, Conditions and Privacy Policy
          </p>
        </div>
      </div>
      <div className="container custom__footer__end">
        <div className="custom__footer__end_right">
          <ul>
            <li>
              <a href="/">Privacy Policy</a>
            </li>
            <li>
              <a href="/">Terms & Conditions</a>
            </li>
            <li>
              <a href="/">Warranty</a>
            </li>
          </ul>
        </div>

        <div className="custom__footer__end_left">
          <p>©2023, All right reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
