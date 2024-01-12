import "./values.css";

const Values = () => {
  return (
    <>
    <div className="container-fluid custom__container ">
      <div>
        <div className="value__up">
          <img src="./assets/Ellipse 23.svg" alt="" />
          <h5>values</h5>
        </div>
        <div className="custom__cont">
          <div className="custom__value">
            <img src="./assets/trust.png" alt="" className="img-fluid"/>
          </div>
          <div className="custom__value">
            <img src="./assets/customer.png" alt="" className="img-fluid" />
          </div>
          <div className="custom__value">
            <img src="./assets/quality.png" alt="" className="img-fluid" />
          </div>
        </div>
        <p className="para">
          We believe that trust is the only way to build a successful
          enterprise. To build trust with our customers, we need to deliver on
          our promise. That is why we are very tenacious about how we do
          business, and our partners must meet our high standards.
        </p>
      </div>
      <div>
        <div className="custom__value__lower">
          <div className="custom__value">
            <img src="./assets/env.svg" alt="" className="img-fluid" />
          </div>
          <div className="custom__value">
            <img src="./assets/human.svg" alt="" className="img-fluid"/>
          </div>
        </div>
        <p className="para">
          We follow our moto: if we can do it while helping our environment,
          then we should do it.
        </p>
      </div>
      </div>
    </>
  );
};

export default Values;
