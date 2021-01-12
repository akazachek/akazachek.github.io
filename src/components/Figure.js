import React, { Component } from 'react';

class Figure extends Component {

    render() {
        return (
            <table class = 'figureContainer'>
                <tr>
                    <td class = 'figure'>
                        <img src = {this.props.src}></img>
                    </td>
                </tr>
                <tr>
                    <td class = 'caption'>
                        <h4>Figure {this.props.no}: {this.props.caption}</h4>
                    </td>
                </tr>
            </table>
        )
    };

}

export default Figure;