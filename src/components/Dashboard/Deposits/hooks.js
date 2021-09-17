import { useState } from 'react'
import useLocalStorage from '../../Users/useLocalStorage'

const useHooks = () => {    
    const [depositHistories, setDepositHistories] = useLocalStorage('depositHistories', [])

    const [isOrdered, setIsOrdered] = useState({
        accountNumber: false,
        fullName: false,
        date: false,
        depositAmount: false,                
        currentBalance: false,            
    })    

    const sortByAccountNumber = () => {
        setIsOrdered({...isOrdered,
            accountNumber: !isOrdered.accountNumber,        
        })        
        depositHistories.sort((a, b)=>{
        return (isOrdered.accountNumber ? a.account_no - b.account_no : b.account_no - a.account_no)
        })
        setDepositHistories([...depositHistories])         
    } 
    
    const sortByFullName = () => {  
        setIsOrdered({...isOrdered,
            fullName: !isOrdered.fullName,         
        })                
            depositHistories.sort((a, b)=>{              
            let nameA = `${a.first_name.toUpperCase()} ${a.last_name.toUpperCase()}`;
            let nameB = `${b.first_name.toUpperCase()} ${b.last_name.toUpperCase()}`;                    
            if (nameA > nameB) {
                return (isOrdered.fullName ? 1: -1)
              }
            if (nameA < nameB) {
                return (isOrdered.fullName ? -1: 1)
              }
              return 0        
          });            
            setDepositHistories([...depositHistories])        
    }

    const sortByDate = () => {
        setIsOrdered({...isOrdered,
            date: !isOrdered.date,           
        })        
        depositHistories.sort((a, b)=>{
        const regex = ["/", ":", ",", " "]
        const date1 = parseInt(a.currentDatenTime.slice(0, 16).split("").filter(num=>num =! regex.includes(num)).join(""))
        const date2 = parseInt(b.currentDatenTime.slice(0, 16).split("").filter(num=>num =! regex.includes(num)).join(""))
        return (isOrdered.date ? date1 - date2 : date2 - date1)
        })
        setDepositHistories([...depositHistories]) 
    }
  

    const sortByDepositAmount = () => {
        setIsOrdered({...isOrdered,
            depositAmount: !isOrdered.depositAmount,           
        })        
        depositHistories.sort((a, b)=>{
        return (isOrdered.depositAmount ? a.latestDepositAmount - b.latestDepositAmount : b.latestDepositAmount - a.latestDepositAmount)
        })
        setDepositHistories([...depositHistories])         
    }    

    const sortByCurrentBalance = () => {
        setIsOrdered({...isOrdered,
            currentBalance: !isOrdered.currentBalance,           
        })        
        depositHistories.sort((a, b)=>{
        return (isOrdered.currentBalance ? a.balance - b.balance : b.balance - a.balance)
        })
        setDepositHistories([...depositHistories])         
    } 

    return {      
        depositHistories,
        setDepositHistories,
        isOrdered,  
        sortByAccountNumber,        
        sortByDate,
        sortByFullName,
        sortByDepositAmount,        
        sortByCurrentBalance        
    }
}

export default useHooks
