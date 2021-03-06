import React, { Component } from "react";
import PostPreview from "../components/PostPreview";

/* posts */
import JordanBrouwer from "./writing/2020-12-05/JordanBrouwer";
import HeisigKanji from "./writing/2020-08-09/HeisigKanji";
import UniversalIsomorphism from "./writing/2020-08-01/UniversalIsomorphism";
import StackOfRecords from "./writing/2020-03-05/StackOfRecords";
import Normal from "./writing/2019-12-22/Normal";
import LogIso from "./writing/2019-10-19/LogIso";

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
            summary="Children learn in elementary school how to colour inside the lines. In the late 1800s, mathematicians argued for over a decade whether this is always possible or not. This is a brief discussion of the Jordan curve theorem and what it tells us about the inside and outside of curves, and how manifolds with boundaries are used to state its generalization: the separation theorem. Transversal intersections and homotopy are introduced in order to discuss some techniques used in the proof of theorem."
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
            summary='Many algebraic structures and theorems have a similar feeling, ostensibly seen by the isomorphism theorems common to many of them. This is the motivation for universal algebra, and this post shows how it can be used to formulate the most general form of these isomorphism theorems. Lattices are also covered and used to more generally state and prove the "fourth" isomorphism theorem: the correspondence theorem. '
            full={<UniversalIsomorphism />}
          />
          <PostPreview
            date="2020-03-05"
            dummyID="4"
            name="Stacking (Mathematical) Records on a (Locally) Flat Earth"
            summary='Manifolds have a nice geometric intuition, with many examples seen when looking out any window. This is an introduction which formalizes (Euclidean) manifolds and smooth maps, culiminating to proving a cute theorem with nice visual intution: showing how you can pull apart a disk on one manifold to the union of multiple smaller disks on another manifold, "stacking" them on top of each other.'
            full={<StackOfRecords />}
          />
          <PostPreview
            date="2019-12-22"
            dummyID="5"
            name="Non-normal Spaces: the Moore Plane and Continuous Functions"
            summary='Topological normality, the ability to find space between distinct closed sets, seems like it should always be present (hence the name). However, this is not the case; the Moore plane is an easy-to-visualize counter-example. A theorem due to Jones which relies on different sizes of infinity is used to show that the Moore plane is, informally speaking, simply too "tightly packed" to be normal.'
            full={<Normal />}
          />
          <PostPreview
            date="2019-10-19"
            dummyID="6"
            name="Viewing Logarithms as Group Isomorphisms"
            summary="Logarithms are often used to make certain computations faster or easier to visualize. This is the result of a connection to group theory, with the logarithm being a special case of homomorphism, explicitly demonstrating why these types of maps are so useful."
            full={<LogIso />}
          />
        </ul>
      </div>
    );
  }
}

export default Posts;