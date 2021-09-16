import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const LoginModalComponent = ({modalShow,setModalShow, loginAccount, LogIn, usernameInput, setUsernameInput, passwordInput, setPasswordInput, handleCheckUser, passwordState, handleShowPassword, handleHidePassword}) => {
    
    return (
        <>
            <Modal
                show={modalShow}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                backdrop="static"
                keyboard={false}
            >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter" className="login-modal-title-container">
                    <h5 className="modal-title log-in-account-title" id="exampleModalLiveLabel"><LogIn/>Login to your account</h5>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="account-row input-group mb-3">
                    <span>Username</span>
                    <input type="text" className="login form-control" placeholder="Username" onChange={(e) => setUsernameInput(e.target.value)} value={usernameInput}/>
                </div>
                
                <div class="form-group">
                    <label>Password</label>
                    <div class="input-group" id="show_hide_password">
                        <input placeholder="Password" class="form-control" type={passwordState.password? 'text':"password"} onChange={(e) => setPasswordInput(e.target.value)} value={passwordInput}/>
                        <div class="input-group-addon" onMouseDown={() => handleShowPassword(true)} onMouseUp={() => handleHidePassword(false)}>
                        {passwordState.password? <i class="fa fa-eye-slash" aria-hidden="true"></i>:
                            <i class="fa fa-eye" aria-hidden="true" ></i>}
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => handleCheckUser()}>Login</Button>
            </Modal.Footer>
            </Modal>
        </>
    )
}

export default LoginModalComponent
