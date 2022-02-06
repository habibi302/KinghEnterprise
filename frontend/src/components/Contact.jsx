import React, { useState } from "react";
import Header from "./Header";
import image from "../images/print.jpg";
import Copyright from "./Copyright";

function Contact(){
    const [subject,setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    function handleSubject(e){
        setEmail(e.target.value);
    }

    function handleMessage(e){
        setMessage(e.target.value);
    }

    function handleName(e){
        setName(e.target.value);
    }



    return(
        <>
        <Header showSearchBar={false} />
        <div className="container position-relative">

        <div className="position-relative">
            <h1 className="text-warning fw-bolder text-center pt-5">CONTACT</h1>

            <div className="text-center">
            <img className="image text-center w-90"  src={image} alt=""/>
            </div>
         <div id="contact" className="form p-2 ">
                <h1 className="text-center text-warning fw-reguler"> Drop us a line! </h1>
                <br/>
            <p className=" text-center"> Better yet, come see us in person! We love our customers, so feel free to visit during normal business hours or call us at (678) 360-3435 to schedule your appointment.  </p>

        <form action= {`mailto:example@gmail.com?subject=${subject}&body=${"Name: "+name+'%0AMessage: '+message}`} method="POST" encType="text/html" className="m-5"  >
            <label className="form-label" htmlFor="namebox">Name :</label> <br />  
        <input id="namebox" className="form-control w-100 input" type="text" name="" value={name} placeholder="Name" onChange={handleName} /><br/>
        <br/>

            <label className="form-label" htmlFor="subjectbox">Subject :</label>
         <input id="subjectbox" className="form-control w-100" type="text" name="" value={subject} placeholder="Subject" onChange={handleSubject} /><br/>
        <br />
            <label className="form-label" htmlFor="messagebox">Massage :</label>
        <textarea id="messagebox" className='form-control w-100' name="" cols="30" rows="10" value={message} placeholder="Your Message" onChange={handleMessage}></textarea><br/>
    <br/>
    <input className="btn bg-warning text-white btn-lg position-absolute start-50 translate-middle-x"  type="submit" defaultChecked="false" value="Contact Us"/>

        </form>

            </div>

            <br/>
            <br/>
            </div>

        <div className="position-relative">
            <iframe className="map position-absolute start-50 translate-middle-x" title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7120.3547932988195!2d-83.48162379013509!3d33.94610958456885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f6730e49b32819%3A0xb061c4719fa6420e!2s182%20Ben%20Burton%20Cir%20%23300b%2C%20Bogart%2C%20GA%2030622%2C%20USA!5e1!3m2!1sen!2sbd!4v1643924271007!5m2!1sen!2sbd" width="600" height="450"  allowFullScreen="" loading="lazy"
             style={{border:"0"}}></iframe>
        </div>

        </div>
        <Copyright />
        </>
    )
}

export default Contact;