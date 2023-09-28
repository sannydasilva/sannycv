import "./home.css";
import sannyphoto from "../assets/photosanny.png";

const Home = () => {
  return (
    <div>
      <div className="card-container">
        <div className="card card-side bg-base-100 shadow-xl">
          <figure className="image-container">
            <img className="img-home" src={sannyphoto} alt="photo de sanny" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Un mot sur mon parcours</h2>
            <p className="home-paragraphe">
              Après une dizaine d'années dans les métiers administratifs, j'ai
              décidé d'effectuer un virage à 180° dans ma carrière. {<br />}
              J'ai donc sollicté Transition Pro afin de suivre une formation de
              développeur web fullstack javascript qui m'a permis d'acquérir les
              bases du développement. {<br />} <br />
              Il me reste évidemment beaucoup à apprendre et à découvrir mais je
              suis extrêmement motivée. {<br />}
              Je souhaite continuer mon apprentissage en entreprise, en tant que
              salariée ou alternante.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;