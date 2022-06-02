import React, { Component } from 'react';

//Stateless Functional Component -> only used when classes have one function
//cannot refer to this and props must be passed in as a param
//or use prop destructuring 

const NavBar = ({ totalCounters }) => {   
    return (
        <nav class="navbar bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    Navbar {" "}
                    <span className='badge badge-pill badge-secondary'>
                        {totalCounters}
                    </span>
                </a>
            </div>
        </nav>
    );
    
};
 
export default NavBar;
