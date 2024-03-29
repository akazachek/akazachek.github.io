import React, { useState } from "react";
import { useTransition, animated } from "react-spring";

const PostPreview = (props_) => {
  const [postOpen, postToggle] = useState(false);
  const postTransition = useTransition(postOpen, null, {
    from: { zIndex: -1, opacity: 0, transform: "translateX(-30vw)" },
    enter: { zIndex: -1, opacity: 1, transform: "translateX(0vw)" },
    leave: { zIndex: -1, opacity: 0, transform: "translateX(-30vw)" }
  });

  function handleClick() {
    postToggle((postOpen) => !postOpen);
  }

  if (props_.html === true) {
    var summary = (
      <p
        id={props_.dummyID}
        className="postSummary"
        dangerouslySetInnerHTML={{ __html: props_.summary }}
      ></p>
    );
  } else {
    var summary = (
      <p id={props_.dummyID} className="postSummary">
        {props_.summary}
      </p>
    );
  }

  return (
    <div>
      <li
        className={postOpen ? "postPreview postOpen" : "postPreview"}
        id={props_.date}
        onClick={handleClick}
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
        <div>{summary}</div>
      </li>
      {
        /* this will not work if i map anything --other-- than literally the word 'props' so i had to rename the PostPreview props */
        postTransition.map(
          ({ item, key, props }) =>
            item && (
              <animated.div className="post" key={key} style={props}>
                {props_.full}
                <button
                  className="postEndButton hvr-overline-from-right leftMargin"
                  onClick={handleClick}
                >
                  Hide Post
                </button>
              </animated.div>
            )
        )
      }
    </div>
  );
};

export default PostPreview;
