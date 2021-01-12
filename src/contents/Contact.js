import React, { Component } from 'react';
import { IconContext } from 'react-icons';
/* handles */
import { RiInstagramFill, RiMailSendFill, RiGithubFill, RiLinkedinBoxFill} from 'react-icons/ri';
/* contact photo */
import pfp from '../media/camel.jpg';
/* info from css */
var accentColour = '#4c2a6e';
var vh = window.innerHeight / 100;

class Contact extends Component {

    render() {
        return (
            <div className = "coDiv contact">
                <table className = "contactHead">
                    <tr>
                        <td className = "contactMessage">
                            <h1>Thank you for reaching out!</h1>
                        </td>
                        <td className = "contactPhoto">
                            <img src = {pfp}></img>
                        </td>
                    </tr>
                </table>
                <IconContext.Provider value = {{color: accentColour, size: 8 * vh}}>
                    <table className = "contactInfo">
                        <tr>
                            <td className = "handleIcon">
                                <a href = "https://www.instagram.com/kazachekalex/"><RiInstagramFill /></a>
                            </td>
                            <td className = "handle">
                                <a href = "https://www.instagram.com/kazachekalex/"> @kazachekalex </a>
                            </td>
                            <td className = "handleIcon">
                                <a href = "mailto: alexdkazachek@gmail.com"><RiMailSendFill /></a>
                            </td>
                            <td className = "handle">
                                <a href = "mailto: alexdkazachek@gmail.com"> alexdkazachek@gmail.com </a>
                            </td>
                        </tr>
                        <tr>
                            <td className = "handleIcon">
                                <a href = "https://github.com/akazachek"><RiGithubFill /></a>
                            </td>
                            <td className = "handle">
                                <a href = "https://github.com/akazachek"> akazachek </a>
                            </td>
                            <td className = "handleIcon">
                                <a href = "https://linkedin.com/in/kazachek"><RiLinkedinBoxFill /></a>
                            </td>
                            <td className = "handle">
                                <a href = "https://linkedin.com/in/kazachek"> kazachek </a>
                            </td>
                        </tr>
                    </table>
                </IconContext.Provider>
            </div>
        )
    }

}

export default Contact