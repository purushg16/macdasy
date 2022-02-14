import "./Intro.css";
import Limg from "./sofa.png";

function Intro() {

    return (
        <section id='second-section'>

            <div id="second-bar" uk-scrollspy-class="uk-animation-slide-bottom">
                <div className="uk-child-width-expand@s uk-text-center" uk-grid='true'>


                    <div id="sofa-img">
                        <img src={Limg} alt='' />
                    </div>

                    <div className="uk-card uk-card-body" id="door-section" uk-scrollspy-class="uk-animation-slide-bottom">
                        <h3 id="brand-title"> We don't have physical office,But make sure to visit our virtual office! </h3>
                        {/* <p> With the help of us, lets wander around the world in a simple way. </p> */}
                        <p uk-margin='true'>
                            <button className="uk-button top-uk-button uk-button-danger" id="s-vr-button"> Enter </button>
                        </p>
                    </div>

                </div>
            </div>

        </section>
    )

}


export default Intro