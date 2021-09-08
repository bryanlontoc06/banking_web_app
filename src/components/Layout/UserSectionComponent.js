import React from 'react'

const UserSectionComponent = ({loginAccount, handleSelectedMenu, handleLogout}) => {
    return (
        <>
             <div className="dropdown">
                    <a href="google.com" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src={loginAccount[0].thumbnail_url || 'https://bootdey.com/img/Content/avatar/avatar6.png'} alt="" width="32" height="32" className="rounded-circle me-2"/>
                        <strong>{loginAccount[0].first_name}</strong>
                    </a>
                    <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
                        <li><a className="dropdown-item" href="/profile" onClick={() => handleSelectedMenu(5)}>Profile</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="/" onClick={() => handleLogout()}>Sign out</a></li>
                    </ul>
                </div>
        </>
    )
}

export default UserSectionComponent
