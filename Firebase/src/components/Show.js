import React from "react";
import db from "../Firebase";
import {Link } from "react-router-dom";
import swal from "sweetalert";

class Show extends React.Component{
   
  constructor(props) {
    super(props);
    this.state = {
      users: {},
      key: '',
      isLoading: true
    };
  }

  componentDidMount() {
    const ref = db.collection('users').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          users: doc.data(),
          key: doc.id,
          isLoading: false
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  delete(id){
   
    //  swal("Are you sure you want to do this?", {
    //     buttons: ["cancel", true],
    //   });

    // if (swal.buttons === true){
    db.collection('users').doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
      this.props.history.push("/")
    }).catch((error) => {
      console.error("Error removing document: ", error);
      this.props.history.push(`/show/${id}`)
    });
    // }else{
    //   this.props.history.push(`/show/${id}`)
    // } }
  }
  render() {
    return (
     <div className="ui container">
       
             <div className="ui grid">
              <div className="five wide column"></div>
              <div className="eight wide column">
                 <div className="ui segment">
                  <h4>Info About Users</h4> 
                  <div>
                      <h5>name    :  {this.state.users.name}</h5>
                      <h5>weight  :  {this.state.users.weight}</h5>
                </div> 
                  <Link to={`/edit/${this.state.key}`}>
                     <button className="ui green button">Edit</button>   
                  </Link>
                  <Link to={`/delete/${this.state.key}`}>
                     <button  onClick={this.delete.bind(this, this.state.key)} className="ui red button">Delete</button>   
                  </Link>
                 </div>
              </div>
              <div className="five wide column"></div>
             </div>
       </div>
     
    );
  }

}

export default Show;