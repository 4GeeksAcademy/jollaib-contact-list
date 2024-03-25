import React, { useEffect, useState } from "react";
import {useParams} from 'react-router-dom';
import TextForm from "./component/TextForm";
import {Link} from 'react-router-dom'
import { ProgressPlugin } from "webpack";

export const EditContactForm = () =>{  

    const {contactId} = useParams();
    const contactIdString = contactId.toString()
    const urlContact = `https://playground.4geeks.com/apis/fake/contact/${contactIdString}`
    const [contact, setContact] = useState({})
    const saveContact = () => {
        fetch(urlContact, {
            method: "PUT",
            body: JSON.stringify(newContact),
            headers: {
                'Content-Type': 'application/json'
            }
        }).
        then((response)=>{return response.json()}).
        then((data)=> {console.log(data)}).
        catch((err)=>{return err})
    }

    useEffect(()=>{
        fetch(urlContact).
        then((response)=> {
            console.log('Response:' + response.toString())
            return response.json()}).
        then((data)=> {
            console.log('Data:' + data)
            setContact(data)
        }).catch((err)=>{return err})
    },[])

    const [newContact, setNewContact] = useState({
        full_name: contact.full_name,
        email: contact.email,
        agenda_slug: 'jollaib',
        address: contact.address,
        phone: contact.phone
    })

/*     const handleInputChange = (fieldName,value) => {
        setNewContact({
            ...newContact,
            [fieldName]: value
        }
        )};
 */

        const handleInputChange = (fieldName, value) => {
            setNewContact(prevNewContact => ({
                ...prevNewContact,
                [fieldName]: value !== '' ? value : prevNewContact[fieldName]
            }));
        };
        
    
   return(  
<div className="justify-content align-items-center mx-5 my-5" >
    <h1>Edit Contact</h1>
    <p>hello {contact.full_name}</p>
    <TextForm
       placeholder= {contact.full_name}
       inputValue = {(value)=> 
        handleInputChange(
        'full_name',value!== '' ? value : value = contact.full_name)}
       />
    <TextForm
       placeholder={contact.email}
       inputValue = {(value)=> 
        handleInputChange('email', value || contact.email)}
    />
    <TextForm
       placeholder={contact.phone}
       inputValue = {(value)=> handleInputChange('phone', value || contact.phone)}
    />
    <TextForm
       placeholder={contact.address}
       inputValue = {(value)=> handleInputChange('address', value || contact.address)}
    />
     <Link to={'/'}>
       <button className="btn btn-success" onClick={()=>{saveContact()}}>Edit Contact</button>
    </Link>
   
</div>
)};

export default EditContactForm;