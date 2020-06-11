import React from "react";


function Navbar(props) {
  return (
    <nav class="navbar navbar-light bg-light justify-content-between">{props.children}
        <a class="navbar-brand"></a>
             <form class="form-inline">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
    </nav>
    );
}

export default Navbar;


{/* // <h1 className="title">{props.children}</h1> */}