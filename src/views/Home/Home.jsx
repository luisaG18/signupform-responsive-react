import "./Home.scss";
import Form from "../../components/Form/Form";
import imageBanner from "../../assets/illustration-sign-up-mobile.svg";
import imageBannerDesktop from "../../assets/illustration-sign-up-desktop.svg";

function Home() {
  return (
    <div className="general-container">
      <div className="image">
        <img src={imageBannerDesktop} alt="Image of Banner" />
        <img src={imageBanner} alt="Image of Banner" />
      </div>
      <div className="container">
        <div className="information">
          <h1>Stay updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <div className="container-list">
            <div className="container-list-item"></div>
            <span>Product discovery and building what matters</span>
          </div>
          <div className="container-list">
            <div className="container-list-item"></div>
            <span>Measuring to ensure updates are a success</span>
          </div>
          <div className="container-list">
            <div className="container-list-item"></div>
            <span>And much more!</span>
          </div>
        </div>
        <div>
          <Form />
        </div>
      </div>
    </div>
  );
}

export default Home;
