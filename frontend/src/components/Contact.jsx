import React from "react";
import Header from "./Header";

function Contact(){
    return(
        <>
        <Header />
        <div className="container">

            <img className="image"  src="/image/conntact_us.jpg" alt="" />
                <h1 className="text-warning fw-bolder"> CONTACT </h1>


         <div id="contact" className="form p-2 ">
                <h1 className="text-center text-warning fw-bold"> Drop us a line! </h1>
                <br />
            <p className=" text-center"> Better yet, come see us in person! We love our customers, so feel free to visit during normal business hours or call us at (678) 360-3435 to schedule your appointment.  </p>

        <form action="" >
            <label className="label text-start"> <h6>Name : </h6>  </label> <br />  
        < input className="form1 mt-3 w-100 " type="text" name="fname" id="fname" placeholder=" Name" /> <br />
        <br />

            <label className="label"> <h6>Email : </h6> </label> <br />
         <input className="form1 mt-3 w-100" type="text" name="email" id="email" placeholder="Email" /><br />
        <br />
            <label className="label"> <h6>Massage :</h6> </label> <br />
        <textarea className='mt-3 w-100' name="text" id="" cols="30" rows="10" placeholder="Your Message"></textarea><br />
    <br />
    <input className="button2 bg-warning" type="submit" value="Contact Us" />
  

        </form>

          
            </div>

            <br />
            <br />

            <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19565755.94056392!2d-22.3454815423852!3d53.22864252373297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x25a3b1142c791a9%3A0xc4f8a0433288257a!2sUnited%20Kingdom!5e0!3m2!1sen!2sbd!4v1639507005869!5m2!1sen!2sbd" width="1000" height="350"
             style={{border:"0"}} allowfullscreen="" loading="lazy"></iframe>

        </div>
        </>
    )
}

export default Contact;