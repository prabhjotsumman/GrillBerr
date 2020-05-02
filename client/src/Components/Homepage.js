import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Navbar from './Navbar/Navbar';

class Homepage extends Component{
    render(){
        return (
            <div>
                <Navbar/>
                <h1> Grillber - Book Your BBQ now!</h1>
                {/* <Link to="/signin">Signin</Link>
                <Link to="/signup">Signup</Link> */}
            </div>
        )
    }
}

export default Homepage;