import '../App.css';
import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { createContacts } from '../redux/actions/contactsActions'
import { useDispatch } from 'react-redux'
import { uuid } from 'uuidv4';

const AddContact = (props) => {
    const [title, setTitle] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const dispatch = useDispatch();

    const history = useHistory();

    const clickHandler = (e) => {
        e.preventDefault();
        // const contacts = {title, email, phone}
        if (title === "" || email === "") {
            alert("ALl the fields are mandatory!");
            return;
        }
        const new_contact = {
            id: uuid(),
            name: title,
            email: email,
            phone: phone
        }
        dispatch(createContacts(new_contact));
        history.push('/');
    }
    
    return (
        <div className="main-container">
            <div className="form-container">
            <form >
                <label>Name</label>
                <input type="text" placeholder="Enter Your Name" value={title} onChange={(e) => setTitle(e.target.value)} />
                <label>Email</label>
                <input type="email" placeholder="Enter Your Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <label>Phone Number</label>
                <input type="tel" placeholder="Enter Your Number" maxLength="10" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                <button onClick={clickHandler} >Add</button>
            </form>
            </div>
        </div>
    )
}

export default AddContact;