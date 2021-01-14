import React, { Component } from "react";
import PostPreview from "../components/PostPreview";

/* posts */
import JordanBrouwer from "./writing/2020-12-05/JordanBrouwer";
import HeisigKanji from "./writing/2020-08-09/HeisigKanji";
import UniversalIsomorphism from "./writing/2020-08-01/UniversalIsomorphism";
import StackOfRecords from "./writing/2020-03-05/StackOfRecords";

class Posts extends Component {
  componentDidMount() {
    window.KaTeXRender();
  }

  render() {
    return (
      <div id="KaTeXSec" className="coDiv posts">
        <ul>
          <PostPreview
            date="2020-12-05"
            dummyID="1"
            name="Colouring Inside the Lines: the Jordan-Brouwer Separation Theorem."
            summary="A brief discussion of the Jordan curve theorem and how manifolds with boundary are used to state its generalization: the full separation theorem. Then, transversal intersections and homotopy are introduced in order to discuss some techniques used in the proof of theorem."
            full={<JordanBrouwer />}
          ></PostPreview>
          <PostPreview
            date="2020-08-09"
            dummyID="2"
            name="Learning All Jōyō Kanji in a Month: A Reflection on and Criticism of Heisig's RTK"
            summary="I share my experience with arguably the most controversial book related to learning Japanese, pointing out the flaws I personally noticed as well as the strengths, and summarize my experience at different stages as well as overall. I try to describe what I believe its best use-case is, so that you may decide for yourself whether it will be a suitable technique."
            full={<HeisigKanji />}
          ></PostPreview>
          <PostPreview
            date="2020-08-01"
            dummyID="3"
            name="Universal Isomorphism Theorems"
            summary='A motivation of universal algebra, and how it can be used to formulate the most general form of the isomorphism theorems found in abstract algebra. Lattices are also covered and used more generally state and prove the "fourth" isomorphism theorem: the correspondence theorem. '
            full={<UniversalIsomorphism />}
          />
          <PostPreview
            date="2020-03-05"
            dummyID="4"
            name="Stacking (Mathematical) Records on a (Locally) Flat Earth"
            summary="An introduction to manifolds and smooth maps, culiminating to proving a cute theorem with nice visual intution: showing how you can pull apart a disk on one manifold to the union of the image of multiple smaller disks on another manifold, 'stacking' them on top of each other."
            full={<StackOfRecords />}
          />
          <PostPreview
            date=""
            dummyID="x"
            name="Where's the rest?"
            summary="I am still porting over posts from my old Wordpress blog, so not all of my content is here yet. However, it should be coming soon! Keep checking back."
          />
        </ul>
      </div>
    );
  }
}

export default Posts;
