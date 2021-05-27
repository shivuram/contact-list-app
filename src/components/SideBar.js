import '../App.css';
import ContactCard from './ContactCard'

const SideBar = (props) => {
    const renderContactList = props.contactData.map((contact) => {
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