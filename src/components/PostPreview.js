import React, { useState } from "react";
import { useTransition, animated } from "react-spring";

const PostPreview = (props_) => {

  const [postOpen, postToggle] = useState(false);
  const postTransition = useTransition(postOpen, null, {
    from: { zIndex: -1, opacity: 0, transform: "translateX(-30vw)" },
    enter: { zIndex: -1, opacity: 1, transform: "translateX(0vw)" },
    leave: { zIndex: -1, opacity: 0, transform: "translateX(-30vw)" }
  });

  return (
    <div>
      <li
        className="postPreview"
        id={props_.date}
        onClick={() => postToggle((postOpen) => !postOpen)}
      >
        <table className="postHead">
          <tr>
            <td className="postTitle">
              <h2>{props_.name}</h2>
            </td>
            <td className="postDate">
              <h4>{props_.date}</h4>
            </td>
          </tr>
        </table>
        <div>
          <p id={props_.dummyID} className="postSummary">
            {props_.summary}
          </p>
        </div>
      </li>
      {
        /* this will not work if i map anything --other-- than literally the word 'props' so i had to rename the PostPreview props */
        postTransition.map(
          ({ item, key, props }) =>
            item && (
              <animated.div className="post" key={key} style={props}>
                {props_.full}
              </animated.div>
            )
        )
      }
    </div>
  );

};

export default PostPreview;