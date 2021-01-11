import React, { Component } from 'react';

class PostPreview extends Component {

    constructor(props) {
        super(props);
        this.state = {
            postOpen: false
        }
        this.handlePostOpen = this.handlePostOpen.bind(this);
    }

    handlePostOpen() {

        this.setState({
            postOpen: !this.state.postOpen
        });

        if (!this.state.postOpen) {
            document.getElementById(this.props.date).classList.add('postOpen')
        } else {
            document.getElementById(this.props.date).classList.remove('postOpen')
        }

    }

    render() {
        return (
            <div>
                <li className = "postPreview" id = {this.props.date} onClick = {this.handlePostOpen}>
                    <table className = "postHead">
                        <tr>
                            <td className = "postTitle">
                                <h1>{this.props.name}</h1>
                            </td>
                            <td className = "postDate">
                                <h4>{this.props.date}</h4>
                            </td>
                        </tr>
                    </table>
                    <div>
                        <p className = "postSummary">
                            {this.props.summary}
                        </p>
                    </div>
                </li>
                {
                    this.state.postOpen?
                        <div className = "post">
                            {this.props.full}
                        </div>
                    :
                        <div></div>
                }
            </div>
        );
    }

}

export default PostPreview