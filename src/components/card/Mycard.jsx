import "./card.css";

const Mycard = () => {
  return (
    <div className="container-fluid card__main mt-5 mb-5">
      <div className="custom__card">
        <div className="card__inner">
          <img src="./assets/card1.svg" alt="" className="img-fluid" />
          <div className="text-center">
            <img src="./assets/cardcircle.svg" alt="" className="img-fluid" />
          </div>
          <div className="text-center">
            <h5 className="pro__price">Hygienics Pro+</h5>
            <p className="control mt-1">PRESSURE CONTROL</p>
            <h5 className="pro__price mt-3">$200</h5>
            <p className="control ">(Shipping Included)</p>
            <button className="mt-3 add__to__cart_btn">Add to Cart</button>
          </div>
        </div>
        <div className="card__inner">
          <img src="./assets/card1.svg" alt="" className="img-fluid" />
          <div className="text-center">
            <img src="./assets/cardcircle.svg" alt="" className="img-fluid" />
          </div>
          <div className="text-center">
            <h5 className="pro__price">Hygienics Pro+</h5>
            <p className="control mt-1">PRESSURE CONTROL</p>
            <h5 className="pro__price mt-3">$200</h5>
            <p className="control ">(Shipping Included)</p>
            <button className=" mt-3  add__to__cart_btn">Add to Cart</button>
          </div>
        </div>
        <div className="card__inner">
          <img src="./assets/card1.svg" alt="" className="img-fluid" />
          <div className="text-center">
            <img src="./assets/cardcircle.svg" alt="" className="img-fluid" />
          </div>
          <div className="text-center">
            <h5 className="pro__price">Hygienics Pro+</h5>
            <p className="control mt-1">PRESSURE CONTROL</p>
            <h5 className="pro__price mt-3">$200</h5>
            <p className="control ">(Shipping Included)</p>
            <button className=" mt-3 add__to__cart_btn">Add to Cart</button>
          </div>
        </div>
        <div className="card__inner">
          <img src="./assets/card1.svg" alt="" className="img-fluid" />
          <div className="text-center">
            <img src="./assets/cardcircle.svg" alt="" className="img-fluid" />
          </div>
          <div className="text-center">
            <h5 className="pro__price">Hygienics Pro+</h5>
            <p className="control mt-1">PRESSURE CONTROL</p>
            <h5 className="pro__price mt-3">$200</h5>
            <p className="control ">(Shipping Included)</p>
            <button className=" mt-3 add__to__cart_btn">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mycard;
