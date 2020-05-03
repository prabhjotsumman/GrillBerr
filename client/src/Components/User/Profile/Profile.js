import React, { Component } from "react";

import Navbar from "../../Navbar/Navbar";

class Profile extends Component{

    constructor(){
        super();
        this.state={

        }
    }

    render(){
        return(
            <>
            <Navbar/>
            <div>
                <h3>User Profile Page</h3>
            </div>
            </>
        )
    }
}

export default Profile;