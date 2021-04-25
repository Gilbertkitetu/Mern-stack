import logo from './logo.svg';
import './App.css';


import {BrowserRouter, Switch, Route, NavLink} from 'react-router-dom';

import Home from "./components/home";
import Signup from "./components/signup";
import Login from "./components/login";



function App() {
    return(
        <div className = "App">
            <BrowserRouter>
        <div className="header">

            <NavLink exact activeClassName="active" to="/"><h1><span className='poly'>Poly</span><span className='base'>base</span></h1></NavLink>
            <input type='text' placeholder='Search here' className='input-control'/>
            <button className='search-btn'>Search</button>
            <NavLink activeClassName="active" to="/signup">New Account</NavLink>
            <NavLink activeClassName="active" to="/login">Login</NavLink>
        </div>
            <div className="content">
            <Switch>

                <Route path='/' component={Home} exact/>
                <Route path='/signup' component={Signup} exact/>
                <Route path='/login' component={Login} exact/>
                
            </Switch>
            </div>
            </BrowserRouter>

        </div>
    );
}

export default App;
