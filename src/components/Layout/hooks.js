import {useState} from 'react'
import useSessionStorage from './useSessionStorage'
import useLocalStorage from '../Users/useLocalStorage';


const useHooks = () => {

    const [usernameInput, setUsernameInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')
    const [selected, setSelected] = useSessionStorage('selectedMenu', '');
    const [isAdmin, setIsAdmin] = useSessionStorage('adminsData', false);
    const [loginAccount, setLoginAccount] = useSessionStorage('loginAccount', []);
    const [admin, setAdmin] = useLocalStorage('adminsData', [])
    const historiesSelected = selected === 1 || selected === 2 || selected === 3;
   
    
    if(localStorage.getItem('adminsData') == null) {
            const newAdmin = {
                id: 1,
                role: 'admin',
                username: 'admin', 
                password: '1234',
                first_name: 'Admin',
                last_name: 'Lastname',
                email: 'admin@gmail.com',
                mobile_no: '0912323123123',
                thumbnail_url: 'https://bootdey.com/img/Content/avatar/avatar6.png'
            }
            setAdmin([...admin, newAdmin])
    }
    if (sessionStorage.getItem('loginAccount') == null) {
        setLoginAccount([])
    }
    if(sessionStorage.getItem('selectedMenu') == null) {
        setSelected(0)
    }
    if(sessionStorage.getItem('adminAccount') == null) {
        setIsAdmin(false)
    }
    
    const handleSelectedMenu = (index) => {
        setSelected(index)
    }

   const filterAdminRole = admin.filter(obj => obj.role === 'admin')
   const filterAdminUsername = filterAdminRole.filter(obj => obj.username === usernameInput)


    const handleCheckUser = () => {
        if (filterAdminUsername.length === 1) {
            if(filterAdminUsername[0].username === usernameInput){
                if(filterAdminUsername[0].password === passwordInput) {
                    setIsAdmin(true)
                    setLoginAccount(filterAdminUsername)
                }
            }
        }
         else {
            setIsAdmin(false)
        }
    }

    const handleLogout = () => {
        setIsAdmin(false)
        setLoginAccount([])
    }

    return {
        usernameInput,
        setUsernameInput,
        passwordInput,
        setPasswordInput,
        selected,
        isAdmin,
        setIsAdmin,
        loginAccount,
        setLoginAccount,
        admin,
        setAdmin,
        historiesSelected,
        handleSelectedMenu,
        handleCheckUser,
        handleLogout
    }
}

export default useHooks
