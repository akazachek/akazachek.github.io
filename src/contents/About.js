import React, { Component } from 'react';
import pfp from '../media/me.jpg';
import cv from '../media/cv.pdf';

class About extends Component {

    state = {
        pfpAlt: 'Headshot',
        cvDate: '2021-01-13'
    }
    
    render() {
        return (
            <div className = "coDiv about" id = 'aboutSec'>
                <img src = {pfp} alt = {this.state.pfpAlt} className = "pfp"></img>
                <br></br>
                <h1> Hey, I'm Alex! </h1>
                <h3 style = {{paddingTop: '1vh'}}> I'm a second year undergraduate at <a href = 'https://www.uwo.ca/'>UWO</a> studying mathematics and data science.</h3>
                <br></br>
                <p>
                    Some things I've been involved with are organizing the <a href = 'http://cumc.math.ca/2020'>2020 CUMC</a>, a mathematics conference which brought in over 100 students across North America. A large part of my role was setting up the industry panel, consisting of a few former mathematics students now working in finance and software.
                </p>
                <p>
                    I'm also an executive for <a href = 'https://www.uwo.ca/math/macaw/index.html'>MaCAW</a>. A few of the contributions I've made are starting biweekly mathematics contests (with prizes!), and student seminars, so everyone has a chance to share some of the things they've worked on throughout the year.
                </p>
                <p>
                    A non-mathematical topic I find interesting is linguistics. I'm fascinated with the different approaches languages take to communicate the same ideas, and their unique perspectives. One of my favourite examples is describing colour: Japanaese doesn't distinguish between <i>green</i> and <i>blue</i> like English, and instead treats both as 青い, whereas Russian further separates <i>blue</i> and <i>light blue</i> as <i>синий</i> and <i>голубой</i>. Incidentally, I know (varying degrees of) those 3 languages.
                </p>
                <p>
                    Programming is also something I have picked up, both in school and on my own. My strongest languages are Python and Java, and I know a few others. This website is primarily written using React.js; mathematics is powered by \(\KaTeX\).
                </p>
                <p>
                    In my free time I enjoy speedrunning (my favourite speedgames are Mirror's Edge and Fallout 4). I'm also interested in finance, working on the trading podcast Nikkei Bets with my friend. Typography is also somewhat of a passion of mine, and I spend perhaps a little bit too much time working on the small details in all my \(\LaTeX\) templates.
                </p>
                <p class = "cv"> My full CV is available <a id = "cvLink" href = {cv}>here</a> and was last updated {this.state.cvDate}.</p>
            </div>     
        )
    }

}

export default About