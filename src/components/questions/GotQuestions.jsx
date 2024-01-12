import "./gotquestions.css";

const GotQuestions = () => {
  return (
    <div className="container got__questions mb-5">
      <div className="upper__main__div">
        <div className="image__main__main">
          <img src="./assets/support.svg" alt="support " />
        </div>
      </div>
      <div className="got__second__main">
        <p className="questions">Got Questions?</p>
        <h2 className="answers">
          A representative will respond to your message within 24 hours
        </h2>
      </div>
      <div className="got__text__area">
        <textarea name="" id="" rows="4" placeholder="Type message" />
      </div>
      <div className="last__part">
        <h3 className="connect">Contact a go green booty representative</h3>
      </div>
    </div>
  );
};

export default GotQuestions;
