import "./exp.css";
import imageCode from "../assets/code.jpg";
import imageCompta from "../assets/comptable.jpg";
import imageAdmin from "../assets/admin.jpg";

const Exp = () => {
  return (
    <div>
      <h1 className="exp-title">Mes différentes expériences</h1>
      <div className="exp-container carousel">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={imageCode} className="img-exp" />
          <div className="info-container">
            <h2 className="subtitle1">Développeuse Front</h2>
            <h3 className="subtitle2">
              Projet de fin de formation : août à sept 2023
            </h3>
            <p className="description">
              Réalisation d'une app en équipe avec la méthode agile. <br />{" "}
              Composition de la team : 3 front et 2 back. <br />
              -Sprint 0 : Conception des wireframes, cahier de charges, user
              stories, MLD, MCD <br />
              -Sprint 1 : Réalisation de la structure côté front, mise en place
              des composants, css. <br />
              -Sprint 2 : Connexion avec le back, jwt, base de donnée <br />
              -Sprint 3 : Crud user, dernier réglage css
            </p>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={imageCompta} className="img-exp" />
          <div className="info-container">
            <h2 className="subtitle1">Aide comptable chez Upromi</h2>
            <h3 className="subtitle2">Fev 2015 à septembre 2023</h3>
            <ul className="description">
              <li>-Tenue de la comptabilité quotidienne</li>
              <li>
                -Gestion dossiers admin et facturation aux organismes financeurs
              </li>
              <li>-Traitement de la paie</li>
            </ul>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div id="slide3" className="carousel-item relative w-full">
          <img src={imageAdmin} className="img-exp" />
          <div className="info-container">
            <h2 className="subtitle1">Assistante Administrative</h2>
            <h3 className="subtitle2">2006 à 2013</h3>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
              et officiis perferendis voluptatem perspiciatis vero, accusantium
              facere provident veritatis at. Quidem necessitatibus excepturi
              iusto nostrum architecto? Quia commodi non ut vero, ad, rerum
              iusto impedit nisi molestiae adipisci corporis nam! Natus,
              deserunt veritatis nisi quo quaerat commodi dolore itaque? Alias,
              veniam quis! Soluta a dolore dicta earum, corrupti officia autem
              quae
            </p>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exp;
