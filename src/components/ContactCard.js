import '../App.css';

const ContactCard = (props) => {
    const { name, email, phone } = props.contact;
    return (
        <div className="card-container">
            <div className="card-inner">
                <p className="row">{name}</p>
                <p className="row" >{phone}</p>
                <p className="row" >{email}</p>
            </div>
        </div>
    )
}

export default ContactCard;