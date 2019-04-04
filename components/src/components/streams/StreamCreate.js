import React from "react";
// import {Field , reduxForm} from "redux-form";
import {Field , reduxForm} from "redux-form";

class StreamCreate extends React.Component{
   formInputs(){
       return (
       <input type= "text"/> 
       )
   }
   
    render(){
        console.log(this.props)
       return(
           <div>
            <form>
                <Field component={this.formInputs} name="title"/>
                <Field component={this.formInputs} name="description"/>
              
            </form> </div> );
}
}

// export default reduxForm({
//     form : "streamCreate"
// })(StreamCreate);

export default reduxForm({
    form: "streamCreate",
    fields: ['name']
})(StreamCreate);