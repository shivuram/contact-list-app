import './App.css';
import Header from './components/Header'
import Welcome from './components/Welcome'
import AddContact from './components/AddContact'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Router>
                <Header />
                <Switch>
                    <Route path="/add" component={AddContact}/>
                    <Route path="/" exact component={Welcome} />  
                </Switch>
        </Router>
    </div>
  )
}

export default App;
