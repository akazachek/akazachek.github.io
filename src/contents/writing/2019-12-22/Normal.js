import React, { Component } from "react";
/* environments */
import Theorem from "../../../components/Theorem";
import Proof from "../../../components/Proof";

class Normal extends Component {

  componentDidMount() {
    window.KaTeXRender();
  }

  render() {
    return (
      <div class="postContent">
        <p>
          A few weeks ago I was working through some exercises out of Rudin's{" "}
          <i>Principles of Mathematical Analysis</i> and exercise 4.22 brought
          up normality. This piqued an interest in what a space which is{" "}
          <i>not</i> normal would look like. Searching for non-trivial examples
          brought up the Moore plane, and my understanding of what it is and why
          it is not normal laid in a hazy propinquity. So, I spent some time
          looking through some threads on MSE, Reddit, and other websites, as
          well as some texts like Munkres' <i>Topology</i> to prove it starting
          from the bottom up.
        </p>
        <p>
          First, we must define what a topology is. Given some $X$, we define a 
          <strong> topology</strong> {"$\\mathcal{T}$"} to be a set of subsets of
          $X$ such that
        </p>
        <ol>
          <li>both $X$ and $\varnothing$ are in {"$\\mathcal{T}$"};</li>
          <li>
            the union of any elements of {"$\\mathcal{T}$"} is too an element of{" "}
            {"$\\mathcal{T}$"}; and
          </li>
          <li>
            the finite intersection of any elements of {"$\\mathcal{T}$"} is too
            an element of {"$\\mathcal{T}$"}.
          </li>
        </ol>
        <p style={{ textIndent: "0" }}>
          We then call $X$ a <strong>topological space</strong> once a topology
          is specified. We then say a subset of $X$ is <strong>open</strong> if
          it is an element of {"$\\mathcal{T}$"}. Then, a subset is{" "}
          <strong>closed</strong> if its complement is open.
        </p>
        <p>
          Describing topologies can be particularly difficult as listing an
          infinite amount of sets takes a non-trivial amount of time. Instead,
          to describe a particular topology on $X$ a <strong>basis</strong>{" "}
          {"$\\mathcal{B}$"} is usually provided, which takes as elements
          subsets of $X$ such that
        </p>
        <ol>
          <li>
            for any $x\in X$ there exists some {"$B\\in\\mathcal{B}$"} such that
            $x\in B$; and
          </li>
          <li>
            for any $x\in X$ such that $x$ lies in the intersection two distinct{" "}
            {"$B_1,B_2\\in\\mathcal{B}$"}, there exists some $B_3\subset B_1\cap
            B_2$ such that $x\in B_3$.
          </li>
        </ol>
        <p>
          Then, we define the topology {"$\\mathcal{T}$"} on $X${" "}
          <strong>generated</strong> by {"$\\mathcal{B}$"} by having $U$ be open
          in $X$ if for all $x\in U$ there exists some {"$B\\in\\mathcal{B}$"}{" "}
          such that $x\in B$ and $B\subset U$. Showing that {"$\\mathcal{T}$"}{" "}
          is indeed a topology involves showing that it adheres to the first 3
          conditions listed; the first two are trivial and the third can be
          shown by induction.
        </p>
        <p>
          To more constructively show <i>what</i> is exactly in {"$\\mathcal{T}$"},
          rather than just saying <i>if</i> something is, let {"$\\mathcal{B}$"}{" "}
          generate some topology. Then, given some {"$U\\in\\mathcal{T}$"} note
          that for any $x\in U$ we can choose some {"$B_x\\in\\mathcal{B}$"}{" "}
          such that $x\in B_x\subset U$ by our definition of open. Then,
          {"$$U=\\bigcup_{x\\in U}B_x.$$"}
          Additionally, given that this implies every {"$B\\in\\mathcal{B}$"} is
          in the topology, $B$ is then open and so any union of elements of the
          basis gives another element of the topology. Thus, both sides are
          subsets of each other and so {"$\\mathcal{T}$"} is just every possible
          union of every element of $B$. The notion of open and closed sets
          related to interior and limit points in {"$\\mathbb{R}^n$"} can be
          recovered by taking as a basis every open $n$-ball.
        </p>
        <p>
          This is important because now we can define the object of interest:
          the <strong>Moore plane</strong>. First, consider the upper half of
          the {"$\\mathbb{R}^2$"}-plane,
          {
            "$$\\Gamma=\\left\\{\\left(x,y\\right)\\in\\mathbb{R}^2:y\\geq 0\\right\\}.$$"
          }
          Then, given some $(p,q)\in\Gamma$, we define a local basis at that
          point by various open discs. Namely, if $q\neq0$, then we considered
          every open disc in $\Gamma$ centred at $(p,q)$. If $q=0$, then we
          consider every open disc in $\Gamma$ tangent to the $x$-axis at
          $(p,0)$, but also including the point of tangency. More formally,
          {`$$\\mathcal{B}(p,q)=\\begin{cases}
        \\bigcup\\limits_{0\\,\\lt\\,\\varepsilon\\,\\leq\\, q}\\left\\{(x,y)\\in\\mathbb{R}^2:(x-p)^2+(y-q)^2\\lt\\,\\varepsilon^2\\right\\} & 
        q\\,\\ge\\, 0\\\\ \\bigcup\\limits_{\\varepsilon\\,\\gt\\, 0}\\left\\{p,0\\right\\}\\cup\\left\\{(x,y)\\in\\mathbb{R}^2:(x-p)^2+(y-\\varepsilon)^2\\lt\\,\\varepsilon^2\\right\\} 
        & q=0.\\end{cases}$$`}
        </p>
        <p>
          One can do this for every $(p,q)\in\Gamma$ to find the complete basis.
          Now, we define the entire reason this post exists. We call a space $X${" "}
          <strong>normal</strong> if for any disjoint closed subsets $A$ and
          $B$, there exist disjoint open $U$ and $V$ such that $A\subset U$
          and $B\subset V$. In other words, you can separate $A$ and $B$ by
          neighborhoods.
        </p>
        <p>
          To me this was confusing, because it seems very difficult to imagine
          in a (non-trivial) space. After all, taking {"$\\mathbb{R}^n$"} for
          intuition, it seems absurd that a space could not be normal. However,
          the Moore plane is just so. Now, we will set abound to prove it via
          contradiction (or rather a more tidy contrapositive) beginning with a
          small result on normal spaces, and following with another for a
          particular subset of the rationals.
        </p>
        <Theorem
          no="1"
          statement="
        If $X$ is a normal space, then for any closed $C\subset X$ with an open $U$ such that $C\subset U$, there exists an open $V$ such that
        $$C\subset V\subset\overline{V}\subset U$$
        where $\overline{V}$ is the closure of $V$."
        />
        <Proof
          proof="
        Consider some such $C$ and $U$. We know then $C\cap X\setminus U=\varnothing$, and as $U$ is open $X\setminus U$ is closed. Then, given that $X$ is normal we can find some disjoint open $V\supset C$ and open $W\supset X\setminus U$. Given they are disjoint, we know $V\subset X\setminus W$, and so
        $$C\subset V\subset\overline{V}\subseteq X\setminus W\subset U$$
        as $X\setminus W$ is closed."
        />
        <Theorem
          no="2"
          statement={
            <span>
              The <strong>dyadic rationals</strong>, {"$\\mathbb{Q}_d$"},
              defined by{" "}
              {
                "$$\\mathbb{Q}_d=\\left\\{\\frac{p}{2^q}\\in\\mathbb{Q}:p\\in\\mathbb{Z},q\\in\\mathbb{N}\\right\\}$$"
              }{" "}
              where the naturals include 0, are dense in {"$\\mathbb{R}$"}.
            </span>
          }
        />
        <Proof
          proof="
        We merely need to show every $x\in\mathbb{R}\setminus\mathbb{Q}_d$ is a limit point of $\mathbb{Q}_d$. Let $\varepsilon \gt 0$. Then, there exists some $q\in\mathbb{N}$ such that $2^q\varepsilon\gt 1.$ We know there exists some $p$ such that
        $$p-1\lt 2^qx\lt p$$
        and then we get
        $$2^qx\lt p\lt 2^qx+1\lt 2^q(x+\varepsilon)$$
        meaning $\left|x-\frac{p}{2^q}\right|\lt\varepsilon$. "
        />
        <p>
          Now, we set out to prove a famous result connecting normal spaces and
          continuous functions, using the above subclosure property in its
          construction.
        </p>
        <Theorem
          no="3"
          name="Urysohn"
          statement="
        For any two disjoint closed sets $A$ and $B$ in normal $X$, there exists a continuous mapping $f:X\rightarrow [0,1]$ such that for all $x\in A, f(x)=0$ and for all $x\in B, f(x)=1$."
        />
        <Proof
          proof="
        Let $C_0=A$, and then $U_1=X\setminus B$. We know $C_0\subset U_1$, and so by (1) we can find some subclosure, say $C_{\frac12}$, and then from this some open $U_{\frac12}$ such that
        $$C_0\subset U_{\frac12}\subset C_{\frac12}\subset U_1.$$
        However, we can then repeat this process with $C_0$ and $U_{\frac12}$, and $C_{\frac12}$ and $U_1$, and then again after that, eventually getting the construction
        $$C_0\subset\cdots\subset C_{\frac14}\subset U_{\frac14}\subset\cdots\subset U_{\frac12}\subset C_{\frac12}\subset\cdots\subset U_{\frac34}\subset C_{\frac34}\subset\cdots\subset U_1$$
        where we choose to index by $\mathbb{Q}_d$.\[\]
        Let $(0,1]_d=\mathbb{Q}_d\cap (0,1]$. Then, we define $f:X\rightarrow [0,1]$ by
            $$f(x)=
            \begin{cases}
            1 & x\in B\\
            \inf\left\{r\in (0,1]_d: \left\{x\right\}\subset U_r\right\} & x\notin B. 
            \end{cases}
        $$
        We must define $f$ on $B$ as no element of $B$ will be in any $U_r$. We also see this infimum will return $0$ for any $x\in A$. It stands to show that $f$ is continuous on $X$.\[\]
        First, notice that if $x\in\overline{U_r}$ then $f(x)\leq r$. This is because $\mathbb{Q}_d$ is dense in $\mathbb{R}$ as per (2), so for any $\varepsilon\gt 0$ we know there is some $r'$ such that $r\lt r'\lt r+\varepsilon$. Then, $\overline{U_r}\subset U_{r'}$, so $f(x)\lt r'$.\[\]
        Consider now some arbitrary $(a,b)\subset [0,1]$. Choose some $x\in f^{-1}(a,b)$. We know we can find some $p,q\in (0,1]_d$ such that
            $$a\lt p\lt f(x)\lt q\lt b$$ 
            and then $x\notin\overline{U_p}$ and $x\in U_q$.\[\]
            Then, we let $V_x=U_q\setminus\overline{U_p}$. Consider some $v\in V_x$. We know $v\in U_q$ but $v\notin\overline{U_p}$, meaning $p\lt v\lt q$. Thus, $f(V_x)=(p,q)\subset (a,b)$. As $V_x$ is open, we know every point in $f^{-1}(a,b)$ is interior, and hence the entire preimage is open. As these open intervals are arbitrary, we know $f$ is continuous on all of $X$. "
        />
        <p>
          Note that although the above proof uses {"$\\mathbb{Q}_d$"}, it is not
          necessary. In fact, any countable and dense set will do; one just
          needs to ensure it is easily enumerable for the argument to be
          straightforward and readable, and the dyadic rationals are one such
          choice. Additionally, every set similar to this will be dense in{" "}
          {"$\\mathbb{R}$"}; the proof I demonstrated is just a trivial
          adaptation of the standard proof that {"$\\mathbb{Q}$"} in its
          entirety is dense.
        </p>
        <p>
          We now quickly provide one more definition. We say a space $X$ is{" "}
          <strong>Hausdorff</strong> if any two distinct points in $X$ also have
          disjoint neighborhoods. This important as the Moore plane is
          Hausdorff, but is not normal, and that will come into play in both the
          next theorem and our eventual conclusion.
        </p>
        <Theorem
          no="4"
          statement="
        If $X$ is Hausdorff with dense $E\subset X$, and $f$ and $g$ are continuous functions on $X$ with $f(e)=g(e)$ for all $e\in E$, then $f=g$.
        "
        />
        <Proof
          proof="
        Suppose this is not the case. Then, there exists $x_0\in X\setminus E$ such that $f(x_0)\neq g(x_0)$. Given $X$ is Hausdorff, there exist open neighborhoods of $f(x_0)$ and $g(x_0)$, $U_f$ and $U_g$ respectively, such that
        $$U_f\cap U_g=\varnothing .$$
        We know
        $$x_0\in f^{-1}(U_f)\cap g^{-1}(U_g)=V$$
        and $V$ is known to be open as both $f$ and $g$ are continuous. As $V$ is open and $E$ is dense, however, there is some $e\in E$ also in $V$, and $f(e)=g(e)=\lambda$, meaning
        $$\lambda\in  U_f\cap U_g$$
        giving a contradiction."
        />
        <p>
          A few more definitions are useful in the next proof. We say a topology
          $X$ is <strong>discrete</strong> if every single possible subset is
          included in the topology. Note that this contrasts with the{" "}
          <strong>indiscrete</strong> topology which would only include $X$ and
          $\varnothing$. They are called so as in the discrete topology every
          element is distinguishable (in the sense that if $x\in X$, then{" "}
          {"$\\left\\{ x\\right\\}\\in\\mathcal{T}$"}), whereas in the
          indiscrete topology every single point is grouped together into one
          big open set (as we would have{" "}
          {"$\\mathcal{T}=\\left\\{\\varnothing, X\\right\\}$"} ). The reason
          why the discrete topology is useful in the upcoming proof is because{" "}
          {"$\\left\\{x\\right\\}$"} is both open and closed in it (given that
          its complement is too an open set).
        </p>
        <p>
          The specific type of discreteness we will use is the one induced by
          the <strong>subspace topology</strong>. Given some $X$ with topology{" "}
          {"$\\mathcal{T}$"}, the subspace topology on a subset $S\subset X$ is
          defined as{" "}
          {
            "$$\\mathcal{T}_S =\\left\\{ S\\cap U:U\\in\\mathcal{T}\\right\\} .$$"
          }
        </p>
        <Theorem
          no="5"
          name="Jones"
          statement="
        If $X$ is normal and infinite, with dense $D\subset X$, and  $C\subset X$  closed and discrete by the subspace topology, then $2^{\left| C\right|}\leq 2^{\left| D\right|}$, where $\left| X\right|$ is the cardinality of $X$."
        />
        <Proof
          proof="
        Consider a non-empty $A\subsetneq C$. We know $A$ and $C\setminus A$ are closed and disjoint, so by Urysohn we can find a continuous function
        $$f_A :X\rightarrow \left[ 0,1\right]$$
        such that $f\left( A\right) =\left\{ 0\right\}$ and  $f\left( C\setminus A\right) =\left\{ 1\right\}$.\[\]
        Consider any continuous function $f :X\rightarrow \left[ 0,1\right]$. As it is uniquely determined by the values it takes on $D$, as per (4), we could could give a full description by matching every element of $D$ with the functions output in $\left[ 0,1\right]$. Thus, the set of all such functions has cardinality
        $$\left|\left[ 0,1\right]^D\right| =\left(2^{\aleph_0}\right)^{\left| D\right|}=2^{\aleph_0} .$$
        We know that the set of functions of the form $f_A$ is a subset of all possible continuous functions. Thus, as $A$ is just any element of the powerset of $C$,
        $2^{\left| C\right|}\leq  2^{\aleph_0}$."
        />
        <p>
          Now, we return to the Moore plane. Our goal, as one would expect, is
          to find sets corresponding to $C$ and $D$ above whose cardinalities do
          not follow.
        </p>
        <Theorem
          no="6"
          statement="
        With respect to the subspace topology, the $x$-axis, $\mathbb{R}\times\left\{ 0\right\}$, is discrete and closed in $\Gamma$.
        "
        />
        <Proof
          proof="
        Let $\mathcal{X}$ be the $x$-axis. We know the only open sets in $\Gamma$ which intersect $\mathcal{X}$ are those generated by the local basis at any point $(p,0)$, $p\in\mathbb{R}$, as they include $(p,0)$. Thus, the subspace topology is on $\mathcal{X}$ is
        $$T_\mathcal{X}=\left\{\left\{\left(p,0\right)\right\}\in\mathcal{X}:p\in\mathbb{R}\right\}$$
        which means $\mathcal{X}$ is discrete. As its complement is $\varnothing$, we also know $\mathcal{X}$ is closed. 
        "
        />
        <Theorem
          no="7"
          statement="
        The set $\mathbb{Q}\times\mathbb{Q}_+$ is dense in $\Gamma$.
        "
        />
        <Proof
          proof="
        Let $\mathcal{Q}=\mathbb{Q}\times\mathbb{Q}_+$. Trivially, any $x\in\mathcal{Q}$ is also in $\Gamma$. Consider some $x\in\Gamma \setminus\mathcal{Q}$. We know $x=(a,b)$ for some $(a,b)\in\mathbb{R}\times\mathbb{R}_+$. Let $N$ be an arbitrary neighborhood of $x$. Let $U$ be an open set such that $x\in U\subseteq N$.\[\]
        If $b\neq 0$, then $U$ is an open disc around $x$ and so some $\varepsilon\gt 0$ is its radius. As $\mathbb{Q}$ is dense in $\mathbb{R}$, and likewise for $\mathbb{Q}_+$ and $\mathbb{R}_+$, we know we can find some point $p\in\mathbb{Q}$ and $q\in\mathbb{Q}_+$ such that
        $$\left| p-a\right|\lt\frac{\varepsilon}{\sqrt2}\qquad \left| q-b\right|\lt\frac{\varepsilon}{\sqrt2}$$
        meaning
        $$
            \left(p-a\right)^2+\left(q-b\right)^2\lt\left(\frac{\varepsilon}{\sqrt2}\right)^2+\left(\frac{\varepsilon}{\sqrt2}\right)^2=\varepsilon^2
        $$
        hence $(p,q)\in U$.
        Suppose now that $b=0$. We know then that some  $\varepsilon\gt 0$ defines the open disc centred around $(a,\varepsilon )$ tangent to $x$. Again by density, we find some $p\in\mathbb{Q}$ and $q\in\mathbb{Q}_+$ such that
        $$\left| p-a\right|\lt\frac{\varepsilon}{\sqrt2}\qquad\frac{\sqrt2-1}{\sqrt2}\varepsilon\lt q\lt\frac{\sqrt2+1}{\sqrt2}\varepsilon$$
        noting that our choice of $q$ implies too that $\left| q-\varepsilon\right|\lt\frac{\varepsilon}{\sqrt2}$. Similarly then,
        $$
            \left(p-a\right)^2+\left(q-\varepsilon\right)^2\lt\left(\frac{\varepsilon}{\sqrt2}\right)^2+\left(\frac{\varepsilon}{\sqrt2}\right)^2=\varepsilon^2
        $$
        thus $(p,q)\in U$.\[\]
        Given the arbitrary neighborhood, any $x\in\Gamma$ that is not also in $\mathcal{Q}$ is a limit point thereof. "
        />
        <p>At last, we can finally prove what was intended.</p>
        <Theorem
          no="8"
          statement="
        The Moore plane is not normal.
        "
        />
        <Proof
          proof="
        By (6) we know $\mathcal{X}=\mathbb{R}\times\left\{ 0\right\}$ is closed and discrete in $\Gamma$ with respect to the subspace topology. By (7), we know $\mathcal{Q}=\mathbb{Q}\times\mathbb{Q}_+$ is dense (and therefore infinite) in $\Gamma$.\[\]
        We know $\left|\mathcal{X}\right| =\left|\mathbb{R}\right|$ and $\left|\mathcal{Q}\right| =\aleph_0$. Since $2^{\left|\mathbb{R}\right|}\gt 2^{\aleph_0}$ we know $\Gamma$ is not normal by Jones."
        />
        <p>
          This was really fun to make! I had little experience with topology
          outside of metric spaces prior to this, and going in I had no idea how
          to visualize topological spaces at all, nor why something like this
          could even be possible.
        </p>
        <p>
          The way I intuitively understand this begins with Urysohn, whose
          construction involved taking advantage of the space around closed sets
          (if the space is normal) to make a function based on shrinking a
          neighborhood covering it, until by limiting behaviour you end up back
          at the closed set itself.
        </p>
        <p>
          Then given that a dense set fully characterizes a continuous function,
          if you are able to do this Urysohn process on a closed and discrete
          subset of the space then it can only be so big (limited by the size of
          the dense set), as you are taking advantage of space between closures.
          If it turns out the set is actually larger than that, then it must be
          because the everything is so tightly packed together that you cannot
          separate closed sets - the space is non-normal.
        </p>
      </div>
    );
  }

}

export default Normal;