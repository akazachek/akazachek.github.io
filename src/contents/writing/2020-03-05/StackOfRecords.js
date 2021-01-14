import React, { Component } from "react";
/* environments */
import Figure from "../../../components/Figure";
import Theorem from "../../../components/Theorem";
import Proof from "../../../components/Proof";
import Diagram from "../../../components/Diagram";
/* diagrams */
import svg1 from "./svg1.svg";
import svg2 from "./svg2.svg";
import svg3 from "./svg3.svg";
import svg4 from "./svg4.svg";
import svg5 from "./svg5.svg";
import svg6 from "./svg6.svg";
import svg7 from "./svg7.svg";
import svg8 from "./svg8.svg";
/* figures */
import Fig1GP from "./fig1records.png";

class StackOfRecords extends Component {
    
  componentDidMount() {
    window.KaTeXRender();
  }

  render() {
    return (
      <div class="postContent">
        <p>
          Although Eratosthenes calculated the Earth's circumference around 250
          B.C.E with a very small margin of error, it is hard to see the Earth
          is round when simply standing outside. Even atop mountains and cliffs
          facing out to the sea, the Earth seems quite flat. It is only when we
          look at Earth as a whole that we see the curvature. In fact, this is
          true of any ball-shaped object.
        </p>
        <p>
          In mathematics, we call objects like this <strong>manifolds</strong>,
          and say they are <strong>locally Euclidean</strong>. An important part
          of being locally Euclidean is that there are no sudden jumps or cusps
          or anything of the sort; the surface is smooth. Beginning with this
          notion, we study <strong>smooth functions</strong>. Take $U$ as an
          open subset of {"$\\mathbb{R}^n$"}. We say the map{" "}
          {"$f:U\\rightarrow\\mathbb{R}^m$"} is smooth if it is{" "}
          {"$\\mathcal{C}^\\infty$"}, or if it has continuous partial
          derivatives of all orders. An example of this is{" "}
          {"$f:\\mathbb{R}\\rightarrow\\mathbb{R}$"} by $x\mapsto x^3$. However,
          suppose we had a function {"$f:[0,1]\\rightarrow\\mathbb{R}$"}. Our
          $U$ in this case is not open. How do we talk about differentiation at
          the points $x=0$ or $x=1$? Of course, we cannot; $f$ is not continuous
          at these points and so is not differentiable. However, <i>should</i>{" "}
          we be able to differentiate $f$? With \(x\mapsto x^3\), the answer is
          clearly yes. So, in the same way we complete {"$\\mathbb{Q}$"} with
          Cauchy sequences which should converge, we say{" "}
          {"$f:U\\rightarrow\\mathbb{R}^m$"} is smooth on a closed{" "}
          {"$U\\subseteq\\mathbb{R}^n$"} if around every $u\in U$ there exists
          an open {"$V\\subseteq\\mathbb{R}^n$"} and a smooth{" "}
          {"$F:V\\rightarrow\\mathbb{R}^m$"} such that{" "}
          {"$F\\vert_{V\\cap U}=f\\vert_{V\\cap U}$"}. We call this $F$ a{" "}
          <strong>smooth extension</strong> of $f$ at $x$.
        </p>
        <p>
          With this idea of smoothness in mind we are almost ready to define
          manifolds. The only obstacle is the ability to go to and from our
          spaces. For example, $x\mapsto x^3$ is smooth, however its inverse{" "}
          {"$y\\mapsto\\sqrt[3]{y}$"} is not, as it is not differentiable at
          $y=0$. We need to ensure we can take our manifold and straighten it
          out locally, but also be able to undo that process by folding things
          back up onto the manifold. This introduces{" "}
          <strong>diffeomorphisms</strong>. A smooth map $f:X\rightarrow Y$,
          where $X$ and $Y$ are subsets of a Euclidean space, is called a
          diffeomorphism if {"$f^{-1}:Y\\rightarrow X$"} is also smooth. We say
          $X$ and $Y$ are diffeomorphic. A useful result follows.
        </p>
        <Theorem
          no="1"
          statement="
          The composition of diffeomorphisms is a diffeomorphism.
          "
        />
        <Proof
          proof="
          Suppose we have diffeomorphisms $f:X\rightarrow Y$ and $g:Y\rightarrow Z$. Consider $g\circ f:X\rightarrow Z$. Let $x\in X$. Given $f$ and $g$ are smooth we can find open neighborhoods $U$ of $x$ and $V$ of $f(x)$, as well as smooth extensions $F:U\rightarrow Y$ and $G:V\rightarrow Z$. Let $\tilde{U}=U\cap F^{-1}(V)$. Then note that
          \[
            G\circ F:\tilde{U}\rightarrow Z    
          \]
          is smooth as it is defined on open sets. Furthermore, $(G\circ F)\vert_{X\cap\tilde{U}}=(g\circ f)\vert_{X\cap\tilde{U}}$ and is therefore our desired smooth extension. Applying the same technique to the inverses, we are done."
        />
        <p>
          Now, we can define manifolds! Although there are ways to define
          manifolds on abstract topological spaces, it is not necessary for our
          discussion. So, we say {"$X\\subseteq\\mathbb{R}^n$"} is a $k$-
          <strong>dimensional</strong> manifold (or $k$-manifold) if for each
          $x\in X$ there exists a diffeomorphism $\varphi:U\rightarrow V$ where
          $V$ is an open set around $x$ in $X$ (as in, {"$V=X\\cap\\tilde{V}$"}{" "}
          for some open {"$\\tilde{V}\\subset\\mathbb{R}^n$"}) and $U$ is an
          open subset of {"$\\mathbb{R}^k$"}. We call a diffeomorphism going
          this way (from a Euclidean space) a <strong>parametrization</strong>{" "}
          of $X$ about $x$, and we call {"$\\varphi^{-1}:V\\rightarrow U$"}{" "}
          <strong>local coordinates</strong> on $X$ about $x$. We usually write{" "}
          {"$\\varphi^{-1}=(x_1,\\cdots,x_k)$"}, where each $x_i$ takes in an
          element of $X$ and returns you a point in {"$\\mathbb{R}$"}, making it
          clear how $X$ really is $k$-dimensional. In other words, $X$ is
          diffeomorphic to {"$\\mathbb{R}^k$"}.
        </p>
        <Theorem
          no="2"
          statement="
        Every open ball in $\mathbb{R}^n$ is diffeomorphic to $\mathbb{R}^n$.
        "
        />
        <Proof
          proof="
        Let our $n$-ball of radius $r$ be denoted $\mathcal{B}_r$. Define $f:\mathcal{B}_r\rightarrow\mathbb{R}^n$ by
        $$x\mapsto\frac{rx}{\sqrt{r^2-\|x\|^2}}.$$
        It is clear this map is smooth, as it is just multiple applications of (1). We also note the map $f^{-1}:\mathbb{R}^n\rightarrow\mathcal{B}_r$ defined by
        $$x\mapsto\frac{rx}{\sqrt{r^2+\|x\|^2}}$$
        is smooth and is the inverse of $f$, justifying our clever choice of name."
        />
        <p>
          Using the above fact, whenever we parametrize a $k$-manifold $X$ by{" "}
          {"$\\varphi:U\\subseteq\\mathbb{R}^k\\rightarrow V\\subseteq X$"}, we
          will instead just take {"$\\varphi:\\mathbb{R}^k\\rightarrow V$"}, by
          implicit composition. If the exact image of our parametrization is not
          important (for instance, if we do not need to invert it), we will
          write {"\\(\\varphi:\\mathbb{R}^k\\rightarrow X\\)"}.
        </p>
        <p>
          One reason we impose all of these restrictions on manifolds is that
          they are the perfect conditions to study spaces on which we can borrow
          ideas from calculus. One of these is tangency. Just like how a
          differentiable function {"$f:\\mathbb{R}\\rightarrow\\mathbb{R}$"} can
          be locally approximated by its derivative, we can locally approximate
          the potentially very complicated global behaviour of a manifold by its
          derivative as well. Let {"$X\\subseteq\\mathbb{R}^n$"} be our
          $k$-manifold, and let $x_0\in X$. Take{" "}
          {"$\\varphi:\\mathbb{R}^k\\rightarrow X$"} to be a parametrization
          about $x_0$, and without loss of generality take $\varphi(0)=x_0$. Its
          derivative is
          {"$$d\\varphi_{x_0}:\\mathbb{R}^k\\rightarrow\\mathbb{R}^n.$$"}
          We call the image of {"$d\\varphi_{x_0}$"} our{" "}
          <strong>tangent space</strong>, $T_xX$. Just as the line locally
          approximating our function $f$ at $x_0$ is given by $f(x_0)+xf'(x)$,
          our tangent space can be put on $X$ by{" "}
          {"$\\varphi(0)+d\\varphi_{x_0}x$"}. In fact, we do not need to use all
          of $X$; any open neighborhood around $x_0$ will do.
        </p>
        <p>
          However, note we defined $T_xX$ with respect to a particular
          parametrization. Thankfully, the tangent space is the same for all
          parametrizations, as we will show.
        </p>
        <Theorem
          no="3"
          statement="
        The tangent space of a manifold is invariant under choice of parametrization.
        "
        />
        {/* i hate inserting diagrams into proofs now */}
        <Proof
          proof={
            <span>
              Suppose we have {"$\\varphi:\\mathbb{R}^k\\rightarrow X$"} and{" "}
              {"$\\psi:\\mathbb{R}^k\\rightarrow X$"} both parametrizing $X$
              about $x$, such that $\varphi(x)=0=\psi(x)$. Shrinking our domains
              to some $U$ and $V$ in {"\\(\\mathbb{R}^k\\)"} if necessary, we
              can make their images equal. Thus, <Diagram src={svg1} /> where{" "}
              {"$h=\\psi^{-1}\\circ\\varphi:U\\rightarrow V$"} is a
              diffeomorphism by (1). Then, we see $d\varphi_0=d\psi_0\circ
              dh_0$, so{" "}
              {"$d\\varphi_0(\\mathbb{R}^k)\\subseteq d\\psi_0(\\mathbb{R}^k)$"}
              , and the reverse direction shows their images are actually equal,
              meaning the tangent space is identical regardless of
              parametrization chosen.{" "}
            </span>
          }
        />
        <Theorem
          no="4"
          statement="
        If $X\subseteq\mathbb{R}^n$ is a $k$-manifold, then $\mathrm{dim}\,T_xX=k$ for all $x\in X$.
        "
        />
        <Proof proof="Let $x\in X$ and parametrize about it by $\varphi$. Then, $\varphi^{-1}\circ\varphi=\mathrm{Id}$. Given $\mathrm{Id}$ is linear, $d\mathrm{Id}_0=\mathrm{Id}$, so ordinary chain rule requires that $d\varphi^{-1}_x\circ d\varphi_0=\mathrm{Id}$. Therefore, $d\varphi_0$ is bijective, so it is an isomorphism, and the dimension follows." />
        <p>
          Now that we know tangent spaces are well-defined, we begin to unveil
          how powerful they are, by letting us learn a lot about manifolds from
          relatively simple linear algebra. First, we must show they play nicely
          with composition.
        </p>
        <Theorem
          no="5"
          name="Chain Rule"
          statement="
        With $j$-,$k$-, and $\ell$-manifolds $X,Y,Z$ and smooth maps $f:X\rightarrow Y$ and $g:Y\rightarrow Z$,
        $$d(g\circ f)_x=dg_{f(x)}\circ df_x.$$
        "
        />
        <Proof
          proof={
            <span>
              Let $x\in X$, and $y=f(x)$. Parametrize about $x$ and $y$ by
              $\varphi$ and $\psi$, respectively. We again shrink their domains
              as in (3) to $U$ and $V$, respectively, if need be. Taking
              derivatives, we arrive at <Diagram src={svg2} /> suggesting{" "}
              {"$df_x=d\\psi_0\\circ dh_0\\circ d\\varphi^{-1}_0$"}. Suppose
              however we had a different parametrization about $x$, say
              $\varphi'$, whose domain is shrunk to $U'$. By (3), we have{" "}
              <Diagram src={svg3} /> and so
              {
                "$$d\\psi_0\\circ dh_0\\circ\\mathrm{Id}\\circ d(\\varphi')_0^{-1}= d\\psi_0\\circ dh_0\\circ d(\\varphi')_0^{-1}=d\\psi_0\\circ dh_0\\circ d\\varphi^{-1}_0=df_x$$"
              }
              nonetheless, showing our choice does not matter. Applying the
              above to <Diagram src={svg4} /> has the proof fall out
              immediately.
            </span>
          }
        />
        <p>
          There is one result that follows from this which will be particularly
          useful later.
        </p>
        <Theorem
          no="6"
          statement="
        With $f:X\rightarrow Y$ a diffeomorphism, $df_x$ is an isomorphism between their tangent spaces."
        />
        <Proof
          proof="
        Let $x\in X$, and $y=f(x)$. We know $f^{-1}\circ f=\mathrm{Id}$. By chain rule,
        $$d(f^{-1}\circ f)_x=\mathrm{Id}=df^{-1}_y\circ df_x$$
        so in fact, $(df_x)^{-1}=df^{-1}_y$, and so it is an isomorphism."
        />
        <p>
          Now that we know some basics about manifolds, as well as the basics
          about maps between them, we can ask the question about whether a
          transformation creates a manifold in the first place. Continuing with
          the theme of differentiability, we define a{" "}
          <strong>local diffeomorphism</strong>, which is exactly what it sounds
          like. We call $f:X\rightarrow Y$ a local diffeomorphism if around each
          $x\in X$ there exists an open neighborhood $U$ around $x$ which is
          diffeomorphic to some neighborhood $V$ around $f(x)$. This is not an
          empty definition, as a local diffeomorphism can very well not be an
          actual diffeomorphism, perhaps failing to be bijective. An incredibly
          powerful, and honestly shocking result applies to local
          diffeomorphisms.
        </p>
        <Theorem
          no="7"
          name="Inverse Function Theorem (IFT)"
          statement="
        If $f:X\rightarrow Y$ is smooth with $df_x$ an isomorphism, then $f$ is a local diffeomorphism at $x$."
        />
        <p>
          The proof is far too long and outside the scope for this post. I
          intend to soon (first learn about and then) write a separate post for
          this theorem using the Banach Fixed-Point approach. Also, note the
          relation to (6).
        </p>
        <Theorem
          no="8"
          statement="
        If $f:X\rightarrow Y$ is smooth with $df_x$ an isomorphism,  then $f$ is locally equivalent to the identity at $x$."
        />
        <Proof
          proof={
            <span>
              Parametrize about $x$ by $\varphi$ and $y=f(x)$ by $\psi$. Then,
              we get <Diagram src={svg5} /> and differentiating gives{" "}
              <Diagram src={svg6} /> Given we know $df_x$ is also an isomorphism
              between $T_xX$ and $T_yY$, we know we can replace{" "}
              {"$d\\psi_0\\circ d\\varphi_x^{-1}$"} with it. Then, by (7), we
              can justify {"$f=\\psi\\circ\\varphi^{-1}$"} provided we
              sufficiently shrink neighborhoods.
            </span>
          }
        />
        <p>
          This is generally more useful for us than (7) is. To be more explicit
          about what we have done here, we have actually given local coordinates
          $(x_1,\cdots,x_k)$ from {"$\\varphi^{-1}$"} such that
          $f(x_1,\cdots,x_k)=(x_1,\cdots,x_k)$, and likewise for {"$f^{-1}$"}.
          In a sense then, \(X\) and \(Y\) are the same manifold under a
          different guise, because we do not have enough structure to
          (meaningfully) differentiate between them. This is analogous two
          different bases representing the same vector space. However, sometimes
          our conditions are not this strong, but meaningful connections still
          exist. For example, a subspace of a vector space is obviously related
          to the vector space itself, even though we cannot biject their bases.
          In the case of manifolds, this brings up the idea of{" "}
          <strong>submersions</strong>.
        </p>
        <p>
          When we have manifolds \(X\) and \(Y\) with \(f:X\rightarrow Y\), but{" "}
          {"\\(k=\\mathrm{dim}\\,X\\geq\\mathrm{dim}\\,Y=\\ell\\)"}, we cannot
          have \(df_x\) for any \(x\in X\) be a bijection between tangent spaces
          unless the equality is actually met. However, we can have it be a
          surjection, and in this case we call \(f\) a submersion.{" "}
          <strong>The canonical submersion</strong> is just a projection, the
          simplest of which being{" "}
          {"\\(\\pi:\\mathbb{R}^k\\rightarrow\\mathbb{R}^\\ell\\)"} defined by
          \[ (x_1,\dots,x_\ell,\dots,x_k)\mapsto (x_1,\dots,x_\ell). \] We will
          use \(\pi_c\) to represent the appropriate projection for the context.
        </p>
        <Theorem
          no="9"
          name="Local Submersion Theorem"
          statement="
        With \(f:X\rightarrow Y\) a submersion at \(x\in X\), \(f\) is locally equivalent to the canonical submersion."
        />
        <Proof
          proof={
            <span>
              Appropriately parametrize to achieve the diagram{" "}
              <Diagram src={svg7} /> We know{" "}
              {"\\(dg_0:\\mathbb{R}^k\\rightarrow\\mathbb{R}^\\ell\\)"} to be
              surjective, so for some basis it can be represented by the
              \(\ell\)-by-\(k\) block matrix{" "}
              {"\\(\\begin{pmatrix} I_\\ell & 0\\end{pmatrix}\\)"}, where
              \(I_\ell\) is the \(\ell\)-square identity. In order to apply (8),
              we need bijectivity, so we define{" "}
              {"\\(G:\\mathbb{R}^k\\rightarrow\\mathbb{R}^k\\)"} by
              {`\\[
                G(x)=(g(x)_1,\\dots,g(x)_\\ell,x_{\\ell+1},\\dots,x_k)
                \\]`}
              and by extending our basis chosen to represent \(dg_0\), we can
              represent \(dG_0\) by \(I_k\). Then by (8), after said shrinking,
              we get <Diagram src={svg8} /> as desired.
            </span>
          }
        />
        <p>
          This is quite a powerful result, because it lets us easily create
          manifolds when coupled with a few more useful tools. Say we have some
          arbitrary map \(f:X\rightarrow Y\). With \(y\in Y\), we call the{" "}
          <strong>fibre</strong> of \(y\) the set{" "}
          {"\\(\\left\\{x\\in X:f(x)=y\\right\\}=f^{-1}(y)\\)"}. Note this is
          the special case of a preimage, namely of the singleton{" "}
          {"\\(\\left\\{y\\right\\}\\)"}. Cases where fibres are manifolds
          themselves are of great interest, as we will soon see. However, how we
          can we figure out if they are one in the first place? Drawing
          inspiration from (9), suppose \(f\) is actually a smooth mapping of
          manifolds. We call \(y\) a <strong>regular value</strong> if \(f\)
          submerges its fibre (in the sense that it is a submersion at every
          element).
        </p>
        <Theorem
          no="10"
          name="Fibre Theorem"
          statement="
        If \(y\in Y\) is a regular value of a smooth \(f:X\rightarrow Y\) between manifolds, then the fibre of \(y\) is a submanifold of \(X\) with dimension \(\mathrm{dim}\,X-\mathrm{dim}\,Y\)."
        />
        <Proof
          proof="
        Suppose we have some such \(f\), with \(\mathrm{dim}\,X=k\) and \(\mathrm{dim}\,Y=\ell\). Let \(x\) be in our fibre. Choose local coordinates in a neighbourhood \(U\) of \(x\) by (9) such that \(f(x_1,\dots,x_k)=(x_1,\dots,x_\ell)\). Then, note that
        \[
            V=f^{-1}(y)\cap U=\left\{x\in U:x_1=\cdots=x_\ell=0\right\}.
        \]
        However, this means \(V\) is an open subset of \(f^{-1}(y)\) diffeomorphic to \(\mathbb{R}^{k-\ell}\), as the local coordinate system \((x_{\ell+1},\dots,x_k)\) fully describes \(V\). In other words, \(V\) is a \((k-\ell)\)-manifold."
        />
        <p>
          This is remarkably powerful. For example, take the unit \(n\)-sphere{" "}
          {"\\(S^n\\subseteq\\mathbb{R}^{n+1}\\)"}. To prove this is an
          \(n\)-manifold explicitly is not the easiest task. We would need to
          construct the stereographic projection, then show it is bijective and
          smooth both ways (or something similar). Instead, however, we note
          that
          {"\\[\r\nS^n=\\left\\{x\\in\\mathbb{R}^{n+1}:N(x)=1\\right\\}\r\n\\]"}
          where{" "}
          {"\\(N=\\|\\, \\|^2:\\mathbb{R}^{n+1}\\rightarrow\\mathbb{R}\\)"} is
          the square of the Euclidean norm. This means that \(S^n\) is the fibre
          of \(1\) (under \(N\)). However, note that at{" "}
          {"\\(z\\in\\mathbb{R}^{n+1}\\)"}{" "}
          {
            "\\[\r\ndN_z=\\begin{pmatrix} 2z_1 & \\cdots & 2z_{n+1}\\end{pmatrix}\r\n\\]"
          }{" "}
          is clearly surjective to {"\\(\\mathbb{R}\\)"} except when \(z=0\). In
          particular, it is surjective when \(z=1\), meaning \(S^n\) is an
          \(n\)-manifold.
        </p>
        <p>
          One interesting remark is that {"\\(dN_{-1}\\)"} is also surjective.
          In fact, this holds true for any \(z \lt 0\), despite the fact that we
          cannot have a negative radius. Although strange, it is merely
          platitudinous, as {"\\(N^{-1}(-1)=\\varnothing\\)"} and the empty set
          is vacuously a \(0\)-manifold (and also a basis for every kernel, and
          has an infimum of infinity, and...).
        </p>
        <p>
          There is an interesting consequence of working with these fibres under
          certain conditions. We can use it to create a neighbourhood around a
          point, by stacking various records induced by the fibre. The geometric
          intuition here is nicely demonstrated in figure 1 taken from Guillemin
          and Pollack's <i>Differential Topology</i>.
        </p>
        <Figure
          no="1"
          src={Fig1GP}
          caption=" Stack of Records visualization, Fig 1-13 (26) G and P"
        />
        <Theorem
          no="11"
          name="Stack of Records"
          statement="
        Suppose \(y\in Y\) is a regular value of a smooth \(f:X\rightarrow Y\) where \(X\) and \(Y\) are equidimensional manifolds, and \(X\) is compact. Then, the fibre of \(y\) is finite, and there exists an open neighbourhood of \(y\) whose preimage is the disjoint union of open neighbourhoods around each element in the fibre."
        />
        <Proof
          proof="
        Suppose we have some such \(y\). Let \(x\in f^{-1}(y)\). We know \(df_x\) is surjective from (10), and given \(\mathrm{dim}\,X=\mathrm{dim}\,Y\) it is in fact bijective. From (7), it is therefore locally diffeomorphic on the fibre. Suppose now the fibre is infinite. As \(X\) is compact, we know it contains a limit point of \(f^{-1}(y)\), say \(x_0\). As \(f\) is continuous, we know our fibre is compact as well, hence \(x_0\in f^{-1}(y)\). Take consecutively smaller neighbourhoods of \(x_0\) to form a sequence of \(x_i\in f^{-1}(y)\) which converge to \(x_0\). As \(f\) is a local diffeomorphism a neighbourhood of \(x_0\) diffeomorphic to some neighbourhood in \(Y\) must exist, but each neighbourhood will contain some \(x_i\neq x_0\), hence failing to be injective. Thus, the fibre is finite, say 
        \[
            f^{-1}(y)=\left\{x_1,\dots,x_n\right\}.
        \] 
        Choose open neighbourhoods \(U_i\) around each \(x_i\) diffeomorphic to some neighbourhood around \(y\), which we shrink until they are disjoint. Then, let \(V=\bigcap f(U_i)\). Then, let \(U_i^\ast=U_i\cap f^{-1}(V)\). As \(X\setminus\dot{\bigcup}\,U_i^\ast\) is closed, its image is compact, and therefore \(V\) is open. By construction \(f^{-1}(V)=\dot{\bigcup}\, U_i^\ast\), giving our desired records and stacking. "
        />
        <p>
          This is the reason I love differential topology. You get to go from a
          very simple picture and idea, like stacking records on one another, to
          the abstract and rigorous framework behind the proof itself, building
          on top of other abstract and rigorous tools with the same intuitive
          framing. Moreover, the tools themselves are quite simple - linear maps
          and metric space topology - but they fuse perfectly with the
          requirement that your space be locally Euclidean, letting you describe
          complicated and otherwise obtuse structures with straightforward and
          basic concepts.
        </p>
      </div>
    );
  }

}

export default StackOfRecords;