import React from 'react'
import InputComponent from './InputComponent'


const ModalComponent = ({accountNo, setUserName, userName, setPassword, password, retypePassword, setRetypePassword, setFirstName, firstName, setLastName, lastName, setAddress, address, setMobileNo, mobileNo, setEmail, email, setBalance, balance, handleSaveUsers, errorState, setErrorState}) => {

    return (
        <div>
              <div className="modal fade" id="exampleModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                    <div className="modal-header">
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <h5 className="modal-title" id="exampleModalLabel">User Information</h5>
                            <p className="required">***All Fields are REQUIRED***</p>
                        </div>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setErrorState({
                            username: false,
                            password: false,
                            retypePassword: false,
                            firstName: false,
                            lastName: false,
                            address: false,
                            mobileNo: false,
                            email: false
                        })}></button>         
                    </div>
                            <div className="modal-body">
                            <form onSubmit={handleSaveUsers}  noValidate>
                                <div className="form-floating mb-3">
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
                                    <InputComponent
                                        inputType={"text"}
                                        inputClass={"form-control"}
                                        inputID={"floatingUserName"}
                                        placeholderTitle={"Username"}
                                        handleOnChange={setUserName}                                
                                        inputValue={userName}                                
                                        label={`Username`}
                                        errorMessage={errorState.username && <p className="error-message">Username is required</p>}  
                                        isError={errorState.username}                                                           
                                    />
                                </div>
                                <div className="form-floating mb-3">
                                    <InputComponent
                                        inputType={"password"}
                                        inputClass={"form-control"}
                                        inputID={"floatingPassword"}
                                        placeholderTitle={"Password"}
                                        handleOnChange={setPassword}                                
                                        inputValue={password}                                
                                        label={`Password`} 
                                        isPattern={true}     
                                        errorMessage={errorState.password && <p className="error-message">Password is required</p>}  
                                        isError={errorState.password}                                                       
                                    />
                                </div>
                                <div className="form-floating mb-3">
                                    <InputComponent
                                        inputType={"password"}
                                        inputClass={"form-control"}
                                        inputID={"floatingRetypePassword"}
                                        placeholderTitle={"Retype Password"}
                                        handleOnChange={setRetypePassword}                                
                                        inputValue={retypePassword}                                
                                        label={`Retype Password`}
                                        errorMessage={errorState.retypePassword && <p className="error-message">Retype Password is required</p>}  
                                        isError={errorState.retypePassword}  
                                    />
                                </div>
                                <div className="form-floating mb-3">
                                    <InputComponent
                                        inputType={"text"}
                                        inputClass={"form-control"}
                                        inputID={"floatingFirstName"}
                                        placeholderTitle={"First Name"}
                                        handleOnChange={setFirstName}                                
                                        inputValue={firstName}                                
                                        label={`First Name`}   
                                        errorMessage={errorState.firstName && <p className="error-message">Firstname is required</p>}  
                                        isError={errorState.firstName}                                                            
                                    />
                                </div>
                                <div className="form-floating mb-3">
                                    <InputComponent
                                        inputType={"text"}
                                        inputClass={"form-control"}
                                        inputID={"floatingLastName"}
                                        placeholderTitle={"Last Name"}
                                        handleOnChange={setLastName}                                
                                        inputValue={lastName}                                
                                        label={`Last Name`}  
                                        errorMessage={errorState.lastName && <p className="error-message">Lastname is required</p>}  
                                        isError={errorState.lastName}                                                           
                                    />
                                </div>
                                <div className="form-floating mb-3">
                                    <InputComponent
                                        inputType={"text"}
                                        inputClass={"form-control"}
                                        inputID={"floatingAddress"}
                                        placeholderTitle={"Address"}
                                        handleOnChange={setAddress}                                
                                        inputValue={address}                                
                                        label={`Address`}  
                                        errorMessage={errorState.address && <p className="error-message">Address is required</p>}  
                                        isError={errorState.address}                                                          
                                    />
                                </div>
                                <div className="form-floating mb-3">
                                    <InputComponent
                                        inputType={"number"}
                                        inputClass={"form-control"}
                                        inputID={"floatingActiveNo"}
                                        placeholderTitle={"Active Mobile No."}
                                        handleOnChange={setMobileNo}
                                        inputValue={mobileNo}                                
                                        label={`Active Mobile No.`}
                                        isMobileNo={true}
                                        errorMessage={errorState.mobileNo && <p className="error-message">Mobile number is required</p>}  
                                        isError={errorState.mobileNo}
                                    />
                                </div>
                                <div className="form-floating mb-3">
                                    <InputComponent
                                        inputType={"email"}
                                        inputClass={"form-control"}
                                        inputID={"floatingEmail"}
                                        placeholderTitle={"Email Address"}
                                        handleOnChange={setEmail}                                
                                        inputValue={email}                                
                                        label={`Email Address`}  
                                        errorMessage={errorState.email && <p className="error-message">Email is required</p>}  
                                        isError={errorState.email}                                                            
                                    />
                                </div>
                                <div className="form-floating mb-3">
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
                                
                                <div className="form-floating mb-3">
                                    <InputComponent
                                        inputType={"submit"}
                                        inputClass={"submit-btn"}                              
                                        inputValue={'Submit'} 
                                        dbsDismiss={
                                            userName && 
                                            password && 
                                            firstName && 
                                            lastName && 
                                            address && 
                                            mobileNo && 
                                            email && "modal"}                                                         
                                    />
                                </div>
                            </form>
                            </div>
                        </div>
                    </div>
            </div>
        </div>

    )
}

export default ModalComponent
