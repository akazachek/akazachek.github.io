import React, { Component } from "react";
/* environments */
import Figure from "../../../components/Figure";
import Theorem from "../../../components/Theorem";
import Proof from "../../../components/Proof";

import Paper from "../../../media/paper.pdf";
import GeomEntangle from "../../../media/geom_entangle.pdf";

class DvoretzkyChannel extends Component {
  componentDidMount() {
    window.KaTeXRender();
  }

  render() {
    return (
      <div class="postContent leftMargin">
        <p>
          Channels are just a way to send a message from one place to another.
          Tying two tin cans by string and shouting into one end is a perfectly
          fine model of a channel. A natural question to ask is: how "good" is
          this channel at communicating? If our string spans many metres or is
          frayed then perhaps we might have to shout into our can many times
          until our friend at the other end is confident she understands us. By
          using some fancy mathematical symbols and words to describe this, we
          enter the field of information theory.
        </p>
        <p>
          Quantum channels are morally the same thing, but instead of shouting
          we feed a quantum state into our quantum tin can and shuttle it down
          our quantum wire, whatever this all means. This important thing is we
          can still ask the same question - how "good" is this quantum channel
          at communicating information? To answer this question, we first have
          to carefully define what "good" (and information!) even means. In this
          process another hurdle will present itself, requiring us to answer the
          following: if we glue two of these quantum channels together, can we
          communicate better than if we used them individually?
        </p>
        <p>
          Maybe the answer seems obvious - of course we can do better! But the
          situation turns out to be more complicated. I will spill the beans now
          and say, yes, we can do better when we glue. But it took the better
          part of a decade to prove this and no one believed it was the case
          until the very end. Moreover, we still lack a single concrete example,
          even a single channel we could write down using a (perhaps very large)
          piece of paper and pen, point to, and exclaim "Yes, here, gluing is
          better!" We only know such a channel must exist because of
          non-constructive probabilistic arguments.
        </p>
        <p>
          Today we'll walk through a modern presentation of this probabilistic
          argument (perhaps "modern" is used inappropriately, since the original
          proof was only in 2009). The key tool is something called Dvoretzky's
          theorem and belongs to the field of asymptotic geometric analysis.
          More or less, the story goes like this. Asymptotic geometric analysis
          looks at what properties hold for convex bodies with high probability,
          becoming almost certainly true as their dimension diverges.
          Conveniently, our gluing question can be rephrased into one about a
          particular convex body. So, we borrow this theorem from Dvoretzky and
          use it to conclude that in a high enough dimension, this gluing must
          be better for some channel.
        </p>
        <p>
          I will add, before we begin, that this post is an amalgamation of my{" "}
          <a className="linkPurple" href={GeomEntangle}>
            personal notes
          </a>{" "}
          and a{" "}
          <a className="linkPurple" href={Paper}>
            final project
          </a>{" "}
          on this topic. Some missing proofs are found in the former and omitted
          historical discussion is found in the latter. Both of these documents
          contain the full references to everything I write below.
        </p>
        <p>
          Let's start with a cursory overview of information theory, so we can
          finally answer the burning question of what it means for a channel to
          be "good" at communicating. We'll let {"\\(X\\)"} and {"\\(Y\\)"} be
          random variables, discrete with finite support, and respective masses{" "}
          {"\\(p_X\\)"} and {"\\(p_Y\\)"} (but we'll drop the subscripts if it's
          clear what we mean).
        </p>
        <p>
          The central quantity is <strong>Shannon entropy</strong>,
          {`\\[H(X)=\\sum_{x} p(x)\\log_2 p(x).\\]`}
          The base doesn't really matter. But in computer science it's typical
          to use base 2 since then we can easily talk about bits. The main theme
          in information theory is to ignore "weird" sequences, because as
          messages become longer and longer, the probability that a message is
          "weird" vanishes. We formalize this idea with{" "}
          <strong>{"\\(\\delta\\)"}-typical sequences</strong>, which is a
          message {"\\((x_1,\\dots,x_n)\\)"} comprising i.i.d samples of{" "}
          {"\\(X\\)"} such that
          {`\\[H(X)-\\delta\\leq -\\frac{1}{n}\\log_2 p(x_1,\\dots,x_n)\\leq H(X)+\\delta.\\]`}
          Here, {"\\(\\delta>0\\)"} is a parametre. They deserve their namesake
          since for any {"\\(\\varepsilon>0\\)"} there is some {"\\(n\\)"} large
          enough so all messages of length (at least) {"\\(n\\)"} are{" "}
          {"\\(\\delta\\)"}
          -typical with probability larger than {"\\(1-\\varepsilon\\)"}. This
          follows essentially immediately from the (weak!) law of large numbers.
        </p>
        <p>
          The genius of Shannon is in his source-coding theorem, which connects
          this entropy with compression. We say a{" "}
          <strong>compression rate</strong> {"\\(R\\)"} is associated with a
          protocol compressing some messages comprising {"\\(n\\)"}-symbols to{" "}
          {"\\(nR\\)"}-symbol codewords. We say {"\\(R\\)"} is{" "}
          <strong>achievable</strong> if there is asymptotically vanishing error
          (i.e. the probability of decompression error goes to {"\\(0\\)"} as{" "}
          {"\\(n\\to\\infty\\)"}).
        </p>
        <Theorem
          name="Shannon Source Coding"
          statement="All compression rates greater than \(H(X)\) are achievable."
        />
        <Proof
          proof="Let \(\delta,\varepsilon>0\). We can find some sufficiently large \(n\) such that an \(n\)-symbol message \((x_1,\dots,x_n)\) satisfies
\[
	2^{-n(H(X)+\delta)}\leq p(x_1,\dots,x_n)\leq 2^{-n(H(X)-\delta)}
\]
with probability no less than \(1-\varepsilon\). Respectively denote the left-hand and right-hand sides of this inequality by \(p_{\textrm{min}}\) and \(p_{\textrm{max}}\).
\[\]
Now, let \(\mathcal{N}\) be the set of these \(\delta\)-typical \(n\)-symbol messages. By definition, we have
\[
	|\mathcal{N}| p_{\textrm{min}} \leq \sum_{x\in\mathcal{N}} p(x)\leq 1
\textrm{ and }
	|\mathcal{N}|\geq \sum_{x\in\mathcal{N}}p(x)\geq 1-\varepsilon.
\]
Returning to our first inequality, we thus have
\[
	(1-\varepsilon)2^{n(H(X)-\delta)}\leq |\mathcal{N}|\leq 2^{n(H(X)+\delta)}.
\]
Therefore, we need only encode messages using \(n(H(X)+\delta)\) bits to decode any message in \(\mathcal{N}\) with error probability less than \(\varepsilon\). Taking \(\delta\to 0\) and \(\varepsilon\to 0\), we see a rate of \(H(X)\) is indeed achievable asymptotically.

To show this is the best we can do, let \(\gamma>0\) and suppose we had a rate of \(H(X)-\gamma\) for an \(n\)-symbol message. Let \(p_{\textrm{success}}\) denote the probability of successfully decompressing our original message. 
\[\]
Reusing our work on achievability, we know that a \(\delta\)-typical message occurs with probability no greater than \(2^{-n(H(X)-\delta)}\), and our code can uniquely identify \(2^{n(H(X)-\gamma)}\) of these. Thus,
\[
	p_{\textrm{success}}\leq 2^{n(H(X)-\gamma)}2^{-n(H(X)-\delta)}+q=2^{-n(\gamma-\delta)}+\varepsilon,
\]
where the error \(\varepsilon\) is the likelihood of an atypical message. This is the most optimistic scenario, the worst possible bound for such a code.

Since \(\varepsilon\) and \(\delta\) are arbitrarily small, we see that as \(n\to\infty\) we have \(p_{\textrm{success}}\to 0\) necessarily, and so such a code is not achievable."
        />
        <p>
          Our goal is communication across distance, not local compression.
          However, source coding provides a very illustrative demonstration of
          the role entropy plays in defining "information". Also note that{" "}
          {"\\(H(X)\\leq 1\\)"}, only saturated if {"\\(X\\)"} is uniform, so
          this theorem tells us any non-uniform message can be compressed
          somehow.
        </p>
        <p>
          We now get to define our tin cans. A <strong>channel</strong>{" "}
          {"\\(C\\)"} allows Alice to receive some message in {"\\(X\\)"} and
          send it to Bob, who receives a message in {"\\(Y\\)"}. It is
          characterized by the conditional distribution {"\\(Y|X\\)"}. We need
          only the conditional distribution because Alice, in principle, gets to
          choose what she sends to Bob (and, ostensibly, choose this in
          accordance to some well-thought-out protocol).
        </p>
        <p>
          Let {"\\(\\delta,\\varepsilon>0\\)"}, and let{" "}
          {"\\(\\{X_iY_i\\}_{i=1}^n\\)"} be i.i.d. according to{" "}
          {"\\(XY\\sim p_{XY}\\)"}. We say an {"\\(n\\)"}-symbol message{" "}
          {"\\((x_1y_1,\\dots,x_ny_n)\\)"} is{" "}
          <strong>jointly {"\\(\\delta\\)"}-typical</strong> if
          {
            "\\[\\begin{aligned}2^{-n(H(X)+\\delta)} &\\leq p_X(x_1,\\dots,x_n)\\leq 2^{-n(H(X)-\\delta)} \\\\ 2^{-n(H(Y)+\\delta)} &\\leq p_Y(y_1,\\dots,y_n)\\leq 2^{-n(H(Y)-\\delta)} \\\\ 2^{-n(H(XY)+\\delta)} &\\leq p_{XY}(x_1y_1,\\dots,x_ny_n) \\leq 2^{-n(H(XY)-\\delta)}.\\end{aligned}\\]"
          }
          Note here that by {"\\(p_{XY}\\)"} we actually mean{" "}
          {"\\(p_{(XY)^n}\\)"}. Exactly the same argument as for one variable
          will show most messages are jointly typical in the limit.
        </p>
        <p>
          For a jointly {"\\(\\delta\\)"}-typical message{" "}
          {"\\((xy,\\dots,xy)=(x^n,y^n)\\)"}, we see
          {
            "\\[p(x^n|y^n) = \\frac{p_{XY}(x^n,y^n)}{p_Y(y^n)} \\leq \\frac{2^{-n(H(XY)-\\delta)}}{2^{-n(H(Y)+\\delta)}}= 2^{-n(H(XY)-H(Y)-2\\delta)}\\]"
          }
          and
          {
            "\\[p(x^n|y^n) = \\frac{p_{XY}(x^n,y^n)}{p_Y(y^n)} \\geq \\frac{2^{-n(H(XY)+\\delta)}}{2^{-n(H(Y)-\\delta)}}= 2^{-n(H(XY)-H(Y)+2\\delta)}.\\]"
          }
          This naturally leads us to define the{" "}
          <strong>conditional entropy</strong> of {"\\(X\\)"} given {"\\(Y\\)"}
          {"\\[ H(X|Y)=H(XY)-H(Y)\\]"} and the{" "}
          <strong>mutual information</strong> between {"\\(X\\)"} and{" "}
          {"\\(Y\\)"}
          {"\\[I(X:Y)=H(X)-H(X|Y). \\]"}
        </p>
        <p>
          Conditional entropy answers the following question: If I know{" "}
          {"\\(Y\\)"}, what is my remaining ignorance about {"\\(X\\)"}? In the
          context of jointly {"\\(\\delta\\)"}-typical messages, we see that
          knowing {"\\(Y\\)"} lets us achieve a compression rate of{" "}
          {"\\(H(X|Y)\\)"}, asymptotically.
        </p>
        <p>
          The inverse is the answered by mutual information: If I know{" "}
          {"\\(Y\\)"}, by how much has my compression burden been reduced? It is
          precisely the difference between {"\\(H(X)\\)"} and {"\\(H(X|Y)\\)"},
          since these are the best achievable rates.
        </p>
        <p>
          We are now in a position to discuss how "good" a channel is as a tool
          for communication - that is, to define capacity. A{" "}
          <strong>communication rate</strong> {"\\(R\\)"} is associated with a
          protocol encoding {"\\(n\\)"}-symbol output messages in {"\\(Y\\)"} to{" "}
          {"\\(nR\\)"}-symbol codewords in {"\\(X\\)"}. We say {"\\(R\\)"} is{" "}
          <strong>achievable</strong> if there is asymptotically vanishing error
          (i.e. the probability of a decoding error goes to {"\\(0\\)"} as{" "}
          {"\\(n\\to\\infty\\)"}). The <strong>capacity</strong> of a channel{" "}
          {"\\(C\\)"} is the supremum over all achievable rates {"\\(R\\)"} with
          respect to all codeword distributions {"\\(X\\)"}.
        </p>
        <Theorem
          name="Shannon Noisy Coding"
          statement="Channel capacity is given by \(\sup_X I(X:Y)\)."
        />
        <Proof
          proof="Let \(\delta,\varepsilon>0\) and find some \(n\) such that \(n\)-symbol messages from \(XY\) are jointly \(\delta\)-typical. Now, take such as sample \((x,y)\), which we interpret as Alice drawing an \(n\)-symbol message from \(X\) and sending it through the channel for Bob to get an \(n\)-symbol message \(y\) from \(Y\). Henceforth, \(y\) is fixed. Also note that we mean \(x=(x_1,\dots,x_n)\), and likewise for \(y\). With high probability (with respect to \(\varepsilon\)), \(x\) and \(y\) are jointly \(\delta\)-typical -- we will suppose that they are.
          \[\]
          Using the same logic as in the proof of source coding, we let \(\mathcal{N}_{XY}\) be the set of jointly \(\delta\)-typical \(n\)-symbol messages and have \(|\mathcal{N}|\leq 2^{n(H(XY)+\delta)}\). We similarly define \(\mathcal{N}_X\) and \(\mathcal{N}_Y\), and know that if \(x'\in\mathcal{N}_X\) then \(p_X(x')\leq 2^{-n(H(X)-\delta)}\). The corresponding bound also holds for our fixed \(y\) (since joint typicality implies individual typicality).
          \[\]
          Let \(\mathcal{N}_{Xy}\) be the set of jointly \(\delta\)-typical \(n\)-symbol messages of the form \((x',y)\) (i.e. with our fixed \(y\)). Suppose now we sample an \(n\)-symbol message \(z\) of \(X\). As \(y\) is fixed prior to our sampling, we have \(p_{XY}(z,y)=p_X(z)p_Y(y)\). The probability that \(z\) and \(y\) are jointly \(\delta\)-typical is thus bounded above by
          \[
            \sum_{(x',y)\in\mathcal{N}_{Xy}}p_{XY}(x',y)=\sum_{(x',y)\in\mathcal{N}_{Xy}}p_X(x')p_Y(y)\leq |\mathcal{N}_{Xy}| 2^{-n(H(X)-\delta)} 2^{-n(H(Y)-\delta)}.
          \]
          Clearly, \(|\mathcal{N}_{Xy}|\leq |\mathcal{N}_{XY}|\), and so we further bound the probability by
          \[
            2^{n(H(XY)+\delta)}2^{-n(H(X)-\delta)} 2^{-n(H(Y)-\delta)}=2^{-n(I(X:Y)-3\delta)}.
          \]
          \[\]
          With this in mind, we establish our code with rate \(R\). Let us create \(2^{nR}\) codewords, \(n\)-symbol messages sampled from \(X^n\). Alice sends through a codeword \(x\) and Bob receives some output \(y\). He then searches among all codewords \(x'\) which are jointly \(\delta\)-typical with \(y\). The odds of a decoding error -- that he mistakenly finds  some \(x'\neq x\) which is jointly \(\delta\)-typical too -- is bounded above by
          \[
            2^{nR} 2^{-n(I(X:Y)-3\delta)}=2^{n(R-I(X:Y)+3\delta)}.
          \]
          \[\]
          There are two ways this may fail. First, that our sampled \(X^n\) is not \(\delta\)-typical, which is controlled by \(\varepsilon\) and may be made arbitrarily small. Second, that we have a collision and thus a decoding error, which is controlled by \(\delta\) and \(R\). We see that for any \(\gamma>0\), a rate \(R=I(X:Y)-\gamma\) will have vanishing error in the latter case as \(\delta\to 0\). 
          \[\]
          There is a subtly -- we have only showed that the average decoding error among our protocol vanishes. We require that the protocol itself has vanishing error. Specifically, label our set of codewords \(\mathcal{Q}=\{x_i\}_{i=1}^{2^{nR}}\) and denote by \(q_i\) the probability of a decoding error when sending the \(i\)-th codeword. The above work establishes that for any \(\eta>0\), there is some sufficiently large \(n\) such that
          \[
            \frac{1}{2^{nR}}\sum_{i=1}^{2^{nR}} q_i\leq \eta.
          \]
          Let \(\mathcal{Q}_{2\eta}\) denote the codewords \(x_i\) for which \(q_i\geq 2\varepsilon\). Witness that
          \[
            \eta\geq \frac{1}{2^{nR}}\sum_{i=1}^{2^{nR}} q_i\geq \frac{1}{2^{nR}}\sum_{i\in\mathcal{Q}_{2\eta}}\geq \frac{1}{2^{nR}}|\mathcal{Q}_{2\eta}|2\eta.
          \]
          Rearranging, \(|\mathcal{Q}_{2\eta}|\leq 2^{nR-1}\). Therefore, the new set of codewords \(\mathcal{Q}'=\mathcal{Q}\setminus\mathcal{Q}_{2\eta}\) satisfies \(q_i<2\eta\) for all remaining \(x_i\in\mathcal{Q}_i\) (and we throw away at most half of the originals). This inequality also shows our protocol with \(\mathcal{Q}'\) attains a rate \(R-1/n\). Taking \(n\to\infty\), we see the rate \(R\) is still attainable asymptotically."
        />
        <p>
          This background in information theory is necessary for us to motivate
          the main definitions in quantum information theory, so that we can
          talk about the capacities of our quantum-enhanced tin cans. But,
          before we can give these we'll need to review some functional analysis
          facts and notation, which will be necessary to talk about asymptotic
          geometric analysis anyways.
        </p>
        <p>
          We'll use {"\\(\\mathcal{H}^n\\)"} for a generic (complex) Hilbert
          space, with inner product{" "}
          {"\\(\\langle\\cdot,\\cdot\\rangle_{\\mathcal{H}}\\)"} and norm{" "}
          {"\\(\\|\\cdot\\|_{\\mathcal{H}}\\)"}, and identity operator{" "}
          {"\\(\\mathbb{1}_{\\mathcal{H}}\\)"} (dropping subscripts when it's
          clear). If {"\\(\\mathcal{H}=\\mathbb{C}^n\\)"}, then we'll use{" "}
          {"\\(|\\cdot|\\)"} for the standard Euclidean inner product. Let's use{" "}
          {"\\(B(\\mathcal{H})\\)"} for (bounded!) linear operators, writing{" "}
          {"\\(T\\)"} for a generic such element. This is Banach under the{" "}
          <strong>operator norm</strong>
          {
            "\\[\\|T\\|_{\\textrm{op}}=\\sup\\{\\|Tx\\|_{\\mathcal{H}} : \\|x\\|_{\\mathcal{H}}=1\\}.\\]"
          }
          By <strong>self-adjoint</strong> we mean that{" "}
          {"\\(\\langle Tx,y\\rangle=\\langle x,Ty\\rangle\\)"} and by{" "}
          <strong>positive</strong> that {"\\(\\langle Tx,x\\rangle\\geq 0\\)"},
          for all {"\\(x,y\\in\\mathcal{H}\\)"}.
        </p>
        <p>
          Self-adjoint {"\\(T\\)"} admit a (continuous!){" "}
          <strong>functional calculus</strong>, defining{" "}
          {"\\(f(T)\\in B(\\mathcal{H})\\)"} for any {"\\(f\\)"} continuous
          (with respect to the maximum norm) on the spectrum{" "}
          {"\\(\\sigma(T)\\)"}. We will only need{" "}
          {"\\(f(x)=|x|,\\sqrt{x},x\\log x\\)"}. If {"\\(T\\)"} is also compact,
          then it admits a <strong>spectral decomposition</strong>
          {
            "\\[T=\\sum_{\\lambda\\in\\sigma(T)} \\lambda \\ket{\\lambda}\\bra{\\lambda}.\\]"
          }
          Here, we also introduce <strong>Dirac notation</strong>, where{" "}
          {"\\(\\ket{\\lambda}\\)"} is a vector and{" "}
          {"\\(\\bra{\\lambda}=\\langle\\cdot,\\lambda\\rangle\\)"} is the dual
          (so that{" "}
          {
            "\\(\\ket{\\lambda}\\bra{\\lambda}=\\langle\\cdot,\\lambda\\rangle\\lambda\\)"
          }{" "}
          is the projection onto {"\\(\\lambda=\\ket{\\lambda}\\)"}).
        </p>
        <p>
          We call {"\\(T\\)"} <strong>trace-class</strong> if its trace is
          finite and independent of the orthonormal basis {"\\(\\{e_i\\}\\)"}:
          {"\\[\\operatorname{tr} T= \\sum_i \\langle Te_i,e_i\\rangle.\\]"}
          The set of all such operators is {"\\(B_1(\\mathcal{H})\\)"} (which is
          Banach under {"\\(\\|T\\|_1=\\operatorname{tr}|T|\\)"}). For{" "}
          {"\\(p\\in [1,\\infty)\\)"}, we then define the{" "}
          <strong>
            Schatten {"\\(p\\)"}
            -norm
          </strong>{" "}
          {"\\(\\|T\\|_p=(\\operatorname{tr} |T|^p)^{1/p}\\)"}. Essentially by
          definition, the Schatten {"\\(p\\)"}-norm is the {"\\(\\ell^p\\)"}{" "}
          norm on the singular values {"\\(\\sigma(|T|)\\)"} (if {"\\(T\\)"} is
          compact).
        </p>
        <p>
          Now, define the set of <strong>quantum states</strong>{" "}
          {"\\(S(\\mathcal{H})\\subseteq B_1(\\mathcal{H})\\)"} to be positive
          self-adjoint operators with unit trace. Note we may identify unit
          vectors {"\\(\\ket{x}\\in\\mathcal{H}\\)"} with states{" "}
          {"\\(\\ket{x}\\bra{x}\\in S(\\mathcal{H})\\)"}, called{" "}
          <strong>pure states</strong>, the set of which is{" "}
          {"\\(S_1(\\mathcal{H})\\)"}. Also establish two Hilbert spaces: Alice{" "}
          {"\\(\\mathcal{A}\\)"} and Bob {"\\(\\mathcal{B}\\)"}.
        </p>
        <p>
          At last we get to <strong>quantum channels</strong>,
          completely-positive trace preserving (CPTP) maps{" "}
          {"\\(\\mathcal{N}\\colon S(\\mathcal{A})\\to S(\\mathcal{B})\\)"}.{" "}
          <strong>Trace preserving</strong> means{" "}
          {"\\(\\operatorname{tr} \\mathcal{N}(\\rho)=1\\)"} for all states{" "}
          {"\\(\\rho\\)"}, and <strong>completely-positive</strong> means{" "}
          {"\\(\\mathcal{N}\\otimes\\mathbb{1}_n\\geq 0\\)"} for all integers{" "}
          {"\\(n\\geq 0\\)"} (note {"\\(n=0\\)"} means {"\\(\\mathcal{N}\\)"}{" "}
          alone is positive!). These two conditions reasonably describe sending
          a state from one place to another. We want to output states, so trace
          must be preserved. We also want positivity not just in isolation, but
          also whenever we append some extra operators acting on ancillary
          spaces. We'll also write{" "}
          {"\\(\\mathcal{N}^{\\mathcal{A}\\to\\mathcal{B}}\\)"} as shorthand to
          specify a channel's input and output spaces. All channels have a
          convenient operational interpretation.
        </p>
        <Theorem
          name="Steinspring Dilation"
          statement="Let \(\mathcal{N}\colon  S(\mathcal{A})\to S(\mathcal{B})\) be a channel. Then, there exists some larger Hilbert space \(\mathcal{E}\) and an isometry \(V\colon \mathcal{A}\to\mathcal{B}\otimes\mathcal{E}\) such that 
          \[
          \mathcal{N}(\rho)=\operatorname{tr}_{\mathcal{E}} (V\rho V^\ast).	
          \]"
        />
        <p>
          {" "}
          When Alice sends a state to Bob, there may be some noise involved,
          since the state interacts with its environment {"\\(\\mathcal{E}\\)"}.
          Of course, we do not have access to the environment, and so must trace
          it out. As a reminder, the <strong>partial trace</strong>{" "}
          {
            "\\(\\operatorname{tr}_{\\mathcal{E}}\\colon B_1(\\mathcal{B}\\otimes\\mathcal{E})\\to B_1(\\mathcal{B})\\)"
          }{" "}
          is the unique linear operator satisfying{" "}
          {
            "\\(\\operatorname{tr}_{\\mathcal{E}}(T\\otimes S)=\\operatorname{tr}(S)R\\)."
          }
        </p>
        <Theorem
          name="Schmidt Decomposition"
          statement="Let \(x\in\mathcal{A}\otimes\mathcal{B}\). Then, there exist orthonormal bases \(\{e_i\}\) and \(\{f_i\}\), respectively of \(\mathcal{A}\) and \(\mathcal{B}\), along with scalars \(\lambda_i\geq 0\) so 
          \[
            x=\sum_i \lambda_i e_i\otimes f_i.
          \]"
        />
        <p>
          Now that we have quantum channels, the most straightforward
          generalization of their capacity, as inspired by classical information
          theory, is to ask how Alice and Bob can use a quantum channel to
          communicate classical information (such as by encoding strings via the
          outcomes of measurements on quantum states). We'll focus on this
          definition of capacity, but we should note that several other notions
          of capacity exist too. And henceforth, we'll assume{" "}
          {"\\(\\mathcal{A}\\)"} and {"\\(\\mathcal{B}\\)"} are
          finite-dimensional for simplicity (but in principle nothing is wrong
          with infinite-dimensional channels!).
        </p>
        <p>
          To send these classical messages, we'll have to use a{" "}
          <strong>positive operator-valued measurement (POVM)</strong>,
          comprising a set {"\\(\\{E_i\\}\\)"} of positive operators such that{" "}
          {"\\(\\mathbb{1}=\\sum_i E_i\\)"}. Say Alice wishes to send some
          message in {"\\(X\\)"}. To each element of its support {"\\(x\\)"} she
          may associate a state {"\\(\\rho(x)\\)"}, sent through her quantum
          channel {"\\(\\mathcal{N}\\)"} with probability {"\\(p_X(x)\\)"}.
          Equivalently, Bob receives the ensemble{" "}
          {"\\(\\rho(X)=\\sum_i p_X(x)\\rho(x)\\)"}.
        </p>
        <p>
          On his end, to recover the classical information Bob may construct a
          POVM {"\\(E\\)"}, where each element {"\\(E(y)\\)"} is associated with
          some classical information {"\\(y\\)"}. By performing the measurement{" "}
          {"\\(E\\mathcal{N}(\\rho(X))\\)"}, we interpret the analogue of Bob's
          classical distribution {"\\(Y\\)"} to be the distribution whose
          outcomes are {"\\(y\\)"} with probabilities{" "}
          {"\\(p_{Y_E}(y)=\\operatorname{tr}(E(y)\\mathcal{N}(\\rho(X)))\\)"}.
          The conditional distribution {"\\(Y_E|X=x\\)"} has masses{" "}
          {"\\(p(y|x)=\\operatorname{tr}(E(y)\\mathcal{N}(\\rho(x)))\\)"}.
        </p>
        <p>
          Unlike the classical case, Bob's distribution does not solely depend
          on Alice's distribution {"\\(X\\)"} and the channel{" "}
          {"\\(\\mathcal{N}\\)"}. Instead, Bob now gets to decide which POVM he
          uses, hence our labelling of his distribution by {"\\(Y_E\\)"}. With
          this in mind, we define the <strong>accessible information </strong>{" "}
          of {"\\(\\rho(X)\\)"} by
          {"\\[I(\\rho(X))=\\sup_E I(X:Y_E).\\]"}
        </p>
        <p>
          This quantity is not at all easy to compute. However, there is a
          concrete bound in terms of the <strong>von Neumann entropy</strong>{" "}
          {"\\(S(\\rho)=-\\operatorname{tr}\\rho\\log\\rho\\)"} of a state{" "}
          {"\\(\\rho\\)"}. For the ensemble{" "}
          {"\\(\\rho(X)=\\sum p_X(x)\\rho(x)\\)"}, its{" "}
          <strong>Holevo chi</strong> is
          {"\\[\\chi(\\rho(X))=S(\\rho(X))-\\sum_x p_X(x) S(\\rho(x))\\]"}
          and the <strong>Holevo capacity</strong> of our generic quantum
          channel {"\\(\\mathcal{N}\\)"} is
          {
            "\\[\\chi(\\mathcal{N})=\\sup_{\\rho} \\chi(\\mathcal{N}(\\rho)).\\]"
          }
        </p>
        <Theorem
          name="Holevo"
          statement="For every ensemble \(\rho(X)\) and quantum channel \(\mathcal{N}\), \(I(\rho(X))\leq \chi(\mathcal{N}(\rho(X)))\)."
        />
        <p>
          The name Holevo capacity is suggestive. Indeed, we say{" "}
          {"\\(\\mathcal{N}\\)"} communicates classically at a rate {"\\(R\\)"}{" "}
          if associated with Bob's {"\\(n\\)"}-symbol measurement outcomes in{" "}
          {"\\(Y\\)"} are {"\\(2^{nR}\\)"} {"\\(n\\)"}
          -symbol codewords in {"\\(X\\)"} (which Alice sends as {"\\(n\\)"}
          -register quantum states). We say {"\\(R\\)"} is{" "}
          <strong>achievable</strong> if it may be accomplished with
          asymptotically vanishing error. The{" "}
          <strong>classical capacity</strong> of the channel{" "}
          {"\\(C(\\mathcal{N})\\)"} is the supremum over achievable rates with
          respect to all input distributions {"\\(X\\)"}.
        </p>
        <Theorem
          name="Holevo-Schumacher-Westmoreland"
          statement="For a quantum channel \(\mathcal{N}\), its classical capacity is
          \[
            C(\mathcal{N})=\lim_{n\to\infty}\frac{1}{n}\chi(\mathcal{N}^{\otimes n}).
          \]"
        />
        <p>
          Additivity of the Holevo capacity, the property that all quantum
          channels {"\\(\\mathcal{N},\\mathcal{S}\\)"} satisfy
          {
            "\\[\\chi(\\mathcal{N}\\otimes\\mathcal{S})=\\chi(\\mathcal{N})+\\chi(\\mathcal{S}),\\]"
          }
          would indeed be wonderful if true. But is it? Well, unfortunately I
          already spilled the beans in the introduction. We know it isn't, and
          this makes computing capacity entirely intractable. The Holevi chi may
          be computable for small tensor powers, but taking the limit is out of
          question.
        </p>
        <p>
          The quantity we'll focus on though is not actually the capacity, but
          rather the <strong>minimum output {"\\(p\\)"}-entropy</strong>
          {
            "\\[S_p^{\\textrm{min}}(\\mathcal{N})=\\inf_{x\\in S_1(\\mathcal{A})}S_p(\\mathcal{N}(\\ket{x}\\bra{x})),\\]"
          }
          where we have the <strong>Rényi {"\\(p\\)"}-entropy</strong>
          {
            "\\[S_p(\\rho)=\\frac{1}{1-p}\\log\\operatorname{tr} (\\rho^p).\\]"
          }{" "}
          Here, {"\\(p\\in (0,\\infty)\\)"} and the case {"\\(p=1\\)"} is given
          by the limit, where {"\\(S_1=S\\)"}.
        </p>
        <p>
          This is a quantity related to channels, and so it makes sense to speak
          of its additivity too! For two channels{" "}
          {"\\(\\mathcal{N},\\mathcal{S}\\)"}, is it always true that
          {
            "\\[S_p^{\\textrm{min}}(\\mathcal{N}\\otimes\\mathcal{S})=S_p^{\\textrm{min}}(\\mathcal{N})+S_p^{\\textrm{min}}(\\mathcal{S})?\\]"
          }
          The answer here too is no. And in fact, addivitity of the Holevo
          capacity is equivalent to additivity of the minimum output 1-entropy
          (i.e. von Neumann entropy). In the context of channel additivity
          research, minimum output entropies are thus the main focus, since they
          have more immediate mathematical structure due to their close
          connection with matrix norms.
        </p>
        <p>
          And thus begins our foray into asymptotic geometric analysis, which
          starts with some convex analysis. Let{" "}
          {"\\(K\\subseteq \\mathbb{C}^n\\)"}. We say {"\\(K\\)"} is a{" "}
          <strong>convex body</strong> if it is convex, compact, and has
          non-empty interior. If we also have{" "}
          {"\\(\\exp(i\\vartheta)x\\in K\\)"} for all{" "}
          {"\\(\\vartheta\\in\\R\\)"}, and that {"\\(0\\in K\\)"}, then we say{" "}
          {"\\(K\\)"} is <strong>circled</strong>.
        </p>
        <Theorem statement="Circled convex bodies in \(\mathbb{C}^n\) exactly correspond to norms on \(\mathbb{C}^n\)." />
        <Proof
          proof="Suppose we have a norm \(\|\cdot\|_K\) over \(\mathbb{C}^n\). Let \(K\) be the closed unit disk with respect to this norm, which is a circled convex body.

          Now, say we have a circled convex body \(K\). For \(0\neq x\in\mathbb{C}^n\) define
          \[
            \|x\|_K=\inf\{t >0:x\in tK\},
          \]
          which is clearly positive. At the origin, define the above to vanish. For any scalar \(\lambda\in\mathbb{C}\) we have
          \[
          \|\lambda x\|_K=\inf\{t>0: \lambda x\in tK\}=\inf\{t>0:x\in (t/\lambda)K\}.
          \]
          Find some phase \(\vartheta\) so \(\exp(i\vartheta)\lambda=\eta>0\). Since \(K\) is circled we know \((1/\eta)K=(1/\lambda)K\). Now, 
          \[
            \inf\{t>0:x\in (t/\lambda)K\}=\inf\{t>0:x\in (t/\eta)K\}=\eta\|x\|_K.
          \]
          Since \(\eta=|\lambda|\), we have homogeneity. For a second \(0\neq y\in\mathbb{C}^n\), let \(s>0\) be such that \(x/s\in K\), with \(t\) defined similarly for \(y\). By convexity
          \[
            \frac{s}{s+t}\frac{x}{s}+\frac{t}{s+t}\frac{y}{t}=\frac{x+y}{s+t}\in K.
          \]
          We thus have
          \[
            \left\|\frac{x+y}{s+t}\right\|_K\leq 1\Longrightarrow \|x+y\|_K\leq s+t\leq \|x\|_K+\|y\|_K,
          \]
          the desired triangle inequality. Altogether we see \(\|\cdot\|_K\) is a norm."
        />
        <p>
          This norm is closely related to the Minkowski functional (actually, it
          is precisely the Minkowski functional, and it turns out being a
          circled convex body is the necessary and sufficient condition for the
          functional to be a norm).
        </p>
        <p>
          Now, let {"\\(G\\)"} be a compact group. Given any Borel{" "}
          {"\\(S\\subseteq G\\)"} and {"\\(g\\in G\\)"}, we define the{" "}
          <strong>left-translation</strong> {"\\(gS\\)"}. Now, there exists a
          unique probability measure defined on the Borel sets of {"\\(G\\)"}{" "}
          which is left-translation invariant and regular. We call this the{" "}
          <strong>Haar measure</strong> of {"\\(G\\)"}.
        </p>
        <p>
          The groups we will most often work with are the{" "}
          <strong>unitary group</strong> and the{" "}
          <strong>orthogonal group</strong>, denoted respectively by{" "}
          {"\\(\\operatorname{U}(n)\\)"} and {"\\(\\operatorname{O}(n)\\)"}, and
          their <strong>special</strong> counterparts{" "}
          {"\\(\\operatorname{SU}(n)\\)"} and {"\\(\\operatorname{SO}(n)\\)"}.
          Also, when we speak of a{" "}
          <strong>random {"\\(k\\)"}-dimensional subspace</strong>{" "}
          {"\\(E\\subseteq\\mathbb{C}^n\\)"}, we mean taking a Haar-distributed
          unitary {"\\(U\\in\\operatorname{U}(n)\\)"} and setting{" "}
          {"\\(E=U\\imath(\\mathbb{C}^k)\\)"}, where{" "}
          {"\\(\\imath(\\mathbb{C}^k)\\subseteq\\mathbb{C}^n\\)"} is inclusion.
          There's a nice connection between the Haar measure and probability on
          the sphere.
        </p>
        <Theorem
          statement="Let \(\mu\) be the Haar probability measure on \(\operatorname{O}(n)\). For any fixed \(x\in S^{n-1}\) define the map
\[
	\alpha\colon\operatorname{O}(n)\to S^{n-1}\textrm{ by }U\mapsto Ux.
\]
Define the pushforward \(\alpha_{\sharp}\mu=\sigma\). Then, \(\sigma\) is precisely the uniform distribution on the sphere."
        />
        <Proof
          proof="Let \(A\) be some Borel set in \(S^{n-1}\). By definition, we have
          \[
            \sigma(A)=\mu(\alpha^{-1}(A))=\mu\{U\in \operatorname{O}(n):\alpha(U)\in A\}.
          \]
          Without loss of generality we need only consider \(A\) to be of the form \(B(x,\varepsilon)\in S^{n-1}\) for some \(x\in S^{n-1}\) and \(\varepsilon>0\). Since \(\alpha\) is a surjection we may find some \(U\in\operatorname{O}(n)\) and \(x_0\in S^{n-1}\) so \(Ux_0=x\), meaning
          \[
            B(x,\varepsilon)\cap S^{n-1}=\{Vx_0: V\in \operatorname{O}(n)\textrm{ and }|Vx_0-Ux_0|<\varepsilon\}
          \]
          and so
          \[
            \alpha^{-1}(B(x,\varepsilon)\cap S^{n-1})=\{V\in\operatorname{O}(n):|Vx_0-Vx|<\varepsilon\}.
          \]
          Consider as well some other \(\tilde{x}\in S^{n-1}\), and find some \(\tilde{U}\in\operatorname{O}(n)\) so \(\tilde{x}=\tilde{U}x_0\). Witness that
          \[\begin{aligned}
            \tilde{U}U^{-1}	\alpha^{-1}(B(x,\varepsilon)\cap S^{n-1}) &= \{\tilde{U}U^{-1}V\in\operatorname{O}(n):|Vx_0-Vx|<\varepsilon\} \\
            &=\{W\in\operatorname{O}(n) : |Wx_0- \tilde{U}U^{-1}Ux_0|<\varepsilon\} \\
            &=\{W\in\operatorname{O}(n) : |Wx_0- \tilde{U}x_0|<\varepsilon\} \\
            &=\alpha^{-1}(B(y,\varepsilon)\cap S^{n-1}).
          \end{aligned}\]
          Since \(\mu\) is translation invariant, this shows us
          \[
            \mu(\alpha^{-1}(B(x,\varepsilon)\cap S^{n-1}))=\mu(\alpha^{-1}(B(y,\varepsilon)\cap S^{n-1})),
          \]
          which forces \(\sigma\) to be the uniform distribution. "
        />
        <p>
          Therefore, the Haar measure on a matrix group induces a uniform
          distribution on a sphere. This same argument will work for the unitary
          group and give a uniform measure on the to-be-defined complex sphere
          too.
        </p>
        <p>
          Let's move back to geometry. Define the inradius of a circled convex
          body {"\\(K\\)"} by
          {"\\[\\operatorname{inrad}K=\\sup\\{r>0:B(0,r)\\subseteq K\\}\\]"}
          where {"\\(B(0,r)\\)"} is a ball of radius {"\\(r\\)"} centred at the
          origin. And with {"\\(\\sigma\\)"} being the uniform probability
          distribution on the sphere {"\\(S^{n-1}\\)"}, define the{" "}
          <strong>mean width</strong> of {"\\(K\\)"} by
          {"\\[w(K)=\\int_{S^{n-1}}\\|x\\|_K\\,\\mathrm{d}\\sigma(x).\\]"}
        </p>
        <Theorem statement="For all circled convex bodies \(K\), \(w(K)\operatorname{inrad}(K)\leq 1\)." />
        <Proof
          proof="We will first provide an alternative definition of the inradius. First, let \(r>0\) be such that \(B(0,r)\subseteq K\). This means that for all \(x\in \mathbb{C}^n\) such that \(|x|<1\) we have \(\|x\|_K\leq 1\). Now, let \(0\neq x\in\mathbb{C}^n\) be arbitrary, and \(\varepsilon>0\). Then,
          \[
            \left|\frac{xr}{(1+\varepsilon)|x|}\right|<r\textrm{ and so }\left\|\frac{xr}{(1+\varepsilon)|x|}\right\|_K\leq 1.
          \]
          Rearranging this we get \(r/(1+\varepsilon)\leq |x|/\|x\|_K\). Since \(\varepsilon\) was arbitrary, this means \(|x|/\|x\|_K\geq r\). 
          
          On the other hand, say we have some \(r\) such that \(|x|/\|x\|_K\geq r\) for all \(0\neq x\in\mathbb{C}^n\). Then, for all \(0\neq x\in B(0,r)\) we have
          \[
            r\leq \frac{|x|}{\|x\|_K}<\frac{r}{\|x\|_K},
          \]
          and thus \(\|x\|_K\leq r\). In particular, \(x\in K\). So, 
          \[
            \operatorname{inrad}K=\sup\left\{r>0:\frac{|x|}{\|x\|_K}\geq r\textrm{ for all }x\neq 0\right\}.
          \]
          
          From here, we observe that if \(r\) is such that \(|x|/\|x\|_K\geq r\) for all \(0\neq x\in\mathbb{C}^n\), this will in particular hold for \(x\in S^{n-1}\) where \(1/\|x\|_K\geq r\). Therefore,
          \[
            \frac{1}{\sup\{\|y\|_K :y\in S^{n-1}\}}\geq \operatorname{inrad}K.
          \]
          Denote the supremum above by \(L\). Going the other way, for all \(0\neq x\in\mathbb{C}^{n-1}\) we have
          \[
            \frac{|x|}{\|x\|_K}=\frac{1}{\left\|\frac{x}{|x|}\right\|_K}\geq \frac{1}{L}
          \]
          Optimizing over all \(x\), we see that the inradius and \(1/L\) are actually equal. Equivalently,
          \[
            \left(\sup\{\|y\|_K :y\in S^{n-1}\}\right)\operatorname{inrad}K=1.
          \]
          However, it is clear to see that \(L\geq w(K)\), giving the desired inequality."
        />
        <p>
          A common theme in asymptotic geometric analysis is to provide an
          concentration inequality for Lipschitz functions on a convex body,
          which vanish as the dimension of the body grows. And now, we will show
          some results of this type. We will also introduce the notation{" "}
          {"\\(S^{n-1}_{\\mathbb{C}}\\)"} for the unit sphere in{" "}
          {"\\(\\mathbb{C}^n\\)"}. Since{" "}
          {"\\(\\mathbb{C}^n\\cong\\mathbb{R}^{2n}\\)"}, there will be lots of
          doubling and halving as we move between "which" sphere we are
          considering.
        </p>
        <Theorem
          statement="Let \(K\subseteq\mathbb{C}^n\) be a circled convex body, and define 
\[
L=\sup\{\|y\|_K :y\in S^{n-1}\}.
\]
Then, \(\|\cdot\|_K\) is \(L\)-Lipschitz."
        />
        <Proof
          proof="Consider the function 
          \[
            f\colon S^{n-1}_{\mathbb{C}}\to\R\textrm{ by }x\mapsto \|x\|_K
          \]
          and define
          \[
            b=\sup\{f(x):x\in S_{\mathbb{C}}^{n-1}\}.
          \]
          Expanding the definition of the norm, we get
          \[
            L=\sup_{x\in S_{\mathbb{C}}^{n-1}} \inf\{t>0: x\in tK\}=\inf\{t>0: B(0,1)\subseteq t K\}.
          \]	
          Now, take \(x,y\in S_{\mathbb{C}}^{n-1}\) and use the reverse triangle inequality to get
          \[
            |f(x)-f(y)|=\left| \|x\|_K-\|y\|_K \right| \leq \|x-y\|_K=\inf\{t>0 : x-y\in tK\}.
          \]
          We divide through both sides and normalize this to unit vector, finding
          \[
            \inf\{t>0 : x-y\in tK\}=\inf\left\{ t>0: \frac{x-y}{|x-y|}\in \frac{t}{|x-y|}K\right\}=L|x-y|.
          \]
          That is, \(f\) is \(L\)-Lipschitz."
        />
        <p>
          A function {"\\(f\\colon S_{\\mathbb{C}}^{n-1}\\to\\mathbb{C}\\)"} is{" "}
          <strong>circled</strong> if {"\\(f(x)=f(e^{i\\vartheta}x)\\)"} for all{" "}
          {"\\(\\vartheta\\in\\mathbb{R}\\)"} and {"\\(x\\in S^{n-1}\\)"}. And,
          for a random variable {"\\(X\\)"} we say {"\\(m\\)"} is a{" "}
          <strong>central value</strong> if {"\\(m=\\mathbb{E}[X]\\)"} or{" "}
          {"\\(1/4\\leq\\mathbb{P}[X\\leq m]\\leq 3/4\\)"}. These specific
          quantiles are nothing special. Changing them merely affects the
          constants we will henceforth see.
        </p>
        <Theorem
          statement="Let \(f\colon S^{n-1}\to\R\) be an \(L\)-Lipschitz function and \(\sigma\) the uniform probability measure on \(S^{n-1}\). With \(\mu=\mathbb{E}_{x\sim\sigma} f(x)\), for any \(\varepsilon>0\) we have
          \[
            \mathbb{P}\left[f\geq \mu+\varepsilon\right]\leq \exp\left(-\frac{n\varepsilon^2}{4L^2}\right)
          \]
          and \(|m-\mu|\leq n^{-1/2}\sqrt{2\log 2}\) for any central value \(m\) of \(f\)."
          name="Lévy"
        />
        <Theorem
          statement="Let \(f\colon S_{\mathbb{C}}^{n-1}\to\R\) be a \(1\)-Lipschitz circled function and \(U\in \operatorname{SU}(n)\) be a Haar-distributed unitary. Then, we have absolute constants \(A,C\) so for any distinct \(x,y\in S^{n-1}\) and \(\lambda>0\) we have
          \[
            \mathbb{P}[f(Ux)-f(Uy)>\lambda]\leq \exp\left(-\frac{(n-1)\lambda^2}{2|x-y|^2}\right).
          \]"
        />
        <Proof
          proof="Start by finding \(\vartheta\) so \(\langle x,e^{i\vartheta}y\rangle\geq 0\), and without loss of generality set \(y\leftarrow e^{i\vartheta}y\), which we may due as \(U\) is linear and \(f\) is circled. We will also assume \(y\neq x\). 

Note that we now have
\[
	\langle x-y,x+y\rangle=\langle x,x\rangle-\langle y,y\rangle =0,
\]
since \(|x|=1=|y|\) and \(\langle x,y\rangle\in\R\). Define now \(z=(x+y)/2\) and \(w=(x-y)/2\). Set \(\beta=|w|\) and define \(w'=w/\beta\). Take the outcome \(u=Uz\), and note that \(Uw'\) has the uniform distribution \(\sigma\) on \(S_{u^\perp}=S_{\mathbb{C}}^{n-1}\cap u^\perp\) when conditioned on \(u\) (since \(U\) is an isometry).

We have 
\[
Ux=u+\beta Uw'\textrm{ and }Uy=u-\beta Uw'
\]
by construction. So, define 
\[
f_u\colon S_{u^\perp}\to\R\textrm{ by }v\mapsto f(u+\beta v)-f(u-\beta v),
\]
and witness \(f_u\) has the same (conditional!) distribution as \(f(Ux)-f(Uy)\). 

Recalling \(f\) is \(1\)-Lipschitz, we see
\[\begin{aligned}
|f_u(a)-f_u(b)| & = |f(u+\beta a)-f(u-\beta a)-f(u+\beta b)+f(u-\beta b)| \\
&\leq  |f(u+\beta a)-f(u+\beta b)|+|f(u-\beta a)-f(u-\beta b)| \\
&\leq |u+\beta a-u-\beta b|+|u-\beta a -u+\beta b| \\
&= 2\beta |a-b|,
\end{aligned}\]
or that \(f_u\) is \(2\beta\)-Lipschitz. Since \(S_{u^\perp}=-S_{u^\perp}\) we have
\[\begin{aligned}
	\mathbb{E}_{v\sim\sigma} f_u(v) &=\int_{S_{u^\perp}} f_u(u+\beta v)-f(u-\beta v)\,\mathrm{d}\sigma(v) \\
	&= \int_{S_{u^\perp}} f_u(u+\beta v)\,\mathrm{d}\sigma(v)-\int_{-S_{u^\perp}} f_u(u-\beta v)\,\mathrm{d}\sigma(v) \\
	&= \int_{S_{u^\perp}} f_u(u+\beta v)\,\mathrm{d}\sigma(v)-\int_{S_{u^\perp}} f_u(u+\beta v)\,\mathrm{d}\sigma(v) \\
	&= 0.
\end{aligned}\]
We then apply Lévy's lemma (and note that \(S_{\mathbb{C}}^{n-1}\cong S^{2n-2}\), so \(S_{u^\perp}\cong S^{2n-3}\)) and get
\[
	\mathbb{P}\left[(]f(Ux)-f(Uy)>\lambda\right]\leq \exp\left(-\frac{(2n-2)\lambda^2}{8\beta^2}\right),
\]
as a probability conditional on \(u\). We may simplify the fraction to the desired form as \(\beta=|x-y|/2\). We also note that although conditioning on \(u\) was necessary for computing expectations for \(f_u\), the distribution of \(f(Ux)-f(Uy)\) has no material dependence on this outcome. So, the above probability holds unconditionally too."
        />
        <p>
          We can now state our preliminary version of Dvoretzky's theorem,
          whence the final form will follow. We will not actually prove it, but
          instead note that the above theorem is an ingredient thereof and its
          proof illustrates the general flavour. To give the full details would
          involve a digression on Riemannian geometry and metric entropies,
          which I fear this already-too-long blog post cannot contain. With this
          all said, let us take {"\\(f\\colon X\\to\\mathbb{R}\\)"} and{" "}
          {"\\(A\\subseteq X\\)"} (here, {"\\(X\\)"} is arbitrary). For{" "}
          {"\\(\\mu\\in\\R\\)"}, we define the <strong>oscillation</strong> of{" "}
          {"\\(f\\)"} about {"\\(\\mu\\)"} on {"\\(A\\)"} by
          {"\\[\\operatorname{osc}(f,A,\\mu)=\\sup_{x\\in A}|f(x)-\\mu|.\\]"}
        </p>
        <Theorem
          statement="There exist universal constants \(c,c'>0\) such that the following always holds. Let \(f\colon S_{\mathbb{C}}^{n-1}\to\R\) be an \(L\)-Lipschitz circled function and \(\mu\) be any central value of \(f\) with respect to the uniform distribution on the sphere \(\sigma\). Let \(0<\varepsilon<1\) and \(k\leq cn\varepsilon^2/L^2\). Then, for any random \(k\)-dimensional subspace \(E\subseteq\mathbb{C}^n\) we have
          \[
            \mathbb{P}\left[\operatorname{osc}(f,S_E,\mu)\leq \varepsilon\right]>1-\exp(-c'n\varepsilon^2),
          \]
          where \(S_E=S_{\mathbb{C}}^{n-1}\cap E\)."
          name="Dvoretzky"
        />
        <p>
          At this time, we may question where all the convexity went. We have
          only been speaking of Lipschitz functions and spheres and random
          subspaces. But fret not, for our earlier work was not in vain! It will
          now return in the geometric version of Dvoretzky's theorem. For this,
          we define the <strong>Dvoretzky dimension</strong> of a circled convex
          body {"\\(K\\subseteq\\mathbb{C}^n\\)"} is
          {"\\[k_\\ast(K)=\\left(w(K)\\operatorname{inrad}(K)\\right)^2n.\\]"}
        </p>
        <Theorem
          statement="There exist universal constants \(c,c'>0\) such that the following always holds. Take \(K\subseteq\mathbb{C}^n\) to be a circled convex body. Fix some \(\varepsilon\in (0,1]\) and define \(k=c\varepsilon^2 k_\ast(K)\). Then, any random subspace \(E\subseteq\mathbb{C}^n\) with \(\dim E\leq k\) satisfies
          \[
            (1-\varepsilon)w(K)|x|\leq \|x\|_K\leq (1+\varepsilon)w(K)|x|
          \]
          for all \(x\in E\) with probability at least \(1-\exp(-c'\varepsilon^2 k_\ast(K))\)."
          name="Dvoretzky-Milman"
        />
        <Proof
          proof="Define \(S_E= S_{\mathbb{C}}^{n-1}\cap E\) and consider the function 
          \[
            f\colon S_E\to\mathbb{R}\textrm{ by }x\mapsto \|x\|_K.
          \]
          Immediately from the fact that convex body norms are Lipschitz we get that \(f\) is \(L\)-Lipschitz with
          \[
            L=\sup\{f(x):x\in S_{\mathbb{C}}^{n-1}\}.
          \]
          Also, note that \(f\) is clearly circled.
          
          Recall as well from our work on inradii and mean widths that \(L=1/\operatorname{inrad}K\), allowing us to rewrite the Dvoretzky dimension as
          \[
            k_\ast(K)=\left(\frac{w(K)}{L}\right)^2 n.
          \]
          We then defer to our previous incarnation of Dvoretzky's theorem, stealing its magical constants \(c\) and \(c'\) to probabilistically bound \(\operatorname{osc}(f,S_E,w(K))\leq \varepsilon w(K)\) as being no less likely than \(1-\exp(-c'n(\varepsilon w(K))^2)\) for appropriate \(\varepsilon\).
          
          Recalling the definition of oscillation, we have with high probability that
          \[
          \sup_{x\in S_E}|\|x\|_K-w(K)|\leq \varepsilon w(K).
          \]
          We may escape unit sphere by normalizing any \(x\in E\), and so we are done."
        />
        <p>
          One way of interpreting this theorem is by saying that convex bodies
          are "approximately locally Euclidean" in high enough dimensions, since
          the convex body norm of random subspaces is typically within an
          epsilon of error of the standard Euclidean norm (after scaling by the
          mean width of the body).
        </p>
        <p>
          It is now time for us to hark back to our quantum channels, and see
          how they are in fact connected with subspaces. The implication here
          then is that we can somehow look at sampling random channels as
          similar to sampling random subspaces, and so use this geometric
          version of Dvoretzky's theorem to get bounds on norms related to
          channels. Ideally, this norm will have something to do with our
          minimum output {"\\(p\\)"}-entropies. In fact, it will be the Schatten{" "}
          {"\\(p\\)"}-norm.
        </p>
        <p>
          This will all come with time. Let us start with the first step, and
          consider a channel{" "}
          {"\\(\\mathcal{N}\\colon\\mathcal{A}\\to\\mathcal{B}\\)"} and apply
          Steinspring dilation to obtain its associated environment{" "}
          {"\\(\\mathcal{E}\\)"} and isometry{" "}
          {"\\(V\\colon\\mathcal{A}\\to\\mathcal{B}\\otimes\\mathcal{E}\\)"}.
          Take some pure state {"\\(\\ket{x}\\in\\mathcal{A}\\)"} so that
          {
            "\\[\\mathcal{N}(\\ket{x}\\bra{x})=\\operatorname{tr}_{\\mathcal{E}}(V\\ket{x}\\bra{x}V^\\ast).\\]"
          }
          As {"\\(V\\)"} is an isometry, we know {"\\(V\\ket{x}=\\ket{y}\\)"} is
          still a pure state, and thus admits some Schmidt decomposition
          {"\\[\\ket{y}=\\sum_i \\lambda_i\\ket{e_i}\\otimes\\ket{f_i},\\]"}
          where {"\\(\\ket{e_i}\\)"} and {"\\(\\ket{f_i}\\)"} are respectively
          orthonormal bases for {"\\(\\mathcal{B}\\)"} and{" "}
          {"\\(\\mathcal{E}\\)"}. Tracing out the environment yields
          {
            "\\[\\operatorname{tr}_{\\mathcal{E}}(\\ket{y}\\bra{y}) = \\sum_i \\lambda_i^2\\ket{e_i}\\bra{e_i},\\]"
          }
          and so
          {
            "\\[S_p(\\ket{x}\\bra{x})= \\frac{1}{1-p}\\log\\sum_i\\lambda_i^2.\\]"
          }
          Therefore, the Schmidt coefficients of {"\\(\\ket{x}\\bra{x}\\)"}{" "}
          entirely determine its {"\\(p\\)"}-entropy.
        </p>
        <p>
          Now, {"\\(V\\)"} is an isometry and therefore a bijection onto its
          range{" "}
          {"\\(V(\\mathcal{A})\\subseteq\\mathcal{B}\\otimes\\mathcal{E}\\)"}.
          Importantly, we have an isometric isomorphism between subspaces:{" "}
          {"\\(\\mathcal{A}\\cong V(\\mathcal{A})\\)"}. This allows us to
          uniquely identify {"\\(\\mathcal{N}\\)"} with a subspace of{" "}
          {"\\(\\mathcal{B}\\otimes\\mathcal{E}\\)"}. Furthermore, {"\\(V\\)"}{" "}
          gives a bijection between the units balls {"\\(B(\\mathcal{A})\\)"}{" "}
          and {"\\(B(V(\\mathcal{A}))\\)"}. Recalling that minimum output{" "}
          {"\\(p\\)"}-entropy optimizes over all pure states, we have
          {
            "\\[S_p^{\\textrm{min}}(\\mathcal{N})=\\min_{x\\in B(\\mathcal{A})} S_p(\\ket{x}\\bra{x})=\\min_{y\\in\\mathcal{B}(V(\\mathcal{A}))} S_p(\\ket{y}\\bra{y}).\\]"
          }
        </p>
        <p>
          Our conclusion is that the study of the minimum output {"\\(p\\)"}
          -entropy of {"\\(\\mathcal{N}\\)"} reduces to the study of the Schmidt
          coefficients of pure states in {"\\(V(\\mathcal{A})\\)"}. This goes
          the other way too -- given any subspace{" "}
          {"\\(\\mathcal{V}\\subseteq\\mathcal{B}\\otimes\\mathcal{E}\\)"}, we
          know that there is some isometric isomorphism{" "}
          {"\\(V\\colon\\mathbb{C}^{\\dim\\mathcal{V}}\\to\\mathcal{V}\\)"}, and
          that{" "}
          {
            "\\(\\rho\\mapsto\\operatorname{tr}_{\\mathcal{E}}(V\\rho V^\\ast)\\)"
          }{" "}
          defines a channel{" "}
          {
            "\\(\\mathcal{N}\\colon \\mathbb{C}^{\\dim\\mathcal{V}}\\to\\mathcal{B}\\otimes\\mathcal{E}\\)"
          }
          .
        </p>
        <p>
          We can at least start our final trek: actually showing the
          non-additivity of minimum output {"\\(p\\)"}-entropy (but only for{" "}
          {"\\(p>1\\)"}!). The general approach is to get bounds on individual
          channel output entropies, with some sort of constants that depend on
          the channel size. We then do something similar for a product of
          channels (we will use a channel tensored with its conjugate). After,
          we simply push the dimensions far enough past the bounds to get the
          desired superadditivity. Throughout this, we will see{" "}
          {"\\(\\approx\\)"} used to describe values, and by this we mean
          equality up to some sort of hidden universal constant.
        </p>
        <Theorem
          statement="Let \(\mathcal{N}\) be a quantum channel with associated subspace \(\mathcal{V}\subseteq\mathbb{C}^k\otimes\mathbb{C}^d\). Then, for all \(p>1\) we have
          \[
            S_p^{\textrm{min}}(\mathcal{N})=\frac{2p}{1-p}\log\sup_{\substack{M\in \operatorname{M}_{d}(\mathbb{C})\\
            \|M\|_2=1}} \|M\|_{2p}.
          \]"
        />
        <Proof
          proof="Take any pure state \(\ket{x}\in\mathcal{V}\) and orthonormal bases \(\{\ket{i}\}\) and \(\{\ket{j}\}\) of \(\mathbb{C}^k\) and \(\mathbb{C}^d\), respectively. Write \(\ket{x}=\sum_{i,j}\lambda_{ij}\ket{ij}\) and represent it via the matrix \(M_x=(\lambda_{ij})\). Carelessly pushing around Dirac notation demonstrates
          \[\begin{aligned}
          \operatorname{tr}_{\mathbb{C}^d}\ket{x}\bra{x} &= \operatorname{tr}_{\mathbb{C}^d}\left[\left(\sum_{i,j}\ket{i}\otimes\ket{j}\right)\left(\sum_{i,j}\bar{\lambda}_{ij}\bra{i}\otimes\bra{j}\right)\right] \\
          &=\operatorname{tr}_{\mathbb{C}^d}\left[\sum_{i,j,k,\ell} \lambda_{ij}\bar{\lambda}_{k\ell}\ket{i}\bra{k}\otimes\ket{j}\bra{\ell}\right] \\
          &=\sum_{i,j,k,\ell} \lambda_{ij}\bar{\lambda}_{k\ell}\operatorname{tr}(\ket{j}\bra{\ell})\ket{i}\bra{k} \\
          &=\sum_{i,j,k}\lambda_{ij}\bar{\lambda}_{kj}\ket{i}\bra{k}
          \end{aligned}\]
          due to orthonormality of the bases, linearity of partial trace, and cyclicity of trace. It is then straightforward to verify from here that \(\operatorname{tr}_{\mathbb{C}^d}\ket{x}\bra{x}=M_xM^\ast_x\). Therefore,
          \[\begin{aligned}
            S_p(\operatorname{tr}_{\mathbb{C^d}}\ket{x}\bra{x}) &=\frac{1}{1-p}\log\operatorname{tr} (M_xM_x^\ast)^p\\
            &=\frac{1}{1-p}\log\operatorname{tr} (M_x^\ast M_x)^p\\
            &=\frac{1}{1-p}\log\operatorname{tr} |M_x|^{2p}.
          \end{aligned}\]
          By definition we have \(\|M_x\|_{2p}^{2p}=\operatorname{tr} |M_x|^{2p}\), and so
          \[
            S_p(\operatorname{tr}_{\mathbb{C^d}}\ket{x}\bra{x})=\frac{2p}{1-p}\log \|M_x\|_{2p}.
          \]
          Notice that the \(p\)-entropy is decreasing in the logarithm for \(p>1\), and so
          \[
            S_p^{\textrm{min}}(\mathcal{N})=\frac{2p}{1-p}\log\sup_{x\in B(\mathcal{V})}\|M_x\|_{2p}=\frac{2p}{1-p}\log\sup_{\substack{M\in \mathcal{V}\\
            \|M\|_2=1}} \|M\|_{2p}.
          \]
          The last equality follows as \(x\) is a pure state, it satisfies \(|x|=1\) and so \(\|M_x\|_2=1\) (going from the ``commutative'' Euclidean norm to the ``non-commutative'' Hilbert-Schmidt norm). We make an implicit identification between the space of tensors \(\mathcal{V}\) and space of matrices \(\mathcal{V}\) via \(x\mapsto M_x\). "
        />
        <Theorem
          statement="Let \(B_p^{mn}\subseteq \operatorname{M}_{mn}(\mathbb{C})\) be the unit ball with respect to the Schatten \(p\)-norm. Then, the inradius is
          \[
            \operatorname{inrad} (B_p^{mn})\begin{cases}
            m^{1/2-1/p} & 1\leq p\leq 2 \\
            1 & 2\leq p\leq \infty
            \end{cases}
          \]
          and the mean width is \(w(B_p^{mn}) \approx m^{1/p-1/2}\)."
        />
        <Proof
          proof="We will only deal with the inradius. Recall that Hölder's inequality (for vectors!) tells us that for \(1 \leq p,q,r\leq \infty\) so \(1/p+1/q=1/r\) that
          \[
            \|xy\|_{r}\leq\|x\|_p\|y\|_q.
          \]
          Taking the constant sequence \(y=(1,\dots,1)\) and working in \(\mathbb{C}^m\) (since we may only have up to \(m\) singular values which determine the Schatten norm!) immediately yields
          \[
            \|x\|_r \leq m^{1/r-1/p}\|x\|_p.
          \]
          Take \(r=2\) and from our characterization of the inradius and mean width we have
          \[
            \operatorname{inrad}(B_p^{mn})=\sup\left\{r>0: \frac{\|x\|_2}{\|x\|_p}\geq r\textrm{ for all }x\neq 0\right\}.
          \]
          Whenever \(p\leq 2\), we clearly see from Hölder's inequality that \(\operatorname{inrad}(B_p^{mn})=m^{1/2-1/p}\). 
          
          If \(p\geq 2\) then we do not meet the conditions for the inequality (since with \(r=2\) we have \(q<0\)). However, for all \(1\leq q\leq p\leq \infty\) we have
          \[
            \|x\|_q^p = \left(\sum_i |x_i|^q\right)^{p/q} \geq \sum_i |x_i|^p =\|x\|_p^p.
          \]
          This again extends to Schatten norms, and taking \(q=2\) then similarly allows us to deduce \(\operatorname{inrad}(B_p^{mn})=1\)."
        />
        <Theorem
          statement="Fix \(p>1\). Then, there exist sufficiently large \(k,d\) and some subspace \(\mathcal{V}\subseteq\mathbb{C}^k\otimes\mathbb{C}^d\) such that for the associated channel \(\mathcal{N}\) we have
          \[
            \log k  - c_1(p)\leq S^{\textrm{min}}_p(\mathcal{N})\leq \log k - c_2(p).
          \]
          Here, \(c_1(p)>c_2(p)>0\) are constants depending only on \(p\), and \(\dim\mathcal{V}\approx k^{1/p}d\). "
        />
        <Proof
          proof="Let \(K=B_{2p}^{kd}\) be the Schatten \(2p\)-ball in \(\operatorname{M}_{kd}(\mathbb{C})\), which we know has Dvoretzky dimension
          \[
            k_\ast(K)\approx\begin{cases}
            kd & 1\leq 2p\leq 2 \\
            k^{1/p}d & 2\leq p\leq \infty
            \end{cases}
          \]
          and mean width \(w(K) \approx k^{1/2p-1/2}\). For the dimension, we of course are solely in the latter case since \(p\geq 1\). Therefore, we can apply Dvoretzky's theorem and attain with arbitrarily low failure \(\varepsilon>0\) some subspace \(\mathcal{V}\subseteq\operatorname{M}_{kd}(\mathbb{C})\) of dimension \(m\approx \varepsilon^2 k_\ast(K)\) such that
          \[
            (1-\varepsilon)  k^{1/2p-1/2} \|M\|_2 \leq \|M\|_{2p} \leq (1+\varepsilon)  k^{1/2p-1/2} \|M\|_2
          \]
          for all \(M\in\mathcal{V}\). Note it is here that the dimensions \(k,d\) may need to be pushed very high so that \(m>1\).
          
          We may naturally associate \(\mathcal{V}\) with some subset of \(\mathbb{C}^k\otimes\mathbb{C}^d\), and thus some channel \(\mathcal{N}\). We then have
          \[
            S_p^{\textrm{min}}(\mathcal{N})=\frac{2p}{1-p}\log\sup_{\substack{M\in\mathcal{V}\\
            \|M\|_2=1}} \|M\|_{2p}
          \]
          and so our bounds tell us
          \[
            \frac{2p}{1-p}\log \left((1-\varepsilon) k^{1/2p-1/2} \right)\geq S_p^{\textrm{min}}(\mathcal{N})\geq \frac{2p}{1-p}\log \left((1+\varepsilon) k^{1/2p-1/2} \right),
          \]
          where the supremum is immaterial since \(\|M\|_2=1\) always. Notice too the inequality flips as \(p>1\). We may rewrite this as
          \[
            \log( k ) + \frac{2p}{1-p}\log (1-\varepsilon) \geq  S_p^{\textrm{min}}(\mathcal{N}) \geq \log (k) + \frac{2p}{1-p}\log((1+\varepsilon)).
          \] 
          The \(1\pm\varepsilon\) terms define the constants \(c_1(p)\) and \(c_2(p)\). Though these technically depend on \(\varepsilon\), we do not actually care about the probability of getting such a channel, so any fixed \(\varepsilon\) will work. Setting this constant is exactly how we get \(m\approx k^{1/p}d\)."
        />
        <p>
          This is our single channel bound. The next step is to glue them
          together, and get bounds there! Fortunately, this is much simpler
          since we may involve the conjugate of the channel.
        </p>
        <Theorem
          statement="Let \(\mathcal{V}\subseteq\mathbb{C}^k\otimes\mathbb{C}^d\) have corresponding channel \(\mathcal{N}\) with isometry \(V\colon\mathbb{C}^m\to\mathbb{C}^k\otimes\mathbb{C}^d\), where \(m=\dim \mathcal{V}\). Denote by \(\bar{\mathcal{N}}\) the conjugate channel given by \(\bar{V}\). Then,
          \[
            S_p^{\textrm{min}}(\mathcal{N}\otimes\bar{\mathcal{N}})\leq \frac{p}{1-p}\log\frac{m}{kd}.
          \]"
        />
        <Proof
          proof="Let \(\{e_i\}_{i=1}^m\) form an orthonormal basis for \(\mathcal{V}\). Define \(\bar{\mathcal{V}}=\bar{V}(\mathbb{C}^m)\) and let \(\{\bar{e}_i\}_{i=1}^m\) be the conjugate orthonormal basis of \(\bar{e}_i\). For an arbitrary \(z\in\mathcal{V}\otimes\bar{\mathcal{V}}\), denote by \(\mu_i(z)\) its \(i\)-th largest Schmidt coefficient. Consider now the state
          \[
            x=\frac{1}{\sqrt{m}}\sum_{i=0}^{m-1} e_i\otimes\bar{e}_i,
          \]
          whose maximal Schmidt coefficient is \(\mu_1(x)=\sqrt{m/kd}\). It is also easy to see that \(\mu_1(x)\leq\mu_1(y)\) for all \(y\in\mathcal{V}\otimes\bar{\mathcal{V}}\) (and this is where the conjugacy plays in). Therefore,
          \[
          S_p^{\textrm{min}}(\mathcal{N}\otimes\bar{\mathcal{N}})\leq S_p((\mathcal{N}\otimes\bar{\mathcal{N}})\ket{x}\bra{x})=\frac{p}{1-p}\sum_{i=1}^m \mu^2_i(x)\leq \frac{p}{1-p}\log\frac{m}{kd},
          \]
          as claimed."
        />
        <p>At last, here is our conclusion.</p>
        <Theorem statement="Minimum output \(p\)-entropy is not additive for all \(p>1\)." />
        <Proof
          proof="Start by fixing \(p>1\), and then obtain our single channel \(\mathcal{N}\colon\mathbb{C}^m\to\mathbb{C}^k\) such that
          \[
            S^{\textrm{min}}_p(\mathcal{N})\geq \log k - c(p)
          \]
          for some constant \(c(p)>0\). Without loss of generality assume \(\mathcal{N}\) extends into an ancilliary environment also of dimension \(k\). Involving the conjugate then tells us
          \[
            S_p^{\textrm{min}}(\mathcal{N}\otimes\bar{\mathcal{N}})\leq \frac{p}{1-p}\log\frac{m}{k^2}.
          \]
          However, since \(m\approx k^{1+1/p}\), we simply have
          \[
            S_p^{\textrm{min}}(\mathcal{N}\otimes\bar{\mathcal{N}})\leq \log k + \frac{p}{1-p}c'(p),
          \]
          where \(c'(p)>0\) is some positive constant. So,
          \[\begin{aligned}
          S^{\textrm{min}}_p(\mathcal{N}) + S^{\textrm{min}}_p(\bar{\mathcal{N}}) &\geq 2\log k - 2c(p) \\
          &> \log k  - 2c(p) + \log k - c'(p)\\
          &\geq S_p^{\textrm{min}}(\mathcal{N}\otimes\bar{\mathcal{N}}) + \log k - 2c(p).
          \end{aligned}\]
          Since \(p\) is fixed, we may simply take \(k\) as large as necessary to ensure \(\log k - 2c(p)>0\), and then we have the desired violation of additivity."
        />
        <p>
          The case for {"\\(p=1\\)"} is considerably harder to prove, and is
          equally non-constructive. In fact, no explicit examples exist for even{" "}
          {"\\(1<p\\leq 2\\)"}. My current research is trying to produce such a
          counterexample, which presently involves (painfully) learning some
          representation theory to find good candidate subspaces to search
          through. This is difficult numerically as well, since the relevant
          optimization problems are incredibly non-convex and non-constrained in
          general, so solutions must be found using slow (and perhaps
          stochastic) optimization techniques. A good set of subspaces with lots
          of structure may greatly simplify these problems and make it
          numerically tractable or even analytically resolvable. Free
          probability theory also shows up, as recent work has used it to get
          limits on the dimensions of conjugate channels exhibiting
          superadditivity. But this is all to discuss another time. Thanks for
          reading :^)
        </p>
      </div>
    );
  }
}

export default DvoretzkyChannel;
