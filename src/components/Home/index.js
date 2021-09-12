
import "./style.css"
import cc from "../../assets/cc.svg"
const Index = () => {    


    

    return (
      <>
        {/* <h1>Homepage</h1> */}
        <div className="card-container">

        <div className="box-item item1">

        <div className="card" style={{width: "100%", height: "100%"}}>
        <object className="svg" data={cc} width="auto%" height="auto%"> </object>
         <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#test" className="btn btn-primary">Go somewhere</a>
        </div>
        </div>        

        </div>

        <div className="box-item item2">

        <div className="card" style={{width: "100%", height: "100%"}}>
        <object className="svg" data={cc} width="auto%" height="auto%"> </object>
         <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build.</p>
        <a href="#test" className="btn btn-primary">Go somewhere</a>
        </div>
        </div>        
        
        </div>

        <div className="box-item item3">

        <div className="card" style={{width: "100%", height: "100%"}}>
        <object className="svg" data={cc} width="auto%" height="auto%"> </object>
         <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#test" className="btn btn-primary">Go somewhere</a>
        </div>
        </div>  

        </div>
        <div className="box-item item4">

        <div className="card" style={{width: "100%", height: "100%"}}>
        <object className="svg" data={cc} width="auto%" height="auto%"> </object>
         <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#test" className="btn btn-primary">Go somewhere</a>
        </div>
        </div>  

        </div>

        <div className="box-item item5">

        <div className="card" style={{width: "100%", height: "100%"}}>
        <object className="svg" data={cc} width="auto%" height="auto%"> </object>
         <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#test" className="btn btn-primary">Go somewhere</a>
        </div>
        </div>  

        </div>

        </div>
      </>
    );
}

export default Index
