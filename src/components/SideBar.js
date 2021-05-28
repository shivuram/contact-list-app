import '../App.css';
import ContactCard from './ContactCard'
import { useSelector } from "react-redux";

const SideBar = (props) => {
    const contacts = useSelector((state) => state.contact.contacts)
    console.log(contacts)
    const renderContactList = contacts.map((contact) => {
        return (
            <ContactCard contact = {contact} key={contact.id}/>
        )
     })
    return (
        <div className="sidenav">
            <h2>Contacts</h2>
            {renderContactList}
        </div>
    )
}

export default SideBar;