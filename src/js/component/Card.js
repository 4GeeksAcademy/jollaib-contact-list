import React, { Component } from "react";
import {useParams} from 'react-router-dom';

export const Card = () =>{  
    
    const params = useParams();
    console.log(params.idContact)
    
   return(  
   <div>
    <h1>Hola desde la tarjeta</h1>
    </div>

)};

export default Card;
