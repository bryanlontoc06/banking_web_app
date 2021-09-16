import "./style.css"
import cc from "../../assets/cc.svg"
import phone from "../../assets/phone.svg"
import revenue from "../../assets/revenue.svg"
import security from "../../assets/security.svg"
import feedback from "../../assets/feedback.svg"
import { Link } from "react-router-dom";

const Index = ({setSelected}) => {
    
    return (
      <>
        {/* <h1>Homepage</h1> */}
        <div className="card-container">

        <div className="box-item item1">

        <div className="card" style={{width: "100%", height: "100%"}}>
        <object className="svg" data={cc} width="auto" height="auto"> </object>
         <div className="card-body">
        <h5 className="card-title">Open and manage accounts with ease.</h5>
        
        <span style={{display: "flex", justifyContent: "space-between"}}><p className="card-text">No need to drop by a branch.</p>
        <Link
        to="/users">
        <button onClick={()=>setSelected(4)} className="btn btn-primary">Get started!</button></Link></span>
        
        {/* <p className="card-text">No need to drop by a branch.</p> */}
        </div>
        </div>        

        </div>

        <div className="box-item item2">

        <div className="card" style={{width: "100%", height: "100%"}}>
        <object className="svg" data={phone} width="auto" height="auto"> </object>
         <div className="card-body">
        <h5 className="card-title">Enjoy real-time and hassle-free transfers</h5>
        <p className="card-text">Transfer money to other banks via Instapay.</p>        
        </div>
        </div>        
        
        </div>

        <div className="box-item item3">

        <div className="card" style={{width: "100%", height: "100%"}}>
        <object className="svg" data={revenue} width="auto" height="auto"> </object>
         <div className="card-body">
        <h5 className="card-title">Stash away funds for your passions</h5>
        <p className="card-text">Easily open your second savings account via our web portal.</p>
        {/* <a href="#test" className="btn btn-primary">Go somewhere</a> */}
        </div>
        </div>  

        </div>
        <div className="box-item item4">

        <div className="card" style={{width: "100%", height: "100%"}}>
        <object className="svg" data={security} width="auto" height="auto"> </object>
         <div className="card-body">
        <h5 className="card-title">Relax and know your money is safe.</h5>
        <p className="card-text">Your account is safe with our world class security measures.</p>
        {/* <a href="#test" className="btn btn-primary">Go somewhere</a> */}
        </div>
        </div>  

        </div>

        <div className="box-item item5">

        <div className="card" style={{width: "100%", height: "100%"}}>
        <object className="svg" data={feedback} width="auto" height="auto"> </object>
         <div className="card-body">
        <h5 className="card-title">We're always ready to listen</h5>
        <p className="card-text">Let us know what you think!</p>
        {/* <a href="#test" className="btn btn-primary">Go somewhere</a> */}
        </div>
        </div>  

        </div>

        </div>
      </>
    );
}

export default Index
