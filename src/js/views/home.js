
import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import contactImage from '../../img/pngegg.png';
import "../../styles/home.css";
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'




export const Home = () => {

const[contactList, setContactList] = useState([])

const getContactList = 'https://playground.4geeks.com/apis/fake/contact/agenda/jollaib'
const contactUrl = 'https://playground.4geeks.com/apis/fake/contact'




useEffect(()=>{
	fetch(getContactList).
	then((response)=> {
		console.log('Response:' + response.toString())
		return response.json()}).
	then((data)=> {
		console.log('Data:' + data)
		setContactList(data)
	}).catch((err)=>{return err})
},[])

 useEffect(()=>{
	fetch(getContactList).
	then((response)=> {
		console.log('Response:' + response.toString())
		return response.json()}).
	then((data)=> {
		console.log('Data:' + data)
		setContactList(data)
	}).catch((err)=>{return err})
},[contactList]) 

const deleteContact = (id) => {
	fetch(`${contactUrl}/${id}`, {
		method: "DELETE",
		body: JSON.stringify(),
		headers: {
			'Content-Type': 'application/json'
		}
	}).
	then((response)=>{return response.json()}).
	then((data)=> {console.log(data)}).
	catch((err)=>{return err})
}

const {store, actions} = useContext(Context);

return (
	
	<div className="text-center mt-5">
		<div>
			<ul>
				{contactList.map((contact)=> 
					<div key={contact.id} className="mx-5">
						<div className="card text-start mb-3 rounded-end-circle" style={{width: "70vw"}}>
							<div className="card-body">
								<div className="row">
									<div className="col-4">
										<img style={{height: '100px', width: '100px'}} src={contactImage}/>
									</div>
										<div className="col">
							    			<h5 className="card-title">{contact.full_name}</h5>
							    			<p className="card-text">{contact.email}</p>
											<p className="card-text">{contact.address}</p>
											<p className="card-text">{contact.phone}</p>
											<p className="card-text">{contact.id}</p>
										</div>
										<div className="col">
											{/* <FontAwesomeIcon onClick={()=>{deleteContact()}} className="mx-4" data-bs-toggle="modal" icon={faTrash} style={{fontSize: '40px'}}  /> */}
											<FontAwesomeIcon onClick={()=>{deleteContact(contact.id)}} className="mx-4" icon={faTrash} style={{fontSize: '40px'}}  />
											<Link to={`contact/${contact.id}`}>
												<FontAwesomeIcon icon={faPenToSquare} style={{fontSize: '40px'}}  />
											</Link>
										</div>	
									</div>
							</div>
						</div>
					</div>				
				)}
			</ul>
			<div className="modal" tabindex="-1" role="dialog">
										  <div className="modal-dialog" role="document">
										    <div className="modal-content">
										      <div className="modal-header">
										        <h5 className="modal-title">Modal title</h5>
										        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
										          <span aria-hidden="true">&times;</span>
										        </button>
										      </div>
										      <div className="modal-body">
										        <p>Modal body text goes here.</p>
										      </div>
										      <div className="modal-footer">
										        <button type="button" className="btn btn-primary">Save changes</button>
										        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
										      </div>
										    </div>
										  </div>
										</div>
		</div>
		<Link to='/newContactForm'>
			<button className="btn btn-success">New Contact</button>
		</Link>
	</div>

);

};

