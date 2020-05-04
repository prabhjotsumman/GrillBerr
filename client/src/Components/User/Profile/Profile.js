import React, { Component } from "react";

import Navbar from "../../Navbar/Navbar";
import Orders from "./Orders";

class Profile extends Component{

    constructor(){
        super();
        this.state={

        }
    }

    render(){
        console.log("Profile page")
        return(
            <>
            <Navbar/>
            <div>
                <h3>User Profile Page!</h3>
            </div>
            <Orders/> 
            </>
        )
    }
}

export default Profile;