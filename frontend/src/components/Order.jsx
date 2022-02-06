import React, {useState, useEffect} from "react";
import Header from "./Header";
import {useLocation, useNavigate} from "react-router-dom";
import Axios from "axios";
import {Country,State} from "country-state-city";

function Order(){
    const location = useLocation();
    const navigate = useNavigate();
    const [orderedProduct, setOrderedProduct] = useState([{}]);
    const [fName, setFname] = useState("");
    const [lName, setLname] = useState("");
    const [cName, setCname] = useState("");
    const [streetAddress, setStreetAddress] = useState("");
    const [town, setTown] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("+");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [selectedCountry, setSelectedCountry] = useState("United States");
    const [selectedState, setSelectedState] = useState("New York");
    const [currentCountryIsocode, setCurrentCountryIsocode] = useState("US");

    const country = Country.getAllCountries();
    const [state, setState] = useState([]);

    const [isFirst, setIsFirst] = useState(true);


    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    var data = {};

    const [image, setImage] = useState(null);
 

    function changeCountry(e){
            setSelectedCountry(Country.getCountryByCode(e.target.value));
            setCurrentCountryIsocode(e.target.value);
            setSelectedState(State.getStatesOfCountry(e.target.value)[0].name);
    }

    function changeState(e){
        setSelectedState(e.target.value);
}

function placeOrder(e){

    console.log(orderedProduct[0]);
    

    data = {
        fName: fName,
        lName: lName,
        cName: cName,
        streetAddress: streetAddress,
        town: town,
        zipCode: zipCode,
        phoneNumber: phoneNumber,
        email: email,
        message: message,
        selectedCountry: selectedCountry,
        selectedState: selectedState
    }

     setFormErrors(validate(data));
     setIsSubmit(true);

    const formdata = new FormData();

    formdata.append("name",fName+" "+lName);
    formdata.append("cName",cName);
    formdata.append("country",selectedCountry.name);
    formdata.append("address",streetAddress);
    formdata.append("town",town);
    formdata.append("state",selectedState);
    formdata.append("zipCode",zipCode);
    formdata.append("phoneNumber",phoneNumber);
    formdata.append("email",email);
    formdata.append("message", message);
    formdata.append("image", image);
    orderedProduct.map((val)=>{
        formdata.append("productsTitle[]",val.title);
        formdata.append("productsPrice[]", val.price);
        formdata.append("productsSize[]", val.size);
        formdata.append("productsQty[]", val.qty);
        formdata.append("productsImgurl[]", val.imgurl);
    });


    navigate("/checkout",{state: {total: location.state.sub_total, data: data}});

    if(location.state.isOrderCompleted){
    Axios.post("http://localhost:3001/createorder",formdata);
    }
}



const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const regexForPhoneNumberValidation = /(\+|00)(297|93|244|1264|358|355|376|971|54|374|1684|1268|61|43|994|257|32|229|226|880|359|973|1242|387|590|375|501|1441|591|55|1246|673|975|267|236|1|61|41|56|86|225|237|243|242|682|57|269|238|506|53|5999|61|1345|357|420|49|253|1767|45|1809|1829|1849|213|593|20|291|212|34|372|251|358|679|500|33|298|691|241|44|995|44|233|350|224|590|220|245|240|30|1473|299|502|594|1671|592|852|504|385|509|36|62|44|91|246|353|98|964|354|972|39|1876|44|962|81|76|77|254|996|855|686|1869|82|383|965|856|961|231|218|1758|423|94|266|370|352|371|853|590|212|377|373|261|960|52|692|389|223|356|95|382|976|1670|258|222|1664|596|230|265|60|262|264|687|227|672|234|505|683|31|47|977|674|64|968|92|507|64|51|63|680|675|48|1787|1939|850|351|595|970|689|974|262|40|7|250|966|249|221|65|500|4779|677|232|503|378|252|508|381|211|239|597|421|386|46|268|1721|248|963|1649|235|228|66|992|690|993|670|676|1868|216|90|688|886|255|256|380|598|1|998|3906698|379|1784|58|1284|1340|84|678|681|685|967|27|260|263)(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{4,20}$/;
    if (!values.fName) {
      errors.fName = "First Name is Required!";
    }
    if (!values.lName) {
        errors.lName = "Last Name is Required!";
      }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.streetAddress) {
      errors.streetAddress = "Street Address is Required!";
    }
    if(!values.town){
        errors.town = "Town is Required!";
    }
    if(!values.phoneNumber){
        errors.phoneNumber = "Phone Number is Required!";
    }else if(!regexForPhoneNumberValidation.test(values.phoneNumber)){
        errors.phoneNumber = "This is not a valid Phone Number! \n Enter Number With Country Code if You Not (:";
    }
    if(!values.selectedCountry){
        errors.selectedCountry = "Country is Required!";
    }
    if(!values.selectedState){
        errors.selectedState = "State is Required!";
    }
    if(!values.zipCode){
        errors.zipCode = "Zip Code is Required!";
    }
    return errors;
  };

  function addImage(event){
    setImage(event.target.files[0]);
}


    

    useEffect(()=>{

        setState(State.getStatesOfCountry(currentCountryIsocode));
        
    },[currentCountryIsocode]);


    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
          console.log(data);
        }
      }, [formErrors]);


      useEffect(()=>{
        setOrderedProduct(location.state.data);
      },[fName]);


    return(
        <>
        <Header showSearchBar={false}/>
            <div className="container">
            <h1 className="text-warning text-center mb-5 mt-5">CHECKOUT</h1>
                <div class="pt-2">
                    <label className="form-label" htmlFor="formFile">Insert an Image</label>
                    <input class="form-control input-sm" onChange={addImage} type="file" id="formFile"/>
                 </div>
  

                <div class="row">
                <div class="col-md-6">
                    <div className="row">
                    <h1> Billing details </h1>
                        <div className="col-md-6">
                        
                    <label className="form-label" for="fnamebox"> First Name  </label>
                    <input className="form-control" value={fName} onChange={(e)=>{setFname(e.target.value)}} type="text" name="" id="fnamebox" /> 
                    <p style={{color: "red"}}>{formErrors.fName}</p>
                    
                    </div>
                        
                        <div className="col-md-6">
                    
                        <label className="form-label" for="lnamebox"> Last Name  </label>
                    <input className="form-control" value={lName} onChange={(e)=>{setLname(e.target.value)}} type="text" name="" id="lnamebox" /> 
                    <p style={{color: "red"}}>{formErrors.lName}</p>
                    <br />                 
                    <br />
                    </div>
                    
                <div>
                <label className="form-label" for="companynamebox"> Company name (optional) : </label>
                <br />
                    <input className="form-control" value={cName} onChange={(e)=>{setCname(e.target.value)}} type="text" name="" id="companynamebox" />
                    <br />
                    <br />
                    <label className="form-label" for="companynamebox"> Country / Region * (required)</label>
                    <select class="form-select form-select-sm textarea" onChange={changeCountry} required id="companynamebox" aria-label=".form-select-sm example">
                    {
                        country.map((country, key)=>{
                        
                        if(country.name === "United States"){
                           return  <option value={country.isoCode} selected>{country.name}</option>;
                        }else{
                            return <option value={country.isoCode}>{country.name}</option>;
                        }
                    })}
                </select>
                <p style={{color: "red"}}>{formErrors.selectedCountry}</p>
                    <br />
                    <label  className="form-label" for="countrybox"> Street address * (required) : </label>
                    <br />
                    <input className="form-control" type="text" value={streetAddress} onChange={(e)=>{setStreetAddress(e.target.value)}}  name="" required id="countrybox"  placeholder="House number and street name
                " />
                <p style={{color: "red"}}>{formErrors.streetAddress}</p>
                    <br />
                    <br />
                    <input className="form-control" type="text" value={streetAddress} onChange={(e)=>{setStreetAddress(e.target.value)}}  name="" id="" placeholder="Apartment, suite, unit, etc. (optional)" />
                    <br />
                    <br />
                    <label className="form-label" for="towncitybox">Town / City * (required)</label>
                    <input className="form-control" value={town} onChange={(e)=>{setTown(e.target.value)}}  required type="text" name="" id="towncitybox"  />
                    <p style={{color: "red"}}>{formErrors.streetAddress}</p>
                    <br />
                    <label className="form-label" for="statebox"> State * (required)</label>
                    <select class="form-select form-select-sm textarea" onChange={changeState} required id="statebox" aria-label=".form-select-sm example">
                    {
                        state.map((state, key)=>{
                        
                        if(isFirst){
                            setIsFirst(false);
                           return  <option value={state.name} selected>{state.name}</option>;
                        }else{
                            return <option value={state.name}>{state.name}</option>;
                        }
                    })}
                </select>

                    <br />
                    
                    <label className="form-label" for="zipcodebox"> ZIP Code * (required)</label>
                    <input className="form-control" value={zipCode} onChange={(e)=>{setZipCode(e.target.value)}}  type="text" required name="" id=""  />
                    <p style={{color: "red"}}>{formErrors.zipCode}</p>
                    <br />
                    <br /> <br />
                    <br />
                    <label className="form-label" for="phonenumberbox">Phone * (required)</label>
                    <input className="form-control" value={phoneNumber} onChange={(e)=>{setPhoneNumber(e.target.value)}}  type="text" name="" required id="phonenumberbox"  />
                    <p style={{color: "red"}}>{formErrors.phoneNumber}</p>
                    <br />
                    <br />
                    <label className="form-label" required for="emailbox">Email address * (required)</label>
                    <input className="form-control" value={email} onChange={(e)=>{setEmail(e.target.value)}} type="text" name="" required id="emailbox"  />
                    <p style={{color: "red"}}>{formErrors.email}</p>
                    <br />
                    <br />
                </div>


                    </div>


                    
                </div>

                <div className="col-md-6">
                    <h1> Additional information</h1>
                    <label className="form-label" for="notebox"> Massage :  </label>
                    <br />
                        <textarea className='form-control' value={message} onChange={(e)=>{setMessage(e.target.value)}}  name="text" id="notebox" cols="10" rows="5" placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                    <br />
                     <br /> <br /> <br /> <br />

                </div>

                
                
                </div>

                <div className="cntainer">
                <h3 className="text-center text-warning">Checkout</h3>
                <table className=" table tab" >
                <thead>
                    <tr>
                
                    <th scope="col">Product </th>
                    <th scope="col">Subtotal</th>
                    
                    </tr>
                </thead>
                <tbody>

                  {location.state.data.map((val,key)=>{

                    return(
                        <>
                        <tr>
                            <td >{val.title} - {val.size} × {val.qty} </td>
                            <td>${val.qty*val.price}</td>      
                        </tr>
                        </>
                    )

                  })}
                    <tr>
                    <th scope="row">Subtotal </th>
                    <th colspan="2">${location.state.sub_total}</th>
                    
                    </tr>
                    <tr>
                    <th scope="row">Total</th>
                    <th colspan="2">${location.state.sub_total}</th>
                    
                    </tr>
                </tbody>
                </table>

                </div>
                <br />
                    <p> Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.
                        <hr />
                        <div className="text-start">
                        <button className="btn bg-warning text-white" onClick={placeOrder}
                           
                           /* var data = new FormData();
                            data.append("fName",fName);
                            data.append("lName",lName);
                            data.append("cName",cName);
                            data.append("streetAddress",streetAddress);
                            data.append("town",town);
                            data.append("zipCode",zipCode);
                            data.append("phoneNumber",phoneNumber);
                            data.append("email",email);
                            data.append("message",message);
                            data.append("selectedCountry",selectedCountry);
                            data.append("selectedState",selectedState);
                            */

                           /* data = {
                                fName: fName,
                                lName: lName,
                                cName: cName,
                                streetAddress: streetAddress,
                                town: town,
                                zipCode: zipCode,
                                phoneNumber: phoneNumber,
                                email: email,
                                message: message,
                                selectedCountry: selectedCountry,
                                selectedState: selectedState
                            }

                             setFormErrors(validate(data));
                             setIsSubmit(true);
                             console.log(data);

                        }} */>PROCEED TO PAYPAL</button>
                        </div>
                        <br />
                        <br />
                        <br />
                </p>

        </div>
        <div className="copyright-text-style2">
            <p><div>2021 NAJGRAPHICS LLC. COPYRIGHT © ALL RIGHTS RESERVED. THEME: SHOP ELITE BY THEMESAGA</div></p>
        </div>
        </>
    );
}

export default Order;