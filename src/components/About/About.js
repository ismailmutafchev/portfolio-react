import './About.scss'
import './Submarine.scss'

function About({setPage}) {

    setPage('about')
    return (
        <section className="about">

            <div className="details-interests">
                <div className="about-me-headers">
                    <h1>_about.me</h1>
                    <p><span>Jack is a simple</span>, creative and responsive bootstrap 4 template for showcase your portfolio and personal information. It is designed and developed using all modern technologies (includes HTML5, CSS3) and bootstrap. If you are a designer, developer, freelancer or any other professional, this template is perfect fit for you. </p>
                </div>
                <div className="about-me-details">
                    <div className="details-list">
                        <div>

                            <h1>Personal Details</h1>
                            <ul className="details-types">
                                <li><p className='details-type'>phone number:</p> <p>07500******</p></li>
                                <li><p className='details-type'>email:</p> <p>is*********@gmail.com</p></li>
                                <li><p className='details-type'>whatsapp:</p> <p>07500******</p></li>
                            </ul>
                        </div>
                    </div>
                    <div className="about-me-intrests">
                        <h1>My interests</h1>
                        <ul className="details-types">
                            <li><i class="fa-solid fa-futbol"></i> Football </li>
                            <li><i class="fa-solid fa-gamepad"></i> Gaming</li>
                            <li><i class="fa-solid fa-code"></i> Coding </li>
                            <li><i class="fa-solid fa-film"></i> Movies </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="sea">
                <div className="circle-wrapper">
                    <div className="bubble"></div>
                    <div className="submarine-wrapper">
                        <div className="submarine-body">
                            <div className="window"></div>
                            <div className="engine"></div>
                            <div className="light"></div>
                        </div>
                        <div className="helix"></div>
                        <div className="hat">
                            <div className="leds-wrapper">
                                <div className="periscope"></div>
                                <div className="leds"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About