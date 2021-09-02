import {useContext} from 'react'
import {AppContext} from '../../Global/AppContext'

const useHooks = () => {

    const {withdrawHistory, setWithdrawHistory} = useContext(AppContext)

    return {
        withdrawHistory,
        setWithdrawHistory,
    }
}

export default useHooks
