import React, { Component } from "react";
/* environments */
import Figure from "../../../components/Figure";
import Theorem from "../../../components/Theorem";
import Proof from "../../../components/Proof";
/* figures */
import Fig1Koch from "./fig1(koch).png";
import Fig2Transv from "./fig2(transv).png";
import Fig3Wind from "./fig3(wind).png";
import Fig4GP from "./fig4(gp).jpg";

class JordanBrouwer extends Component {
    
  componentDidMount() {
    window.KaTeXRender();
  }

  render() {
    return (
      <div class="postContent leftMargin">
        <p>
          If I were to draw a circle or some polygon, like a square, on a piece
          of paper, and ask you to identify the inside and outside, you would
          likely look at me as if I had gone mad. It is incredibly easy to both
          define what the inside is and identify where it lies, as these curves
          can be described by a product of intervals, or some simple
          parametrization. But what of, say, the Koch snowflake, as in figure 1?
          The precise curve is actually the limit case of the figure - a
          fractal. The curve is still continuous, being without holes, and does
          not overlap (except at the beginning and end). However, its perimetre
          is infinite, and its parametrization is nowhere differentiable. How
          would you formally describe what lies inside it? In fact, for a curve
          like this it is not unreasonable to suspect that may not be
          well-defined in the first place; perhaps some point behaves weirdly in
          the limit case and cannot be simply classified.
        </p>
        <Figure no="1" src={Fig1Koch} caption="Koch snowflake" />
        <p>
          Thankfully someone, specifically Jordan, proved we don't need to worry
          about such a thing. His result on these curves gave them a special
          name, <strong>Jordan curves</strong>. These are simple closed curves
          on the plane, meaning they are continuous curves in{" "}
          {"\\(\\mathbb{R}^2\\)"} with no self-intersections, except at the
          start and end. His precise result was as follows.
        </p>
        <Theorem
          name="Jordan"
          statement="
                Every Jordan curve divides the plane into two components, an unbounded exterior and a bounded interior, such that the curve is the boundary of each component."
        />
        <p>
          What is interesting is that such a seemingly "obvious" result,
          something that every school child understands implicitly when they are
          told to "colour inside the lines", has an entirely non-obvious proof.
          Indeed, even today there are no easy proofs of it. They all span
          multiple pages, and use machinery which, at least on the surface,
          appears to be overkill for such a simple sounding statement.
        </p>
        <p>
          This can actually be considered as a special case of a stronger result
          proved by Brouwer a few decades after Jordan's initial publication.
          However, to get there we will need a few definitions. I have already
          discussed manifolds in the past, however there is an object which
          slightly generalizes them. We call these{" "}
          <strong>manifolds with boundary</strong>. While a \(k\)-manifold is
          diffeomorphic to {"\\(\\mathbb{R}^k\\)"}, we require only that
          manifolds with boundary are diffeomorphic to the{" "}
          <strong>upper-half plane </strong>
          {
            "\\[\\mathcal{H}^k:=\\{(x_1,\\dots x_k)\\in\\mathbb{R}^k : x_k\\geq 0\\}.\\]"
          }
        </p>
        <p>
          Visually, the obvious notion of a boundary on the upper-half plane
          occurs precisely where \(x_k=0\), and we denote it by{" "}
          {"\\(\\partial\\mathcal{H}^k\\)"}. It is important to note that this
          is completely different from a topological boundary, even though we
          use the same notation. A manifold with boundary \(X\) of dimension
          \(k\), then, has a neighbourhood around each point diffeomorphic to{" "}
          {"\\(\\mathcal{H}^k\\)"}, and its boundary \(\partial X\) is the set
          of points which lie in {"\\(\\partial\\mathcal{H}^k\\)"} under some
          set of local coordinates (one can show this is well-defined and will
          in fact be identical for any arbitrary system). It is immediate the
          boundary then is itself a manifold of dimension \(k-1\), as we can
          parametrize it to {"\\(\\mathbb{R}^{k-1}\\)"} by cutting off the last
          coordinate (as it will always be \(0\)), and composing.
        </p>
        <p>
          Of note is that any compact, connected \(1\)-manifold with boundary is
          diffeomorphic to the unit interval \([0,1]\) or to the unit circle
          \(S^1\) (visually, compactness and connectedness means you can only
          end somewhere or loop back to where you started). This is actually
          non-trivial to show as well, much like the Jordan curve theorem,
          despite being intuitively quite obvious. We will take it for granted,
          as we will need the following fact later.
        </p>
        <Theorem
          no="1"
          statement="
                Every compact \(1\)-manifold with boundary has an even number of points in its boundary."
        />
        <Proof
          proof="
                Every component will be diffeomorphic to \([0,1]\) or \(S^1\), which have \(2\) and \(0\) points in the boundary, respectively."
        />
        <p>
          This is the only definition we need to generalize Jordan's result. We
          call a manifold {"\\(X\\subseteq\\mathbb{R}^n\\)"} a{" "}
          <strong>hypersurface</strong> if it is of dimension \(n-1\) (note that
          this can be generalized to submanifolds and codimensions, but we will
          not need that).
        </p>
        <Theorem
          name="Jordan-Brouwer"
          statement="
                If \(X\) is a compact, connected hypersurface in \(\mathbb{R}^n\), then \(\mathbb{R}^n\setminus X\) consists of two open connected components, \(D_0\) and \(D_1\), such that \(\overline{D_0}\) is a compact manifold with boundary, and in particular \(\partial\overline{D_0}=X\)."
        />
        <p>
          Perhaps being slightly misleading, I will not be talking about the
          Jordan-Brouwer theorem itself in this post. Instead, I will be talking
          about something intimately related to it. To prove this theorem, we
          must at some point have candidates for \(D_0\) and \(D_1\), and this
          is what I will be discussing: how do we define inside and outside in
          the first place?
        </p>
        <p>
          The first stop is at the intersections of curves. Recall that there is
          a nice condition for when the preimage of a map \(f\colon X\to Y\)
          would have {"\\(f^{-1}(y)\\)"} be a manifold. Specifically, it was
          when \(y\) was a regular value, meaning \(df_x\) was surjective at
          each point {"\\(x\\in f^{-1}(y)\\)"}. This is, in fact, a special case
          of the more general concept of{" "}
          <strong>transversal intersections</strong>. In particular, \(f\) is
          transversal to a submanifold \(Z\subseteq Y\), written \(f\pitchfork
          Z\), if {"\\(T_{f(x)}(Z)+\\operatorname{im}df_x=T_{f(x)}(Y)\\)"} for
          every {"\\(x\\in f^{-1}(Z)\\)"}.
        </p>
        <Theorem
          no="2"
          statement="
                For smooth \(f\colon X\to Y\) with \(Z\) a submanifold of \(Y\), then \(f^{-1}(Z)\) is a submanifold of \(X\) if \(f\pitchfork Z\)."
        />
        <Proof proof="Consider some \(x\in f^{-1}(Z)\), and let \(y=f(x)\). Let \(\ell=\operatorname{codim}Z\). Take local coordinates around \(y\) such that the last \(\ell\) coordinates vanish on \(Y\setminus Z\) (locally); call these last \(\ell\) coordinates \(g=(g_1,\dots,g_\ell)\). Consider the composition \(g\circ f\colon f^{-1}(Z)\to\mathbb{R}^\ell\), and note \[d(g\circ f)_x=dg_y\circ df_x.\] As\(f\pitchfork Z\), this derivative is surjective at \(x\). However, \(x\) was an arbitrary point in the preimage and we have \((g\circ f)(x)=0\), meaning \(0\) is a regular value of \(f\). Then, \(f^{-1}(Z)=(g\circ f)^{-1}(0)\) is a submanifold. " />
        <p>
          This is a very visual idea, essentially meaning that tangent spaces
          add up to the ambient space. However, this has the caveat of therefore
          being dependent on the ambient space, and so intersections transversal
          in one setting may not be transversal elsewhere. This is demonstrated
          in figure 2 below.
        </p>
        <Figure
          no="2"
          src={Fig2Transv}
          caption="Transversal intersection (left) and non-transversal intersection (right)"
        />
        <p>
          This is quite a nice, simple condition to verify if a preimage will be
          a submanifold, and captures the spirit of differential topology: for
          us to learn about behaviour globally (being a manifold), we reduce it
          to local linear behaviour (a union of vector spaces). However, there
          is the very real question of whether intersections like this exist, in
          general. After all, intersections can be very tricky. If we take any
          function {"\\(\\mathbb{R}\\to\\mathbb{R}\\)"} which crosses the
          \(x\)-axis, any slight variation of that function will undoubtedly
          move that crossing point, and so it is very hard, in general, to find
          a function which has a root at a specific value (outside of contrived
          examples). Might it be the same for transversal intersections?
          Thankfully, no; in fact, essentially all intersections are
          transversal, and these intersections are not affected by
          perturbations. To formalize this idea, we introduce homotopy.
        </p>
        <p>
          Two maps \(f_0,f_1\colon X\to Y\) are <strong>homotopic</strong>,
          written \(f_0\sim f_1\), if there exists some smooth map \(F\colon
          X\times [0,1]\to Y\) such that \(F(x,0)=f_0(x)\) and
          \(F(x,1)=f_1(x)\). A property of \(f_0\) is said to be{" "}
          <strong>stable</strong> if for any homotopy \(F(x,t)\eqqcolon
          f_t(x)\), there exists some \(\varepsilon \gt 0\) such that \(f_t\)
          has that property when \(t \lt \varepsilon\). A great deal of
          interesting properties are stable, such as embeddings, submersions,
          etc. In particular, as transversal intersections at the heart rely on
          submersions, it follows that they are stable as well. The proofs for
          these all essentially rely on these conditions being a statement about
          the determinant of some matrix, by the inverse function theorem, and
          the determinant function being continuous.
        </p>
        <p>
          What is far more interesting is that transversality is generic,
          meaning that given any smooth map \(f\) and any submanifold \(Z\), we
          can find some \(g\) homotopic to \(f\) so \(g\pitchfork Z\). This is
          quite remarkable given that the behaviour of \(f\) with respect to
          \(Z\) can be as pathological as we want - we need only to slightly
          wiggle it to get a nice intersection. Proving transversal
          intersections are generic is dry and lengthy (it would involve
          numerous technical lemmas, all for a rather technical result). It
          could be a whole post in and of itself, so instead I will simply state
          the two results we will need.
        </p>
        <Theorem
          no="2"
          name="Transversality-Homotopy"
          statement="
                Let \(f\colon X\to Y\) be smooth between a manifold \(X\) and a boundaryless manifold \(Y\). If \(Z\) is a boundaryless submanifold of \(Y\), there is some smooth \(g\sim f\) such that \(g\pitchfork Z\) and \(\partial g\pitchfork Z\), where \(\partial g :\equiv g\vert_{\partial X}\)."
        />
        <p>
          For \(f\colon X\to Y\) we say that \(f\pitchfork Z\) on a subset \(C\)
          of \(X\) if {"\\(f\\vert_{C\\cap f^{-1}(Z)}\\pitchfork Z\\)"}. We can
          slightly strengthen theorem 2, useful in some situations.
        </p>
        <Theorem
          no="3"
          name="Extension Theorem"
          statement="
                Let \(f\colon X\to Y\) be smooth between a manifold \(X\) and a boundaryless manifold \(Y\), and \(C\subseteq X\) be closed. If \(Z\) is a closed boundaryless submanifold of \(Y\) such that \(f\pitchfork Z\) on \(C\) and \(\partial f\pitchfork Z\) on \(C\cap\partial X\), there is some \(g\sim f\) such that \(g\pitchfork Z\) and \(\partial g\pitchfork Z\) and \(g\equiv f\) on a neighbourhood of \(C\)."
        />
        <p>
          We will use these to continue our trek toward the main result, and
          that is determining what lies inside and outside a hypersurface. We
          will do this with transversal intersections of a specific function and
          a special invariant. This invariant will come from the{" "}
          <strong>intersection number</strong>. For \(f\colon X\to Y\) and
          \(f\pitchfork Z\) a closed submanifold of \(Y\), such that{" "}
          {
            "\\(\\operatorname{dim}X+\\operatorname{dim}Z=\\operatorname{dim}Y\\)"
          }
          , we define the intersection number modulo 2 of \(f\) with respect to
          \(Z\), written \(I_2(f,Z)\), to be{" "}
          {"\\(\\left|f^{-1}(Z)\\right|_2\\)"} (the cardinality of the preimage
          modulo 2). Observe that due to the condition on our dimensions,{" "}
          {"\\(f^{-1}(Z)\\)"} will be a manifold of dimension \(0\) (hence a
          finite set), so the intersection number is well-defined. Of course,
          not all maps will intersect \(Z\) transversally, but recall that
          transversality is generic, and theorem 1 gives us a nice statement
          about cardinalities of boundaries modulo 2, to get the following
          result.
        </p>
        <Theorem
          no="4"
          statement="
                If \(f_0,f_1\colon X\to Y\) are homotopic so \(f_0\pitchfork Z\) and \(f_1\pitchfork Z\), where \(Z\) is a closed submanifold of \(Y\) so \(\operatorname{dim}X+\operatorname{dim}Z=\operatorname{dim}Y\), then \(I_2(f_0,Z)=I_2(f_1,Z)\)."
        />
        <Proof
          proof="
                Let \(F\colon X\times [0,1]\to Y\) be a homotopy of \(f_0\) and \(f_1\). Without loss of generality, take \(F\pitchfork Z\), for otherwise observe that \(F\pitchfork Z\) on \(X\times \{0,1\}\) (as \(f_0\) and \(f_1\) are both transversal), which is closed in \(X\times [0,1]\). Then, the extension theorem lets us take some \(G\sim F\) so \(G\pitchfork Z\) yet \(G\equiv F\) on \(X\times \{0,1\}\) (in fact, it will be true on a neighbourhood thereof), hence \(G(x,0)=f_0(x)\) and \(G(x,1)=f_1(x)\).\[\] 
                
                Now, note that \(\partial (X\times [0,1])=X\times\{0\}\cup X\times\{1\}\), hence \(F\equiv f_0\) or \(F\equiv f_1\) on \(\partial (X\times [0,1])\), so \(\partial F\pitchfork Z\). Then,
                \[
                    \operatorname{dim}(X\times [0,1])-\operatorname{dim}F^{-1}(Z) =\operatorname{dim}X+1-\operatorname{dim}F^{-1}(Z)=\operatorname{dim}Y-\operatorname{dim}Z
                \]
                and our assumptions on dimensions means \(\operatorname{dim}F^{-1}(Z)=1\). Observe that
                \[
                    \begin{aligned}
                    \partial F^{-1}(Z)&=F^{-1}(Z)\cap\partial(X\times [0,1])\\
                    &=F^{-1}(Z)\cap(X\times\{0\})\cup F^{-1}(Z)\cap(X\times\{1\})\\
                    &=f_0^{-1}(Z)\cup f_1^{-1}(Z)
                    \end{aligned}
                \]
                however, by theorem 1, this means \(I_2(f_0,Z)=I_2(f_1,Z)\), as desired. "
        />
        <Theorem
          no="5"
          name="Boundary Theorem"
          statement="
                If \(W\) is compact with \(\partial W=X\), and \(g\colon X\to Y\) can be extended to \(W\), then \(I_2(g,Z)=0\) for all closed submanifolds \(Z\) in \(Y\) such that \(\operatorname{dim}X+\operatorname{dim}Z=\operatorname{dim}Y\)."
        />
        <Proof
          proof="
                Say \(G\) is the extension of \(g\). By transversality-homotopy, take \(F\sim G\) so \(F\pitchfork G\) and \(\partial F\pitchfork G\). Observe that \(\partial G=g\) and \(\partial F=: f\sim g\). Therefore, \(I_2(g,Z)=|f^{-1}(Z)|_2\) by theorem 4, but as \(F^{-1}(Z)\) is a \(1\)-manifold with boundary, \(I_2(g,Z)=0\) by theorem 1."
        />
        <p>
          Then, for an arbitrary map \(g\) (with all the same conditions as
          before), we can define \(I_2(g,Z)=I_2(f,Z)\), where \(f\sim g\) is an
          arbitrary homotopy transversal to \(Z\), which will exist by
          transversality-homotopy. Our next step in constructing this invariant
          is to exploit that our hypersurface will be connected.
        </p>
        <Theorem
          no="6"
          statement="If \(f\colon X\to Y\) is smooth with equidimensional compact \(X\) and connected \(Y\), then \(I_2(f,\{y\})\) is invariant under choice of \(y\in Y\)."
        />
        <Proof
          proof="
                Without loss of generality, assume \(f\pitchfork \{y\}\) (note this is identical to assuming \(y\) is a regular value). By the stack of records theorem (proved in an earlier post of mine), there is a neighbourhood \(U\) of \(y\) such that \(f^{-1}(U)=\dot{\bigcup}_{k=1}^n V_k\) where each \(V_k\) is open in \(X\) and \(f\) is locally diffeomorphic on each.\[\]
                Then, \(I_2(f,\{z\})=n\) for any \(z\in U\), and so the map \(y\mapsto I_2(f,\{y\})\) is locally constant on \(U\). As \(Y\) is connected, this extends to a globally constant map."
        />
        <p>
          We call this value the modulo 2 <strong>degree</strong> of \(f\),
          written {"\\(\\operatorname{deg}_2 f\\)"}. Now, we begin the
          construction. Let \(X\) be a compact, connected manifold (we will
          shortly examine hypersurfaces in particular) in{" "}
          {"\\(\\mathbb{R}^n\\)"}, with {"\\(f\\colon X\\to\\mathbb{R}^n\\)"}{" "}
          smooth and for {"\\(z\\in\\mathbb{R}^n\\setminus f(X)\\)"} define the{" "}
          <strong>unit vector</strong>
          {
            "\\[u_z\\colon X\\to S^{n-1}\\textrm{ by }u_z(x)=\\frac{f(x)-z}{|f(x)-z|}.\\]"
          }
        </p>
        <p>
          Note that \(u_z\) satisfies the hypotheses of theorem 6, hence we can
          consider {"\\(\\operatorname{deg}_2 u_z\\)"}. Observe that,
          geometrically, this is the number (modulo 2) of points \(x\in X\)
          whose unit vector from \(f(x)\) to \(z\) will point in a particular
          direction (as we compute the degree by fixing some vector in{" "}
          {"\\(S^{n-1}\\)"}). Thus, we call this the winding number modulo 2 of
          \(f\) around \(z\), written{" "}
          {"\\(W_2(f,z):=\\operatorname{deg}_2 u_z\\)"}. A visual representation
          is seen below in figure 3.
        </p>
        <Figure
          no="3"
          src={Fig3Wind}
          caption="A particular unit vector \(u_z\) with points in its preimage (blue). Here, \(W_2(f,z)=1\)."
        />
        <p>
          This winding number is the key to the separation theorem. We will use
          it to compute what is "inside" and "outside", and we begin with a
          technical result.
        </p>
        <Theorem
          no="7"
          statement="
                Let \(f\colon X\to\mathbb{R}^n\) be smooth with \(D\) a compact manifold with boundary \(X\) such that \(F\colon D\to\mathbb{R}^n\) extends \(f\). If \(z\notin f(X)\) is a regular value of \(F\), then \(F^{-1}(Z)\) is finite and \(|F^{-1}(z)|\equiv_2 W_2(f,z)\). "
        />
        <Proof
          proof="
                Suppose \(F^{-1}(z)=\varnothing\). As \(f\) can be extended to \(D\), so can the unit vector \(u_z\) as \(F(x)\neq z\) for all \(x\in D\), so it is well-defined. Then, by the boundary theorem, we have that
                \[
                    \operatorname{deg}_2 u_z=0=W_2(f,z)=|\varnothing|
                \]
                as the degree is defined as an intersection number. \[\]
                Suppose now \(F^{-1}(z)=\{x_1,\dots ,x_\ell\}\). For each \(x_i\), take a closed ball of radius \(\varepsilon_i\) around \(x_i\), call it \(\mathcal{B}_i(x_i,\varepsilon_i)\), small enough such that the \(\mathcal{B}_i\) are disjoint from each other and from \(X\). Define \(g_i\colon\partial\mathcal{B}_i\to\mathbb{R}^n\) as a restriction of \(F\), and let \(D_k:=D\setminus\dot{\bigcup}_{i=1}^k\operatorname{int}\mathcal{B}_i\), \(X_k:=\partial D_k\), and \(f_k:=F\vert_{X_k}\). \[\]
                Now, note that \(W_2(f_0,z)=W_2(f,z)\), and
                \[
                    W_2(f_k,z)=W_2(f_{k-1},z)+W_2(g_k,z).
                \]
                Thus,
                \[
                    W_2(f_\ell,z)=W_2(f_{\ell-1},z)+W_2(g_\ell,z)=W_2(g_1,z)+\cdots +W_2(g_1,z)+W_2(f_0,z).
                \]
                As \(z\notin D_\ell\), we can extend \(f_\ell\) to \(D_\ell\), hence by the boundary theorem \(W_2(f_\ell,z)=0\), meaning
                \[
                    -W_2(f_0,z)=-W_2(f,z)=W_2(g_1,z)+\cdots+W_2(g_\ell,z).
                \]
                By \(z\) being a regular value and the balls being disjoint, we know \(F\) is locally diffeomorphic in some neighbourhood of the closed balls. Restricting the unit vector map (induced by \(g_k\)) will have it be bijective, hence \(W_2(g_k,z)=1\), and taking everything modulo \(2\) we are done."
        />
        <p>
          One can apply theorem 7 to the case where \(X\) is a hypersurface and
          \(f=\imath\) is the inclusion. If one can prove that the complement of
          \(X\) consists of two connected sets, each open with \(X\) being their
          boundary, with one bounded and one unbounded, then it will precisely
          state that \(W_2(X,z):=W_2(\imath,z)\) (this is what we mean when we
          talk about winding numbers of manifolds) is equal to the number of
          points in the preimage of the extension of the inclusion map. That is,
          the winding number will be equal to \(1\) if it lies "inside" and
          \(0\) if it lies "outside". This is the invariant we seek to compute,
          which we will do using the following curve.
        </p>
        <p>
          Given {"\\(z\\in\\mathbb{R}^n\\setminus X\\)"} in the complement of
          our compact, connected hypersurface, we define a <strong>ray</strong>{" "}
          emanating from \(z\) in the direction of \(v\) to be{" "}
          {"\\[r:=\\{z+tv:0\\leq t\\in\\mathbb{R}\\}.\\]"}.
        </p>
        <Theorem
          no="8"
          statement="
                A ray \(r\) from \(z\) in the direction of \(v\) is transversal to \(X\) if and only if \(v\) is a regular value of the unit vector \(u_z\)."
        />
        <Proof
          proof="
                Suppose that \(r\pitchfork X\). Then,
                \[
                    T_x(X)+\operatorname{im}dr_t=T_x(\mathbb{R}^n)=\mathbb{R}^n
                \]
                for any \(x\in X\cap r\), where \(x=z+tv\). With \(v=(v_1,\dots, v_n)\), we know that
                \[
                    dr_t=\begin{pmatrix}
                    v_1 & \cdots & v_n
                    \end{pmatrix}^T(t)
                \]
                and so the image under \(\mathbb{R}\) is just the ray extended to the line. Then, recall that \(u_z(x)=(x-z)/|x-z|\) (as our map \(f\) here is just the inclusion), and \(v\) is a regular value if and only if for all \(x\) such that \(u_z(x)=v\) we have \(d(u_z)_x=\mathbb{R}^{n-1}\). This, however, happens if and only if \(T_x(X)\perp \{tv:t\in\mathbb{R}\}\), precisely equivalent to our transversality condition."
        />
        <Theorem
          no="9"
          statement="
                Let \(r\) be a ray emanating from \(z_0\) in the direction \(v\) so \(r\pitchfork X\). Let \(z\neq z_0\) be in the complement of \(X\) but on \(r\), with \(\ell\) being the number of intersections of \(r\) and \(X\) between \(z\) and \(z_0\). Then, \(W_2(X,z_0)=W_2(X,z)+\ell\) all modulo \(2\). "
        />
        <Proof
          proof="
                Observe that, by theorem 8, we must have that \(v\) is a regular value of both \(u_z\) and \(u_{z_0}\) by theorem 8. Therefore, \(W_2(X,z)=|u_z^{-1}(v)|_2\) and \(W_2(X,z_0)=|u_{z_0}^{-1}(v)|_2\). Therefore, \(W_2(X,z_0)=W_2(X,z)+\ell\), for if \(x\in u_z^{-1}(v)\) lies after \(z\) but before \(z_0\), then \(u_{z_0}(x)=-v\), hence not contributing to the winding number. "
        />
        <p>
          At last, we have our central result. Recall that we are assuming we
          have already proven the complement of our hypersurface consists of the
          two components as posited in the Jordan-Brouwer theorem statement, and
          so theorem 7 tells points in the same component have the same winding
          number.
        </p>
        <Theorem
          no="10"
          statement="
                Let \(r\) be a ray emanating from \(z\) in the direction of \(v\), such that \(r\pitchfork X\). Then, \(z\) lies inside \(X\) if and only if \(r\) intersects \(X\) an odd number of times."
        />
        <Proof
          proof="
                Observe that, as \(X\) is compact, we can find some \(z_0\) outside of \(X\) such that \(W_2(X,z)=0\). By theorem 9, then, \(W_2(X,z)+\ell=W_2(X,z_0)=0\), meaning \(W_2(X,z)=-\ell\) all modulo 2. However, as \(z_0\) was outside with winding number \(0\), this means \(z\) will be outside as well if and only if \(-\ell=0\) modulo 2, equivalently if and only if \(\ell\) is even. "
        />
        <p>
          I find this is a beautiful argument. Recalling figure 3, we can take
          the dashed line extending \(u_z\) to be our ray, and we see there are
          \(5\) intersections. If \(f(X)=\imath(X)=X\), then we see
          \(W_2(X,z)=1\) and indeed, \(z\) lies inside the curve (which is just
          a hypersurface in {"\\(\\mathbb{R}^2\\)"}). In fact, due to Sard,
          almost all values of \(u_z\) will be regular, hence by theorem 8
          almost all such rays will intersect transversally. So, taking a
          hypersurface, we can just draw random rays, and with probability 1 we
          will have one to which we can apply theorem 10. This immediately gives
          the following.
        </p>
        <Theorem
          no="11"
          statement="
                A point \(z\) lies inside a hypersurface \(X\) if and only if almost all rays emanating from \(z\) intersect \(X\) an odd number of times."
        />
        <p>
          This is astoundingly simple, so I can now rest easy, knowing if I ever
          find myself in a life-or-death situation where the only escape is by
          knowing whether a point lies inside or outside a picture, I just need
          a pencil and straightedge.
        </p>
        <Figure
          no="4"
          src={Fig4GP}
          caption="Figure 2-19 (89), Guillemin and Pollack"
        />
      </div>
    );
  }

}

export default JordanBrouwer;