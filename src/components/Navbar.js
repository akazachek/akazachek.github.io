import React, { Component } from 'react';
import Navitem from './Navitem';

class Navbar extends Component {

    render() {
        return (
            <nav>
                <ul>
                    <Navitem item = "About" tolink = "/"></Navitem>
                    <Navitem item = "Posts" tolink = "/Posts"></Navitem>
                    <Navitem item = "Contact" tolink = "/Contact"></Navitem>
                </ul>
            </nav>
        )
    }

}

export default Navbar