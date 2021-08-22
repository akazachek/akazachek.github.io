import React, { Component } from "react";
import PostPreview from "../components/PostPreview";

/* posts */
import Entanglement from "./writing/2021-08-21/Entanglement";
import SOME1 from "./writing/2021-08-16/SOME1";
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
            date="2021-08-21"
            dummyID="8"
            name="But What Is Entanglement Really?"
            summary="<p>Quantum entanglement, morally, has an intuitive definition: that some system cannot be understood as a combination of individual components, only holistically as an inseparable whole. Unsurprisingly, the precise mathematical definition herein is slightly more involved, introduced through the tensor product of Hilbert spaces. Some ways of measuring entanglement, specifically those related to entanglement entropy, are also surveyed.</p>
            <p style='padding-top: 1vh;'>My talk at the <a target='_blank' style='font-weight: bold; color: #9e42f5;' href='https://cumc2021.ca'>2021 CUMC</a> is an abridged version of this write-up; a recording is available within the post.</p>"
            full={<Entanglement />}
            html={true}
          ></PostPreview>
          <PostPreview
            date="2021-08-16"
            dummyID="7"
            name="Spectral Theorem For Dummies"
            summary="<p>
            The spectral theorem may be viewed as nothing more than a technical set of conditions for when a matrix may be diagonalized. However, there is a geometric notion underpinning this statement, made visible here by elevating the theorem to one for linear operators with diagonalization interpreted through vector projections.</p>
            <p style='padding-top: 1vh;'>
            This video was made for the <a target='_blank' style='font-weight: bold; color: #9e42f5;' href='https://www.3blue1brown.com/blog/some1'>2021 Summer of Math Exposition</a> in collaboration with <a target='_blank' style='font-weight: bold; color: #9e42f5;' href='https://www.jacquelinedoan.com/home'>Jackie Doan</a>.
            </p>"
            full={<SOME1 />}
            html={true}
          ></PostPreview>
          <PostPreview
            date="2020-12-05"
            dummyID="6"
            name="Colouring Inside the Lines: the Jordan-Brouwer Separation Theorem"
            summary="Children learn in elementary school how to colour inside the lines. In the late 1800s, mathematicians argued for over a decade whether this is always possible or not. This is a brief discussion of the Jordan curve theorem and what it tells us about the inside and outside of curves, and how manifolds with boundaries are used to state its generalization: the separation theorem. Transversal intersections and homotopy are introduced in order to discuss some techniques used in the proof of theorem."
            full={<JordanBrouwer />}
          ></PostPreview>
          <PostPreview
            date="2020-08-09"
            dummyID="5"
            name="Learning All Jōyō Kanji in a Month: A Reflection on and Criticism of Heisig's RTK"
            summary="I share my experience with arguably the most controversial book related to learning Japanese, pointing out the flaws I personally noticed as well as the strengths, and summarize my experience at different stages as well as overall. I try to describe what I believe its best use-case is, so that you may decide for yourself whether it will be a suitable technique."
            full={<HeisigKanji />}
          ></PostPreview>
          <PostPreview
            date="2020-08-01"
            dummyID="4"
            name="Universal Isomorphism Theorems"
            summary='Many algebraic structures and theorems have a similar feeling, ostensibly seen by the isomorphism theorems common to many of them. This is the motivation for universal algebra, and this post shows how it can be used to formulate the most general form of these isomorphism theorems. Lattices are also covered and used to more generally state and prove the "fourth" isomorphism theorem: the correspondence theorem. '
            full={<UniversalIsomorphism />}
          />
          <PostPreview
            date="2020-03-05"
            dummyID="3"
            name="Stacking (Mathematical) Records on a (Locally) Flat Earth"
            summary='Manifolds have a nice geometric intuition, with many examples seen when looking out any window. This is an introduction which formalizes (Euclidean) manifolds and smooth maps, culiminating to proving a cute theorem with nice visual intution: showing how you can pull apart a disk on one manifold to the union of multiple smaller disks on another manifold, "stacking" them on top of each other.'
            full={<StackOfRecords />}
          />
          <PostPreview
            date="2019-12-22"
            dummyID="2"
            name="Non-normal Spaces: the Moore Plane and Continuous Functions"
            summary='Topological normality, the ability to find space between distinct closed sets, seems like it should always be present (hence the name). However, this is not the case; the Moore plane is an easy-to-visualize counter-example. A theorem due to Jones which relies on different sizes of infinity is used to show that the Moore plane is, informally speaking, simply too "tightly packed" to be normal.'
            full={<Normal />}
          />
          <PostPreview
            date="2019-10-19"
            dummyID="1"
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
