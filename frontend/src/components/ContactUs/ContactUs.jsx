//rfce

import React from 'react'
import './contactUs.css'

function ContactUs() {
  return (
    <div class="pcontainer">
        <div class="contact-box">
            <div class="left">
                <div class="left-content">
                    <h3>Get in Touch</h3>
                    <p>We'd love to hear from you! Whether you have a question about features, trials, pricing, need a demo, or anything else, our team is ready to answer all your questions.</p>
                    <ul class="social-icons">
                        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                        <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                    </ul>
                </div>
            </div>
            <div class="right">
                <h2 className="heading">Contact Us</h2>
                <input type="text" class="field" placeholder="Your Name"/>
                <input type="email" class="field" placeholder="Your Email"/>
                <input type="text" class="field" placeholder="Phone"/>
                <textarea placeholder="Message" class="field"></textarea>
                <button class="butn">Send</button>
            </div>
        </div>
    </div>
  )
}

export default ContactUs