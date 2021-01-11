import React, { Component } from 'react';
import pfp from '../media/me.jpg';

class About extends Component {
    
    render() {
        return (
            <div className = "coDiv about">
                <img src = {pfp} className = "pfp"></img>
                <br></br>
                <h1> Alex Kazachek </h1>
                <h3> Undergraduate mathematics student. </h3>
                <br></br>
                <p class = "fullP">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pretium diam id eros elementum, vel ornare ligula tristique. Donec auctor nibh et est tincidunt fermentum. Mauris turpis est, mollis eu placerat sed, imperdiet ac augue. Nulla congue vitae velit in tristique. Donec hendrerit vestibulum feugiat. Morbi vel volutpat orci. Quisque ligula mi, accumsan et est vitae, ornare convallis enim.
                </p>
                <p class = "fullP">
                    Pellentesque bibendum tempus lorem sed rutrum. Maecenas eleifend mattis blandit. Aenean justo lacus, congue et lacus nec, molestie venenatis justo. Aenean lorem tortor, scelerisque a sem eu, scelerisque porta mauris. Ut lacinia erat mauris, non lacinia augue pellentesque vitae. Etiam tristique mi in justo maximus, in blandit libero aliquam. Aenean vestibulum finibus felis, non varius nunc rutrum nec. Nam condimentum vitae enim ut luctus. Quisque egestas auctor est sed pulvinar. Nam aliquam congue molestie. Cras pellentesque viverra ornare.
                </p>
                <p class = "fullP">
                    Quisque quis lobortis enim. Integer vitae malesuada libero, in pharetra arcu. Maecenas vehicula euismod mauris, a porttitor lorem bibendum et. Integer in libero erat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In ac libero purus. Suspendisse pulvinar, nibh quis convallis pellentesque, arcu mi malesuada sapien, a ullamcorper mi sapien et nibh. Proin vitae turpis varius urna dapibus porta quis vel augue.
                </p>
                <p class = "fullP">
                    Nullam vulputate nunc vitae velit auctor, et laoreet ex maximus. Cras finibus venenatis massa et congue. Nullam semper eros dui, nec fermentum odio suscipit eget. In eu varius velit, eget consequat tortor. Proin nec mi et libero dignissim sagittis pretium ac dolor. Vestibulum in porttitor urna. Maecenas efficitur nunc ut elit vulputate, sed pretium libero consequat. Nullam eleifend ante urna, vel tincidunt velit commodo nec. Vestibulum vel justo non quam efficitur hendrerit at id justo.
                </p>
                <p class = "fullP">
                    Aenean scelerisque ultrices mi nec varius. Suspendisse convallis malesuada velit, a blandit eros pellentesque quis. Quisque fringilla dui quis enim dignissim, ac dapibus tellus dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet lectus a ultrices tempor. Curabitur et tristique dui. Sed pretium neque vel justo egestas, et dapibus eros fermentum. Nulla facilisi. Etiam eros enim, euismod vel augue et, ultrices condimentum lectus.
                </p>
            </div>     
        )
    }

}

export default About