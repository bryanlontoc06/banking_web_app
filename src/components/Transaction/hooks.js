import { useState, useContext } from 'react'
import {AppContext} from '../Global/AppContext'
import useLocalStorage from '../Users/useLocalStorage'
import {convertToMoney} from '../lib/helpers'
import useSessionStorage from '../Layout/useSessionStorage'
import useMediaQuery from '@material-ui/core/useMediaQuery'


const useHooks = () => {
    const {withdrawalHistories,
        depositHistories,
        transfersHistories,
        setWithdrawalHistories,
        setDepositHistories,
        setTransfersHistories} = useContext(AppContext)

    const matchesLG = useMediaQuery('(min-width: 1024px)')
    const [users, setUsers] = useLocalStorage('usersData', [])
    const [loginAccount, setLoginAccount] = useSessionStorage('loginAccount', []);
    const [currentSelectedData, setCurrentSelectedData] = useState(loginAccount[0])
    const [accountNo, setAccountNo] = useState('')
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [retypePassword, setRetypePassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [mobileNo, setMobileNo] = useState('');
    const [email, setEmail] = useState('');
    const [balance, setBalance] = useState('');
    const [amountToWithdraw, setAmountToWithdraw] = useState('')
    const [amountToDeposit, setAmountToDeposit] = useState('')
    const [transferTo, setTransferTo] = useState('')
    const [transferMessage, setTransferMessage] = useState({})
    const [amountToTransfer, setAmountToTransfer] = useState('')
    const [modalShow, setModalShow] = useState(false);
    const [modalDetailsAlert, setModalDetailsAlert] = useState({
        insufficientBalance: false,
        successful: false,
        enterAnAmountToWithdraw: false,
        successfulDeposit: false,
        enterAnAmountToDeposit: false,
        insufficientBalanceTransfer: false,
        successfulTransfer: false,
        enterAnAmountToTransfer: false,
        sameAccountNumber: false,
        accountNumberNotValidTransfer: false,
        accountNumberCannotBeBlank: false,
    });
    const [errorState, setErrorState] = useState({
        username: false,
        password: false,
        retypePassword: false,
        firstName: false,
        lastName: false,
        address: false,
        mobileNo: false,
        email: false
    })
    

    const closeModalComponent = () => {
        setModalShow(false)
        setErrorState({
            username: false,
            password: false,
            retypePassword: false,
            firstName: false,
            lastName: false,
            address: false,
            mobileNo: false,
            email: false
        })
    }

    


    
    let userSelected = users.find((user) => {return user.account_no === currentSelectedData.account_no})

    const handleHistories = (action) => {
        const newHistory = {
                account_no: userSelected.account_no,
                username: userSelected.username, 
                first_name: userSelected.first_name,
                last_name: userSelected.last_name,
                address: userSelected.address,
                mobile_no: userSelected.mobile_no,
                email: userSelected.email,
                balance: userSelected.balance,
                latestWithdrawnAmount: userSelected.latestWithdrawnAmount,
                latestDepositAmount: userSelected.latestDepositAmount,
                latestTransferAmount: userSelected.latestTransferAmount,
                latestTransferTo: userSelected.latestTransferTo,
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

    const handleWithdraw = () => {
        if(amountToWithdraw > 0) {
            if(amountToWithdraw <= userSelected.balance) {                
                let currentBalance = userSelected.balance - amountToWithdraw;
                setUsers([...users], userSelected.balance = currentBalance, userSelected.latestWithdrawnAmount = amountToWithdraw)
                handleHistories('withdraw');
                setModalDetailsAlert({insufficientBalance: false})
                setModalDetailsAlert({successful: true})
                setAmountToWithdraw('')
            } else {
                setModalDetailsAlert({insufficientBalance: true})
            }
        } else {
            setModalDetailsAlert({enterAnAmountToWithdraw: true})
        }
    }

    const handleDeposit = () => {
        if(amountToDeposit > 0) {
            let currentBalance = (+userSelected.balance) + (+amountToDeposit);
            setUsers([...users], userSelected.balance = currentBalance, userSelected.latestDepositAmount = amountToDeposit)
            handleHistories('deposit');
            setAmountToDeposit('')
            setModalDetailsAlert({successfulDeposit: true})
        } else {
            setModalDetailsAlert({enterAnAmountToDeposit: true})
        }
    }

    

    const handleTransfer = () => {
        if(transferTo){
            const toUser = users.find(user => {return user.account_no === transferTo})                    
            if(toUser) {                
                if(toUser.account_no !== userSelected.account_no) {
                    if(amountToTransfer < 0){
                        setModalDetailsAlert({insufficientBalanceTransfer: true})
                        setAmountToTransfer('')
                        console.log("test");
                    } else {
                        if(amountToTransfer > 0) {
                            if(amountToTransfer <= currentSelectedData.balance) {

                                let currentBalance = (+currentSelectedData.balance) - (+amountToTransfer)
                                let toUserCurrentBalance = (+toUser.balance) + (+amountToTransfer);
                                setUsers([...users], 
                                    currentSelectedData.balance = currentBalance, 
                                    currentSelectedData.latestTransferAmount = amountToTransfer, 
                                    currentSelectedData.latestTransferTo = transferTo,
                                    toUser.balance = toUserCurrentBalance)
                                handleHistories('transfer');
                                setTransferMessage({transferAmount: amountToTransfer, accountNo: transferTo, firstName: toUser.first_name, lastName: toUser.last_name})
                                setTransferTo('')
                                setAmountToTransfer('')
                                setModalDetailsAlert({successfulTransfer: true})
                            } else {
                                setModalDetailsAlert({insufficientBalanceTransfer: true})
                            }
                        } else {
                            setModalDetailsAlert({amountToTransfer: true})
                        }
                    }
                } else {
                    setModalDetailsAlert({sameAccountNumber: true})
                }
            } else {
                setModalDetailsAlert({accountNumberNotValidTransfer: true})
            }
        } else {
            setModalDetailsAlert({accountNumberCannotBeBlank: true})
        }
    }

    const resetTransaction = () => {
        setAmountToWithdraw('')
        setAmountToDeposit('')
        setAmountToTransfer('')
        setTransferTo('')
        setTransferMessage({})
        setModalDetailsAlert({
            insufficientBalance: false,
            successful: false,
            enterAnAmountToWithdraw: false,
            successfulDeposit: false,
            enterAnAmountToDeposit: false,
            insufficientBalanceTransfer: false,
            successfulTransfer: false,
            enterAnAmountToTransfer: false,
            sameAccountNumber: false,
            accountNumberNotValidTransfer: false,
            accountNumberCannotBeBlank: false,
        });
    }

    return {        
        users, 
        setUsers, 
        accountNo, 
        setAccountNo, 
        userName, 
        setUserName, 
        password, 
        setPassword, 
        retypePassword, 
        setRetypePassword, 
        firstName, 
        setFirstName, 
        lastName, 
        setLastName, 
        address, 
        setAddress, 
        mobileNo, 
        setMobileNo, 
        email, 
        setEmail, 
        balance, 
        setBalance, 
        amountToWithdraw, 
        setAmountToWithdraw, 
        amountToDeposit, 
        setAmountToDeposit, 
        transferTo, 
        setTransferTo,
        transferMessage,
        amountToTransfer, 
        setAmountToTransfer,
        handleWithdraw,
        handleDeposit,
        handleTransfer,
        errorState,
        setErrorState,
        convertToMoney,
        modalDetailsAlert,
        resetTransaction,
        setModalShow,
        modalShow,
        closeModalComponent,
        loginAccount,
        userSelected,
        matchesLG
    }
}

export default useHooks
