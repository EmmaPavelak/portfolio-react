
import './App.scss';
// import Linkedin from "../images/svg/Linkedin";
// import Github from "../images/svg/Github";
// import CV from "../files/CV.pdf";
// import Email from "../images/svg/Email";
import { TypeAnimation } from "react-type-animation";

const App = () => {
    return (
        <section id="about">
            <section className="left">
                <div className="text">
                    <h2>Bonjour, je m'appelle</h2>
                    <h1>Emma</h1>
                    <h2>Je suis un <span className="job-name">
                            <TypeAnimation
                                sequence={ [
                                    'développeur full-stack',
                                    1000, 
                                    'développeur frontend',
                                    1000,
                                    'développeur backend',
                                    1000,
                                    'développeur mobile',                                 
                                    1000,
                                    'développeur',
                                ] }
                                wrapper="span"
                                cursor={ true }/>

                    </span></h2>
                    <p>
                        Je suis développeuse full-stack.
                    </p>
                </div>
                {/* <div className="social-medias">
                    <Email/>
                    <Linkedin/>
                    <Github/>
                </div>
                <div className="curriculum-vitae">
                    <a href={ CV } target="_blank" rel="noreferrer">
                        <button>Télécharger mon CV</button>
                    </a>
                </div> */}
            </section>
            <section className="right">
                <img
                    src="https://user-images.githubusercontent.com/72151831/229601306-fae7a7d3-7d84-4451-b7a4-9241da7e7e3c.png"
                    alt="me"/>
            </section>
        </section>
    );
}


export default App;
