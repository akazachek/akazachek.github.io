import React, { Component } from "react";
/* environments */
import Theorem from "../../../components/Theorem";
import Proof from "../../../components/Proof";

class LogIso extends Component {
  componentDidMount() {
    window.KaTeXRender();
  }

  render() {
    return (
      <div className="postContent leftMargin">
        <p>
          Logarithms are pretty simple functions first introduced in early high
          school as the answer to the question "What is the opposite of
          exponentiation?". However, there is actually a deeper history behind
          them, and that lies with their connection in group theory, which my
          friend mentioned to me and I presented today when I ran the problem
          solving session at my university.
        </p>
        <p>
          It is obvious that adding and subtracting numbers is easier than
          multiplying or dividing. After all, kids in elementary school become
          experts in the former, however even adults can have difficulty with
          fractions. Computationally, multiplication and division require far
          more resources as well, with the most optimal multiplication algorithm
          running in {"$\\mathcal{O}(n\\cdot \\log(n))$"}, while addition is
          simply {"$\\mathcal{O}(n)$"}. Thus, there is a lot of motivation to
          transform multiplication tasks into addition tasks, and from this came
          the concept of logarithms. However, it is worth examining what the
          idea of "transforming" an operations actually means. Hence, we examine
          groups.{" "}
        </p>
        <p>
          Consider some set $G$ with an operation $\ast$ defined on it, both of
          which are often written together as $(G,\ast)$. In order for this to
          become a <strong>group</strong>, we must have four requirements:
        </p>
        <ol>
          <li>For all $a,b\in G$, $a\ast b\in G$;</li>
          <li>For all $a,b,c\in G$, $(a\ast b)\ast c = a\ast(b\ast c)$;</li>
          <li>
            There exists some $e\in G$ (often called the identity) such that
            $e\ast a=a\ast e=e$ for all $a\in G$;
          </li>
          <li>
            Every $a\in G$ has associated with it some unique element{" "}
            {"$a^{-1}\\in G$"} such that {"$a\\ast a^{-1}=e$"}.
          </li>
        </ol>
        <p>
          Now, consider two groups, say $(G,\ast)$ and $(H,\cdot)$. Suppose we
          have some function $\varphi : G \longrightarrow H$ which satisfies
          $$\varphi(a\ast b)=\varphi(a)\cdot\varphi(b)$$ for all $a,b\in G$. We
          call this a group <strong>homomorphism</strong>. Note that nothing is
          specified about bijectivity or anything of the sort.
        </p>
        <p>
          This specific property is nice because it preserves group structure as
          we will see. For example, consider the identity of $G$, say $e$. Then,
          let $a\in G$. We see
          {"$$\\varphi(a)=\\varphi(e\\ast a)=\\varphi(e)\\cdot\\varphi(a).$$"}
          This necessitates $\varphi(e)$ to be the identity of $H$. So, group
          homomorphisms preserve identities.
        </p>
        <p>
          Now let us consider inverses, using $a$ again. We have
          {
            "$$\\varphi(e)=\\varphi(a\\ast a^{-1})=\\varphi(a)\\cdot\\varphi(a^{-1}).$$"
          }
          However as we know that $\varphi(e)$ is the identity of $H$, this
          means that {"$\\varphi(a^{-1})$"} is the inverse of $\varphi(a)$. In
          other words, {"$\\varphi(a^{-1})=(\\varphi(a))^{-1}$"}; inverses are
          preserved too.
        </p>
        <p>
          Lastly, we will consider powers. We use the intuitive notation
          $a\ast\cdots\ast a=a^n$ if we perform the operation $n$ times. Of
          course, $\varphi(a^1)=(\varphi(a))^1$. Now suppose this holds for all{" "}
          {"$k\\in\\mathbb{N}$"} where $k\gt 1$. Then, consider $k+1$. We have
          {
            "$$\\begin{aligned}\r\n\\varphi(a^{k+1})&=\\varphi(a^k\\ast a)\\\\\r\n&=\\varphi(a^k)\\cdot\\varphi(a)\\\\\r\n&=(\\varphi(a))^k\\cdot\\varphi(a)\\\\\r\n&=(\\varphi(a))^{k+1}\r\n\\end{aligned}$$"
          }
          and so this holds for any natural number, by induction. Thus,
          $\varphi$ preserves exponentiation.
        </p>
        <p>
          We know for all positive real numbers $x,y$ we have
          $$\log(xy)=\log(x)+\log(y).$$ The domain of the logarithm lets us
          interpret this as a group homomorphism between{" "}
          {"$(\\mathbb{R}^{+},\\cdot)$"} (where $\cdot$ is just multiplication)
          and {"$(\\mathbb{R},+)$"}; the identity elements are 1 and 0
          respectively; and inverses are given by inverting the number (since we
          do not have to worry about 0) and by subtraction, again respectively.
          We can then prove all commonly used log laws immediately from this
          fact. Even more significantly, as the logarithm is bijective with
          respect to these groups, this is actually a group{" "}
          <strong>isomorphism</strong>, and thus {"$(\\mathbb{R}^{+},\\cdot)$"}{" "}
          and {"$(\\mathbb{R},+)$"} are isomorphic. This is actually the heart
          of why the logarithm is so good at transforming these operations.
        </p>
        <p>
          I think this is a great example of deep mathematical structure behind
          something which can be very easily understood, and shows that "higher
          level" maths isn't necessarily inaccessible or super abstract to the
          point that no tangible examples exist. I also don't want to study for
          my microeconomics exam, so writing this post lets me procrastinate
          while still feeling productive.
        </p>
      </div>
    );
  }
}

export default LogIso;
