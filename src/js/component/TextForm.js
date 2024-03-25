import React, { Component, useState } from "react";
import {useParams} from 'react-router-dom';
import { ProgressPlugin } from "webpack";

export const TextForm = (props) =>{  
    
     const handleChange = (e) => {
        props.inputValue(e.target.value);
    }
   return(  
    <div className="my-5">
         <input type="text" className="form-control" placeholder={props.placeholder} aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={handleChange} />
    </div>

)};

export default TextForm;