import React from "react";
import {Link} from "react-router-dom"

const Header =()=>{
    return(
        <div className="ui inverted menu">
        {/* Link used insted of <a> must !! */}
          <Link to="/" className="active item">Home</Link>
          <Link to="/stream/new" className=" item">New</Link>
          <p className=" item">log in</p>

        </div>
    )
}

export default Header;