import '../App.css';

const ContactCard = (props) => {
    const { title, email, phone } = props.contact;
    return (
        <div className="card-container">
            <div className="row">
                <p className="row">{title}</p>
                <p className="row" >{email}</p>
                <p className="row" >{phone}</p>
            </div>
        </div>
    )
}

export default ContactCard;