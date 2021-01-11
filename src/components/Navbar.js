import React, { Component } from 'react';
import NavItem from './NavItem';

class Navbar extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            'NavActiveItem':''
        }
    }

    handleClick = (x) => {
        if (this.state.NavActiveItem.length > 0) {
            document.getElementById(this.state.NavActiveItem).classList.remove('navActive');
        }
        this.setState({'NavActiveItem': x}, () => {
            document.getElementById(this.state.NavActiveItem).classList.add('navActive');
        });
    }

    render() {
        return (
            <div class = "navContainer">
                <nav>
                    <ul>
                        <NavItem item = "About" tolink = "/" click = {this.handleClick}></NavItem>
                        <NavItem item = "Posts" tolink = "/Posts" click = {this.handleClick}></NavItem>
                        <NavItem item = "Contact" tolink = "/Contact" click = {this.handleClick}></NavItem>
                    </ul>
                </nav>
            </div>
        )
    }

}

export default Navbar