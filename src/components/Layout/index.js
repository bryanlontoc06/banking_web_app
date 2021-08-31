import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route,
} from 'react-router-dom';
import './style.css'
import {
    OutlineHome,
    OutlineDashboard,
    Users
} from './components'
import useSessionStorage from './useSessionStorage';
import HomeComponent from '../Home'
import DashboardComponent from '../Dashboard'
import UsersComponent from '../Users'



const Index = () => {

    const [selected, setSelected] = useSessionStorage('selectedMenu', '');

    if(sessionStorage.getItem('selectedMenu') == null) {
        setSelected(0)
    }
    const handleSelectedMenu = (index) => {
        setSelected(index)
    }

    return (
        <Router>
        <div className="side-bar d-flex flex-column flex-shrink-0 p-3 bg-light" styled={{width: '280px'}}>
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
            <span className="fs-4">Bank Logo</span>
            </a>
            <hr/>
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <Link to="/" className={`nav-link ${selected === 0? 'active' : ''} link-dark`} onClick={() => handleSelectedMenu(0)} aria-current="page">
                        <span className="menus"><OutlineHome /></span>Home
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard" className={`nav-link ${selected === 1? 'active' : ''} link-dark`} onClick={() => handleSelectedMenu(1)}>
                        <span className="menus"><OutlineDashboard /></span>Dashboard
                    </Link>
                </li>
                <li>
                    <Link to="/users" className={`nav-link ${selected === 2? 'active' : ''} link-dark`} onClick={() => handleSelectedMenu(2)}>
                        <span className="menus"><Users /></span>Users
                    </Link>
                </li>
            </ul>
            <hr/>
            
            <div className="dropdown">
                <a href="google.com" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
                    <strong>Admin</strong>
                </a>
                <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
                    <li><a className="dropdown-item" href="google.com">Settings</a></li>
                    <li><a className="dropdown-item" href="google.com">Profile</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="google.com">Sign out</a></li>
                </ul>
            </div>
      </div>
      
      <Switch>
        <Route path="/" exact component={HomeComponent}>
          <HomeComponent />
        </Route>
        <Route path="/dashboard" exact  component={DashboardComponent}>
          <DashboardComponent />
        </Route>
        <Route path="/users" exact  component={UsersComponent}>
          <UsersComponent />
        </Route>
      </Switch>
    </Router>
    )
}

export default Index
