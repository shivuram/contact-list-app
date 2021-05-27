import './App.css';
import Header from './components/Header'
import Welcome from './components/Welcome'
import AddContact from './components/AddContact'
import SideBar from './components/SideBar'
import React, { useState } from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { uuid } from 'uuidv4';

const App = () => {
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    setContacts([...contacts, {id: uuid(), ...contact}]);
}
  return (
    <div>
      <Router>
                <Header />
                <Switch>
                    <Route path="/add" render={props => (
                        <AddContact addContactHandler={addContactHandler}  />
                    )}/>
                    <Route path="/" exact render={(props) => (
                      <>
                        <SideBar {...props} contactData={contacts}  />
                        <Welcome />
                      </>
                    )} />  
                </Switch>
        </Router>
    </div>
  )
}

export default App;
