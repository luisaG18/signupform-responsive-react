import "./Form.scss";

function Form() {
  return (
    <>
      <div className="container-form">
        <span className="title-form">
          <b>Email address</b>
        </span>
        <input
          type="email"
          placeholder="email@company.com"
          className="input-form"
        ></input>
        <button className="button-form">Subscribe to monthly newsletter</button>
      </div>
    </>
  );
}

export default Form;
