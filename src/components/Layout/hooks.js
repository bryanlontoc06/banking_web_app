import {useState} from 'react'
import useSessionStorage from './useSessionStorage'
import useLocalStorage from '../Users/useLocalStorage';
import useMediaQuery from '@material-ui/core/useMediaQuery'


const useHooks = () => {

    const matchesMD = useMediaQuery('(min-width: 768px)')
    const [usernameInput, setUsernameInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')
    const [selected, setSelected] = useSessionStorage('selectedMenu', '');
    const [isAdmin, setIsAdmin] = useSessionStorage('isAdmin', false);
    const [isUser, setIsUser] = useSessionStorage('isUser', false);
    const [loginAccount, setLoginAccount] = useSessionStorage('loginAccount', []);
    const [admin, setAdmin] = useLocalStorage('adminsData', [])
    const [users, setUsers] = useLocalStorage('usersData', [])
    const historiesSelected = selected === 1 || selected === 2 || selected === 3;
   
    
    if(localStorage.getItem('adminsData') == null) {
            const newAdmin = {
                id: 1,
                role: 'admin',
                username: 'admin', 
                password: 'MTIzNA==',
                first_name: 'Admin',
                last_name: 'Lastname',
                email: 'admin@gmail.com',
                mobile_no: '0912323123123',
                thumbnail_url: 'https://bootdey.com/img/Content/avatar/avatar6.png'
            }
            setAdmin([...admin, newAdmin])
            setIsAdmin(false)
    }
    if (sessionStorage.getItem('loginAccount') == null) {
        setLoginAccount([])
    }
    if(sessionStorage.getItem('selectedMenu') == null) {
        setSelected(0)
    }   
    
    const handleSelectedMenu = (index) => {
        setSelected(index)
    }

   

    const handleCheckUser = () => {
        const loginFilterAdmin = admin.filter(obj => obj.username === usernameInput)
        const loginFilterUser = users.filter(obj => obj.username === usernameInput)
        if(loginFilterAdmin.length >= 1) {
            let enPassword = Buffer.from(passwordInput).toString('base64');
            const passwordFilter = loginFilterAdmin.filter(obj => obj.password === enPassword)
            if(passwordFilter.length >= 1) {
                setIsAdmin(true)
                setIsUser(false)
                setLoginAccount(loginFilterAdmin)
            }
            else {
                alert('Wrong password. Please Try Again.')
            }
        }
        else if(loginFilterUser.length >= 1) {
            let enPassword = Buffer.from(passwordInput).toString('base64');
            const passwordFilter = loginFilterUser.filter(obj => obj.password === enPassword)
            if(passwordFilter.length >= 1) {
                setIsAdmin(false)
                setIsUser(true)
                setLoginAccount(loginFilterUser)
            }
            else {
                alert('Wrong password. Please Try Again.')
            }
        }
        else {
            alert('Username not registered!')
        }
    }


    const handleLogout = () => {
        setIsAdmin(false)
        setIsUser(false)
        setLoginAccount([])
        setSelected(0)
    }

    const [passwordState, setPasswordState] = useState({
        password: false,
    })

    const handleShowPassword = (bool) => {
        setPasswordState({password: bool})
    }

    const handleHidePassword = (bool) => {
        setPasswordState({password: bool})
    }

    return {
        usernameInput,
        setUsernameInput,
        passwordInput,
        setPasswordInput,
        selected,
        isAdmin,
        setIsAdmin,
        isUser,
        loginAccount,
        setLoginAccount,
        admin,
        setAdmin,
        historiesSelected,
        handleSelectedMenu,
        handleCheckUser,
        handleLogout,
        matchesMD,
        users,
        setUsers,
        passwordState,
        handleShowPassword,
        handleHidePassword,
        setSelected
    }
}

export default useHooks
