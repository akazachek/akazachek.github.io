import React, { Component } from 'react';

class JordanBrouwer extends Component {
    
    componentDidMount() {
        window.KaTeXRender();
    }

    render() {
        return (
            <div>
                <p>Test article. </p>
                <p>Test equation \(x+3=5\). </p>
            </div>
        )
    }

}

export default JordanBrouwer