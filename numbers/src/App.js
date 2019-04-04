import React from "react";
import {connect} from "react-redux";
import {Increment, Decrement} from "./actions";

class App extends React.Component{
    render(){
    console.log(this.props);

        return(
            <div className="ui container" >
            <div style={{marginTop:"5%",marginLeft:"30%"}}>
            <button className="ui pink button" onClick={()=>{this.props.Increment()}}>+</button>
                 <h1>{this.props.no}</h1>
                <button className="ui pink button" onClick={()=>{this.props.Decrement()}}>-</button>
            </div>   
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    console.log(state);
    return {no : state.no}
}

export default connect(mapStateToProps,{Increment,Decrement})(App) ;