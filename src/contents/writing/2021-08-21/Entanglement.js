import React, { Component } from "react";
/* environments */
import Figure from "../../../components/Figure";
import Theorem from "../../../components/Theorem";
import Proof from "../../../components/Proof";

class Entanglement extends Component {
  componentDidMount() {
    window.KaTeXRender();
  }

  render() {
    return (
      <div class="postContent leftMargin">
        <p>
          <strong>Update (2021-08-21):</strong> I presented an abridged version
          of this write-up as a student talk at the{" "}
          <a className="linkPurple" href="https://cumc2021.ca">
            2021 Canadian Undergraduate Mathematics Conference
          </a>
          . Below is a recording of this talk.
        </p>
        <p style={{ textAlign: "center" }}>
          <iframe
            src="https://www.youtube.com/embed/K2HlbbaDlyE"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            style={{ height: "50vh", width: "80%" }}
          ></iframe>
        </p>
        <p>
          In middle school I wanted to be a physicist. The motivating factor was
          quantum mechanics, or at least my pop science understanding of it.
          Entangled particles! Quantum tunneling! Superpositions! Of course, I
          didn't actually understand anything, being many years away from
          learning the mathematical prerequisites, but it still marked a general
          cardinal direction on my academic map. As the years went on, my
          interests slowly veered from the physics to the mathematics,
          abstracting all the way to mathematical logic and the various set
          theories. I later grew to find these subjects too callous and
          symbolic, returning to where I am now with more geometric interests.
          My work this summer, however, brought me back in some sense to where
          it all started: quantum physics. This time my perspective was purely
          mathematical, with no care for the pop science which originally set me
          on my journey. This mathematics is what I'm going to write about
          today, specifically that of entanglement.
        </p>
        <p>
          The concept of entanglement, morally, seeks to formalize the situation
          in which the combination of parts may only be understood as just that
          - a combination; one cannot infer, fully, what the component parts
          are. The setting for our story is the <strong>tensor product</strong>.
          Its construction begins with a desire for <strong>bilinearity</strong>{" "}
          over vector spaces. Given two vectors spaces {"\\(U,V\\)"} over{" "}
          {"\\(F\\)"}, we would like a third vector space, say {"\\(W\\)"}, for
          which there exists a map {"\\(T\\colon U\\times V\\to W\\)"} such that
          for any {"\\(\\lambda\\in F,u_1,u_2\\in U,v_1,v_2\\in V\\)"} we have
          {
            "\\[T\\left(\\lambda u_1,v_1\\right)=\\lambda T(u_1,v_1)=T(u_1,\\lambda v_1)\\]"
          }
          {
            "\\[T\\left(u_1+u_2,v_1+v_2\\right)=T(u_1,v_1+v_2)+T(u_2,v_1+v_2)=T(u_1,v_1)+T(u_1,v_2)+T(u_2,v_1)+T(u_2,v_2).\\]"
          }
          That is, {"\\(T\\)"} is linear in both components. So, fix bases{" "}
          {"\\(\\{e_i\\},\\{f_i\\}\\)"} of {"\\(U,V\\)"}, respectively, and
          consider some scalars {"\\(\\alpha_i,\\beta_i\\in F\\)"}. What we then
          need from our tensor product {"\\(W\\)"} is for
          {
            "\\[T\\left(\\sum_i \\alpha_i e_i,\\sum_i\\beta_i f_i\\right)=\\sum_{i,j}\\alpha_i\\beta_j T(e_i,f_j).\\]"
          }
          In order to accomplish this, we define the formal symbol{" "}
          {"\\(e_i\\otimes f_j\\eqqcolon T(e_i,f_j)\\)"} (with {"\\(T\\)"}{" "}
          extended to non-basis vectors bilinearly); this is our tensor, and the
          vector space {"\\(W\\eqqcolon U\\otimes V\\)"} is composed of linear
          combinations of these symbols. This construction is actually
          universal, in the sense that given any other bilinear construction on{" "}
          {"\\(U\\times V\\)"}, we can uniquely describe it in terms of this{" "}
          {"\\(U\\otimes V\\)"}.
        </p>
        <p>
          There may be apprehension to us defining {"\\(U\\otimes V\\)"} in
          terms of some explicit bases. There is indeed an equivalent definition
          of the tensor product as a quotient space with respect to a
          bilinearity relation, however this basis-free construction is less
          useful in our current context, hence it will not be shown. As an
          aside, there is something I find quite comedic in defining tensors as
          the symbols themselves, but I'm not quite sure what.
        </p>
        <p>
          Something important to note is that given a vector{" "}
          {"\\(t\\in U\\otimes V\\)"}, we cannot necessarily write{" "}
          {"\\(t=u\\otimes v\\)"} for some {"\\(u\\in U,v\\in V\\)"}. Vectors
          for which this is possible are called <strong>decomposable</strong>.
          Two other facts for finite-dimensional {"\\(U,V\\)"} are that if{" "}
          {"\\(\\{e_i\\},\\{f_i\\}\\)"} are orthonormal bases for {"\\(U,V\\)"},
          then {"\\(\\{e_i\\otimes f_j\\}\\)"} will be an orthonormal basis for{" "}
          {"\\(U\\otimes V\\)"}. Of course, orthonormality implies an inner
          product, and indeed one exists, given by
          {
            "\\[\\langle e_i\\otimes f_j,e_k\\otimes f_\\ell\\rangle_{U\\otimes V}= \\langle e_i,e_k\\rangle_U\\langle f_j,f_\\ell\\rangle_V\\]"
          }
          extended to non-basis vectors.
        </p>
        <p>
          We can also bring linear transforms over to the tensor product.
          Specifically, given linear maps {"\\(\\sigma\\colon U\\to U'\\)"} and{" "}
          {"\\(\\tau\\colon V\\to V'\\)"}, we may define the linear map{" "}
          {"\\(\\sigma\\otimes\\tau\\colon U\\otimes V\\to U'\\otimes V'\\)"} by{" "}
          {`
          \\[
            (\\sigma\\otimes\\tau)(u\\otimes v)=\\sigma u\\otimes\\tau v.
          \\]
          `}
          There is a simple matrix representation of this new linear map, given
          by the <strong>Kronecker product</strong> of matrices. Fixing two
          bases {"\\(\\{e_1,\\dots,e_n\\},\\{f_i\\}\\)"} of {"\\(U,V\\)"} and
          representing {"\\(\\sigma,\\tau\\)"} with respect to them, the block
          matrix
          {`\\[
              \\sigma\\otimes\\tau=\\begin\{pmatrix\}\\sigma_\{11\}\\tau & \\cdots & \\sigma_\{1n\}\\tau\\\\
              \\vdots & \\ddots &\\vdots \\\\
              \\sigma_\{n1\}\\tau & \\cdots & \\sigma_\{nn\}\\tau
              \\end\{pmatrix\}
          \\]`}
          gives the matrix of {"\\(\\sigma\\otimes\\tau\\)"} with respect to the{" "}
          <strong>lexicographically-ordered</strong> basis
          {`\\[
          (e_i\\otimes f_j : e_i \\otimes f_j \\leq e_k\\otimes f_\\ell \\textrm\{ if \} i < k \\textrm\{ or \} i=k, j<\\ell ).
          \\]`}
        </p>
        <p>
          With the setting understood, we move on to our story's characters.
          Recall a vector space {"\\(V\\)"} equipped with an inner product{" "}
          {"\\(\\langle\\cdot,\\cdot\\rangle\\)"} induces a norm{" "}
          {"\\(\\|\\cdot\\|\\)"} by{" "}
          {"\\(\\|v\\|=\\sqrt{\\langle v,v\\rangle}\\)"}. If the associated
          metric space is complete and {"\\(F=\\mathbb{R}\\)"} or{" "}
          {"\\(F=\\mathbb{C}\\)"} (if the choice does not matter, we will write{" "}
          {"\\(\\mathbb{F}\\)"}), then {"\\(V\\)"} is a{" "}
          <strong>Hilbert space</strong>. This definition comes from functional
          analysis, however, and so is slightly overkill for us, as we will only
          look at finite-dimensional spaces (where we always have completion).
          The canonical Hilbert space is {"\\(\\mathbb{C}^n\\)"} equipped with
          the standard inner product.
        </p>
        <p>
          Our parts will be operators over Hilbert spaces, and our combinations
          will be their tensor products. We will first go over what kind of
          operators we are considering. Consider a Hilbert space{" "}
          {"\\(\\mathcal{H}\\)"} lying over the field {"\\(\\mathbb{F}\\)"}. The{" "}
          <strong>dual space</strong> {"\\(\\mathcal{H}^\\ast\\)"} is the set of{" "}
          <strong>linear functionals</strong>, linear maps{" "}
          {"\\(\\mathcal{H}\\to\\mathbb{F}\\)"}.
        </p>
        <Theorem
          no="1"
          name="Riesz–Fréchet"
          statement="
               Consider some \(\varphi\in\mathcal{H}^\ast\). Then, there exists a unique \(f_{\varphi}\in\mathcal{H}\) such that \(\varphi(x)=\langle x,f_{\varphi}\rangle\) for every \(x\in\mathcal{H}\)."
        />
        <Proof
          proof="
                Let \(\{e_1,\dots,e_n\}\) be an orthonormal basis of \(\mathcal{H}\). Then, using properties of orthonormality and linear functionals, for arbitrary \(x\) we have
                \[
                  \varphi(x)=\varphi\left(\sum_{i=1}^n \langle x,e_i\rangle e_i\right)=\sum_{i=1}^n\langle x,e_i\rangle\varphi(e_i)=\sum_{i=1}^n \langle x,\overline{\varphi(e_i)}e_i\rangle=\left\langle x,\sum_{i=1}^n\overline{\varphi(e_i)}e_i\right\rangle. 
              \]
              Let us take the latter component as a candidate for \(f_{\varphi}\) (indeed, observe it is independent of \(x\)). For uniqueness, suppose there is some other satisfactory \(g_{\varphi}\) such that
              \[
                \langle x,f_{\varphi}\rangle=\varphi(x)=\langle x,g_{\varphi}\rangle.
                \]
                Then,
                \[
                  \langle x,f_{\varphi}\rangle-\langle x,g_{\varphi}\rangle =\langle x,f_{\varphi}-g_{\varphi}\rangle=0
                  \]
                  and it remains only to consider \(x=0\) to see \(f_{\varphi}=g_{\varphi}\)."
        />
        <p>
          There is a subtly in the above theorem and its proof, namely in
          regards to the assumption that {"\\(\\mathcal{H}\\)"} is
          finite-dimensional. The theorem is (partially) true in
          infinite-dimensional Hilbert spaces (the requirement{" "}
          {"\\(\\varphi\\)"} be continuous must be appended), however the proof
          technique must change as there are no orthonormal bases in such
          spaces. A further remark, for those familiar with Dirac notation, is
          that the above theorem legitmizes the identification of a unique bra{" "}
          {"\\(\\langle \\psi |\\)"} for each ket {"\\(|\\psi\\rangle\\)"}.
        </p>
        <p>
          This theorem lets us define the <strong>adjoint</strong>. Fix a linear
          operator {"\\(T\\)"} on {"\\(\\mathcal{H}\\)"} and some vector{" "}
          {"\\(y\\in\\mathcal{H}\\)"}. The map{" "}
          {"\\(x\\mapsto\\langle T x,y\\rangle\\)"} defines a linear functional,
          and hence we obtain a unique {"\\(T_y\\in\\mathcal{H}\\)"} such that{" "}
          {"\\(x\\mapsto \\langle x, T_y\\rangle\\)"}. We use this process to
          define the linear map {"\\(T^\\ast\\)"} by{" "}
          {"\\(T^\\ast y\\coloneqq T_y\\)"}. Equivalently, {"\\(T^\\ast\\)"} is
          the unique linear operator such that{" "}
          {"\\(\\langle Tx,y\\rangle=\\langle x,T^\\ast y\\rangle\\)"} for all{" "}
          {"\\(x,y\\in\\mathcal{H}\\)"}. When {"\\(T\\)"} is a matrix,{" "}
          {"\\(T^\\ast\\)"} is given by conjugate transposition. If{" "}
          {"\\(T=T^\\ast\\)"}, we say {"\\(T\\)"} is{" "}
          <strong>self-adjoint</strong> (or <strong>Hermitian</strong>).
        </p>
        <p>
          We need one more definition: a linear operator is called{" "}
          <strong>positive</strong> if its <strong>spectrum</strong> (in finite
          dimensions, precisely its set of eigenvalues) is entirely
          non-negative. When working with matrices,{" "}
          <strong>positive-semidefinite</strong> is often seen instead. At last,
          we arrive at <strong>density operators</strong> over a Hilbert space
          (correspondingly, <strong>density matrices</strong>, and also{" "}
          <strong>states</strong>), the set of self-adjoint positive operators
          with unit trace.
        </p>
        <p>
          As we will be working over finite-dimensional complex vector spaces
          (and note{" "}
          {"\\(\\mathbb{C}^m\\otimes\\mathbb{C}^n\\cong\\mathbb{C}^{mn}\\)"}),
          we will make constant (implicit) appeals to the following spectral
          theorem. The proof is not hard, but it involves introducing another
          theorem (that of Schur), which is slightly out-of-scope. The statement
          may actually be strengthened from just self-adjoint operators to
          normal operators, however this is similarly digressive.
        </p>
        <Theorem
          no="2"
          statement="
               Every self-adjoint linear operator over a finite-dimensional complex inner product space has a diagonal matrix of its eigenvalues with respect to its orthonormal set of eigenvectors."
        />
        <p>
          This means given any state, say {"\\(\\rho\\)"}, we may take its
          eigenvectors {"\\(\\{v_i\\}\\)"} and eigenvalues{" "}
          {"\\(\\{\\lambda_i\\}\\)"}, and write its{" "}
          <strong>eigendecomposition</strong>
          {`\\[
          \\rho=\\sum_i \\lambda_i P_\{v_i\}
        \\]`}
          where {"\\(P_{v}\\)"} is the orthogonal projection onto the
          one-dimensional subspace spanned by {"\\(v\\)"}. Due to the definition
          of state, each {"\\(\\lambda_i\\geq 0\\)"} and{" "}
          {"\\(\\sum_i \\lambda_i=1\\)"}. In general, given any set of
          coefficients {"\\(p_i\\geq 0\\)"} for {"\\(i=1,\\dots,k\\)"} such that{" "}
          {"\\(\\sum_{i=1}^k p_i=1\\)"}, and a set of unit vectors{" "}
          {"\\(\\{u_1,\\dots, u_k\\}\\)"}, we call
          {`\\[
          \\sum_{i=1}^k p_i P_\{u_i\}
        \\]`}
          an <strong>ensemble</strong>. These representation of a state as an
          ensemble is generally not unique (not even in length!), due to the
          following.
        </p>
        <Theorem
          no="3"
          name="Schrödinger"
          statement="
               Consider a state \(\rho\) represented by the ensemble \(\sum_{i=1}^k p_iP_{u_i}\). Then, we may also write \(\rho\) as the ensemble \(\sum_{j=1}^\ell q_iP_{v_i}\) if and only if there exists some unitary \(\ell\)-by-\(\ell\) matrix \(U\) such that \[
                 v_i=\frac{1}{\sqrt{q_i}}\sum_{j=1}^k U_{ij}\sqrt{p_j}u_j.
                \]"
        />
        <p>
          As a reminder, a matrix {"\\(U\\)"} is <strong>unitary</strong> if{" "}
          {"\\(U^\\ast=U^{-1}\\)"}. One situation where the ensemble
          representation is unique is if {"\\(\\rho\\)"} itself is a projector
          (that is, {"\\(\\rho=P_v\\)"} for some unit vector {"\\(v\\)"}). This
          follows immediately from the defining properties of states. Such{" "}
          {"\\(\\rho\\)"} are called <strong>pure</strong>. States which are not
          pure are <strong>mixed</strong>.
        </p>
        <p>
          We will now travel toward the tensor product, wherein resides
          entanglement. For the remainder of this post, unless otherwise stated,{" "}
          {"\\(\\mathcal{H}=\\mathcal{H}_m\\otimes\\mathcal{H}_n\\)"} where{" "}
          {"\\(\\mathcal{H}_m\\)"} is a Hilbert space of dimension {"\\(m\\)"}.
          As {"\\(\\mathcal{H}\\)"} itself is a Hilbert space, the notion of
          pure and mixed states remains identical. However, we may now have the
          ability to describe states in {"\\(\\mathcal{H}\\)"} in terms of
          states in {"\\(\\mathcal{H}_m\\)"} and {"\\(\\mathcal{H}_n\\)"}. Given
          some {"\\(\\rho\\)"} over {"\\(\\mathcal{H}\\)"}, if we can write
          {`\\[
            \\rho=\\sum_i p_i\\sigma_i\\otimes\\tau_i
            \\]`}
          where {"\\(p_i\\geq 0\\)"} and {"\\(\\sum_i p_i=1\\)"}, and the{" "}
          {"\\(\\sigma_i,\\tau_i\\)"} are themselves pure states in the
          component Hilbert spaces, we call {"\\(\\rho\\)"}{" "}
          <strong>separable</strong> (or <strong>disentangled</strong>). If a
          state is not separable, it is <strong>entangled</strong>. Note that
          the case where the {"\\(\\sigma_i,\\tau_i\\)"} are instead mixed
          actually describes the same set (the proof for this hinges on
          Carathéodory's result for convex hulls and the compactness of pure
          states in the component Hilbert spaces), so purity is assumed without
          loss of generality.
        </p>
        <p>
          Now, how do we determine if a state is entangled or separable?
          Moreover, are there different levels of entanglement? Unfortunately,
          there is no nice answer to either of these questions. Given an
          arbitrary state, there is no straightforward process to determine its
          separability (of course, some special cases exist, e.g. the
          Peres–Horodecki critereon for{" "}
          {"\\(\\mathcal{H}_m\\otimes\\mathcal{H}_n\\)"} when{" "}
          {"\\(mn\\leq 6\\)"}
          ). There are also multiple mutually-inconsistent ways to measure
          levels of entanglement; two such measures will be our focus today.
        </p>
        <p>
          Before we discuss them, let us precisely define what we mean by
          measure. Such a map on states over {"\\(\\mathcal{H}\\)"}, call it{" "}
          {"\\(E\\)"}, must satisfy three properties. Firstly, that{" "}
          {"\\(E(\\rho)=0\\)"} if and only if {"\\(\\rho\\)"} is separable.
          Secondly, {"\\(E\\)"} must be invariant under{" "}
          <strong>locally unitary operations</strong>, meaning that if given
          unitary {"\\(U\\in\\mathcal{H}_m\\)"} and{" "}
          {"\\(V\\in\\mathcal{H}_n\\)"}, then{" "}
          {"\\[E(\\rho)=E((U\\otimes V)\\rho(U^\\ast\\otimes V^\\ast)).\\]"} We
          also require <strong>convexity</strong>, meaning for any{" "}
          {"\\(\\alpha\\in [0,1]\\)"} we have
          {
            "\\[E(\\alpha\\rho +(1-\\alpha)\\sigma)\\leq \\alpha E(\\rho)+(1-\\alpha)E(\\sigma).\\]"
          }
          The reason for the first property is obvious. The latter two are
          related to the physical motivation behind the postulates of quantum
          mechanics, as well as state geometry. It should also be noted that
          this list is a bare minimum. There are several other desirable
          properties (e.g. continuity), however the difficulty in constructing
          such maps, known as <strong>entanglement measures</strong>, means we
          cannot be too picky and demand everything at once. In fact, it is
          usually extremely hard to determine whether an entanglement measure
          has these extra properties, given how tricky they are to work with (as
          we will soon see).
        </p>
        <p>
          The construction of our first entanglement measure begins on pure
          states. We start with a definition. Given two linear operators{" "}
          {"\\(S,T\\)"} over {"\\(\\mathcal{H}_m,\\mathcal{H}_n\\)"}, the{" "}
          <strong>partial trace</strong> of {"\\(S\\otimes T\\)"} is{" "}
          {"\\[\\operatorname{tr}_2(S\\otimes T)=\\operatorname{tr}(T)S,\\]"}
          extended linearly. Then, the <strong>entanglement entropy</strong> of
          a unit vector {"\\(v\\in\\mathcal{H}\\)"} is
          {
            "\\[E(v)=-\\sum_{\\lambda_i \\in\\,\\operatorname{spec}\\operatorname{tr}_2 P_v}\\lambda_i\\ln\\lambda_i\\]"
          }
          with the convention {"\\(0\\cdot\\ln 0=0\\)"}. There exists a nicer,
          more explicit formula, which also shows it does not matter which
          partial trace we use in the definition (i.e.{" "}
          {"\\(\\operatorname{tr}_1\\)"} versus {"\\(\\operatorname{tr}_2\\)"}).
        </p>
        <Theorem
          no="4"
          name="Schmidt"
          statement="
               Let \(v\in\mathcal{H}_m\otimes\mathcal{H}_n\). Then, there exist orthonormal bases \(\{e_i\},\{f_i\}\) for \(\mathcal{H}_m,\mathcal{H}_n\), respectively, such that \[v=\sum_{i=1}^{\min\{m,n\}} \alpha_i e_i\otimes f_i\]
               and the \(\alpha_i\) are uniquely-given, real, and non-negative."
        />
        <p>
          The proof of the Schmidt decomposition is essentially the same as that
          of the singular value decomposition. The above {"\\(\\alpha_i\\)"} are
          called the <strong>Schmidt coefficients</strong> of {"\\(v\\)"}.
        </p>
        <Theorem
          no="5"
          statement="
               The entanglement entropy of a unit vector \(v\in\mathcal{H}\) is \[E(v)=-\sum_i \alpha_i^2\ln\alpha_i^2\] where the \(\alpha_i\) are the Schmidt coefficients of \(v\)."
        />
        <Proof
          proof="
                Recall that the projector \(P_v\) is given by \(vv^\ast\), where \(v^\ast\) is the conjugate transpose of the column vector of \(v\), or defined by the linear functional \(u\mapsto \langle u,v\rangle\). Written with respect to the Schmidt decomposition, we have
                \[
                  vv^\ast=\left(\sum_i \alpha_i e_i\otimes f_i\right)\left(\sum_i \alpha_i e_i\otimes f_i\right)^\ast=\sum_{i,j} \alpha_i\overline{\alpha_j} (e_i\otimes f_i)(e_j\otimes f_j)^\ast.
                \]
                Distributing the conjugate transposition and multiplying through using properties of the Kronecker product, we obtain
                \[
                  vv^\ast=\sum_{i,j} \alpha_i\overline{\alpha_j}(e_ie_j^\ast\otimes f_if_j^\ast)=\sum_i \alpha_i^2 (e_ie_i^\ast\otimes f_if_i^\ast)
                  \]
                  with the last equality following from the orthonormality of our bases. Taking the partial trace,
                  \[\begin{aligned}
                  \operatorname{tr}_2(vv^\ast) &= \operatorname{tr}_2\left(\sum_i \alpha_i^2 (e_ie_i^\ast\otimes f_if_i^\ast)\right) \\
                  &= \sum_i \alpha_i^2 \operatorname{tr}_2{(e_ie_i^\ast\otimes f_if_i^\ast)} \\
                  &= \sum_i \alpha_i^2 \operatorname{tr}(f_if_i^\ast)e_ie_i^\ast.
                  \end{aligned}\]
                  However, \(f_if_i^\ast=P_{f_i}\), and so \(\operatorname{tr}(f_if_i^\ast)=1\) for each \(i\). The \(e_ie_i^\ast=P_{e_i}\) are also projectors, and moreover they are all orthogonal to each other, hence we see \(
                    \operatorname{spec}\operatorname{tr}_2P_v=\{\alpha_i^2\}
                    \), as desired."
        />
        <p>
          To see entropy in action, denote by {"\\(\\{e_1,e_2\\}\\)"} the
          standard basis for {"\\(\\mathbb{C}^2\\)"}, and examine the unit
          vector {"\\(e_1\\otimes e_1\\in\\mathbb{C}^2\\otimes\\mathbb{C}^2\\)"}
          . We can project onto it by{" "}
          {`\\[P_{e_1\\otimes e_1}=(e_1\\otimes e_1)(e_1\\otimes e_1)^\\ast= e_1e_1^\\ast\\otimes e_1e_1^\\ast=P_{e_1}\\otimes P_{e_1}.\\]`}
          This is clearly separable, and the partial trace is just{" "}
          {"\\(\\operatorname{tr}_2 P_{e_1\\otimes e_1}=P_{e_1}\\)"}, giving{" "}
          {"\\(E(e_1\\otimes e_1)=0\\)"} as expected. All pure separable states
          will have zero entropy for this reason. For an entangled state,
          consider
          {`\\[v=\\frac{1}{\\sqrt{2}}(e_1\\otimes e_1+e_2\\otimes e_2)\\in\\mathbb{C}^2\\otimes\\mathbb{C}^2.\\]`}
          Then, with respect to the standard (lexicographic) basis of the tensor
          product,
          {`\\[
            P_v=\\begin{pmatrix}
            \\frac{1}{2} & 0 & 0 & \\frac{1}{2} \\\\
            0 & 0 & 0 & 0 \\\\
            0 & 0 & 0 & 0 \\\\
            \\frac{1}{2} & 0 & 0 & \\frac{1}{2}
           \\end{pmatrix}.
            \\]`}
          Computing partial trace is simple given an actual matrix (we just
          trace over the blocks), obtaining
          {`\\[\\operatorname{tr}_2 P_v=\\begin{pmatrix}
            \\operatorname{tr}\\begin{pmatrix}\\frac{1}{2} & 0 \\\\ 0 & 0\\end{pmatrix} &  \\operatorname{tr}\\begin{pmatrix}0 & \\frac{1}{2} \\\\ 0 & 0\\end{pmatrix} \\\\
            \\operatorname{tr}\\begin{pmatrix}0 & 0 \\\\ \\frac{1}{2} & 0\\end{pmatrix} &  \\operatorname{tr}\\begin{pmatrix}0 & 0 \\\\ 0 & \\frac{1}{2}\\end{pmatrix}
           \\end{pmatrix}=\\begin{pmatrix}\\frac{1}{2} & 0 \\\\ 0 & \\frac{1}{2}\\end{pmatrix}.\\]`}
          Therefore,
          {`\\[E(v)=-\\left(\\frac{1}{2}\\ln\\frac{1}{2}+\\frac{1}{2}\\ln\\frac{1}{2}\\right)=\\ln 2\\]`}
          and so the state given by {"\\(v\\)"} is entangled (in fact, this is
          the most entangled a state can be in{" "}
          {"\\(\\mathbb{C}^2\\otimes\\mathbb{C}^2\\)"}).
        </p>
        <p>
          The question now is how to extend {"\\(E\\)"} from pure states (though
          we technically defined it for vectors, these are just projectors up to
          a rotational identification) to mixed states. The natural approach is
          to weigh the entropy with respect to the coefficients of an ensemble,
          defining
          {`\\[E(\\rho)=\\sum_i p_i E(v_i).\\]`}
          However, recall that, due to Schrödinger, ensemble representations are
          generally not unique. This would be fine if the above were invariant
          under choice, but unfortunately this is not the case. One solution is
          to iterate over the entire ensemble space, writing say
          {`\\[E_F(\\rho)=\\inf_{\\mathrm{ensembles}}\\sum_i p_iE(v_i),\\]`}
          which defines <strong>entanglement of formation</strong>. This process
          may actually be done for any of notion of entanglement initially
          defined on pure states, and is called a{" "}
          <strong>convex roof construction</strong>.
        </p>
        <p>
          Though the definition is intuitive and easy to write down, the value
          is devilishly hard to compute. Indeed, closed-form expressions are
          only known for special cases (e.g. over{" "}
          {"\\(\\mathbb{C}^2\\otimes\\mathbb{C}^2\\)"}, see{" "}
          <a
            className="linkPurple"
            href="https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.80.2245"
          >
            here
          </a>
          ). The question of whether this infimum is ever even attained (that
          is, whether some ensemble realizes {"\\(E_F\\)"}) is also non-trivial
          (though it is known to be true in many cases, see{" "}
          <a
            className="linkPurple"
            href="https://www.mdpi.com/1099-4300/12/7/1799"
          >
            here
          </a>
          ). The reason {"\\(E_F(\\rho)=0\\)"} when {"\\(\\rho\\)"} is
          separable, however, is that the ensemble showing it is separable will
          satisfy {"\\(E(v_i)=0\\)"} for each {"\\(i\\)"}, as seen earlier, and
          so the infimum will be attained there.
        </p>
        <p>
          Another approach is to construct some notion of distance between
          states, and see how far away a state is from the set of separable
          ones. For this, we introduce <strong>von Neumann entropy</strong>,
          {`\\[S(\\rho)=-\\operatorname{tr}\\rho\\ln\\rho.\\]`} The notation
          warrants a brief discussion. The actual matrix logarithm{" "}
          {"\\(\\ln\\rho\\)"} will not always exist (as density matrices may be
          singular), so some care must be taken. It may be easier to understand
          this as notational shorthand applied to the eigendecomposition, where
          {`\\[\\rho\\ln\\rho=\\sum_i (\\lambda_i\\ln\\lambda_i) P_{v_i}\\]`}{" "}
          with {"\\(0\\cdot\\ln 0=0\\)"} as before. When the matrix{" "}
          {"\\(\\ln\\rho\\)"} exists, the two definitions coincide. This
          quantity is closely related to entanglement entropy (indeed,
          entanglement entropy is sometimes called the reduced von Neumann
          entropy, as {"\\(E(v)=S(\\operatorname{tr}_2 P_v)\\)"}).
        </p>
        <p>
          With this, we may now define the <strong>relative entropy</strong> of{" "}
          {"\\(\\rho\\)"} with respect to {"\\(\\sigma\\)"} by{" "}
          {`\\[S(\\rho\\|\\sigma)=\\operatorname{tr}(\\rho(\\ln\\rho-\\ln\\sigma)).\\]`}
          This gives us the notion of entropic distance we desired (but note it
          is just a notion, not a literal metric). So, we go on to define the
          measure
          {`\\[E_R(\\rho)=\\inf_{\\textrm{separable}} S(\\rho\\|\\sigma)\\]`}
          called <strong>relative entanglement</strong> (the infimum is
          iterating over each separable state {"\\(\\sigma\\)"}). If{" "}
          {"\\(\\rho\\)"} is not entangled, this quantity will vanish once the
          entropy is taken relative to itself.
        </p>
        <p>
          Unfortunately, just like for entanglement of formation, actually
          computing relative entanglement is quite hard. It is interesting to
          note though that both {"\\(E_F\\)"} and {"\\(E_R\\)"} reduce to the
          entanglement entropy {"\\(E\\)"} over pure states (this is trivial for
          the former, but the argument for the latter is involved, see{" "}
          <a
            className="linkPurple"
            href="https://journals.aps.org/pra/abstract/10.1103/PhysRevA.57.1619"
          >
            here
          </a>
          ).
        </p>
        <p>
          This subject, best described as quantum information theory, is
          situated at an interesting place for me. I remember in high school
          posting a question on Stack Exchange, asking what the quotient of a
          vector space even means and why it would ever come up. A couple of
          years later, and I see them show up here (as one of the ways) to
          define tensor products, which are then used to discuss what happens
          during very expensive laboratory experiments. Though I can't say I
          feel particularly motivated to learn about the actual physics and
          real-world interpretations behind all of this, I nonetheless find it
          really fascinating (or maybe comforting?) to know that some of the
          seemingly abstract theory I've been working with this summer has
          interpretations this tangible and uses this practical. But maybe this
          is just me reorienting my compass again, this time embarking to become
          an applied mathematician. Who knows?
        </p>
      </div>
    );
  }
}

export default Entanglement;
