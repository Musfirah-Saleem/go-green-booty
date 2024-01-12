import "./viewproduct.css";

const ViewProduct = () => {
  return (
    <div className="container p-0 product__main mb-5">
      <div className="product__inner__main">
        <div className="product__left">
          <h2 className="saving">
            Save 10% at checkout by signing up & sharing Go Green Booty
          </h2>
          <div className="first__inner___main__part">
            <img src="./assets/privacy.svg" alt="switching" />
            <div className="connect">View Products</div>
          </div>
        </div>
        <div className="product__right">
          {/* <div> */}
          <img src="./assets/product.svg" alt="product" />
          {/* </div>   */}
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
