import React from "react";
import paymentmethods from "../images/paymentmethods.png";

function Footer(){
    return(
        <div className="footer-style">
           <div className="container">
               <div className="row">
                    <div className="col-lg-3">
                        <h1>PAYMENT METHODS</h1>
                        <img src={paymentmethods} alt="payment methods pic" />
                    </div>

                    <div className="col-lg-3">
                        <h1>CONTACTS</h1>
                        <p className="footer-text-style">Cell: 706-255-5697</p>
                        <p className="footer-text-style">sherman@kinghenterprise.com</p>
                    </div>

                    <div className="col-lg-3">
                        <h1>HOURS</h1>
                        <p className="footer-text-style">Monday - Friday</p>
                        <p className="footer-text-style">9 a.m - 5:30 p.m</p>
                        <p className="footer-text-style">Saturday - By Appointment</p>
                        <p className="footer-text-style">Sunday - Closed</p>
                    </div>

                    <div className="col-lg-3">
                        <h1>SOCIAL MEDIAS</h1>
                        <p className="footer-text-style"><a className="footer-social-text-style" href="https://www.instagram.com/kinghenterprise/?hl=en">Instagram</a></p>
                        <p className="footer-text-style"><a className="footer-social-text-style" href="https://www.facebook.com/KINGh-Enterprise-120186061372181">Facebook</a></p>
                    </div>
               </div>
            </div> 
        </div>
    )
}

export default Footer;