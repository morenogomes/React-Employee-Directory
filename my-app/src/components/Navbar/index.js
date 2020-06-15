import React from "react";
import Search from "../Search";


function Navbar(props) {
  return (
    <nav class="navbar navbar-light bg-light justify-content-between">{props.children}
        <a className="navbar-brand"></a>
             <Search/>
    </nav>
    );
}

export default Navbar;


{/* // <h1 className="title">{props.children}</h1> */}