import React from "react";
import db from "../Firebase";
import swal from "sweetalert";




class Edit extends React.Component{
   

    constructor(props){
        super(props);
        this.state={
             name: "",
            weight:"",
            key:"",
            
        };
        //// users => document=> perticular doc with ID 
       
      }
         componentDidMount(){
            this.ref= db.collection("users")
            ////// findind  DATA from FIREBASE
         this.ref.doc(this.props.match.params.id).get().then((doc)=>{
           
            if (doc.exists){
             const users = doc.data();
           this.setState({
               key : doc.id,
               name: users.name,
               weight:users.weight
              })
            } else {
                console.log("no such dc")
            }
           
           })
           
         } 
     

          
       //on form submit
        
     onFormSubmit=(e)=>{
      e.preventDefault();  
       
      const name = this.state.name;
      const weight = this.state.weight;
   
      if (weight >= 40 && weight <=100){

      }else{
        swal("Bad Job!", "plz enter values between 40 to 100 !", "error", {
            button: "Ok",
            
          });
        return false
      }
      
      this.ref.doc(this.state.key).set({
        name:name,
        weight: weight
      }).then((doc)=>{
          this.setState({
              name: "",
              weight:"",
              key:""
          })
        this.props.history.push(`/show/${this.props.match.params.id}`)
      })
     }
     
      
       
    


    render(){
       
        return(
            <div className="ui container">
                <form className="ui form"   onSubmit={this.onFormSubmit}>
                    <div className="field">
                    <label className="ui label">Name</label>
                       {/* <input type="text" ref={(input)=>this.name = input} /> */}
                       <input type="text" name="name" defaultValue={this.state.name} onChange={(e)=>this.setState({name:e.target.value})} />
                    </div>
                    <div className="field">
                    <label className="ui label">weight</label>
                       {/* <input type="text" ref={(input)=>this.weight = input}/> */}
                       <input  placeholder="in kgs " type="number" name="weight" defaultValue={this.state.weight} onChange={(e)=>this.setState({weight : e.target.value})}/>
                    </div>
                     <button className="ui pink button">Submit</button>
                   
                </form>
            </div>
        )
    }
}

export default Edit;