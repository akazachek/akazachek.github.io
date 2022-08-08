import React, { Component } from "react";
/* environments */
import Figure from "../../../components/Figure";
import Theorem from "../../../components/Theorem";
import Proof from "../../../components/Proof";
import CodeBlock from "../../../components/CodeBlock";

import StockPaths from "./stockpaths.png";

class OptionMonteCarlo extends Component {
  componentDidMount() {
    window.KaTeXRender();
  }

  render() {
    return (
      <div class="postContent leftMargin">
        <p>
          In 1997 <strong>Robert Merton</strong> and{" "}
          <strong>Fischer Black</strong> received a Nobel prize for their work,
          done in conjunction with the then late <strong>Myron Scholes</strong>,
          on pricing options. An <strong>option</strong> is a financial contract
          which gives its holder the non-obligatory right to buy or sell (from
          or to the option issuer) an asset or instrument (typically a stock) at
          a specific price (called the <strong>strike price</strong>) on some
          specific dates.
        </p>
        <p>
          The most traded type of option is the <strong>American option</strong>
          , which comes in two forms: a <strong>call</strong> and{" "}
          <strong>put</strong>. A call lets you buy the underlying stock at the
          strike price from the issuer, while a put lets you sell it. "American"
          means you're allowed to do this at any time before the option expires.
          As you can imagine, this can be quite lucrative. Say you buy a call
          with a strike price of $100 expiring in one year. Then, if the
          underlying stock price goes above $100 at any point in the next year
          you can immediately exercise the option and sell the stock you
          receive, pocketing the difference. For example, if the stock price
          rose to $105, exercising lets you buy the stock for $100 which you can
          then sell for a $5 profit.
        </p>
        <p>
          This is what gives an option its value, and at the same time makes it
          difficult to price. How exactly do you capture this opportunity in a
          dollar figure? The collective work of Black, Scholes, and Merton
          answers precisely this, pricing a <strong>European option</strong>.
          Unlike American options, which can be exercised at any point before
          expiry, European options can only be exercised at expiry time. They
          priced them via the <strong>Black-Scholes equation</strong>:
          {`\\[\\frac{\\partial V}{\\partial t}+\\frac{1}{2}\\sigma^2 S^2\\frac{\\partial^2 V}{\\partial S^2}+rS\\frac{\\partial V}{\\partial S}-rV=0.\\]`}
          Here, {"\\(t\\)"} is time in years, {"\\(S(t)\\)"} is the underlying
          asset price at time {"\\(t\\)"}, {"\\(V(S,t)\\)"} is the value of the
          option as a function of the asset price and time (which is what we
          want to find!), {"\\(\\sigma\\)"} is the{" "}
          <strong>annual volatility</strong> of the asset (the variance of its
          annual returns), and {"\\(r\\)"} is the{" "}
          <strong>risk-free interest rate</strong> (how much a risk-free
          investment returns, with a real-life approximation being something
          like a treasury bill or GIC). This PDE governs the dynamics of a
          European option according to the{" "}
          <strong>Black-Scholes-Merton model</strong>, and it can actually be
          analytically solved for {"\\(V\\)"}. While some of assumptions made in
          the model are unrealistic (such as {"\\(\\sigma\\)"} and {"\\(r\\)"}{" "}
          being constant), it was still revolutionary at the time of
          publication.
        </p>
        <p>
          However, this only prices European options - what about American ones?
          Well, a lower bound for the value of an American option will be a
          European one with the same strike and expiry date, since all American
          options can be treated as European options (exercising before expiry
          is optional). However, American options have an associated{" "}
          <strong>early-exercise premium</strong> which gives them more value.
          Say you have an American and European call with a $100 strike on the
          same stock expiring in a year, and right now that stock is at $200. If
          you want, you can exercise the American one right now and pocket $100.
          Meanwhile, your European call has to just sit there, and maybe in six
          months the company will go bankrupt and it will expire worthless.
        </p>
        <p>
          We need a way to compute this premium, and the technique developed by{" "}
          <a
            className="linkPurple"
            href="https://doi.org/10.1016/S0165-1889(02)00086-6"
          >
            Diego García
          </a>{" "}
          is what I'll be talking about today. For proofs of the theorems and
          further references, please read the paper. It extends a method used to
          price European options, so let's cover that first. Suppose we have a
          European option expiring in time {"\\(T\\)"} with strike price{" "}
          {"\\(K\\)"}. Let {"\\(S_t\\)"} be the price of the underlying asset at
          time {"\\(t\\in [0,T]\\)"}. At time of expiry our option can be
          exercised for some <strong>payoff</strong> {"\\(h(S_T)\\)"} (for
          example, if we have a call then {"\\(h(S_T)=\\max(S_T-K,0)\\)"}). The
          expected profit we'll make in time {"\\(T\\)"} is therefore{" "}
          {"\\(\\mathbb{E}(h(S_T)).\\)"} Now, here's the crucial detail: instead
          of buying the option for price {"\\(p\\)"}, we can always invest{" "}
          {"\\(p\\)"} at the risk-free rate {"\\(r\\)"} for time {"\\(T\\)"},
          which will yield {"\\(pe^{rT}\\)"}. If this investment yields less
          than the expected payoff (i.e. if{" "}
          {"\\(pe^{rT}<\\mathbb{E}(h(S_T))\\)"}) then the option is undervalued
          (why invest {"\\(p\\)"} when buying the option yields more profit on
          average?). If it's more, it's overvalued. This means the true option
          value {"\\(V\\)"} is given by
          {`\\[Ve^{rT}=\\mathbb{E}(h(S_T)).\\]`}
        </p>
        <p>
          To compute this expectation and solve for {"\\(V\\)"} we can use{" "}
          <strong>Monte-Carlo simulation</strong>. The idea to look at many
          potential trajectories for the stock price and their corresponding
          payoffs, and take their average. To do this, we need a way to simulate
          potential trajectories. The way this is done is not by thinking of the
          stock price as a random variable, but instead as a stochastic process:
          a collection of random variables {"\\(\\{S_t\\}_{t\\geq 0}\\)"}. We
          then make the following assumptions about this process:
        </p>
        <ol>
          <li>
            The price ratio {"\\(S_{t+s}/S_t\\)"} for any times{" "}
            {"\\(t\\geq 0\\)"} and {"\\(s>0\\)"} is independent of {"\\(t\\)"}.
          </li>
          <li>
            Given times {"\\(0\\leq t_0<t_1<\\cdots<t_n\\)"}, the price ratios{" "}
            {"\\(S_{t_{i+1}}/S_{t_i}\\)"} and {"\\(S_{t_{j+1}}/S_{t_j}\\)"} are
            mutually independent for any {"\\(0\\leq i<j<n\\)"}.
          </li>
        </ol>
        <p>
          These ratios are random variables corresponding to percentage changes
          in the stock price over a particular time period. So, the first
          condition says that the percentage change over a time period should
          have nothing to do with the starting time, and the second says
          percentage changes over different time periods have nothing to do with
          each other. Very broadly, this encodes the adage "past performance is
          not indicative of future performance".
        </p>
        <p>
          Of importance is that we'll be modelling the asset price on a
          computer, which is fundamentally discrete. So, instead of{" "}
          {"\\(t\\in [0,T]\\)"} we actually have{" "}
          {"\\(t\\in \\{n\\Delta:n=0,1,\\dots, N\\}=\\mathscr{T}\\)"}, where{" "}
          {"\\(N+1\\)"} is the number of discrete times we have and{" "}
          {"\\(\\Delta=T/N\\)"} is the time-step between them. As{" "}
          {"\\(N\\to\\infty\\)"} we get closer to modelling continuous time.
          Now, let {"\\(S_n=S_{n\\Delta}\\)"} be the asset price at the{" "}
          {"\\(n\\)"}-th time-step. Our assumptions then let us prove the
          following:
        </p>
        <Theorem
          statement="
            Fix some initial asset price \(S_0\) and let \(\{Z_n\}\) be \(N\) i.i.d samples of standard
            Gaussian. Then, the discrete asset price process obeys the following:
            \[
                S_{n}=S_{n-1}\exp((r-\delta-\sigma^2/2)\Delta+\sigma\sqrt{\Delta}Z_{n}).
            \]
            "
        />
        <p>
          Note the introduction of {"\\(\\delta\\)"}, representing the{" "}
          <strong>continuous dividend yield</strong> of our asset. This was
          missing before because in the Black-Scholes-Merton model they assume
          dividends don't exist (i.e. that {"\\(\\delta=0\\)"}). Here are some
          examples of what these discrete paths look like:
        </p>
        <Figure
          no="1"
          height="50vh"
          src={StockPaths}
          caption="Daily simulations of an asset for one year (252 trading days)."
        />
        <p>
          Now, fix some number of steps {"\\(N\\)"}, and let {"\\(S^j_n\\)"} be
          the {"\\(n\\)"}-th step of the {"\\(j\\)"}-th simulation for{" "}
          {"\\(j=1,\\cdots,B\\)"}. Of course, {"\\(S_0^j=S_0\\)"} for all{" "}
          {"\\(j\\)"}. By the central limit theorem if {"\\(B\\)"} is large
          enough then
          {`\\[\\mathbb{E}(h(S_T))\\approx\\frac{1}{B}\\sum_{j=1}^B h(S_N^j)\\]`}
          and thus
          {`\\[V\\approx \\frac{(1+r\\Delta)^{-N}}{B}\\sum_{j=1}^B h(S_N^j),\\]`}
          where we note the switch to discrete interest rate compounding over{" "}
          {"\\(N\\)"} periods. As {"\\(B\\to\\infty\\)"} and{" "}
          {"\\(N\\to\\infty\\)"}, this will appraoch the true value of{" "}
          {"\\(V\\)"}.
        </p>
        <p>
          What's up with American options? For starters, we have a more
          complicated payoff function {"\\(h(S_t,t)\\)"} since we get to choose
          the time we exercise. The value of the option is then{" "}
          {
            "\\[V=\\max_{t\\in\\mathscr{T}}\\mathbb{E}\\left(e^{-rt}h(S_t,t)\\right),\\]"
          }
          as we want to the find the choice of {"\\(t\\)"} which maximizes the
          expected payoff at time {"\\(t\\)"}. Technically, this actually models
          a <strong>Bermudan option</strong> since we have a discrete amount of
          exercise dates. This is just a consequence of our simulation though,
          with the desired American case coming out as we refine the time
          period.
        </p>
        <p>
          The correct theory for handling this maximum function is that of{" "}
          <strong>optimal stopping</strong>. In the language of options, this is
          encoded by an <strong>exercise rule</strong>, a policy which tells us
          whether we should exercise the option at a particular time. The only
          information we can use to make the decision to exercise or not is the
          asset price, so formally an exercise rule {"\\(\\mathscr{E}\\)"} is an
          assignment to each time {"\\(t\\)"} a set{" "}
          {"\\(\\mathscr{E}_t\\subseteq [0,\\infty)\\)"}, with the understanding
          if {"\\(S_t\\in\\mathscr{E}_t\\)"} then the option should be
          exercised. Given an exercise rule and an instantiation of the asset
          price process we can define its <strong>stopping time</strong>
          {`\\[t_\\mathscr{E}=\\min\\{t:S_t\\in\\mathscr{E}_t\\}.\\]`}
          This is the earliest point in time at which we should exercise the
          option according to the exercise rule; in the event no such time
          exists, we simply let the option expire. Now, we can define the value
          of the option under this exercise rule by
          {`\\[V(\\mathscr{E})=\\mathbb{E}\\left(e^{-rt_\\mathscr{E}}h(S_{t_\\mathscr{E}},t_{\\mathscr{E}})\\right).\\]`}
          This culminates in the following critical theorem:
        </p>
        <Theorem statement="There exists some exercise rule \(\mathscr{E}^\ast\), called the optimal exercise rule, such that \(V(\mathscr{E}^\ast)=V\)." />
        <p>
          Of course, we'd like to find such an exercise rule. Thankfully, we can
          parametrize it with finitely-many parametres:
        </p>
        <Theorem statement="For an American call the optimal exercise rule \(\mathscr{E}^\ast\) satisfies \(\mathscr{E}^\ast_t\in\{[\vartheta_t,\infty),(\vartheta_t,\infty)\}\) where each \(\vartheta_t\in [0,\infty)\). In particular, \(\mathscr{E}^\ast\) is fully described by the tuple \((\vartheta_0,\dots,\vartheta_T)\)." />
        <Proof proof="Recall that our payoff is given by \(h(S_t,t)=\max(S_t-K,0)\). Note that for fixed \(t\) the function is increasing in \(S_t\). Let \(\vartheta_t=\inf\mathscr{E}^\ast_t\), and since prices are non-negative we know \(\vartheta_t\geq 0\). Now, take any \(\alpha>\vartheta_t\) and suppose \(\alpha\not\in\mathscr{E}^\ast_t\). However, \(\max(\alpha-K,0)\geq\max(\vartheta_t-K,0)\), so it must be that \(\alpha\in\mathscr{E}^\ast_t\) for otherwise we could get a higher expected payoff by considering an identical exercise rule which includes \(\alpha\) at time \(t\). Therefore, \((\vartheta_t,\infty)\subseteq\mathscr{E}^\ast_t\). If \(\vartheta_t\not\in\mathscr{E}^\ast_t\) this is actually equality, otherwise \(\mathscr{E}^\ast_t=[\vartheta_t,\infty)\)." />
        <p>
          The case for puts is identical. Next define{" "}
          {"\\(\\Theta\\subseteq\\mathbb{R}^{N+1}\\)"} to be the space of
          possible parametrizations. For any {"\\(\\vartheta\\in\\Theta\\)"}{" "}
          define {"\\(\\mathscr{E}(\\vartheta\\))"} to be the exercise rule
          parametrized by {"\\(\\vartheta\\)"}, and let{" "}
          {"\\(t(\\vartheta)=t_{\\mathscr{E}(\\vartheta)}\\)"} be its
          corresponding stopping time. Define the value of a parametrization by
          {`\\[V(\\vartheta)=\\mathbb{E}\\left(e^{-rt(\\vartheta)}h(S_{t(\\vartheta)},t(\\vartheta))\\right).\\]`}
          Let {"\\(\\vartheta^\\ast\\)"} be a parametrization such that{" "}
          {"\\(\\mathscr{E}^\\ast=\\mathscr{E}(\\vartheta^\\ast)\\)"}. By the
          previous theorem, we then have {"\\(V(\\vartheta^\\ast)=V\\)"}. We've
          now reformulated our task to finding a solution to the optimization
          problem
          {`\\[\\vartheta^\\ast\\in\\underset{\\vartheta\\in\\Theta}{\\operatorname{arg\\ max}}\\ V(\\vartheta)=\\underset{\\vartheta\\in\\Theta}{\\operatorname{arg\\ max}}\\ \\mathbb{E}\\left(e^{-rt(\\vartheta)}h(S_{t(\\vartheta)},t(\\vartheta))\\right).\\]`}
          In practice, a solution {"\\(\\vartheta^\\ast\\)"} will always exist
          and even be unique since we can assume that {"\\(\\Theta\\)"} is
          compact (the strike is always a lower bound for a parametre, and an
          upper bound will exist since the asset never experiences unbounded
          growth prior to our finite time-to-expiry) and that{" "}
          {"\\(V(\\vartheta)\\)"} is continuous.
        </p>
        <p>
          Now, if we knew {"\\(\\vartheta^\\ast\\)"} we could simply use
          Monte-Carlo simulations right now to price the option by just
          exercising it in the simulations according to the optimal rule. That
          is,
          {`\\[V=\\mathbb{E}\\left(\\frac{1}{B}\\sum_{j=1}^B e^{-rt(\\vartheta^\\ast)}h(S^j_{t(\\vartheta^\\ast)},t(\\vartheta^\\ast))\\right).\\]`}
          Alas, we don't know it. But, we can "bootstrap" a solution. First,
          we'll estimate {"\\(\\vartheta^\\ast\\)"}, and then use Monte-Carlo
          methods on this estimate.
        </p>
        <p>
          In particular, let
          {`\\[V_B(\\vartheta)=\\frac{1}{B}\\sum_{j=1}^B e^{-rt(\\vartheta)}h(S^j_{t(\\vartheta)},t(\\vartheta))\\]`}
          and set
          {`\\[\\hat{\\vartheta}_B=\\underset{\\vartheta\\in\\Theta}{\\operatorname{arg\\ max}}\\ V_B(\\vartheta).\\]`}
          With {"\\(\\hat{V}_B=V_B(\\hat{\\vartheta}_B)\\)"}, we have the
          following result:
        </p>
        <Theorem
          name="García"
          statement="The estimator \(\hat{V}_B\) converges almost surely to \(V\), as does \(\hat{\vartheta}_B\) to \(\vartheta^\ast\). Moreover, \(\hat{V}_B\) is biased high."
        />
        <p>
          The high bias has an intuitive appeal to an artefact of the
          optimization process. First, by definition we have{" "}
          {"\\(\\mathbb{E}(V_B(\\vartheta^\\ast))=V\\)"}. Then, recall we choose{" "}
          {"\\(\\hat{\\vartheta}_B\\)"} so that{" "}
          {"\\(V_B(\\hat{\\vartheta}_B)\\)"} is as large as possible. Together
          this yields
          {`\\[\\hat{V}_B=V_B(\\hat{\\vartheta}_B)\\geq V_B(\\vartheta^\\ast)\\Longrightarrow \\hat{V}_B\\gtrapprox V.\\]`}
        </p>
        <p>
          Now, as planned, we'll use {"\\(\\hat{\\vartheta}_B\\)"} to form our
          second estimator
          {`\\[\\hat{v}_B^b=\\frac{1}{b}\\sum_{k=1}^b e^{-rt(\\hat{\\vartheta}_B)}h\\left(S_{t(\\hat{\\vartheta}_B)}^k,t(\\hat{\\vartheta}_B)\\right).\\]`}
          We'll typically take {"\\(b=B\\)"}. However, it's very important that
          we still use a new, independent simulation in this computation.
        </p>
        <Theorem
          name="García"
          statement="The estimator \(\hat{v}^b_B\) converges in probability to \(V\). Moreover, \(\hat{v}^b_B\) is biased low."
        />
        <p>
          Put together, we have an estimator which should be a little lower than
          the true value ({"\\(\\hat{v}^b_B\\)"}), and one which should be a
          little higher ({"\\(\\hat{V}_B\\)"}). A good point estimate is then
          their average: {"\\((\\hat{v}^b_B+\\hat{V}_B)/2\\)"}. We can also form
          a confidence interval if we generate several of these estimators. Let{" "}
          {"\\(\\mu(\\hat{v}^b_B)\\)"} and {"\\(\\mu(\\hat{V}_B)\\)"} be their
          averages and {"\\(s(\\hat{v}^b_B)\\)"} and {"\\(s(\\hat{V}_B)\\)"} be
          their sample standard deviations, respectively. Then, with{" "}
          {"\\(z_\\alpha\\)"} being the {"\\(z\\)"}-score corresponding to a
          type one error rate of {"\\(\\alpha\\)"}, an approximate{" "}
          {"\\((1-\\alpha)100\\%\\)"} confidence interval is
          {`\\[\\left(\\mu(\\hat{v}^b_B)-z_{\\alpha/2}s(\\hat{v}^b_B),\\mu(\\hat{V}_B)+z_{\\alpha/2}s(\\hat{V}_B)\\right).\\]`}
        </p>
        <p>
          Let's implement this procedure and see how accurate it actually is.
          We'll use Python, and specifically try to price American calls. The
          final result is available on my{" "}
          <a
            className="linkPurple"
            href="https://github.com/akazachek/American-Option-Monte-Carlo"
          >
            GitHub
          </a>
          . Our first step is to implement the Monte-Carlo simulator. Here are
          the variable names we'll use and what they'll represent:
          {`\\[\\begin{aligned}&\\texttt{s0}\\coloneqq s_0\\quad \\texttt{r}\\coloneqq r\\quad \\texttt{vol}\\coloneqq\\sigma\\quad \\texttt{div}\\coloneqq\\delta\\\\
            &\\texttt{time}\\coloneqq T\\quad \\texttt{num\\textunderscore steps}\\coloneqq N+1\\quad \\texttt{num\\textunderscore paths}\\coloneqq B.\\end{aligned}\\]`}
          First let's initialize an empty array {"\\(\\texttt{paths}\\)"} with{" "}
          {"\\(B\\)"} rows and {"\\(N+1\\)"} columns. This is what we'll return,
          so once we're done we'll have {"\\(\\texttt{paths}[j,t]=S_t^j\\)"}.
          The only thing we're missing from the recursive definition defining a
          price process is the time-step. So, we compute{" "}
          {"\\(\\texttt{time\\textunderscore step}\\coloneqq \\Delta=T/N\\)"},
          set {"\\(\\texttt{paths}[j,0]=s_0\\)"}, and peform the recursion:
        </p>
        <CodeBlock
          language="python"
          code={`import numpy as np
from numpy.random import standard_normal
def monte_carlo(s0, r, vol, div, time, num_steps, num_paths):
    paths = np.zeros((num_paths, num_steps))
    time_step = time / (num_steps - 1)
    for path in range(num_paths):
        paths[path, 0] = s0
        for step in range(1, num_steps):
            paths[path, step] = paths[path, step - 1]*np.exp( (r - div - vol**2 / 2.)*time_step + 
                                                              vol*np.sqrt(time_step)*standard_normal() )
    return paths`}
        />
        <p>
          The first estimator is {"\\(\\hat{V}_B\\)"}. Part of computing it
          involves finding the value of a exercise rule{" "}
          {"\\(V_B(\\vartheta)\\)"}, which is what we'll do next. Note that even
          though our simulation contains {"\\(N+1\\)"} points, our
          parametrization only needs {"\\(N\\)"} many. This is because we know{" "}
          {"\\(\\mathscr{E}^\\ast_T=[K,\\infty)\\)"}, and so we can assume{" "}
          {"\\(\\vartheta_T=K\\)"} each time. As input we thus take
          {`\\[(\\vartheta_0,\\dots,\\vartheta_{T-\\Delta})\\eqqcolon\\texttt{exercise\\textunderscore rules}.\\]`}
          We then append {"\\(K\\eqqcolon\\texttt{strike}\\)"} to{" "}
          {"\\(\\texttt{exercise\\textunderscore rules}\\)"} (call this{" "}
          {"\\(\\vartheta\\)"}), and search each row of{" "}
          {"\\(\\texttt{paths}\\)"} to find {"\\(t(\\vartheta)\\)"} for that
          particular simulation. Note the suggestive change in language, with{" "}
          {"\\(\\texttt{exercise\\textunderscore dates}\\coloneqq N+1\\)"}{" "}
          denoting how many days throughout the time period we can exercise our
          option (spaced evenly throughout the life of the option):
        </p>
        <CodeBlock
          language="python"
          code={`def rule_value(exercise_rules, paths, strike, r):
    num_paths, exercise_dates = paths.shape
    exercise_rules = np.append(exercise_rules, strike)
    stopping_times = np.argmax(paths >= exercise_rules, axis = 1)`}
        />
        <p>
          There's actually a technical issue we need to correct. When we call{" "}
          {"\\(\\texttt{np.argmax}\\)"} we're searching a binary array whose
          entry at {"\\([j,t]\\)"} indicates if{" "}
          {
            "\\(\\texttt{paths}[j,t]\\geq\\texttt{exercise\\textunderscore rules}[t]\\)."
          }{" "}
          If this is never true for some fixed {"\\(j\\)"}, then each entry at{" "}
          {"\\([j,t]\\)"} is {"\\(0\\)"} and so we make the assignment
          {"\\(\\texttt{stopping\\textunderscore times}[j]=0\\)"}. But, recall
          that if the exercise rule is never satisfied we just let the option
          expire (not exercise it on the first day!). So, if{" "}
          {"\\(\\texttt{stopping\\textunderscore times}[j]=0\\)"} we need to
          manually check if{" "}
          {
            "\\(\\texttt{paths}[j,0]\\geq\\texttt{exercise\\textunderscore rules}[0]\\)"
          }
          , and if not then we set{" "}
          {"\\(\\texttt{stopping\\textunderscore times}[j]=N\\)"}:
        </p>
        <CodeBlock
          language="python"
          start="5"
          code={`    zeros = np.nonzero(stopping_times == 0)
    if len(zeros) != 0:
        zeros = zeros[0]
        initial_exercise_profit = paths[zeros, 0] - exercise_rules[0]
        false_exercises = zeros[np.where(initial_exercise_profit < 0)]
        stopping_times[false_exercises] = exercise_dates - 1`}
        />
        <p>
          We then compute the payoffs and return the value. Note that the
          optimization algorithm we'll use later searches for minima, hence we
          add a negative before returning:
        </p>
        <CodeBlock
          language="python"
          start="11"
          code={`    exercise_values = paths[np.arange(num_paths), stopping_times]

    discounts = np.exp(-r*stopping_times / (exercise_dates - 1))
    payoffs = np.maximum(exercise_values - strike, np.zeros(num_paths))

    value = np.dot(discounts, payoffs) / num_paths
    return -value`}
        />
        <p>
          We're now ready to optimize and find {"\\(\\hat{V}_B\\)"}. Now, since{" "}
          {"\\(V_B(\\vartheta)\\)"} is quite ill-behaved (it's not even
          continuous, let alone differentiable!) we need to be careful with our
          optimization procedure. I opted to use Nelder-Mead due to its
          flexibility. However, Nelder-Mead is especially prone to getting stuck
          in local minima due to the nature of it contracting its starting
          simplex. To remedy this, we'll optimize{" "}
          {"\\(\\texttt{num\\textunderscore simplex}\\)"} times using different
          starting simplices, storing the results in {"\\(\\texttt{optims}\\)"}{" "}
          and later taking the best one. Each simplex will be some constant
          parametre {"\\(C\\)"} (i.e. {"\\(\\vartheta_t=C\\)"} for all{" "}
          {"\\(t\\)"}), and {"\\(C\\)"} will be linearly interpolated along the
          interval {"\\([s_0,1.25s_0]\\)"} in{" "}
          {"\\(\\texttt{num\\textunderscore simplex}\\)"} points, forming the
          array {"\\(\\texttt{guesses}\\)"}. We also specify the lower bounds{" "}
          {"\\(\\vartheta_t\\geq K\\)"}. Here,{" "}
          {"\\(\\texttt{duration}\\coloneqq T\\)"} signifies the time-to-expiry:
        </p>
        <CodeBlock
          language="python"
          code={`import scipy.optimize as so
def high_estimator(strike, s0, r, vol, div, duration, exercise_dates, num_paths, num_simplex):
    
    paths = monte_carlo(s0, r, vol, div, duration, exercise_dates, num_paths)
    bounds = ((strike, np.inf),) * (exercise_dates - 1)
    guesses = np.linspace(1., 1.25, num_simplex)

    optims = []
    for i in range(num_simplex):
        optims.append(so.minimize(rule_value, np.full(exercise_dates - 1, strike * guesses[i]), 
                                              args = (paths, strike, r),
                                              method = "nelder-mead", 
                                              bounds = bounds,
                                              options = {
                                                  "xatol": 1e-7,
                                                  "fatol": 1e-7,
                                              }))`}
        />
        <p>
          The SciPy {"\\(\\texttt{so.minimize}\\)"} function returns a
          dictionary, with key {"\\(\\texttt{x}\\)"} storing the minimum
          argument and {"\\(\\texttt{fun}\\)"} storing the minimum value. We'll
          form an array storing all the minima and corresponding rules we got
          while optimizing. Then, we can take the best minimum as our estimator{" "}
          {
            "\\( -\\hat{V}_B\\eqqcolon \\texttt{high\\textunderscore estimator}\\)"
          }{" "}
          and the associated rule as our estimator{" "}
          {"\\(\\hat{\\vartheta}_B\\eqqcolon\\texttt{rule}\\)"}:
        </p>
        <CodeBlock
          language="python"
          start="18"
          code={`    rules = np.zeros((num_simplex, exercise_dates - 1))
    high_estimators = np.zeros(num_simplex)
    for i in range(num_simplex):
        rules[i] = optims[i]["x"]
        high_estimators[i] = optims[i]["fun"]
      
    where = np.argmin(high_estimators)
    high_estimator = high_estimators[where]
    rule = rules[where]

    return (-high_estimator, rule)`}
        />
        <p>
          All we're left with now is calculating {"\\(\\hat{v}_B^b\\)"}. As
          before, this function will take in parametres specifying a rule for
          every day but the day-of-expiry, since our function{" "}
          {"\\(\\texttt{rule\\textunderscore value}\\)"} knows to use the strike
          for that day:
        </p>
        <CodeBlock
          language="python"
          start="18"
          code={`def low_estimator(exercise_rules, strike, s0, r, vol, div, duration, num_paths):
    exercise_dates = exercise_rules.shape[0] + 1
    paths = monte_carlo(s0, r, vol, div, duration, exercise_dates, num_paths)
    low_estimator= rule_value(exercise_rules, paths, strike, r)
    return -low_estimator`}
        />
        <p>
          Our last step is to combine these functions into a procedure which
          repeats the algorithm {"\\(\\texttt{estimates}\\)"} times so we can
          form a {"\\((1-\\texttt{alpha})100\\%\\)"} confidence interval. Note
          that we take {"\\(B=b\\)"}:
        </p>
        <CodeBlock
          language="python"
          code={`import scipy.stats as ss
def pricer(strike, s0, r, vol, div, duration, exercise_dates, num_paths, num_simplex, estimates, alpha):
    lows = np.zeros(estimates)
    highs = np.zeros(estimates)
    rules = np.zeros((estimates, exercise_dates - 1))
  
    # perform repeated simulations for the high and low estimators
    for i in range(estimates):
        highs[i], rules[i,] = estimators.high_estimator(strike, s0, r, vol, div, duration, 
                                                        exercise_dates, num_paths, num_simplex)
        lows[i] = estimators.low_estimator(rules[i,], strike, s0, r, vol, div, duration, num_paths)
  
    # get sample standard deviations
    if estimates == 1:
        low_std = 0
        high_std = 0
    else:
        low_std = np.std(lows, ddof = 1)
        high_std = np.std(highs, ddof = 1)
    low = np.mean(lows)
    high = np.mean(highs)
    rules = np.mean(rules, axis=0)
      
    z = ss.norm.ppf(1 - alpha / 2.)
    interval = (low - z*low_std, high + z*high_std)
    point = (low + high) / 2
      
    return (interval, point, rules)`}
        />
        <p>
          To compare our results with the paper, we'll run the same experiment
          as they did in their Table 2: {"\\(r=0.05\\)"}, {"\\(\\sigma=0.2\\)"},{" "}
          {"\\(\\delta=0.1\\)"}, {"\\(T=1\\)"}, {"\\(N=3\\)"}, {"\\(K=100\\)"},
          and {"\\(S_0\\in\\{70,80,90,100,110,120\\}\\)"}. They achieved the
          following results (the relative error is with respect to the point
          estimate):
        </p>
        <div className="data">
          <table>
            <thead>
              <tr>
                <th>{"\\(s_0\\)"}</th>
                <th>Confidence Interval</th>
                <th>Point Estimate</th>
                <th>True Price</th>
                <th>Relative Error</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>70</td>
                <td>(0.121,0.127)</td>
                <td>0.124</td>
                <td>0.121</td>
                <td>2.49%</td>
              </tr>
              <tr>
                <td>80</td>
                <td>(0.661,0.694)</td>
                <td>0.677</td>
                <td>0.670</td>
                <td>1.80%</td>
              </tr>
              <tr>
                <td>90</td>
                <td>(2.283,2.349)</td>
                <td>2.316</td>
                <td>2.303</td>
                <td>0.66%</td>
              </tr>
              <tr>
                <td>100</td>
                <td>(5.664,5.807)</td>
                <td>5.735</td>
                <td>5.731</td>
                <td>0.25%</td>
              </tr>
              <tr>
                <td>110</td>
                <td>(11.209,11.434)</td>
                <td>11.329</td>
                <td>11.341</td>
                <td>-0.01%</td>
              </tr>
              <tr>
                <td>120</td>
                <td>(20,20)</td>
                <td>20</td>
                <td>20</td>
                <td>0%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Here are our results with {"\\(B=50000\\)"},{" "}
          {"\\(\\texttt{num\\textunderscore simplex}=10\\)"}, and{" "}
          {"\\(\\texttt{estimates}=40\\)"}. Note my relative error is slightly
          inaccurate as I did the rounding after the calculations:
        </p>
        <div className="data">
          <table>
            <thead>
              <tr>
                <th>{"\\(s_0\\)"}</th>
                <th>Confidence Interval</th>
                <th>Point Estimate</th>
                <th>True Price</th>
                <th>Relative Error</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>70</td>
                <td>(0.112,0.135)</td>
                <td>0.122</td>
                <td>0.121</td>
                <td>0.945%</td>
              </tr>
              <tr>
                <td>80</td>
                <td>(0.638,0.700)</td>
                <td>0.672</td>
                <td>0.670</td>
                <td>0.325%</td>
              </tr>
              <tr>
                <td>90</td>
                <td>(2.248,2.377)</td>
                <td>2.307</td>
                <td>2.303</td>
                <td>0.171%</td>
              </tr>
              <tr>
                <td>100</td>
                <td>(5.652,5.821)</td>
                <td>5.732</td>
                <td>5.731</td>
                <td>0.023%</td>
              </tr>
              <tr>
                <td>110</td>
                <td>(11.248,11.456)</td>
                <td>11.347</td>
                <td>11.341</td>
                <td>0.053%</td>
              </tr>
              <tr>
                <td>120</td>
                <td>(20.000,20.000)</td>
                <td>20.000</td>
                <td>20</td>
                <td>0%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          We still have good results even after dropping to {"\\(B=10000\\)"}:
        </p>
        <div className="data">
          <table>
            <thead>
              <tr>
                <th>{"\\(s_0\\)"}</th>
                <th>Confidence Interval</th>
                <th>Point Estimate</th>
                <th>True Price</th>
                <th>Relative Error</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>70</td>
                <td>(0.095,0.150)</td>
                <td>0.122</td>
                <td>0.121</td>
                <td>0.547%</td>
              </tr>
              <tr>
                <td>80</td>
                <td>(0.601,0.731)</td>
                <td>0.665</td>
                <td>0.670</td>
                <td>0.806%</td>
              </tr>
              <tr>
                <td>90</td>
                <td>(2.186,2.465)</td>
                <td>2.309</td>
                <td>2.303</td>
                <td>0.261%</td>
              </tr>
              <tr>
                <td>100</td>
                <td>(5.566,5.950)</td>
                <td>5.734</td>
                <td>5.731</td>
                <td>0.052%</td>
              </tr>
              <tr>
                <td>110</td>
                <td>(11.140,11.608)</td>
                <td>11.362</td>
                <td>11.341</td>
                <td>0.183%</td>
              </tr>
              <tr>
                <td>120</td>
                <td>(20.000,20.000)</td>
                <td>20.000</td>
                <td>20</td>
                <td>0%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          After many numerical experiments, it appears we generally have better
          point estimates than the paper, though our confidence intervals are
          usually larger.
        </p>
        <p>
          Also, here are some of the suggested exercise rules. With{" "}
          {"\\(s_0=100\\)"} our algorithm returned
          {`\\[\\hat{\\vartheta}=(117.841,113.018,109.496),\\]`}
          and for {"\\(s_0=110\\)"} we had
          {`\\[\\hat{\\vartheta}=(122.926,113.020,109.791).\\]`}
          This is what we expect to see, since as the option gets closer to
          expiry we should be more willing to exercise it at a lower price than
          before.
        </p>
        <p>
          This is just one of the many ways of pricing options, and there are
          entire careers made out of trying to solve this problem. The advantage
          of this technique is that, as it simply involves simulation, it's
          robust to many changes in market assumptions. For instance, discrete
          dividend yields, variable interest rates, and stochastic volatility
          can all be accounted for by simplying including those in the
          Monte-Carlo simulations. The optimization process is quite tricky,
          however. It took me many attempts to find the right numbers and
          procedures to get acceptable results, and this was only possible
          because I had the aid of already knowing the correct answer. For a new
          problem or variation of this setup, calibration like this might be
          impossible, making it difficult to know if your valuations are
          trustworthy or not.
        </p>
      </div>
    );
  }
}

export default OptionMonteCarlo;
