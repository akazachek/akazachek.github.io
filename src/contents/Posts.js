import React, { Component } from 'react';
import PostPreview from '../components/PostPreview';

/* posts */
import JordanBrouwer from './writing/2020-12-05/JordanBrouwer';
import HeisigKanji from './writing/2020-08-09/HeisigKanji';

class Posts extends Component {

    componentDidMount() {
        window.KaTeXRender();
    }

    render() {

        return (
            <div id = "KaTeXSec" className = "coDiv posts">
                <ul>
                    <PostPreview 
                        date = "2020-12-05" dummyID = "1" 
                        name = "Colouring Inside the Lines: the Jordan-Brouwer Separation Theorem." 
                        summary = 
                        "I briefly discuss the Jordan curve theorem and how manifolds with boundary are used to state its generalization, the full separation theorem. I then introduce transversal intersections and homotopy in order to discuss some techniques used in the proof of theorem."
                        full = {<JordanBrouwer />}>
                    </PostPreview>
                    <PostPreview 
                        date = "2020-08-09" dummyID = "2" 
                        name = "Learning All Jōyō Kanji in a Month: A Reflection on and Criticism of Heisig's RTK" 
                        summary = 
                        "I share my experience with arguably the most controversial book related to learning Japanese, pointing out the flaws I personally noticed as well as the strengths, and summarize my experience overall. I then describe what I believe its best use-case is, so that you may decide for yourself whether it will be a suitable technique." 
                        full = {<HeisigKanji />}>
                    </PostPreview>
                </ul>
            </div>
        )
    }
}

export default Posts