import React, {useState} from 'react'
export const AppContext = React.createContext();

const AppProvider = (props) => {

    const [withdrawHistory, setWithdrawHistory] = useState(0)
    

    const state = {
        withdrawHistory,
    }

    const func = {
        setWithdrawHistory,
    }

    return (
        <AppContext.Provider value={{ ...state, ...func }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppProvider;
