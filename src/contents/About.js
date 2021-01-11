import React, { Component } from 'react';
import pfp from '../media/me.jpg';

class About extends Component {
    
    render() {
        return (
            <div className = "coDiv about">
                <img src = {pfp} className = "pfp"></img>
                <h1> Alex Kazachek </h1>
            </div>     
        )
    }

}

export default About