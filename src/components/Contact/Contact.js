import './Contact.scss'

function Contact() {
    return (
        <section className="contact-section">
            <div className="contact-form">
                <form action="/action_page.php">
                    <div>
                        <label htmlFor="fname">First Name</label>
                        <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                    </div>

                    <div>
                        <label htmlFor="lname">Last Name</label>
                        <input
                            type="text"
                            id="lname"
                            name="lastname"
                            placeholder="Your last name.."
                        />
                    </div>

                    <div>
                        <label htmlFor="subject">Subject</label>
                        <textarea
                            id="subject"
                            name="subject"
                            placeholder="Write something.."
                            style={{ height: 200 }}
                            defaultValue={""}
                        />
                    </div>
                    <input className='form-submit' type="submit" defaultValue="Submit" />
                </form>
            </div>
        </section>
    )
}

export default Contact