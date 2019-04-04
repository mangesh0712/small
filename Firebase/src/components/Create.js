import React from "react";
import db from "../Firebase";
import swal from 'sweetalert';

 




class Create extends React.Component{
constructor(props){
  super(props);
  this.state={
      name: "",
      weight:"",
     
  }
  this.ref= db.collection("users");
}
    
onFormSubmit=(e)=>{
    e.preventDefault();
//    const name = this.name.value;
//    const weight = this.weight.value;
   const name = String(this.state.name);
   const weight = Number(this.state.weight);


   ///// FORM VALIDATION FOR WEIGHT
   if ( weight < 100 && weight > 40){
 
    
   }else{
    swal("Bad Job!", "plz enter values between 40 to 100 !", "error", {
        button: "Ok",
        
      });
       return false;
   }
   ////// ADDING DATA TO FIREBASE
this.ref.add({
       name: name,
       weight: weight,
       
   }).then((ref)=>{
   this.setState({
    name: "",
    weight:"",
    
    })
    this.props.history.push("/")
}
   ).catch((error)=>console.log(error))

 
}

    render(){
        return(
            <div className="ui container">
                <form className="ui form"   onSubmit={this.onFormSubmit}>
                    <div className="field">
                    <label className="ui label">Name</label>
                       {/* <input type="text" ref={(input)=>this.name = input} /> */}
                       <input type="text" required value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})} />
                    </div>
                    <div className="field">
                    <label className="ui label">weight</label>
                       {/* <input type="text" ref={(input)=>this.weight = input}/> */}
                       <input required placeholder="in kgs " type="number" value={this.state.weight} onChange={(e)=>this.setState({weight:e.target.value})}/>
                    </div>
                    
                     <button className="ui pink button">Submit</button>
                    
                </form>
            </div>
        )
    }
}

export default Create;