import react from "react";
import "./Navbar.css";
import Limg from "./vr-.png";


export default class Navbar extends react.Component {

    componentDidMount() {
        const Ulkitscript1 = document.createElement("script");
        Ulkitscript1.src = "https://cdn.jsdelivr.net/npm/uikit@3.10.1/dist/js/uikit.min.js";
        Ulkitscript1.async = true;

        const Ulkitscript2 = document.createElement("script");
        Ulkitscript2.src = "https://cdn.jsdelivr.net/npm/uikit@3.10.1/dist/js/uikit-icons.min.js";
        Ulkitscript2.async = true;

        document.body.appendChild(Ulkitscript1);
        document.body.appendChild(Ulkitscript2);

    }

    render(props) {

        return (
            <section id='navbar-section'>


                <nav id="top-bar" className="uk-navbar-container" uk-navbar='true' >

                    <div className="uk-navbar-left">

                        <div id="brand-div">
                            <h3> macdasy </h3>
                            {/* <p id="moto"> Everything from Nothing </p> */}

                        </div>

                    </div>

                    <div className="uk-navbar-right">

                        <ul className="uk-navbar-nav" id="nav-right">
                            <li className="uk-active"><a href="#services-section"> SERVICES </a></li>
                            <li className="uk-active"><a href="#contact"> CONTACT </a></li>
                            {/* <li>
                            <a href="#">Parent</a>
                                <div className="uk-navbar-dropdown">
                                    <ul className="uk-nav uk-navbar-dropdown-nav">
                                        <li className="uk-active"><a href="#">Active</a></li>
                                        <li><a href="#">Item</a></li>
                                        <li><a href="#">Item</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li><a href="#">Item</a></li> */}
                        </ul>

                    </div>

                </nav>

                <div id="second-bar" uk-scrollspy-class="uk-animation-slide-bottom">
                    <div className="uk-child-width-expand@s uk-text-center" uk-grid='true'>


                        <div id="landing-image-2">
                            <img src={Limg} alt='' />
                        </div>

                        <div className="uk-card uk-card-body" id="nav-section">
                            <h3 id="brand-title"> Let's see the world in a different way! </h3>
                            {/* <p> With the help of us, lets wander around the world in a simple way. </p> */}
                            <p uk-margin='true'>
                                <button className="uk-button top-uk-button uk-button-danger" id="vr-button"> Visit Us </button>
                                <button className="uk-button top-uk-button uk-button-danger margin-left" id="about-button"> About Us </button>
                            </p>
                        </div>


                        <div id="landing-image">
                            <img src={Limg} alt='' />
                        </div>

                    </div>
                </div>

            </section>
        )

    }
}