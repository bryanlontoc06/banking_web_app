import React from 'react'

const LoginModalComponent = ({loginAccount, LogIn, usernameInput, setUsernameInput, passwordInput, setPasswordInput, handleCheckUser, passwordState, handleShowPassword, handleHidePassword}) => {
    
    

    
    return (
        <>
             <div className={`modal fade ${loginAccount.length === 0 && 'show'}`} id="exampleModalLive" tabIndex="-1" aria-labelledby="exampleModalLiveLabel" style={{display: loginAccount.length === 0 && "block"}} aria-modal="true" role="dialog">
                <div className="login-modal-dialog modal-dialog modal-dialog-centered">
                    <div className="modal-content login-modal">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLiveLabel"><LogIn/>Login to your account</h5>
                    </div>
                    <div className="modal-body">
                        <div className="account-row input-group mb-3">
                            <span>Username</span>
                            <input type="text" className="login form-control" placeholder="Username" onChange={(e) => setUsernameInput(e.target.value)} value={usernameInput}/>
                        </div>
                        {/* <div className="account-row input-group mb-3">
                            <span>Password</span>
                            <input type="password" className="login form-control" placeholder="Password" onChange={(e) => setPasswordInput(e.target.value)} value={passwordInput}/>
                        </div> */}
                        <div class="form-group">
                            <label>Password</label>
                            <div class="input-group" id="show_hide_password">
                                <input class="form-control" type={passwordState.password? 'text':"password"} onChange={(e) => setPasswordInput(e.target.value)} value={passwordInput}/>
                                <div class="input-group-addon" onMouseDown={() => handleShowPassword(true)} onMouseUp={() => handleHidePassword(false)}>
                                {passwordState.password? <i class="fa fa-eye-slash" aria-hidden="true"></i>:
                                    <i class="fa fa-eye" aria-hidden="true" ></i>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={() => handleCheckUser()}>Login</button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginModalComponent
