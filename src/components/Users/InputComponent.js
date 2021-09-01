import React from 'react'

function InputComponent({inputType, controlType, floatType, placeholderTitle, setAmountToTransfer, amountToTransfer}) {
    console.log({inputType, controlType, floatType, placeholderTitle, setAmountToTransfer, amountToTransfer});
    return (

        
        <div>
        {/* <input type="number" className="form-control" id="floatingTransfer" placeholder="Transfer" onChange={(e) => setAmountToTransfer(e.target.value)} value={amountToTransfer}/> */}
            <input type={inputType} className={controlType} id={floatType} placeholder={placeholderTitle} onChange={(e) => setAmountToTransfer(e.target.value)} value={amountToTransfer}/>
            
        </div>
    )
}

export default InputComponent

// inputType={"number"}
// controlType={"form-control"}
// floatType={"floatingTransfer"}
// placeholderTitle={"Transfer"}
// setAmountToTransfer = {setAmountToTransfer}
// amountToTransfer={amountToTransfer}
