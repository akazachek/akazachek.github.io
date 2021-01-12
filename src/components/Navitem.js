import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavItem extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            classes: 'hvr-sweep-to-right'
        }
    }

    componentDidMount() {
        if (this.props.item == 'Who Am I?') {
            this.setState({classes: 'hvr-sweep-to-right navActive'});
        }
    }

    render() {
        return (
            <li id = {this.props.item} class = {this.state.classes}>
                <Link to = {this.props.tolink} onClick = {this.props.click.bind(this, this.props.item)}>{this.props.item}</Link>
            </li>
        )
    }

}

export default NavItem