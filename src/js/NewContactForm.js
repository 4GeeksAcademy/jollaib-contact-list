import React, { useEffect, useState } from "react";
import {useParams} from 'react-router-dom';
import TextForm from "./component/TextForm";
import {Link} from 'react-router-dom'
import { ProgressPlugin } from "webpack";

export const NewContactForm = ({contact}) =>{  

    const urlCreateContact = 'https://playground.4geeks.com/apis/fake/contact/'
    const saveContact = () => {
        fetch(urlCreateContact, {
            method: "POST",
            body: JSON.stringify(newContact),
            headers: {
                'Content-Type': 'application/json'
            }
        }).
        then((response)=>{return response.json()}).
        then((data)=> {console.log(data)}).
        catch((err)=>{
            print(err)
            return err})

    }

    const [newContact, setNewContact] = useState({
        full_name: '',
        email: '',
        agenda_slug: 'jollaib',
        address: '',
        phone: ''
    })

    const handleInputChange = (fieldName,value) => {
        setNewContact({
            ...newContact,
            [fieldName]: value
        }
        )};

    
   return(  
<div className="justify-content align-items-center mx-5 my-5" >
    <h1>New Contact</h1>
    <TextForm
       placeholder="Full Name"
       inputValue = {(value)=> handleInputChange('full_name', value)}
       />
    <TextForm
       placeholder="Email"
       inputValue = {(value)=> handleInputChange('email', value)}
    />
    <TextForm
       placeholder="Phone number"
       inputValue = {(value)=> handleInputChange('phone', value)}
    />
    <TextForm
       placeholder="Adress"
       inputValue = {(value)=> handleInputChange('address', value)}
    />
     <Link to={'/'}>
       <button className="btn btn-success" onClick={()=>{saveContact()}}>Create Contact</button>
    </Link>
   
</div>
)};

export default NewContactForm;