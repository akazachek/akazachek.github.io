import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const PostPreview = (props) => {

    const [postOpen, postToggle] = useState(false);
    const postProps = useSpring({
        /* https://react-spring-visualizer.com/ */
        config: { mass: 1, tension: 280, friction: 60 },
        /* the innerHeight is a way to achieve vh measures */
        height: postOpen ? 'auto' : (window.innerHeight / 20),
        opacity: postOpen ? 1 : 0,
        marginTop: postOpen ? 0 : -30,
        from: {opacity: 0, marginTop: -30, height: 20}
    });

    return (
        <div>
            <li className = "postPreview" id = {props.date} onClick = {() => postToggle(postOpen => !postOpen)}>
                <table className = "postHead">
                    <tr>
                        <td className = "postTitle">
                            <h1>{props.name}</h1>
                        </td>
                        <td className = "postDate">
                            <h4>{props.date}</h4>
                        </td>
                    </tr>
                </table>
                <div>
                    <p id = {props.dummyID} className = "postSummary">
                        {props.summary}
                    </p>
                </div>
            </li>
            {
                <animated.div className = "post" style = {postProps}>
                    {props.full}
                </animated.div>
            }
        </div>
    );

}

export default PostPreview;