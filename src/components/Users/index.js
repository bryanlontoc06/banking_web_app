import './style.css';
import {
    PersonPlus,
} from './component';
import {useState} from 'react'
import useLocalStorage from './useLocalStorage';
import ButtonComponent from './ButtonComponent';
import {convertToMoney} from '../lib/helpers'
import TableComponent from './TableComponent';
import ModalComponent from './ModalComponent';
import ModalDetailsComponent from './ModalDetailsComponent';
import useHooks from './hooks'

const Index = () => {
    const {
        withdrawalHistories,
        depositHistories,
        transfersHistories,
        setWithdrawalHistories,
        setDepositHistories,
        setTransfersHistories
    } = useHooks();

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

    const handleHistories = (action) => {
        const newHistory = {
            account_no: currentSelectedData.account_no,
            username: currentSelectedData.username, 
            first_name: currentSelectedData.first_name,
            last_name: currentSelectedData.last_name,
            address: currentSelectedData.address,
            mobile_no: currentSelectedData.mobile_no,
            email: currentSelectedData.email,
            balance: currentSelectedData.balance,
            latestWithdrawnAmount: currentSelectedData.latestWithdrawnAmount,
            latestDepositAmount: currentSelectedData.latestDepositAmount,
            latestTransferAmount: currentSelectedData.latestTransferAmount,
            latestTransferTo: currentSelectedData.latestTransferTo,
            currentDatenTime: new Date().toLocaleTimeString([], {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'})
        }
        if(action === 'withdraw') {
            setWithdrawalHistories([...withdrawalHistories, newHistory])
        }
        else if (action === 'deposit') {
            setDepositHistories([...depositHistories, newHistory])
        } else if (action === 'transfer') {
            setTransfersHistories([...transfersHistories, newHistory])
        }
    }

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
                latestWithdrawnAmount: amountToWithdraw,
                latestDepositAmount: amountToDeposit,
                latestTransferAmount: amountToTransfer,
                latestTransferTo: transferTo,
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
            setAmountToWithdraw(0)
            setAmountToTransfer(0)
            setAmountToDeposit(0)
            setTransferTo('')
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
        setUsers([...users], currentSelectedData.balance = currentBalance, currentSelectedData.latestWithdrawnAmount = amountToWithdraw)
        handleHistories('withdraw');
    }

    const handleDeposit = () => {
        let currentBalance = (+currentSelectedData.balance) + (+amountToDeposit);
        setUsers([...users], currentSelectedData.balance = currentBalance, currentSelectedData.latestDepositAmount = amountToDeposit)
        handleHistories('deposit');
    }

    const handleTransfer = () => {
        if(transferTo){
        const toUser = users.find(user => {return user.account_no === transferTo})
        let currentBalance = (+currentSelectedData.balance) - (+amountToTransfer)
        let toUserCurrentBalance = (+toUser.balance) + (+amountToTransfer);
        setUsers([...users], 
            currentSelectedData.balance = currentBalance, 
            currentSelectedData.latestTransferAmount = amountToTransfer, 
            currentSelectedData.latestTransferTo = transferTo,
            toUser.balance = toUserCurrentBalance)
        handleHistories('transfer');
        }
    }



    return (
        <div className="users-container">            
            <ButtonComponent
                handleFunction = {handleGenerateAccountNo}
                iconName = {<PersonPlus/>}                
                btnDescription = {" Add Client"}
                btnClass= {"btn btn-primary"}
                dbsToggle={"modal"}
                dbsTarget={"#exampleModal"}
            />
            <TableComponent
                handleDeleteUser={handleDeleteUser}
                users={users}
                setCurrentSelectedData={setCurrentSelectedData}
            />       
            {/* <!-- Modal --> */}
            <ModalComponent
                accountNo={accountNo}  
                setUserName={setUserName}
                userName={userName}
                setPassword={setPassword}
                password={password}
                setFirstName={setFirstName}
                firstName={firstName}
                setLastName={setLastName}
                lastName={lastName}
                setAddress={setAddress}
                address={address}
                setMobileNo={setMobileNo}
                mobileNo={mobileNo}
                setEmail={setEmail}
                email={email}
                setBalance={setBalance}
                balance={balance}
                handleSaveUsers={handleSaveUsers}                    
            />   
            {/* ModalComponentForDetails */}             
            <ModalDetailsComponent
                currentSelectedData={currentSelectedData}            
                convertToMoney={convertToMoney}
                setAmountToWithdraw={setAmountToWithdraw}
                amountToWithdraw={amountToWithdraw}
                handleWithdraw={handleWithdraw}
                amountToDeposit={amountToDeposit}
                setAmountToDeposit={setAmountToDeposit}
                transferTo={transferTo}
                setTransferTo={setTransferTo}
                amountToTransfer={amountToTransfer}
                setAmountToTransfer={setAmountToTransfer}
                handleDeposit={handleDeposit}
                handleTransfer={handleTransfer}
            />
        </div>
    )
}

export default Index;
