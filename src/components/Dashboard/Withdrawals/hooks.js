import React from 'react'
import { useState } from 'react'
import useLocalStorage from '../../Users/useLocalStorage'

const useHooks = () => {    
    const [withdrawalHistories, setWithdrawalHistories] = useLocalStorage('withdrawalHistories', [])

    const [isOrdered, setIsOrdered] = useState({
        accountNumber: false,
        fullName: false,
        date: false,
        withdrawnAmount: false,
        currentBalance: false,            
    })  
    

    const sortByAccountNumber = () => {
        setIsOrdered({...isOrdered,
            accountNumber: !isOrdered.accountNumber,        
        })        
        withdrawalHistories.sort((a, b)=>{
        return (isOrdered.accountNumber ? a.account_no - b.account_no : b.account_no - a.account_no)
        })
        setWithdrawalHistories([...withdrawalHistories])         
    } 

    
    const sortByFullName = () => {  
        setIsOrdered({...isOrdered,
            fullName: !isOrdered.fullName,         
        })                
            withdrawalHistories.sort((a, b)=>{              
            let nameA = `${a.first_name.toUpperCase() + a.last_name.toUpperCase()}`;
            let nameB = `${b.first_name.toUpperCase() + b.last_name.toUpperCase()}`;                    
            if (nameA > nameB) {
                return (isOrdered.fullName ? 1: -1)
              }
            if (nameA < nameB) {
                return (isOrdered.fullName ? -1: 1)
              }
              return 0        
          });            
            setWithdrawalHistories([...withdrawalHistories])        
    }

    const sortByDate = () => {
        setIsOrdered({...isOrdered,
            date: !isOrdered.date,           
        })        
        withdrawalHistories.sort((a, b)=>{
        const regex = ["/", ":", ",", " "]
        const date1 = parseInt(a.currentDatenTime.slice(0, 16).split("").filter(num=>num =! regex.includes(num)).join(""))
        const date2 = parseInt(b.currentDatenTime.slice(0, 16).split("").filter(num=>num =! regex.includes(num)).join(""))
        return (isOrdered.date ? date1 - date2 : date2 - date1)
        })
        setWithdrawalHistories([...withdrawalHistories]) 
    }
  

    const sortByWithdrawAmount = () => {
        setIsOrdered({...isOrdered,
            withdrawnAmount: !isOrdered.withdrawnAmount,           
        })        
        withdrawalHistories.sort((a, b)=>{
        return (isOrdered.withdrawnAmount ? a.latestWithdrawnAmount - b.latestWithdrawnAmount : b.latestWithdrawnAmount - a.latestWithdrawnAmount)
        })
        setWithdrawalHistories([...withdrawalHistories])         
    } 

    const sortByCurrentBalance = () => {
        setIsOrdered({...isOrdered,
            currentBalance: !isOrdered.currentBalance,           
        })        
        withdrawalHistories.sort((a, b)=>{
        return (isOrdered.currentBalance ? a.balance - b.balance : b.balance - a.balance)
        })
        setWithdrawalHistories([...withdrawalHistories])         
    } 

    return {      
        withdrawalHistories,
        setWithdrawalHistories,
        isOrdered,  
        sortByAccountNumber,        
        sortByDate,
        sortByFullName,
        sortByWithdrawAmount,
        sortByCurrentBalance        
    }
}

export default useHooks
