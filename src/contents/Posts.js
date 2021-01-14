import React, { Component } from 'react';
import PostPreview from '../components/PostPreview';

/* posts */
import JordanBrouwer from './writing/2020-12-05/JordanBrouwer';
import HeisigKanji from './writing/2020-08-09/HeisigKanji';
import UniversalIsomorphism from './writing/2020-08-01/UniversalIsomorphism';

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
                        "I briefly discuss the Jordan curve theorem and how manifolds with boundary are used to state its generalization: the full separation theorem. I then introduce transversal intersections and homotopy in order to discuss some techniques used in the proof of theorem."
                        full = {<JordanBrouwer />}>
                    </PostPreview>
                    <PostPreview 
                        date = "2020-08-09" dummyID = "2" 
                        name = "Learning All Jōyō Kanji in a Month: A Reflection on and Criticism of Heisig's RTK" 
                        summary = 
                        "I share my experience with arguably the most controversial book related to learning Japanese, pointing out the flaws I personally noticed as well as the strengths, and summarize my experience overall. I then describe what I believe its best use-case is, so that you may decide for yourself whether it will be a suitable technique." 
                        full = {<HeisigKanji />}>
                    </PostPreview>
                    <PostPreview
                        date = '2020-08-01' dummyID = '3'
                        name = 'Universal Isomorphism Theorems'
                        summary = 
                        'I discuss universal algebra, its motivation, and how it can be used to formulate the most general form of the isomorphism theorems found in group theory, ring theory, etc. I also bring up lattices, and how they can be used to also more generally prove the "fourth" isomorphism theorem: the correspondence theorem. '
                        full = {<UniversalIsomorphism />} />
                    <PostPreview
                        date = '' dummyID = 'x'
                        name = "Where's the rest?"
                        summary = 
                        'I am still porting over posts from my old Wordpress blog, so not all of my content is here yet. However, it should be coming soon! Keep checking back.'/>
                </ul>
            </div>
        )
    }
}

export default Posts