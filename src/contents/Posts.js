import React, { Component } from 'react';
import PostPreview from '../components/PostPreview';

/* posts */
import JordanBrouwer from './writing/2020-12-05/JordanBrouwer';

class Posts extends Component {

    componentDidMount() {
        window.KaTeXRender();
    }

    render() {

        return (
            <div id = "KaTeXSec" className = "coDiv posts">
                <ul>
                    <PostPreview date = "2020-12-05" dummyID = "1" name = "Colouring Inside the Lines: the Jordan-Brouwer Separation Theorem." summary = {"I briefly discuss the Jordan curve theorem and how manifolds with boundary are used to state its generalization, the full separation theorem. I then introduce transversal intersections and homotopy in order to discuss some techniques used in the proof of theorem."} full = {<JordanBrouwer />}></PostPreview>
                    <PostPreview date = "2001-09-20" dummyID = "2" name = "Another test title." summary = "Pellentesque bibendum tempus lorem sed rutrum. Maecenas eleifend mattis blandit. Aenean justo lacus, congue et lacus nec, molestie venenatis justo. Aenean lorem tortor, scelerisque a sem eu, scelerisque porta mauris. Ut lacinia erat mauris, non lacinia augue pellentesque vitae. Etiam tristique mi in justo maximus, in blandit libero aliquam. Aenean vestibulum finibus felis, non varius nunc rutrum nec. Nam condimentum vitae enim ut luctus. Quisque egestas auctor est sed pulvinar. Nam aliquam congue molestie. Cras pellentesque viverra ornare." full = {<JordanBrouwer />}></PostPreview>
                </ul>
            </div>
        )
    }
}

export default Posts