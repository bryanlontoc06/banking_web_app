import './style.css';
import {
    PersonPlus,
    FillDelete,
    ContactInfo
} from './component';
import {useState} from 'react'
import {convertToMoney} from '../lib/helpers'
import useLocalStorage from './useLocalStorage';
//try comment

const Index = () => {

    const [currentSelectedData, setCurrentSelectedData] = useState({});
    const [users, setUsers] = useLocalStorage('usersData', [])
    const [accountNo, setAccountNo] = useState('')
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [mobileNo, setMobileNo] = useState('');
    const [email, setEmail] = useState('');
    const [balance, setBalance] = useState(0);
    const [amountToWithdraw, setAmountToWithdraw] = useState(0)
    const [amountToDeposit, setAmountToDeposit] = useState(0)
    const [transferTo, setTransferTo] = useState('')
    const [amountToTransfer, setAmountToTransfer] = useState(0)

    const handleGenerateAccountNo = () => {
        let date = new Date();
        let minutes = '0' + date.getMinutes().toString().substr(-2)
        let hours = '0' + date.getHours().toString().substr(-2)
        let month = '0' + (date.getMonth() + 1).toString().substr(-2)
        let year = date.getFullYear().toString().substr(-2)
        setAccountNo(Math.floor(10 + Math.random() * 90) + minutes + hours + month + year)
    }
    const handleSaveUsers = () => {
        try {
            let enPassword = Buffer.from(password).toString('base64');
            const newUser = {
                account_no: accountNo,
                username: userName, 
                password: enPassword,
                first_name: firstName,
                last_name: lastName,
                address: address,
                mobile_no: mobileNo,
                email: email,
                balance: balance,
            }
            setUsers([...users, newUser])

            setAccountNo('')
            setUserName('')
            setPassword('')
            setFirstName('')
            setLastName('')
            setAddress('')
            setMobileNo('')
            setEmail('')
            setBalance(0)
        } catch(e) {
            console.log(`Error in handleSaveUsers`, e)
        }
    }

    const handleDeleteUser = (id) => {
        const index = users.findIndex(user => {return user.account_no === id})
        users.splice(index, 1)
        setUsers([...users])
    }

    const handleWithdraw = () => {
        let currentBalance = currentSelectedData.balance - amountToWithdraw;
        setUsers([...users], currentSelectedData.balance = currentBalance)
    }

    const handleDeposit = () => {
        let currentBalance = (+currentSelectedData.balance) + (+amountToDeposit);
        setUsers([...users], currentSelectedData.balance = currentBalance)
    }

    const handleTransfer = () => {
        console.log({transferTo})
        const toUser = users.find(user => {return user.account_no === transferTo})
        let currentBalance = (+currentSelectedData.balance) - (+amountToTransfer)
        let toUserCurrentBalance = (+toUser.balance) + (+amountToTransfer);
        console.log({toUserCurrentBalance})
        setUsers([...users], currentSelectedData.balance = currentBalance, toUser.balance = toUserCurrentBalance)
    }


    return (
        <div className="users-container">
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={handleGenerateAccountNo}><PersonPlus /> Add Client</button>
            <table className="table">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">Acct #</th>
                        <th scope="col">First name</th>
                        <th scope="col">Last name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Mobile Number</th>
                        <th scope="col">Email Address</th>
                        <th scope="col" className="action-col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((data, index) => {
                        return (
                            <tr key={index}>
                                <th scope="row">{data.account_no}</th>
                                <td>{data.first_name}</td>
                                <td>{data.last_name}</td>
                                <td>{data.address}</td>
                                <td>{data.mobile_no}</td>
                                <td>{data.email}</td>
                                <td className="action-btns">
                                    <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#detailsModal" onClick={() => setCurrentSelectedData(data)}><ContactInfo /></button>
                                    <button type="button" className="btn btn-danger" onClick={() => handleDeleteUser(data.account_no)}><FillDelete /></button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">User Information</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div className="modal-body">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingInput" placeholder="Account No." readOnly value={accountNo}/>
                            <label /*for="floatingInput"*/>Account No.</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingUserName" placeholder="User Name" onChange={(e) => setUserName(e.target.value)} value={userName}/>
                            <label /*for="floatingInput"*/>User Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
                            <label /*for="floatingInput"*/>Password</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingFirstName" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} value={firstName}/>
                            <label /*for="floatingInput"*/>First Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingLastName" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} value={lastName}/>
                            <label /*for="floatingInput"*/>Last Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingAddress" placeholder="Address" onChange={(e) => setAddress(e.target.value)} value={address}/>
                            <label /*for="floatingInput"*/>Address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="number" className="form-control" id="floatingActiveNo" placeholder="Active Mobile No." onChange={(e) => setMobileNo(e.target.value)} value={mobileNo}/>
                            <label /*for="floatingInput"*/>Active Mobile No.</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingEmail" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} value={email}/>
                            <label /*for="floatingInput"*/>Email Address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="number" className="form-control" id="floatingBalance" placeholder="Balance" onChange={(e) => setBalance(e.target.value)} value={balance}/>
                            <label /*for="floatingInput"*/>₱ Balance</label>
                        </div>
                    </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#ModalForgotPassword" onClick={handleSaveUsers}>Save</button>
                        </div>
                    </div>
                </div>
            </div>


            {/* Modal For Details */}
            <div className="modal fade" id="detailsModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">User Information</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="user-row">
                            <div className="form-floating mb-3">
                                <input type="text" className="read-only-user-detail form-control" placeholder="Account No." readOnly value={currentSelectedData.account_no}/>
                                <label>Account No.</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" className="read-only-user-detail form-control" id="floatingUserNameDetails" placeholder="User Name" readOnly value={currentSelectedData.username}/>
                                <label>User Name</label>
                            </div>
                        </div>
                        <div className="user-row">
                            <div className="form-floating mb-3">
                                <input type="text" className="read-only-user-detail form-control" id="floatingFirstNameDetails" placeholder="First Name" readOnly value={currentSelectedData.first_name}/>
                                <label>First Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" className="read-only-user-detail form-control" id="floatingLastNameDetails" placeholder="Last Name" readOnly value={currentSelectedData.last_name}/>
                                <label>Last Name</label>
                            </div>
                        </div>
                        <div className="user-row">
                            <div className="form-floating mb-3">
                                <input type="text" className="read-only-user-detail form-control" id="floatingAddressDetails" placeholder="Address" readOnly value={currentSelectedData.address}/>
                                <label>Address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="number" className="read-only-user-detail form-control" id="floatingActiveNoDetails" placeholder="Active Mobile No." readOnly value={currentSelectedData.mobile_no}/>
                                <label>Active Mobile No.</label>
                            </div>
                        </div>
                        <div className="user-row">
                            <div className="form-floating mb-3">
                                <input type="email" className="read-only-user-detail form-control" id="floatingEmailDetails" placeholder="Email Address" readOnly value={currentSelectedData.email}/>
                                <label>Email Address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" className="read-only-user-detail form-control" id="floatingBalanceDetails" placeholder="Balance" readOnly value={convertToMoney(currentSelectedData.balance)}/>
                                <label>Balance</label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="title">
                            <h5 className="modal-title" >Transactions</h5>
                        </div>
                        <div className="transaction-body-container">
                            <div className="transaction-body user-row">
                                <div className="transaction form-floating mb-3">
                                    <input type="number" className="form-control" id="floatingWithdraw" placeholder="Withdraw" onChange={(e) => setAmountToWithdraw(e.target.value)} value={amountToWithdraw}/>
                                    <label>₱ Amount to Withdraw</label>
                                </div>
                                <button type="button" class="btn btn-primary" onClick={handleWithdraw}>Withdraw</button>
                            </div>
                            <div className="transaction-body user-row">
                                <div className="transaction form-floating mb-3">
                                    <input type="number" className="form-control" id="floatingDeposit" placeholder="Deposit" onChange={(e) => setAmountToDeposit(e.target.value)} value={amountToDeposit}/>
                                    <label>₱ Amount to Deposit</label>
                                </div>
                                <button type="button" class="btn btn-primary" onClick={handleDeposit}>Deposit</button>
                            </div>



                            <h6 className="modal-title" >Transfer Fund</h6>
                            <p>To</p>
                            <div className="transaction-body user-row">
                                <div className="transaction form mb-3">
                                    <input type="text" className="transfer-names form-control" id="floatingTransferTo" placeholder="Account No." onChange={(e) => setTransferTo(e.target.value)} value={transferTo} />
                                </div>
                            </div>
                            <p>Amount</p>
                            <div className="transaction-body user-row">
                                <div className="transaction form-floating mb-3">
                                    <input type="number" className="form-control" id="floatingTransfer" placeholder="Transfer" onChange={(e) => setAmountToTransfer(e.target.value)} value={amountToTransfer}/>
                                    <label>₱ Amount to Transfer</label>
                                </div>
                                <button type="button" class="btn btn-primary" onClick={handleTransfer}>Transfer</button>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index;
