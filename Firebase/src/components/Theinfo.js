import React from "react";
import {Link} from "react-router-dom";


class Theinfo extends React.Component {
    
render(){
    const doc = this.props.doc;
    return(
          <Link to={`show/${doc.key}`}>
        <div className="ui segment">
           <div className="item">
        <div className="content" >
          <div className="header">
             <h3>{doc.name}</h3>
          </div>
         {`weight is ${doc.weight} kgs`}
        </div>
        </div>
     </div>
     </Link>
    )
    }

}

export default Theinfo;