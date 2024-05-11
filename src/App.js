import './App.css'
import {Switch, Route, Redirect} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import NotFound from './components/NotFound'

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/ebank/login" component={Login} />
    <Route path="/notFound" component={NotFound} />
    <Redirect to="/notFound" />
  </Switch>
)

export default App
