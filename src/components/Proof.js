import React, { Component } from 'react';

class Proof extends Component {

    render() {
        return (
            <div class = 'proof'>
                <p> 
                    <i>Proof. </i>
                    {this.props.proof}
                    <span style = {{float: 'right'}}>
                        {'\\(\\square\\)'}
                    </span>
                </p>
            </div>
        )
    };

}

export default Proof;