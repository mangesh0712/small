import React from "react";
import {BrowserRouter , Route  } from "react-router-dom";
import Header from "./Header";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";

class App extends React.Component{
    render(){
        return(
        <div>
           <BrowserRouter>
            <div>
            <Header/>
                <Route path="/" exact component={StreamList}/>
                <Route path="/stream/new" component={StreamCreate}/>
                <Route path="/stream/edit" component={StreamEdit}/>
                <Route path="/stream/show" component={StreamShow}/>
                <Route path="/stream/delete" component={StreamDelete}/>
            </div>
         </BrowserRouter>
        </div>
        )
    }
}

export  default App;