import react from "react";
import "./Nav2.css";
import Limg from "./vr-.png";


export default class Nav extends react.Component {

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

                <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar">
                    <nav id="top-bar" className="uk-navbar-container" uk-navbar='true' style={{position: "relative", zIndex: "980"}}>
                        <div className="uk-navbar-left">

                            <ul className="uk-navbar-nav" id="nav-link">
                                <li className="uk-active" id="brand"><a href="/"> macdasy </a></li>
                                <li><a href="."> Contact   </a></li>
                                <li><a href="."> Services  </a></li>
                            </ul>

                        </div>
                    </nav>
                </div>

            </section>
        )

    }
}

