import { useState } from 'react'
import useLocalStorage from '../../Users/useLocalStorage'

const useHooks = () => {    
    const [transfersHistories, setTransfersHistories] = useLocalStorage('transfersHistories', [])

    const [isOrdered, setIsOrdered] = useState({
        accountNumber: false,
        fullName: false,
        date: false,
        latestTransferTo: false,        
        latestTransferAmount: false,
        currentBalance: false,            
    })   

    const sortByAccountNumber = () => {
        setIsOrdered({...isOrdered,
            accountNumber: !isOrdered.accountNumber,        
        })        
        transfersHistories.sort((a, b)=>{
        return (isOrdered.accountNumber ? a.account_no - b.account_no : b.account_no - a.account_no)
        })
        setTransfersHistories([...transfersHistories])         
    } 
    
    const sortByFullName = () => {  
        setIsOrdered({...isOrdered,
            fullName: !isOrdered.fullName,         
        })                
            transfersHistories.sort((a, b)=>{              
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
            setTransfersHistories([...transfersHistories])        
    }

    const sortByDate = () => {
        setIsOrdered({...isOrdered,
            date: !isOrdered.date,           
        })        
        transfersHistories.sort((a, b)=>{
        const regex = ["/", ":", ",", " "]
        const date1 = parseInt(a.currentDatenTime.slice(0, 16).split("").filter(num=>num =! regex.includes(num)).join(""))
        const date2 = parseInt(b.currentDatenTime.slice(0, 16).split("").filter(num=>num =! regex.includes(num)).join(""))
        return (isOrdered.date ? date1 - date2 : date2 - date1)
        })
        setTransfersHistories([...transfersHistories]) 
    }
  

    const sortByTransferredTo = () => {
        setIsOrdered({...isOrdered,
            latestTransferTo: !isOrdered.latestTransferTo,           
        })        
        transfersHistories.sort((a, b)=>{
        return (isOrdered.latestTransferTo ? a.latestTransferTo - b.latestTransferTo : b.latestTransferTo - a.latestTransferTo)
        })
        setTransfersHistories([...transfersHistories])         
    } 

    const sortByTransferredAmount = () => {
        setIsOrdered({...isOrdered,
            latestTransferAmount: !isOrdered.latestTransferAmount,           
        })        
        transfersHistories.sort((a, b)=>{
        return (isOrdered.latestTransferAmount ? a.latestTransferAmount - b.latestTransferAmount : b.latestTransferAmount - a.latestTransferAmount)
        })
        setTransfersHistories([...transfersHistories])         
    } 

    const sortByCurrentBalance = () => {
        setIsOrdered({...isOrdered,
            currentBalance: !isOrdered.currentBalance,           
        })        
        transfersHistories.sort((a, b)=>{
        return (isOrdered.currentBalance ? a.balance - b.balance : b.balance - a.balance)
        })
        setTransfersHistories([...transfersHistories])         
    } 

    return {      
        transfersHistories,
        setTransfersHistories,
        isOrdered,  
        sortByAccountNumber,        
        sortByDate,
        sortByFullName,
        sortByTransferredTo,
        sortByTransferredAmount,
        sortByCurrentBalance,                
    }
}

export default useHooks
