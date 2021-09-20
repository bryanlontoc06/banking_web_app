import React from 'react'
import Fade  from 'react-reveal/Fade';


const CardComponent = ({svg, setSelected, isAdmin, Link, cardTitle, cardText, item}) => {
    return ( 
        <>
        <Fade  left>
        <div className={`box-item ${item}`}>
        <div className="card">
        <object className="svg" data={svg} width="auto" height="auto"> </object>
        <div className="card-body">
        <h5 className="card-title">{cardTitle}</h5>        
        <span className="card-span">
        <p className="card-text">{cardText}</p>
        {Link && <Link
        to={isAdmin ? "/users" : "/transactions"}>
        <button onClick={()=>setSelected(isAdmin ? 4 : 5)} className="btn btn-primary">Get started!</button>
        </Link>}
        </span>        
        </div>
        </div>     
        </div>
        </Fade>
       </>        
    )
}

export default CardComponent
