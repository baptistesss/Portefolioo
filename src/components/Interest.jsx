import "../styles/Interest.css";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import node from "../assets/node.png";
import Mysql from "../assets/Mysql.png";
import reactt from "../assets/reactt.png";
import github from "../assets/github.png";
import git from "../assets/git.png";

function Interest() {
  return (
    <>
      <div className="part3">
        <h1 className="title">Pourquoi le dev ?</h1>
        <p className="skill_desc">
          <h3>Mon Aventure dans le Monde du Développement Web et du Design</h3>
          Depuis que jai découvert le développement web, le design et les
          technologies associées, une passion profonde sest éveillée en moi. À
          travers des langages comme JavaScript, HTML et CSS, jai commencé à
          façonner des expériences utilisateur captivantes et des interfaces
          esthétiques.
          <hr />
          <h3>Langages et Technologies Front-End </h3>
          avec son potentiel dynamique et sa polyvalence, est devenu mon outil
          principal pour rendre mes créations interactives. Grâce à HTML et CSS,
          j'ai appris à structurer mes projets et à leur donner vie avec style.
          L'intégration de React a révolutionné ma façon d'approcher le
          développement front-end, en me permettant de créer des applications
          web complexes et modulaires.
          <hr />
          <h3>Design et Prototypage avec Figma</h3>
          Figma est devenu mon allié indispensable dans le processus de design.
          Que ce soit pour concevoir des maquettes, prototyper des interactions
          ou collaborer avec d'autres créatifs, Figma offre une plateforme
          puissante et intuitive. Créer des interfaces utilisateur attrayantes
          et fonctionnelles est devenu une passion grâce à cet outil.
          <hr />
          <h3>Versionnage avec Git et GitHub </h3> La gestion de version avec
          Git et GitHub est essentielle pour mon flux de travail. Git me permet
          de suivre l'évolution de mes projets, de gérer les modifications et
          d'expérimenter en toute sécurité. GitHub, quant à lui, offre une
          plateforme où je peux partager mes travaux, collaborer avec d'autres
          développeurs et contribuer à des projets open source. C'est un
          véritable hub pour la communauté des développeurs. Frameworks Back-End
          : Pour le développement back-end, j'ai exploré des frameworks comme
          Node.js et Express.js. Node.js m'a ouvert les portes du développement
          JavaScript côté serveur, tandis qu'Express.js m'a permis de créer des
          APIs robustes et performantes. Ces frameworks ont transformé mes
          compétences en développement full-stack, me permettant de construire
          des applications web complètes et évolutives.
          <hr />
        </p>
      </div>
      <h1 className="skills">Compétences technique</h1>
      <div className="section2">
        <div className="part4">
          <h2 className="title-skill">Langages</h2>
          <div className="skill">
            <img src={html} />
            <img src={css} />
            <img src={js} />
            <img src={reactt} />
          </div>
        </div>

        <div className="part5">
          <h2 className="title-skill">Versionnage</h2>

          <div className="skill">
            <img src={html} />
            <img src={css} />
            <img src={js} />
            <img src={reactt} />
          </div>
        </div>
        <div className="part6">
          <h2 className="title-skill">Frameworks</h2>

          <div className="skill">
            <img src={html} />
            <img src={css} />
            <img src={js} />
            <img src={reactt} />
          </div>
        </div>
        <div className="part7">
          <h2 className="title-skill">Design</h2>

          <div className="skill">
            <img src={html} />
            <img src={css} />
            <img src={js} />
            <img src={reactt} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Interest;
