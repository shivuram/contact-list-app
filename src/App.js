import './App.css';
import Header from './components/Header'
import Welcome from './components/Welcome'
import AddContact from './components/AddContact'
import SideBar from './components/SideBar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Router>
                <Header />
                <SideBar />
                <Switch>
                    <Route path="/add" component={AddContact}/>
                    <Route path="/" exact component={Welcome} />  
                </Switch>
        </Router>
    </div>
  )
}

export default App;
