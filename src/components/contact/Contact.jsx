import "./contact.css";
const Contact = () => {
  return (
    <div className="container ">
      <div className="check">
        <div className="contact__main">
          <div className="contact__logo">
            <img src="./assets/contactlogo.svg" alt="" />
          </div>
          <div className="contact__input">
            <div className="inner__input">
              <input type="text" placeholder="Name*" />
            </div>
            <div className="inner__input">
              <input type="text" placeholder="Email*" />
            </div>
            <div className="inner__input">
              <input type="text" placeholder="Cell Phone #" />
            </div>
          </div>

          <div className="select__class">
            <p>Are you affiliated with a business?</p>
            <button>Yes</button>
            <button>No</button>
          </div>
          <div className="contact__input">
            <div className="inner__input">
              <input type="text" placeholder="Business name*" />
            </div>
            <div className="inner__input">
              <input type="text" placeholder="Website*" />
            </div>
          </div>
          <div className="select__class">
            <label className="radio-label">
              <input type="radio" name="group" value="option1" /> Inquiry
            </label>
            <label className="radio-label">
              <input type="radio" name="group" value="option2" /> Suggestion
            </label>
            <label className="radio-label">
              <input type="radio" name="group" value="option3" checked /> Help
              with an existing order
            </label>
          </div>
          <div className="contact__input">
            <div className="inner__input">
              <input type="text" placeholder="Order #" />
            </div>
          </div>
          <div className="select__class">
            <textarea name="" id="" cols="30" rows="10">
              How can we help?
            </textarea>
          </div>
          <div className="select__class">
            <label>
              <input type="checkbox" name="checkbox" value="check1" /> Sign up
              to receive email updates, and more
            </label>
          </div>
          <div className="contact__btn">
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
