import React from "react";
import db from "./Firebase";
import Theinfo from "./components/Theinfo";
import {Link} from "react-router-dom";
// import Theinfo from "./components/Theinfo";
// import {connect} from "react-redux";
// import {getData} from "./actions";

class App extends React.Component{

constructor(props){
super(props);
   this.ref = db.collection("users");
   this.state ={
     users:[]
   }
}

onsnapshot=(snap)=>{
   const users=[];
   snap.forEach((doc)=>{
     const name = doc.data().name;
     const weight = doc.data().weight;
     users.push({
       key: doc.id,
       doc,
       name:name,
       weight:weight
     })
     this.setState({users:users})
   })
}

componentDidMount(){
  this.ref.onSnapshot(this.onsnapshot)
}

render(){

       return(
           <div className="ui container">
           <div className="ui grid">
        <div className="ui inverted segment eight wide column">
        <div className="ui inverted relaxed devided list">
            {this.state.users.map((doc)=>{
               return <Theinfo key={doc.key} doc={doc}/>
               })}
        </div>
        </div>
        <div className="eight wide column">
          <Link to="/create">
           <button className="ui black button">Add</button>
          </Link>
        </div>
        </div>
        </div>
    )
}
   
}


   

// const mapStateToProps=(state)=>{
//     console.log(state);
//     return{ data :state.data }
// }

export default App;