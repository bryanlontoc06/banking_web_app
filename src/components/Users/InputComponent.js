import React from 'react'

function InputComponent(props) {
    const {inputType, controlType, floatType, placeholderTitle, setAmountToTransfer, amountToTransfer, isLabel, label} = props
    return (
        <>        
            <input type={inputType} className={controlType} id={floatType} placeholder={placeholderTitle} onChange={(e) => setAmountToTransfer(e.target.value)} value={amountToTransfer}/>
            {isLabel? <label>₱ {label}</label> : ''} 
        </>
    )
}

export default InputComponent
