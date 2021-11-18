import React, { Component } from "react";
/* environments */
import Figure from "../../../components/Figure";
import Theorem from "../../../components/Theorem";
import Proof from "../../../components/Proof";

class Sobolev extends Component {
  componentDidMount() {
    window.KaTeXRender();
  }

  render() {
    return (
      <div class="postContent leftMargin">
        <p>
          Consider an interval {"\\([a,b]\\)"} and suppose that on it you have a
          function {"\\(f\\colon [a,b]\\to\\mathbb{R}\\)"}. Fix some{" "}
          {"\\(\\alpha,\\beta\\in\\mathbb{R}\\)"}, and consider the following
          problem: find some function {"\\(u\\)"} so
          {`\\[-u''+u\\equiv f\\textrm{ with }u(a)=\\alpha\\textrm{ and }u(b)=\\beta.\\]`}
          For some functions {"\\(f\\)"} this is very easy to do. For example,
          when {"\\(f\\equiv 0\\)"} this reduces to a homogeneous linear
          second-order differential equation, which has solutions
          {`\\[u(x)=c_1e^x +c_2e^{-t}\\]`}
          as per any first course in ODEs (to match the boundary conditions one
          can simply algebraically solve for {"\\(c_1\\)"} and {"\\(c_2\\)"}). A
          general technique even exists for any linear combination of
          trigonometric-exponential-polynomial products, covering a very large
          class of functions. However, taking a random function like{" "}
          {"\\(f(x)=e^x\\sqrt[3]{x}/(x^2-\\cos x)\\)"}, it's not at all clear if
          a solution even exists, let alone what it might be.
        </p>
        <p>
          Things become significantly worse in higher dimensions. Suppose now{" "}
          {"\\(\\Omega\\subseteq\\mathbb{R}^2\\)"} and our function is some{" "}
          {"\\(f\\colon\\Omega\\to\\mathbb{C}\\)"}. The reformulated problem is
          to find some {"\\(u\\)"} such that
          {`\\[-\\nabla^2 u+u\\equiv f\\textrm{ with }u\\big|_{\\partial\\Omega}\\equiv g,\\]`}
          where {"\\(g\\)"} is a function giving the boundary condition.
          Sometimes solutions still exist, although they're significantly less
          pretty. Under some hypotheses, namely that {"\\(\\Omega\\)"} is a
          simply-connected bounded domain (hence, without loss of generality,
          the unit disk) and {"\\(g\\)"} is continuous, a standard result from
          complex analysis tells us that
          {`\\[
            u(re^{i\\varphi})\\coloneqq
            \\begin{cases}
            g(re^{i\\varphi}) & r=1 \\\\
            \\displaystyle{
                \\frac{1}{2\\pi}\\int_{-\\pi}^{\\pi} g(e^{i\\varphi})P_r(\\varphi-\\vartheta)\\,\\mathrm{d}\\vartheta 
            }
            & \\textrm{otherwise}
            \\end{cases}
        \\]`}
          uniquely harmonically extends {"\\(g\\)"} to {"\\(\\Omega\\)"}, where
          {`\\[P_r(\\varphi-\\vartheta)=\\sum_{k=-\\infty}^{\\infty}r^{|k|}e^{ik(\\varphi-\\vartheta)}\\]`}
          is the Poisson kernel. Therefore, if we are searching for harmonic
          solutions (recall this means {"\\(\\nabla^2\\equiv 0\\)"}) we can
          check if {"\\(f\\)"} agrees with the above {"\\(u\\)"}, as it is the
          only time a solution exists. This is the solution under some very
          strong hypotheses; imagine what it would be like trying to solve this
          problem in general.
        </p>
        <p>
          This type of boundary condition is known as a{" "}
          <strong>Dirichlet boundary condition</strong> and determining the
          existence of a solution is a <strong>Dirichlet problem</strong>. The
          difficulty in solving a Dirichlet problem, or really any differential
          equation, comes down to the fact that differentiable functions are
          just not all that great to work with. Sure, they aren't pathological,
          but there exist (infinitely!) differentiable functions that aren't
          analytic, and it's very easy to construct sequences of differentiable
          functions whose pointwise limit is no longer differentiable.
          Evidently, differentiability is a strong condition. But what if there
          was some looser notion of differentiability which had nicer
          properties? Then, it might be easier to solve these problems in this
          more general class of functions. In this case the challenge would no
          longer be searching for solutions, and instead finding out which
          solutions correspond to actual differentiability. Maybe that's easier.
          Indeed, it is, and that's what we're going to do today.
        </p>
        <p>
          Let's come back to our Dirichlet problem in one dimension: find some{" "}
          {"\\(u\\)"} so
          {`\\[-u''+u\\equiv f\\textrm{ with }u(a)=\\alpha\\textrm{ and }u(b)=\\beta.\\]`}
          Take an arbitrary {"\\(\\varphi\\in\\mathcal{C}^1[a,b]\\)"}. Via
          integration by parts,
          {`\\[\\int_a^b\\!(-u\'\')\\varphi=(-u\')\\varphi\\Big|_a^b+\\int_a^b\\!u\'\\varphi\'.\\]`}
          Notice how if {"\\(\\varphi(a)=0=\\varphi(b)\\)"}, then by further
          supposing {"\\(f\\in \\mathcal{C}^1[a,b]\\)"} we can multiply our
          entire equation by {"\\(\\varphi\\)"} and integrate to get
          {`\\[\\int_a^b\\!u\'\\varphi\'+\\int_a^b\\!u\\varphi=\\int_a^b\\!f\\varphi.\\]`}
          At first this might not seem like a big deal, but the critical
          observation is that there is no more {"\\(u''\\)"}, only {"\\(u'\\)"}.
          This means that as long as {"\\(u\\)"} can be differentiated once, we
          have almost solved our problem.
        </p>
        <p>
          The above is an avenue to perhaps define what it means to be a more
          general solution. For us to pursue it though, we still need to find
          out what it means to be a more general derivative. For this, examine
          again that integration by parts, but this time with just {"\\(u'\\)"}:
          {`\\[-\\int_a^b u'\\varphi=\\int_a^b u\\varphi.\\]`}
          Notice how it characterizes a relationship between {
            "\\(u\\)"
          } and {"\\(u'\\)"}. Even if {"\\(u'\\)"} doesn't exist then, maybe a
          function {"\\(g\\)"} which satisfies this relationship does, and
          therefore can mimic the role of {"\\(u'\\)"}.
        </p>
        <p>
          In search of this {"\\(g\\)"} we will need to slightly weaken our
          notion of integrability. Specifically, let {"\\(1\\leq p <\\infty\\)"}
          , and consider the space of{" "}
          <strong>{"\\(p\\)"}-integrable functions</strong> on the (potentially
          infinite!) interval {"\\(I\\)"}:
          {`\\[L^p(I)=\\left\\{f\\colon I\\to\\mathbb{R}:\\int_I|f|^p<\\infty\\right\\},\\]`}
          where integration is done with respect to the Lebesgue measure. Any
          important related class of functions are <strong>locally</strong>{" "}
          {"\\(p\\)"}-integrable functions:
          {`\\[L_{\\textrm{loc}}^p(I)=\\left\\{f\\colon I\\to\\mathbb{R}:\\int_K|f|^p<\\infty\\textrm{ for all compact }K\\subseteq I\\right\\}.\\]`}
          This specific set is introduced to more easily work with infinite{" "}
          {"\\(I\\)"} (for example, observe that non-zero constant functions are
          not integrable globally across {"\\(\\mathbb{R}\\)"}, but they are
          integrable locally). Both of these sets are actually Banach spaces
          (meaning complete normed linear spaces) with norm
          {`\\[\\|f\\|_p=\\left(\\int_I |f|^p\\right)^{1/p}. \\]`}
          In fact, they are even Hilbert spaces when {"\\(p=2\\)"}, with inner
          product
          {`\\[\\langle f,g\\rangle=\\int_I fg.\\]`}
          It should be noted that this construction can be generalized to{" "}
          {"\\(L^p(X,\\mu)\\)"}, whose elements are {"\\(\\mu\\)"}
          -measurable {"\\(p\\)"}-integrable functions{" "}
          {"\\(X\\to \\mathbb{R}\\)"} (or {"\\(X\\to\\mathbb{C}\\)"}). For
          example, the set of absolutely convergent sequences {"\\(\\ell^1\\)"}{" "}
          is equal to {"\\(L^1(\\mathbb{N},\\mu)\\)"}, with {"\\(\\mu\\)"} being
          the counting measure. There also exists a definition for{" "}
          {"\\(p=\\infty\\)"}, given by those functions which are essentially
          bounded. However, we will not need any of these today.
        </p>
        <p>
          This is enough for us to generalize the derivative. As a technical
          note, we first define the <strong>support</strong> of a function{" "}
          {"\\(f\\)"}:
          {`\\[\\operatorname{supp}f=\\{x\\in I :f(x)\\neq 0\\}.\\]`}
          Then, define
          {`\\[\\mathcal{C}^k_c(I)=\\{f\\in\\mathcal{C}^k(I):\\operatorname{supp}f\\textrm{ is compact}\\}.\\]`}
          This set will also be used to handle the case where {"\\(I\\)"} is
          infinite. Now, we say that {"\\(u\\)"} is{" "}
          <strong>weakly differentiable</strong> if there exists some{" "}
          {"\\(g\\in L^p(I)\\)"} such that
          {`\\[-\\int_I g\\varphi=\\int_I u\\varphi'\\textrm{ for all }\\varphi\\in\\mathcal{C}_c^1(I).\\]`}
          We call these {"\\(\\varphi\\)"} <strong>test functions</strong> and{" "}
          {"\\(g\\)"} its <strong>weak derivative</strong>, written simply as{" "}
          {"\\(u':\\equiv g\\)"}. This lets us define our object of interest,
          the <strong>Sobolev space</strong>:
          {`\\[W^{k,p}(I)=\\{u\\in L^p(I): u^{(i)}\\in L^p(I)\\textrm{ for }1\\leq i\\leq k\\}.\\]`}
          It comes equipped with the norm
          {`\\[\\|u\\|=\\|u\\|_p+\\|u'\\|_p,\\]`}
          and from this it is immediate that {"\\(W^{k,p}(I)\\)"} inherits the
          completion of {"\\(L^p(I)\\)"}, making it a Banach space too. An inner
          product on {"\\(W^{k,2}(I)\\)"} is similarly defined additively.
        </p>
        <p>
          There is one property of weakly differentiable functions which will be
          very useful in recovering solutions to our DE: weak differentiability
          implies, in some sense, continuity. To get there, we will need some
          preliminary results. Henceforth, let {"\\(I\\)"} be an infinite
          interval, say {"\\((a,b)\\)"} where {"\\(a=-\\infty\\)"} or{" "}
          {"\\(b=\\infty\\)"}.
        </p>
        <Theorem
          no="1"
          statement="
            Suppose \(h\in\mathcal{C}_c(I)\) is such that \(\int_I h=0\). Then, \(h\) has a unique primitive in \(\mathcal{C}^1_c(I)\).
            "
        />
        <Proof
          proof="
        Via the compact support of \(h\), find an interval \([u,v]\) such that \(h\equiv 0\) on \(I\setminus [u,v]\). By the fundamental theorem of calculus it is clear that \(h\) has at least one primitive on \([u,v]\), namely
\[
	F(x)=\int_u^x h(t)\,\mathrm{d}t.
\]
By taking \(F(x)=0\) when \(x<u\) or \(x>v\), we see \(F\) is a valid primitive across \(I\) (in particular, differentiability of \(F\) follows from that fact that \(F(v)=0\) by hypothesis). Therefore, \(F\in\mathcal{C}_c^1(I)\).\[\]

For uniqueness, suppose that we had another primitive \(G\). Find some constant \(C\in\R\) so \(F+C\equiv G\). Note that this implies \(G\equiv C\) on \(I\setminus [u,v]\), meaning \(G\) fails to have compact support unless \(C=0\).
        "
        />
        <p>
          The reason the interval {"\\(I\\)"} must be infinite above is that on
          a finite interval everything has compact support. This also highlights
          another reason we work with locally integrable functions, in that we
          are typically not concerned with the global behaviour of our
          functions, only the small interval over which the DE problem is
          defined.
        </p>

        <Theorem
          no="2"
          statement="Let \(f\in L^1_{\textrm{loc}}(I)\) satisfy \[\int_I f\varphi'=0\] for all test functions \(\varphi'\). Then, \(f\) is almost everywhere constant.
        "
        />
        <Proof
          proof="
          Fix any \(\psi\in\mathcal{C}_c(I)\) such that \(\int_I\psi =1\). For an arbitrary \(\omega\in\mathcal{C}_c(I)\) define
\[
	h\equiv \omega-\psi\int_I\omega.
\]
Observe that \(h\) is continuous and has compact support in \(I\). Moreover,
\[
	\int_I h=\int_I\left(\omega-\psi\int_I\omega\right)=\int_I\omega\left(1-\int_I\psi\right)=0.
\]
Thus, \(h\) has a unique primitive \(\varphi\in \mathcal{C}_c^1(I)\), meaning
\[
	0=\int_I f\varphi'=\int_If\left(\omega-\psi\int_I\omega\right)
\]
by our hypothesis. Rearranging,
\[
	\int_I\left(f-\int_If\psi\right)\omega=0
\]
meaning \(f\equiv \int_If\psi\) almost everywhere on \(I\). This is our desired constant.
        "
        />
        <Theorem
          no="3"
          statement="
        For \(g\in L_{\textrm{loc}}^1(I)\) and \(y\in I\), define on \(I\) the function
\[
	v(x)=\int_y^x g.
\]
Then, \(v\in\mathcal{C}(I)\) and
\[
	\int_I v\varphi'=-\int_I g\varphi
\]
for all test functions \(\varphi\).
        "
        />
        <Proof
          proof="
          Observe that
          \[\begin{aligned}
              \int_I v\varphi' &= \int_a^b\left(\int_y^x g(t)\,\mathrm{d}t\right)\varphi'(x)\,\mathrm{d}x \\
              &=-\int_a^y\int_x^y g(t)\varphi'(x)\,\mathrm{d}t\,\mathrm{d}x+\int_y^b\int_y^x g(t)\varphi'(x)\,\mathrm{d}t\,\mathrm{d}x.
          \end{aligned}\]
          In order to apply Fubini's theorem, we rewrite the integrals as
          \[
              -\int_a^y\int_a^y g(t)\chi_{(x,y)}(t)\varphi'(x)\,\mathrm{d}t\,\mathrm{d}x+\int_y^b\int_y^bg(t)\chi_{(y,x)}(t)\varphi'(x)\,\mathrm{d}t\,\mathrm{d}x
          \]
          where \(\chi_A\) is the characteristic function on a set \(A\). Then, swapping the measures yields
          \[
          \int_Iv\varphi' = -\int_a^y\int_a^y g(t)\chi_{(x,y)}(t)\varphi'(x)\,\mathrm{d}x\,\mathrm{d}t+\int_y^b\int_y^bg(t)\chi_{(y,x)}(t)\varphi'(x)\,\mathrm{d}x\,\mathrm{d}t.
          \]
          Observe that \(\chi_{[x,y]}(t)\) characterizes \(t\geq x\). Therefore, an equivalent characterization is \(\chi_{(a,t)}(x)\) (where the lower bound \(a\) comes from the lower bound of integration). For the same reason, \(\chi_{(y,x)}(t)=\chi_{(t,b)}(x)\). We thus see
          \[\begin{aligned}
          \int_Iv\varphi' &= -\int_a^y\int_a^y g(t)\chi_{(a,t)}(x)\varphi'(x)\,\mathrm{d}x\,\mathrm{d}t+\int_y^b\int_y^bg(t)\chi_{(t,b)}(x)\varphi'(x)\,\mathrm{d}x\,\mathrm{d}t \\
          &= -\int_a^y g(t)\int_a^t \varphi'(x)\,\mathrm{d}x\,\mathrm{d}t+\int_y^b g(t)\int_t^b\varphi'(x)\,\mathrm{d}x\,\mathrm{d}t \\
          &= -\int_a^y g(t)\varphi(t)\,\mathrm{d}t-\int_y^b g(t)\varphi(t)\,\mathrm{d}t \\
          &= -\int_I g\varphi,
          \end{aligned}\]
          as claimed.
        "
        />
        <p>
          The equality of the two integrals in the above theorem statement
          should look suspisciously familiar. This is no coincidence, as we will
          now see:
        </p>
        <Theorem
          no="4"
          statement="
        Let \(u\in W^{1,p}(I)\). Then, there exists a function \(\tilde{u}\in\mathcal{C}(\bar{I})\) such that \(u\equiv \tilde{u}\) almost everywhere on \(I\). Moreover, given any \(x,y\in \bar{I}\) we have
\[
		\int_y^x u'(t)\,\mathrm{d}t=\tilde{u}(x)-\tilde{u}(y).
\]
        "
        />
        <Proof
          proof="Fix some \(y\in I\) and define
\[
	\tilde{u}(x)=\int_y^x u'(t)\,\mathrm{d}t.
\]
Let \(\varphi\) be any test function, and note that
\[
	\int_I\tilde{u}\varphi' =-\int_I u'\varphi.
\]
Recalling the definition of a weak derivative, we then have that
\[
	\int_I(\tilde{u}-u)\varphi' =0.
\]
This means \(u-\tilde{u}\) is almost everywhere constant on \(I\). Without loss of generality we may assume this constant is \(0\), hence \(\tilde{u}\) has the desired properties."
        />
        <p>
          We call this function {"\\(\\tilde{u}\\)"} the{" "}
          <strong>continuous representative</strong> of {"\\(u\\)"}, although in
          practice it is implicitly identified by the function itself. This is
          actually a special case of a much more general result, called the{" "}
          <strong>Sobolev embedding theorem</strong>, which gives conditions for
          how (Hölder) continuous a function is based on how many weak
          derivatives it admits. The continuity on the boundary is especially
          important, as we will have boundary conditions to satisfy when solving
          DEs.
        </p>
        <p>
          These (really, only the last one technically) are the only facts about
          weak derivatives that we will need today. Our next task is to find
          some mathematical tools, namely from functional analysis, which are
          applicable to solving DEs over Sobolev spaces.
        </p>
        <p>
          For this we turn to <strong>bilinear forms</strong>, which are maps{" "}
          {
            "\\(\\alpha\\colon \\mathcal{B}\\times \\mathcal{B}\\to\\mathbb{C}\\)"
          }{" "}
          (or to {"\\(\\mathbb{R}\\)"}, whatever the underlying field is) which
          are linear in each component, where {"\\(\\mathcal{B}\\)"} is a Banach
          space. We say {"\\(\\alpha\\)"} is <strong>bounded</strong> if we can
          find some {"\\(M>0\\)"} such that
          {`\\[|\\alpha(x,y)|\\leq M\\|x\\|\\|y\\|\\]`}
          for every {"\\(x,y\\in\\mathcal{B}\\)"}. Just like for linear
          operators, we have the following result:
        </p>
        <Theorem
          no="5"
          statement="
        A bounded bilinear form is continuous."
        />
        <Proof
          proof="Consider a sequence \((x_n,y_n)\) in \(\mathcal{B}\times\mathcal{B}\). Let \((u,v)\in\mathcal{B}\times\mathcal{B}\) be arbitrary, and observe that
            \[
                \begin{aligned}
                |\alpha(x_n,y_n)-\alpha(u,v)| &=|\alpha(x_n,y_n)-\alpha(x_n,v)+\alpha(x_n,v)-\alpha(u,v)| \\
                &\leq |\alpha(x_n,y_n-v)|+|\alpha(x_n-u,v)| \\
                &\leq M\|x_n\|\|y_n-v\|+M\|x_n-u\|\|v\|.
            \end{aligned}   
            \]
            If \((x_n,y_n)\) converges to \((u,v)\) in the product space, then \(x_n\to u\) and \(y_n\to v\) individually. Let \(N=\max\{\|u\|,\|v\|\}\), and for a fixed \(\varepsilon>0\) go far enough in the sequences so both \(x_n\) and \(y_n\) are within \(\varepsilon/2MN\) of convergence. Then, we have
            \[
                |\alpha(x_n,y_n)-\alpha(u,v)|< \frac{\varepsilon \|x_n\|}{2N}+\frac{\varepsilon}{2}.
                \]
                Without loss of generality we can assume \(\|x_n\|<N\), whence we see \(\alpha(x_n,y_n)\to \alpha(u,v)\)."
        />
        <p>
          Of course, the above theorem is actually an if and only if, and is
          also equivalent to continuity at the origin. This is the only
          direction we will need though. It should also be noted that bilinear
          forms can be defined on the product of two <i>different</i> Banach
          spaces, and many results (such as the above one) still remain true in
          this case.
        </p>
        <p>
          There are two more definitions we will need, the first of which is{" "}
          <strong>coercivity</strong>. This is when we can find a constant{" "}
          {"\\(C>0\\)"} so
          {`\\[C\\|x\\|^2\\leq \\alpha(x,x)\\]`}
          for all {"\\(x\\in\\mathcal{B}\\)"}. Lastly, we call {"\\(\\alpha\\)"}{" "}
          <strong>symmetric</strong> if {"\\(\\alpha(x,y)=\\alpha(y,x)\\)"} for
          all {"\\(x,y\\in\\mathcal{B}\\)"}.
        </p>
        <p>
          The reason we consider these specific bilinear forms is because they
          naturally arise from the interactions between integration and
          differentiation, as we will see. On top of that, there are many{" "}
          <i>extremely</i> powerful results regarding them, such as the
          following:
        </p>
        <Theorem
          no="6"
          name="Stampacchia"
          statement="
          Let \(\alpha\colon\mathcal{H}\times\mathcal{H}\to\mathbb{R}\) be a continuous coercive bilinear form on a Hilbert space \(\mathcal{H}\). Consider a non-empty closed convex subset \(K\subseteq\mathcal{H}\). Then, for every \(\varphi\in\mathcal{H}^\ast\) there exists some \(k\in K\) so
          \[
              \alpha(k,h-k)\geq \varphi(h-k)
          \]
          for all \(h\in K\). Moreover, if \(\alpha\) is symmetric then \(k\) is the unique point in \(K\) so
          \[
              \frac{1}{2}\alpha(k,k)-\varphi(k)=\inf_{h\in K}\left\{\frac{1}{2}\alpha(h,h)-\varphi(h)\right\}.
          \]"
        />
        <Proof
          proof="Apply Riesz-Fréchet to obtain a point \(x\in\mathcal{H}\) so \(\varphi(h)=\langle x,h\rangle\) for all \(h\in\mathcal{H}\). Then, fix some \(y\in\mathcal{H}\) and observe that the map \(h\mapsto \alpha(y,h)\) defines a linear functional, and so we may also find a point \(y'\in\mathcal{H}\) such that this map is identically \(h\mapsto \langle y',h\rangle\). Define the operator \(A\) by \(y\mapsto y'\) in this manner, so that \(\alpha(y,h)=\langle Ay,h\rangle\). Then, let \(y_1,y_2\in\mathcal{H}\) and \(\lambda\) to be a scalar, and observe the bilinearity of \(\alpha\) implies
\[
	\langle A(\lambda y_1+y_2),h\rangle=\alpha(\lambda y_1+y_2,h)=\lambda\alpha(y_1,h)+\alpha(y_2,h)=\lambda\langle Ay_1,h\rangle+\langle Ay_2,h\rangle.
\]
This means \(A\) is linear. Moreover,
\[
	M\|y\|\|Ay\|^2\geq |\alpha (y,Ay)|=\langle Ay,Ay\rangle=\|Ay\|^2
\]
and 
\[
	|\langle Ay,y\rangle|=|\alpha(y,y)|\geq N\|y\|^2.
\]
Observe that we desire a constant \(c\) and a point \(k\) so
\[
	\langle cx-cAk+k-k,h-k\rangle\leq 0.
\]
By the Hilbert projection theorem, we know this will be satisfied by \(k=\pi(cx-cAk+k)\eqqcolon Sk\), where \(\pi\) is the projection onto \(K\) (where we will attain equality), presupposing that such a \(c\) exists. 
\[\]
Now, take any \(y_1,y_2\in K\), and note that
\[
	\|Sy_1-Sy_2\|=\|\pi(cAy_1+y_1-cAy_2-y_2)\|\leq \|y_1-y_2+c(Ay_1-Ay_2)\|
\]
since projections do not increase norm. Recalling that we are over \(\R\), we thus have
\[\begin{aligned}
	\|Sy_1-Sy_2\|^2 &\leq \|y_1-y_2+c(Ay_1-Ay_2)\|^2\\
	&=\|y_1-y_2\|^2-2c\langle A(y_1-y_2),y_1-y_2)\rangle+c^2\|A(y_1-y_2)\|^2 \\
	&\leq \|y_1-y_2\|^2(1-2cN+c^2M^2)
\end{aligned}\]
where the final inequality follows from the implications of the coercivity and boundedness of \(\alpha\). Taking \(c=N/M^2\) will make \(S\) a contraction, hence by Banach-Caccioppoli it has a unique fixed point, which we define to be \(k\). 
\[\]
Now, suppose \(\alpha\) is symmetric. Observe that this makes \(\alpha\) an inner product (again, as we are over \(\R\)). In this new topology we find some point \(x'\in\mathcal{H}\) by Riesz-Fréchet again so \(\varphi(h)=\alpha (x',h)\) for arbitrary \(h\in\mathcal{H}\). In this case, our goal is to find some \(k\in\mathcal{H}\) such that  \(\alpha(x'-k,h-k)\leq 0\). This is immediately satisfied by taking \(k=\pi(x')\), and in particular \(k\) satisfies 
\[
	\|x'-k\|=\min_{h\in K}\|x'-h,x'-h\|_{\alpha}=\min_{h\in K}\sqrt{\alpha(x'-h,x'-h)}.
\]
That is, we are looking to minimize the function
\[
	h\mapsto \alpha(x'-h,x'-h)=\alpha(x',x')-2\alpha(x',h)+\alpha(h,h).
\]
However, \(\alpha(x',h)=\varphi(h)\). Since \(\alpha(x',x')\) is fixed, an equivalent characterization is therefore to minimize
\[
	h\mapsto \frac{1}{2}\alpha(h,h)-\varphi(h),
\]
precisely as claimed (since the infimum is attained, this is indeed well-defined)."
        />
        <p>
          With all this work done we are finally ready to solve our DE. Recall
          this means finding a function {"\\(u\\)"} so
          {`\\[-u''+u\\equiv f\\textrm{ with }u(a)=\\alpha\\textrm{ and }u(b)=\\beta,\\]`}
          where {"\\(f\\)"} is some function on {"\\([a,b]\\)"}, and{" "}
          {"\\(\\alpha,\\beta\\in\\mathbb{R}\\)"} are fixed. The idea is to
          first precisely formulate what a weak solution to this problem is, in
          terms of weak derivatives somewhere in some Sobolev space. Then, we
          will try to extract a relevant bilinear form and linear functional
          which will give a weak solution upon applying Stampacchia's theorem to
          them. Lastly, we will try to figure out when this weak solution is
          also a solution to our original problem, which we will call being a{" "}
          <strong>classical solution</strong>.
        </p>
        <p>
          Let's start out by defining
          {`\\[K=\\{v\\in W^{1,2}(I): v(a)=\\alpha\\textrm{ and }v(b)=\\beta\\},\\]`}
          where {"\\(I=(a,b)\\)"}. Note that {"\\(K\\)"} is both closed and
          convex. Now, we will call a {"\\(u\\in K\\)"} a{" "}
          <strong>weak solution</strong> if
          {`\\[\\int_I u'w'+\\int_I uw=\\int_I fw\\]`}
          for every {
            "\\(w\\in \\mathcal{C}_c^1(I)\\subseteq W^{1,2}(I)\\)"
          }{" "}
          such that {"\\(w(a)=0=w(b)\\)"}. We will denote the set of these{" "}
          {"\\(w\\)"} by {"\\(W_0^{1,2}(I)\\)"}. Notice how this mirrors the
          original construction from way back at the beginning of this write-up.
        </p>
        <p>
          Next, define the map
          {`\\[\\alpha(u,v)=\\int_I u'v'+\\int_I uv\\]`}
          on {"\\(W^{1,2}(I)\\times W^{1,2}(I)\\)"}, which is clearly a bilinear
          form. Recalling that {"\\(W^{1,2}(I)\\)"} is a Hilbert space, we see
          {`\\[|\\alpha(u,v)|=\\left|\\int_I u'v'+\\int_I uv\\right|=|\\langle u,v\\rangle|\\leq \\|u\\|\\|v\\|\\]`}
          by Cauchy-Schwarz. Thus, {"\\(\\alpha\\)"} is bounded. Coercivity is
          trivial, as
          {`\\[\\alpha(u,u)=\\int_I (u')^2+\\int_I u^2=\\langle u,u\\rangle=\\|u\\|^2.\\]`}
          For the linear functional, we define {"\\(\\varphi\\)"} by
          {`\\[u\\mapsto\\int_I fu.\\]`}
        </p>
        <p>
          Observe that {"\\(u\\)"} being a weak solution precisely means that{" "}
          {"\\(\\alpha(u,w)=\\varphi(w)\\)"} for all{" "}
          {"\\(w\\in W_0^{1,2}(I)\\)"}. Now, applying Stampacchia's theorem will
          give us some {"\\(u\\)"} such that{" "}
          {"\\(\\alpha(u,v-u)\\geq \\varphi(v-u)\\)"} for all {"\\(v\\in K\\)"}.
          To get the desired equality simply take any{" "}
          {"\\(w\\in W_0^{1,2}(I)\\)"}, noting that{" "}
          {"\\(u\\pm w\\eqqcolon v_\\pm\\in K\\)"}. Then,
          {`\\[\\alpha(u,w)=\\alpha(u,v_+-u)\\geq \\varphi(v_+-u)=\\varphi(w)\\]`}
          and, recalling the bilinearity of {"\\(\\alpha\\)"},
          {`\\[-\\alpha(u,w)=\\alpha(u,v_--u)\\geq \\varphi(v_--u)=-\\varphi(w).\\]`}
          Thus, {"\\(\\alpha(u,w)=\\varphi(w)\\)"}, and so we have successfully
          (weakly) solved our ODE!
        </p>
        <p>
          The question now is when {"\\(u\\)"} also happens to be a classical
          solution. To this end, suppose {"\\(f\\in L^2(I)\\)"}. Then,
          rearranging the definition of a weak solution shows
          {`\\[\\int_I u'w'=\\int_I (f-u)w.\\]`}
          Of course, {"\\(f-u\\)"} remains in {"\\(L^2(I)\\)"}, and recalling
          the definition of weak differentiability shows that{" "}
          {"\\(u'\\in W^{1,2}(I)\\)"}. That is, {"\\(u''\\)"} exists, and so it
          may be identified by a continuous representative in{" "}
          {"\\(\\mathcal{C}(\\bar{I})\\)"}. This further tells us that the
          (representative) {"\\(u\\in\\mathcal{C}^2(\\bar{I})\\)"}. To ensure
          this representative is actually our original function, we need only
          that {"\\(f\\in\\mathcal{C}(\\bar{I})\\)"}.
        </p>
        <p>
          However, {"\\(u\\in\\mathcal{C}^2(\\bar{I})\\)"} is exactly what is
          means to be a classical solution! To see this, take any{" "}
          {"\\(w\\in W_0^{1,2}(I)\\)"} and recall that we know
          {`\\[\\int_I u'w'+\\int_I uw=\\int_I fw.\\]`}
          Since we may legitimately differentiate {"\\(u\\)"} now, we can
          integrate by parts to obtain
          {`\\[\\left(u' w\\Big|_a^b-\\int_a^b u'' w\\right)+\\int_a^b uw=\\int_a^b fw.\\]`}
          However, the first term vanishes, and so we have
          {`\\[\\int_I (-u''+u-f)w=0.\\]`}
          This means that {"\\(-u''+u-f\\equiv 0\\)"}, which is exactly what we
          wanted!
        </p>
        <p>
          To me, there is something quite interesting going on here. This
          technique essentially took a differential equation and somehow reduced
          it to an optimization problem taking advantage of convex geometry.
          Even with hindsight, there's no reason I can find for why this
          technique should be expected to work at all, let alone as well as it
          does (as this is the same approach to solve several famous classes of
          DEs). I'm sure there is some deeper underlying reason; I look forward
          to finding out one day.
        </p>
      </div>
    );
  }
}

export default Sobolev;
