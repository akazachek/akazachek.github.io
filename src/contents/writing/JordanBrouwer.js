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
                <p>Inline equation \[\int_0^5 x^2 dx\]</p>
                <p>
                    Quisque quis lobortis enim. Integer vitae malesuada libero, in pharetra arcu. Maecenas vehicula euismod mauris, a porttitor lorem bibendum et. Integer in libero erat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In ac libero purus. Suspendisse pulvinar, nibh quis convallis pellentesque, arcu mi malesuada sapien, a ullamcorper mi sapien et nibh. Proin vitae turpis varius urna dapibus porta quis vel augue.
                </p>
            </div>
        )
    }

}

export default JordanBrouwer