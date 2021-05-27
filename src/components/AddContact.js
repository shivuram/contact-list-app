import '../App.css';
import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

const AddContact = (props) => {
    const [title, setTitle] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const history = useHistory();

    const clickHandler = (e) => {
        e.preventDefault();
        const contacts = {title, email, phone}
        if (title === "" || email === "") {
            alert("ALl the fields are mandatory!");
            return;
        }
        props.addContactHandler(contacts);
        setEmail('');
        setTitle('');
        setPhone('');
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