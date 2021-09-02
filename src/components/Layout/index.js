import React, {useState} from 'react'
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
    Users,
    LogIn
} from './components'
import useSessionStorage from './useSessionStorage'
import HomeComponent from '../Home'
import UsersComponent from '../Users'
import Withdrawals from '../Dashboard/Withdrawals'
import Deposits from '../Dashboard/Deposits'
import Transfers from '../Dashboard/Transfers'



const Index = () => {

    const [usernameInput, setUsernameInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')
    const [selected, setSelected] = useSessionStorage('selectedMenu', '');
    const [isAdmin, setIsAdmin] = useSessionStorage('adminAccount', false);
    const [loginModal, setLoginModal] = useState(true)
    const historiesSelected = selected === 1 || selected === 2 || selected === 3;

    if(sessionStorage.getItem('selectedMenu') == null) {
        setSelected(0)
    }
    if(sessionStorage.getItem('adminAccount') == null) {
        setIsAdmin(false)
    }
    
    const handleSelectedMenu = (index) => {
        setSelected(index)
    }
    

    const handleCheckUser = () => {
        console.log(isAdmin)
        if(`admin` === usernameInput){
            if(`1234` === passwordInput) {
                setIsAdmin(true)
                setLoginModal(false)
            }
        } else {
            setIsAdmin(false)
        }
        
    }

    const handleLogout = () => {
        setIsAdmin(false)
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
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className={`accordion-button ${historiesSelected? `` : `collapsed`}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded={historiesSelected? 'true' : 'false'} aria-controls="collapseTwo" style={{pointerEvents: historiesSelected? `none` : ``}}>
                                <span className="menus"><OutlineDashboard /></span>Dashboard
                            </button>
                        </h2>
                        <div id="collapseTwo" className={`accordion-collapse collapse ${historiesSelected? `show` : ``}`} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li className="dashboard-list" onClick={() => handleSelectedMenu(1)}><Link to="/dashboard/withdrawals" className={`nav-link ${selected === 1? 'active' : ''} link-dark`}>Withdrawals</Link></li>
                                <li className="dashboard-list" onClick={() => handleSelectedMenu(2)}><Link to="/dashboard/deposits" className={`nav-link ${selected === 2? 'active' : ''} link-dark`}>Deposits</Link></li>
                                <li className="dashboard-list" onClick={() => handleSelectedMenu(3)}><Link to="/dashboard/transfers" className={`nav-link ${selected === 3? 'active' : ''} link-dark`}>Transfers</Link></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                </li>
                <li>
                    <Link to="/users" className={`nav-link ${selected === 4? 'active' : ''} link-dark`} onClick={() => handleSelectedMenu(4)}>
                        <span className="menus"><Users /></span>Users
                    </Link>
                </li>
            </ul>
            <hr/>
            
            {isAdmin && 
            <div className="dropdown">
                <a href="google.com" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
                    <strong>Admin</strong>
                </a>
                <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
                    <li><a className="dropdown-item" href="google.com">Settings</a></li>
                    <li><a className="dropdown-item" href="google.com">Profile</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="/" onClick={() => handleLogout()}>Sign out</a></li>
                </ul>
            </div>}
      </div>
      
      <Switch>
        {isAdmin &&
        <>
            <Route path="/" exact component={HomeComponent}>
                <HomeComponent />
            </Route>
            <Route path="/users" exact  component={UsersComponent}>
                <UsersComponent />
            </Route>
            <Route path="/dashboard/withdrawals" exact  component={Withdrawals}>
                <Withdrawals />
            </Route>
            <Route path="/dashboard/deposits" exact  component={Deposits}>
                <Deposits />
            </Route>
            <Route path="/dashboard/transfers" exact  component={Transfers}>
                <Transfers />
            </Route>
        </> 
        }
      </Switch>


        {/* Login Modals */}
        <div className={`modal fade ${!isAdmin && 'show'}`} id="exampleModalLive" tabindex="-1" aria-labelledby="exampleModalLiveLabel" style={{display: !isAdmin && "block"}} aria-modal="true" role="dialog">
            <div className="login-modal-dialog modal-dialog modal-dialog-centered">
                <div className="modal-content login-modal">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLiveLabel"><LogIn/>Login to your account</h5>
                    {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                </div>
                <div className="modal-body">
                    <div className="account-row input-group mb-3">
                        <span>Username</span>
                        <input type="text" className="login form-control" placeholder="Username" onChange={(e) => setUsernameInput(e.target.value)} value={usernameInput}/>
                    </div>
                    <div className="account-row input-group mb-3">
                        <span>Password</span>
                        <input type="password" className="login form-control" placeholder="Password" onChange={(e) => setPasswordInput(e.target.value)} value={passwordInput}/>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary" onClick={() => handleCheckUser()}>Login</button>
                </div>
                </div>
            </div>
        </div>
    </Router>
    )
}

export default Index
