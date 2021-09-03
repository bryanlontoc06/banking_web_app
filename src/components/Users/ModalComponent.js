import React from 'react'
import InputComponent from './InputComponent'
import ButtonComponent from './ButtonComponent'

const ModalComponent = ({accountNo, setUserName, userName, setPassword, password, setFirstName, firstName, setLastName, lastName, setAddress, address, setMobileNo, mobileNo, setEmail, email, setBalance, balance, handleSaveUsers}) => {
    return (
        <div>
              <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">User Information</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>         
                    </div>

                    <div className="modal-body">
                        <div className="form-floating mb-3">
                            {/* <input type="text" className="form-control" id="floatingInput" placeholder="Account No." readOnly={false} value={accountNo}/>
                            <label>Account No</label> */}
                            <InputComponent
                                inputType={"text"}
                                inputClass={"form-control"}
                                inputID={"floatingInput"}
                                placeholderTitle={"Account No."}                                
                                inputValue={accountNo}                                
                                label={`Account No.`}
                                isReadOnly={true}                                
                            />
                        </div>
                        <div className="form-floating mb-3">
                            {/* <input type="text" className="form-control" id="floatingUserName" placeholder="User Name" onChange={(e) => setUserName(e.target.value)} value={userName}/>
                            <label>User Name</label> for="floatingInput" */}
                            <InputComponent
                                inputType={"text"}
                                inputClass={"form-control"}
                                inputID={"floatingUserName"}
                                placeholderTitle={"User Name"}
                                handleOnChange={setUserName}                                
                                inputValue={userName}                                
                                label={`User Name`}                                                             
                            />
                        </div>
                        <div className="form-floating mb-3">
                            {/* <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
                            <label>Password</label>  */}
                            {/* for="floatingInput" */}
                            <InputComponent
                                inputType={"password"}
                                inputClass={"form-control"}
                                inputID={"floatingPassword"}
                                placeholderTitle={"Password"}
                                handleOnChange={setPassword}                                
                                inputValue={password}                                
                                label={`Password`}                                                             
                            />
                        </div>
                        <div className="form-floating mb-3">
                            {/* <input type="text" className="form-control" id="floatingFirstName" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} value={firstName}/>
                            <label>First Name</label> */}
                            {/*for="floatingInput"*/}
                            <InputComponent
                                inputType={"text"}
                                inputClass={"form-control"}
                                inputID={"floatingFirstName"}
                                placeholderTitle={"First Name"}
                                handleOnChange={setFirstName}                                
                                inputValue={firstName}                                
                                label={`First Name`}                                                             
                            />
                        </div>
                        <div className="form-floating mb-3">
                            {/* <input type="text" className="form-control" id="floatingLastName" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} value={lastName}/>
                            <label >Last Name</label> */}
                            {/*for="floatingInput"*/}
                            <InputComponent
                                inputType={"text"}
                                inputClass={"form-control"}
                                inputID={"floatingLastName"}
                                placeholderTitle={"Last Name"}
                                handleOnChange={setLastName}                                
                                inputValue={lastName}                                
                                label={`Last Name`}                                                             
                            />
                        </div>
                        <div className="form-floating mb-3">
                            {/* <input type="text" className="form-control" id="floatingAddress" placeholder="Address" onChange={(e) => setAddress(e.target.value)} value={address}/>
                            <label>Address</label> */}
                            {/*for="floatingInput"*/}
                            <InputComponent
                                inputType={"text"}
                                inputClass={"form-control"}
                                inputID={"floatingAddress"}
                                placeholderTitle={"Address"}
                                handleOnChange={setAddress}                                
                                inputValue={address}                                
                                label={`Address`}                                                             
                            />
                        </div>
                        <div className="form-floating mb-3">
                            {/* <input type="number" className="form-control" id="floatingActiveNo" placeholder="Active Mobile No." onChange={(e) => setMobileNo(e.target.value)} value={mobileNo}/>
                            <label>Active Mobile No.</label> */}
                            {/*for="floatingInput"*/}
                            <InputComponent
                                inputType={"number"}
                                inputClass={"form-control"}
                                inputID={"floatingActiveNo"}
                                placeholderTitle={"Active Mobile No."}
                                handleOnChange={setMobileNo}
                                inputValue={mobileNo}                                
                                label={`Active Mobile No.`}
                            />
                        </div>
                        <div className="form-floating mb-3">
                            {/* {<input type="email" className="form-control" id="floatingEmail" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} value={email}/>
                            <label>Email Address</label>} */}
                            {/*for="floatingInput"*/}
                            <InputComponent
                                inputType={"email"}
                                inputClass={"form-control"}
                                inputID={"floatingEmail"}
                                placeholderTitle={"Email Address"}
                                handleOnChange={setEmail}                                
                                inputValue={email}                                
                                label={`Email Address`}                                                             
                            />
                        </div>
                        <div className="form-floating mb-3">
                            {/* <input type="number" className="form-control" id="floatingBalance" placeholder="Balance" onChange={(e) => setBalance(e.target.value)} value={balance}/>
                            <label>₱ Balance</label> */}
                            {/*for="floatingInput"*/}
                            <InputComponent
                                inputType={"number"}
                                inputClass={"form-control"}
                                inputID={"floatingBalance"}
                                placeholderTitle={"Balance"}
                                handleOnChange={setBalance}                                
                                inputValue={balance}                                
                                label={`Balance`}                                                             
                            />
                        </div>
                    </div>
                        <div className="modal-footer">
                            {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                            <ButtonComponent
                            btnClass={"btn btn-secondary"}
                            dbsDismiss={"modal"}
                            btnDescription={"Close"}
                            />                            
                            {/* <button type="button" className="btn btn-primary" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#ModalForgotPassword" onClick={handleSaveUsers}>Save</button> */}
                              <ButtonComponent
                            btnClass={"btn btn-primary"}
                            dbsDismiss={"modal"}
                            dbsToggle={"modal"}
                            dbsTarget={"#ModalForgotPassword"}
                            handleFunction={handleSaveUsers}
                            btnDescription={"Save"}
                            />
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ModalComponent
