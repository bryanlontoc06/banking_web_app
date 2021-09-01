import React from 'react'

const ButtonComponent = ({handleFunction, PersonPlus, icon, buttonDescription}) => {
    return (
        <div>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={handleFunction}>{icon ? <PersonPlus /> : null } {buttonDescription}</button>
        </div>
    )
}

export default ButtonComponent



