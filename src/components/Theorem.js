import React, { Component } from 'react';

class Theorem extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            theoremTitle: (this.props.name == null) ? ( 
                (this.props.no == null) ? (
                    'Theorem. ' 
                ) : (
                    'Theorem ' + props.no + '. '
                ) 
            ) : (
                (this.props.no == null) ? (
                    'Theorem (' + props.name + '). '
                ) : (
                    'Theorem ' + props.no + ' (' + props.name + '). '
                ) 
            )
        }
    }

    render() {
        return (
            <div class = 'theorem'>
                <p>
                    <strong>{this.state.theoremTitle}</strong>
                    <i>{this.props.statement}</i>
                </p>
            </div>
        )
    };

}

export default Theorem;