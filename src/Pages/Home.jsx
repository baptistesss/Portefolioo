import Interest from "../components/Interest";
import Profile from "../assets/Profile.png";
import "../styles/Home.css";
import CardHobbies from "../components/CardHobbies";
import sport from "../assets/sport.png";
import voyage from "../assets/voyage.png";
import cinema from "../assets/cinema.png";
import ContactForm from "../components/ContactForm";
import ProjectButton from "../components/ProjectButton";
import Reseaux from "../components/Reseaux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DateTimeDisplay from "../components/DateTimeDisplay";

const Home = () => {
  return (
    <div className="section1">
      <h1 className="name">Baptiste cazenave</h1>
      <div className="part1">
        <p>
          Actuellement étudiant en Developpeur web ful satck a la Wild code
          school je suis à la recherche d'une alternance dans le développement
          web à partir d'octobre 2024, dans le cadre de ma formation en react
          avancé . Passionné par le monde du numérique et le développement de
          solutions innovantes, je souhaite mettre mes compétences et mon
          enthousiasme au service de votre entreprise.
        </p>
      </div>
      <div className="Date-time">
        <DateTimeDisplay />
      </div>

      <div className="part2">
        <img src={Profile} className="profil" />
        <ul className="desc">
          <div className="title-pres">
            <h3>Ma carte dev</h3>
          </div>
          <li>Baptiste</li>
          <li>cazenave</li>
          <li>baptistecaz98@gmail.com</li>
          <li>France</li>
          <li>25 ans</li>
        </ul>
      </div>

      <div className="contact">
        <ContactForm />
      </div>

      <div>
        <Reseaux />
      </div>
      <div className="project">
        <ProjectButton />
      </div>
      <div>
        <Interest />
      </div>

      <>
        <h1>Hobbies</h1>
        <div className="desc-hobbies">
          <p>
            voici ce que je fais le plus quand je ne travaille pas, jadore
            regarder dès films, des séries je suis beaucoup lacutalité du
            cinéma. en deuxiéme viens le sport qui ma toujours accompagner dès
            mon plus jeune age, en commenvant par le foot ensuite le teenis et
            jai aussi fais pas mal de handball, grace ames parents jai pu
            voyager dès mon plus jeune ages
          </p>
        </div>
        <div className="App">
          <CardHobbies
            image={sport}
            title="sport"
            description="Depuis mon plus jeune âge, le sport a toujours occupé une place centrale dans ma vie. Il ne s'agit pas seulement d'une activité physique, mais d'une véritable passion qui me motive et m'inspire chaque jour."
          />
          <CardHobbies
            image={cinema}
            title="cinéma"
            description="Depuis toujours, le cinéma a occupé une place spéciale dans mon cœur. Pour moi, il ne s'agit pas seulement de regarder des films, mais d'une véritable passion qui me transporte dans des mondes nouveaux et me fait vivre des émotions intenses.."
          />
          <CardHobbies
            image={voyage}
            title="Voyage"
            description="Voyager est bien plus qu'une simple activité pour moi; c'est une passion qui nourrit mon âme et éveille ma curiosité. Chaque voyage est une aventure unique, une opportunité de découvrir le monde et de me découvrir moi-même."
          />
        </div>
      </>
    </div>
  );
};

export default Home;
