import React from "react";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

function Contact() {
    return (
        <div className="contact">
            <div className="about-image"></div>
            <h2>Find us</h2>
            <div className="icons">
                <FacebookIcon className="icon" style={{ fontSize: 30 }} /><InstagramIcon className="icon" style={{ fontSize: 30 }} /><TwitterIcon className="icon" style={{ fontSize: 30 }} />
            </div>
            <h2>Send us a message</h2>
            <form action="" className="contact-form">
                <label htmlFor="">E-mail</label>
                <input type="text"/>
                <label htmlFor="">Topic</label>
                <input type=""/>
                <label htmlFor="">Message</label>
                <input type="text"/>
                <button>Send</button>
            </form>
        </div>
    );
}

export default Contact;