import '../App.css';

const AddContact = () => {
    return (
        <div className="main-container">
            <div className="form-container">
            <form >
                <label>Name</label>
                <input type="text" placeholder="Enter Your Name" />
                <label>Email</label>
                <input type="email" placeholder="Enter Your Email" />
                <label>Phone Number</label>
                <input type="tel" placeholder="Enter Your Number" maxLength="10"/>
                <button >Add</button>
            </form>
            </div>
        </div>
    )
}

export default AddContact;