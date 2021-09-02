import React from 'react'

const ButtonComponent = ({btnClass, dbsToggle, dbsTarget, handleFunction, iconName, buttonDescription}) => {
    
    return (
        <>
            <button type="button" className={btnClass} data-bs-toggle={dbsToggle} data-bs-target={dbsTarget} onClick={handleFunction}>{iconName ? iconName : null } {buttonDescription}</button>
        </>
    )
}

export default ButtonComponent



