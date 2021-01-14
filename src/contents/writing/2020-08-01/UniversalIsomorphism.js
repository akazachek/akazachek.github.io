import React, { Component } from 'react';
/* environments */
import Figure from '../../../components/Figure';
import Theorem from '../../../components/Theorem';
import Proof from '../../../components/Proof';
import Diagram from '../../../components/Diagram';
/* diagrams */
import svg1 from './svg1.svg';
import svg2 from './svg2.svg';
import svg3 from './svg3.svg';
import svg4 from './svg4.svg';

class UniversalIsomorphism extends Component {
    
    componentDidMount() {
        window.KaTeXRender();
    }

    render() {
        return (
            <div class = 'postContent'>
                <p>
                    While reading Aluffi's <i>Algebra: Chapter 0</i> and finishing the proofs for the isomorphism theorems for modules, I began to grow slightly suspect that there was something going on behind the scenes, as the proofs were exactly the same as the ones for rings, which were the same as the ones for groups. Presented in his book, they all essentially stem from the fact that for a set-map \(f:A\longrightarrow B\) and the equivalence relation \(\sim\) defined by \(a\sim b\) if and only if \(f(a)=f(b)\), 
                </p>
                <Diagram src = {svg1} />
                <p style = {{textIndent: '0'}}>
                    where \(\pi_\sim\) is the projection to the equivalence class: \(\pi_\sim(a)=[a]_\sim\). 
                </p>
                <p>
                    How do we know {'\\(\\tilde{f}\\)'} exists, let alone is unique? As the diagram must commute, given any {'\\(\\tilde{f}: A/\\!\\!\\sim\\longrightarrow B\\)'} we must have {'\\(\\tilde{f}\\circ\\pi_\\sim(a)=f(a)\\)'} for all \(a\in A\), and so {'\\(\\tilde{f}\\)'} is forced to be \([a]_\sim\mapsto f(a)\). This is well-defined, recalling our definition of \(\sim\). In recognition of the fact that this map is unique and can be deduced from any arbitrary set-map, we say that this quotient, \(A/\!\!\sim\), satisfies a <strong>universal property</strong> in a particular category.
                </p>
                <p>
                    What is a <strong>category</strong>? It is just a collection of objects and <strong>morphisms</strong> between them, which are just ways to send one object to another. There are also a few checkmarks to glance over (such as existence of an identity and composition) to make sure your morphisms behave well, however they are not too important for us to formally cover. Above, for example, our objects are the ordered pair \((B,f)\) where \(B\) is a set and \(f\) is a map \(A\longrightarrow B\); it is much cleaner to write them as a diagram
                </p>
                <Diagram src = {svg2} />
                <p>
                    A morphism between two objects \((B,f)\) and \((C,g)\) must then be some way to transform the map \(f:A\longrightarrow B\) to \(g:A\longrightarrow C\). This can be done by any map \(j:B\longrightarrow C\) such that \(j\circ f = g\); lucidity can be found by thinking of \(j\) as a morphism "between diagrams", meaning the following commutes:
                </p>
                <Diagram src = {svg3} />
                <p>
                    Note that we are not guaranteed to have such a \(j\) to exist. However, this diagram seems awfully suspicious to the one involving quotients at the very beginning, and that is because one does exist there. In fact we say \(A/\!\!\sim\) (or rather, the diagram represented by \((A/\!\!\sim,\pi_\sim)\)) is <strong>initial</strong> in this category, because there exists a unique morphism from it to any other object.
                </p>
                <p>
                    Now, with the concept of universal properties clarified, one can consider the canonical decomposition of our original map \(f\), which is the commutative diagram
                </p>
                <Diagram src = {svg4} />
                <p>
                    From here, much of the work in proving the isomorphism theorems is done. Indeed, this is because groups and rings all have underlying sets, and we can restrict ourselves by ensuring \(f\) is a homomorphism, as that is just a set-map which preserves the artificially-imposed structure.  The formal way to do this is to work in a separate category, such as {'\\(\\mathbf{Grp}\\)'}, whose objects are groups and morphisms are group homomorphisms - precisely these structure-preserving set-maps. Once in this domain, define the quotient and prove it is initial again, and we can see why the first isomorphism theorem holds instantly, as if \(f\) is a surjective homomorphism then {'\\(\\mathrm{im}\\,f = B\\)'}. Note that I didn't even specify what type of homomorphism \(f\) was; the reasoning holds identically for groups, rings, and modules. The remaining theorems just aim to construct such a surjective \(f\). 
                </p>
                <p>
                    Above, however, is a massive asterisk. It is not always straightforward to define \(\sim\). For example, in {'\\(\\mathbf{Grp}\\)'} we cannot merely take a subgroup, but must also insist it is normal. Meanwhile in {'\\(\\mathbf{Ring}\\)'}, we don't even bother with subrings, and instead provide the (rather obtuse, if you arrive directly from subgroups) definition of an ideal. This is where my suspicion mentioned at the beginning was inlaid - is there any relationship between these quotients? Although algebra is often tautological in this way, with definitions being nice to work with because the definitions were changed until they were (c.f. the word "normal" appearing everywhere), it seemed too coincidental that a quotient could always be found, regardless of what structure was imposed. My suspicion lasted merely a few minutes, however, because the simple query "isomorphism theorems" immediately led to the answer - universal algebra.
                </p>
                <p>
                    Universal algebra begins by recognizing that all of these different structures boil down to two things - a set with operations. In particular, we call \(f\) an \(n\)-<strong>ary operation</strong> on a set \(A\) if \(f:A^n\longrightarrow A\). Then, we define a <strong>type</strong> to be a set {'\\(\\mathfrak{F}=\\left\\{(f_1,n_1),(f_2,n_2),\\dots\\right\\}\\)'} where each \(f_i\) is called an \(n_i\)-<strong>ary operation symbol</strong>. Be aware that the subscript will be dropped if distinguishing it from another symbol is not of concern. An <strong>algebra</strong> {'\\(\\mathcal{A}\\)'} of type {'\\(\\mathfrak{F}\\)'} is just an ordered pair \((A,F)\) where \(A\) is a set and \(F\) is a set of \(n\)-ary operations so that for each \(n_i\)-ary operation symbol {'\\(f_i\\in\\mathfrak{F}\\)'}, there is a corresponding \(n_i\)-ary operation {'\\(f_i^\\mathcal{A}\\in F\\)'}. We call \(A\) the <strong>universe</strong> of {'\\(\\mathcal{A}\\)'} and \(F\) its <strong>fundamental operations</strong>.   
                </p>
                <p>
                    For example, an algebra {'\\(\\mathcal{G}\\)'} of type {'\\(\\mathfrak{F}=\\left\\{(1,0),(^{-1},1),(\\cdot,2)\\right\\}\\)'} is an ordered pair \((G,F)\) with \(G\) any set and \(F\) a set containing a nullary (‽), unary, and binary operation on \(G\). What is a nullary operation? It must be an operation which returns something despite taking in no inputs - in other words, a constant function. We write {'\\(\\mathcal{G}=(G,1,^{-1},\\cdot)\\)'} to consolidate our operations in \(F\) with the symbols in {'\\(\\mathfrak{F}\\)'}. We call {'\\(\\mathcal{G}\\)'} a <strong>group</strong> if
                    {`
                    \\[
                    \\begin{aligned}
                    &\\cdot (1,x)=x=\\cdot\\,(x,1);\\\\
                    &\\cdot(x,^{-1}\\!(x))=1=\\cdot\\,(^{-1}\\!(x),x);\\\\
                    &\\cdot(x,y\\cdot z)=\\cdot\\,(x\\cdot y,z).
                    \\end{aligned}
                    \\]
                    `}
                </p>
                <p>
                    This is all looks quite cumbersome when written strictly treating these operations as functions. Thankfully, by taking liberty with the operation symbols, and giving the element to which \(1\) maps a rather suggestive symbol like \(e\), we can intuitively rewrite this as
                    {`
                    \\[
                        \\begin{aligned}
                        &e\\cdot x=x=x\\cdot e;\\\\
                        &x\\cdot x^{-1}=e=x^{-1}\\cdot x;\\\\
                        &x\\cdot(y\\cdot z)=(x\\cdot y)\\cdot z.
                        \\end{aligned}
                    \\]
                    `}
                    This is all very familiar - after all, it is just a group. However, note that we have fully described it without using any quantifying symbols. For example, the existence of an identity isn't denoted by "For all {'\\(x\\in\\mathcal{G}\\)'}...", but rather a consequence of an operation and how it interacts with other operations.
                </p>
                <p>
                    What might our subgroups look like? We know we need them to behave like a regular algebra on their own, but also be identified within its parent. So, for two algebras {'\\(\\mathcal{A}=(A,F_A)\\)'} and {'\\(\\mathcal{B}=(B,F_B)\\)'} of type {'\\(\\mathfrak{F}\\)'}, we say that {'\\(\\mathcal{B}\\)'} is a <strong>subalgebra</strong> of {'\\(\\mathcal{A}\\)'} if its universe is a <strong>subuniverse</strong> of {'\\(\\mathcal{A}\\)'}, meaning \(B\subseteq A\) and \(B\) is closed under \(F_A\), and the operations on {'\\(\\mathcal{B}\\)'} can be recovered by restricting the ones on {'\\(\\mathcal{A}\\)'}, meaning
                    {`
                    \\[
                        f^\\mathcal{B}_i(b_1,\\cdots,b_n)=f^\\mathcal{A}_i\\vert_\\mathcal{B}(b_1,\\dots,b_n)
                    \\]
                    `}
                    for all {'\\(f^\\mathcal{B}_i\\in F_B\\)'} and {'\\(f^\\mathcal{A}_i\\in F_A\\)'}.
                </p>
                <p>
                    Now, take an algebra {'\\(\\mathcal{A}=(A,F)\\)'} of type {'\\(\\mathfrak{F}\\)'}. Let \(\sim\) be an equivalence relation on {'\\(\\mathcal{A}\\)'}. It is important that we recall the set definition of an equivalence relation:
                    {`
                    \\[
                        \n\\sim\\,=\\left\\{(a,b)\\in A\\times A: \\mathrm{ (1), (2), (3)}\\right\\}\n
                    \\]\n
                    \\[
                        \n a\\in A\\Rightarrow (a,a)\\in A;\n
                    \\]\n
                    \\[ 
                        \n(a,b),(b,c)\\in A\\Rightarrow (a,c)\\in A;\n
                    \\]\n
                    \\[
                        \n(a,b)\\in A\\Rightarrow (b,a)\\in A.\n
                    \\] 
                    `}
                    We call \(\sim\) a <strong>congruence</strong> on {'\\(\\mathcal{A}\\)'} if given any \(n\)-ary {'\\(f\\in\\mathfrak{F}\\)'} and for all \(1\leq i\leq n\), we have
                    {`
                    \\[\na_i\\sim b_i\\Rightarrow f^\\mathcal{A}(a_1,\\dots,a_n)\\sim f^\\mathcal{A}(b_1,\\dots,b_n).\n\\]
                    `}
                    The definition of congruence is reminiscent of normal subgroups. The set of all congruences on {'\\(\\mathcal{A}\\)'} is denoted {'\\(\\mathrm{Con}\\,\\mathcal{A}\\)'}. An element of this that we will need in the distant future is \(\nabla_A=A\times A\), called the <strong>all relation</strong>.
                </p>
                <p>
                    Naturally then, we go on to define quotients. For any \(a\in A\) we call the equivalence class under \(\sim\) the set
                    {`\\[\na/\\!\\!\\sim\\,=\\left\\{b\\in\\mathcal{A}:a\\sim b\\right\\}\n\\]`}
                    and then we denote quotient of \(A\) by \(\sim\) to be
                    {'\\[\nA/\\!\\!\\sim\\,=\\left\\{a/\\!\\!\\sim:a\\in A\\right\\}.\n\\]'}
                </p>
                <p>
                    Note that for the above, congruencey isn't important at all. Any equivalence relation will do. However, to define an algebra with universe \(A/\!\!\sim\) that carries over the operations from {'\\(\\mathcal{A}\\)'}, we need the following to be well-defined:
                    {'\\[\nf^{\\mathcal{A}/\\sim}(a_1/\\!\\!\\sim,\\dots,a_n/\\!\\!\\sim)=f^\\mathcal{A}(a_1,\\dots,a_n)/\\!\\!\\sim.\n\\]'}
                    Indeed, congruences let us achieve that. We then say the quotient algebra of {'\\(\\mathcal{A}\\)'} by \(\sim\), {'\\(\\mathcal{A}/\\!\\!\\sim\\)'}, is the algebra \((A/\!\!\sim,F_\sim)\) where \(F_\sim\) is simply the set operations gained after performing the above for all \(f\in F\). Note that {'\\(\\mathcal{A}/\\!\\!\\sim\\)'} is clearly also an algebra of type {'\\(\\mathfrak{F}\\)'}. Of note is that quotients, in a sense, preserve inclusions:
                </p>
                <Theorem no = '1' statement = '
                Let \(\sim_1,\sim_2\,\in\mathrm{Con}\,\mathcal{A}\) so that \(\sim_2\,\subseteq\,\sim_1\). Then, \(\sim_1\! /\!\sim_2\) is a congruence on \(\mathcal{A}/\!\!\sim_2\).' />
                <Proof proof = '
                Take some \((\alpha_i,\beta_i)\in\sim_1\!/\!\sim_2\) for \(1\leq i\leq n\). Then, \((\alpha_i,\beta_i)=(a_i/\!\!\sim_2,b_i/\!\!\sim_2)\) where \((a_i,b_i)\in\,\sim_1\). As \(\sim_1\) is a congruence, we know for any \(n\)-ary \(f\), it holds that
                \[
                    (f^\mathcal{A}(a_1,\dots,a_n),f^\mathcal{A}(b_1,\dots,b_n))\in\,\sim_1
                \]
                and so
                \[
                \begin{aligned}
                    (f^\mathcal{A}&(a_1,\dots,a_n)/\!\!\sim_2,f^\mathcal{A}(b_1,\dots,b_n)/\!\!\sim_2)= \\
                    &(f^{\mathcal{A}/\sim_2}(a_1/\!\!\sim_2,\dots,a_n/\!\!\sim_2),f^{\mathcal{A}/\sim_2}(b_1/\!\!\sim_2,\dots,b_n/\!\!\sim_2)\in\sim_1\! /\!\!\sim_2
                \end{aligned}
                \]
                because \(\sim_2\) is also a congruence. ' />
                <p>
                    The last thing we need is a way to communicate between different algebras. This is done as one would expect. Given two algebras {'\\(\\mathcal{A}=\(A,F_A\)\\)'} and {'\\(\\mathcal{B}=\(B,F_B\)\\)'} of type {'\\(\\mathfrak{F}\\)'}, a map \(\alpha:A\longrightarrow B\) is called an <strong>algebra homomorphism</strong> between {'\\(\\mathcal{A}\\)'} and {'\\(\\mathcal{B}\\)'} if
                    {'\\[\n\\alpha f_i^\\mathcal{A}(a_1,\\dots,a_n)=f_i^\\mathcal{B}(\\alpha a_1,\\dots,\\alpha a_n)\n\\]'}
                    for every {'\\(f_i\\in\\mathfrak{F}\\)'}. We call a homomorphism an <strong>isomorphism</strong> if the underlying map is bijective.
                </p>
                <p>
                    We immediately have a homomorphism at our disposal. First, we define the <strong>natural map</strong> \(\nu_\sim:A\longrightarrow A/\!\!\sim\) to be \(a\mapsto a/\!\!\sim\). We call the homomorphism it induces the <strong>natural homomorphism</strong>. But is it actually a homomorphism, or am I lying?
                </p>
                <Theorem no = '1' statement = '
                The natural map is a homomorphism from \(\mathcal{A}\) to \(\mathcal{A}/\!\!\sim\).' />
                <Proof proof = '
                Take some \(n\)-ary operation symbol \(f\) in type \(\mathfrak{F}\) of \(\mathcal{A}\) and \(a_1,\dots,a_n\in A\). Then,
                \[
                    \begin{aligned}
                    \nu_\sim f^\mathcal{A}(a_1,\dots,a_n)&=f^\mathcal{A}(a_1,\dots,a_n)/\!\!\sim\\
                    &=f^{\mathcal{A}/\sim}(a_1/\!\!\sim,\dots,a_n/\!\!\sim)\\
                    &=f^{\mathcal{A}/\sim}(\nu_\sim a_1,\dots,\nu_\sim a_n)
                    \end{aligned}
                \] 
                so indeed, my conscience is clean. ' />
                <p>
                    The <strong>kernel</strong> of a homomorphism has a definition that seems slightly odd, however recall that we can't freely speak about "sending elements to zero" or anything of the sort, since that hinges on a specific choice of operations and identities. So, we instead define it as
                    {'\\[\n\\mathrm{ker}(\\alpha)=\\left\\{(a,b)\\in A\\times A: \\alpha(a)=\\alpha(b)\\right\\}.\n\\]'}
                    Note that if we take this definition and return to our definition of a group, for example, we quickly recover the usual definition of kernel. 
                </p>
                <p>
                Now, we have all the background we need to dig into the theorems. First, we handle some grunt-work.
                </p>
                <Theorem no = '3' statement = '
                The kernel of a homomorphism \(\alpha:\mathcal{A}\longrightarrow\mathcal{B}\) is a congruence on \(\mathcal{A}\).' />
                <Proof proof = '
                Take some \(n\)-ary \(f\) and Let \((a_i,b_i)\in\mathrm{ker}\,\alpha\) for \(1\leq i\leq n\). Then,
                \[
                    \begin{aligned}
                    \alpha f^\mathcal{A}(a_1,\dots,a_n)&=f^\mathcal{B}(\alpha a_1,\dots,\alpha a_n)\\
                    &=f^\mathcal{B}(\alpha b_1,\dots,\alpha b_n)\\
                    &=\alpha f^\mathcal{A}(b_1,\dots,b_n)
                    \end{aligned}
                \]
                meaning \((f^\mathcal{A}(a_1,\dots,a_n),f^\mathcal{A}(b_1,\dots,b_n))\in\mathrm{ker}\,\alpha\).' />
                <Theorem no = '4' statement = '
                Given homomorphisms \(\alpha:\mathcal{A}\longrightarrow\mathcal{B}\) and \(\beta:\mathcal{B}\longrightarrow\mathcal{C}\), the composition of the set-maps \(\beta\circ\alpha:A\longrightarrow C\) is a homomorphism from \(\mathcal{B}\) to \(\mathcal{C}\).' />
                <Proof proof = '
                Take some \(n\)-ary \(f\), and let \(a_1,\dots,a_n\in A\). Then,
                \[
                    \begin{aligned}
                    \beta\circ\alpha f^\mathcal{A}(a_1,\dots,a_n)&=\beta(\alpha   f^\mathcal{A}(a_1,\dots,a_n))\\
                    &=\beta f^\mathcal{B}(\alpha a_1,\dots,\alpha a_n)\\
                    &=f^\mathcal{C}(\beta(\alpha a_1),\dots,\beta(\alpha a_n))\\
                    &=f^\mathcal{C}(\beta\circ\alpha a_1,\dots,\beta\circ\alpha a_n)
                    \end{aligned}
                \]
                as desired. ' />
                <p>
                    Now, we tackle the first big result.
                </p>
                <Theorem no = '5' name = 'First Isomorphism Theorem (FIT)' statement ='
                If \(\alpha:\mathcal{A}\longrightarrow\mathcal{B}\) is a surjective homomorphism, then there exists an isomorphism from \(\mathcal{A}/\mathrm{ker}\,\alpha\) to \(\mathcal{B}\). In particular, this isomorphism is defined by \(a_{\mathrm{ker}\,\alpha}\mapsto\alpha a\).
                ' />
                <Proof proof = "
                Let \(\beta:A/\mathrm{ker}\,\alpha\longrightarrow B\) be the above mapping. Given some \(b\in B\), we know there exists some \(a\in A\) so that \(\alpha a=b\), by hypothesis. Then, \(\beta a_{\mathrm{ker}\,\alpha}=b\), so our map is surjective. Suppose now we have \(\beta a_{\mathrm{ker}\,\alpha} =\beta a'_{\mathrm{ker}\,\alpha} \). Thus, \(\alpha a=\alpha a'\), however this means \((a,a')\in\mathrm{ker}\,\alpha\), and thus \( a_{\mathrm{ker}\alpha}=a'_{\mathrm{ker}\,\alpha}\), so our map is injective.\[\]
                We just need to verify \(\beta\) plays nice with our operations. So, take some \(n\)-ary \(f\) and \(a_1,\dots,a_n\in A\), and we see
                \[
                    \begin{aligned}
                    \beta(f^{\mathcal{A}/\mathrm{ker}\,\alpha}(a_1/\mathrm{ker}\,\alpha,\dots,a_n/\mathrm{ker}\,\alpha))&=\beta(f^\mathcal{A}(a_1,\dots,a_n)/\mathrm{ker}\,\alpha)\\
                    &=\alpha f^\mathcal{A}(a_1,\dots,a_n)\\
                    &=f^\mathcal{B}(\alpha a_1,\dots,\alpha a_n)\\
                    &=f^\mathcal{B}(\beta(a_1/\mathrm{ker}\,\alpha),\dots,\beta(a_n/\mathrm{ker}\,\alpha))
                    \end{aligned}
                \]
                so \(\beta\) is indeed a homomorphism." />
                <p>
                    Using (2) and (4), we opt to write \(\alpha=\beta\circ\nu_\sim\) to encapsulate the definition of \(\beta\). Next, we recall (1) from the very beginning, and out-of-order tackle the third theorem:
                </p>
                <Theorem no = '6' name = 'Third Isomorphism Theorem' statement = '
                If \(\sim_1,\sim_2\,\in\mathrm{Con}\,A\) with \(\sim_2\,\subseteq\,\sim_1\), then
                \[
                    \alpha:\frac{A/\!\!\sim_2}{\sim_1\! /\!\!\sim_2}\longrightarrow A/\!\!\sim_1\quad\mathrm{by}\quad \frac{a/\!\!\sim_2}{\sim_1\! /\!\!\sim_2}\mapsto a/\!\!\sim_1
                \]
                is an isomorphism from \(\frac{\mathcal{A}/\sim_2}{\sim_1 /\sim_2}\) to \(\mathcal{A}/\!\!\sim_1\).' />
                <Proof proof = "
                Consider the map \(\alpha':A/\!\!\sim_2\longrightarrow A/\!\!\sim_1\) defined by \(a/\!\!\sim_2\,\mapsto a/\!\!\sim_1\). We see that this is well-defined, for if \(a/\!\!\sim_2=b/\!\!\sim_2\), then \((a,b)\in\sim_2\), and by inclusion, \((a,b)\in\,\sim_1\) so \(a/\!\!\sim_1=b/\!\!\sim_1\). Now, take any \(a/\!\!\sim_1\,\in A/\!\!\sim_1\), and it clear that \(\alpha'(a/\!\!\sim_2)\) reaches this element. Thus, \(\alpha'\) is surjective.\[\]
                Take now any \(n\)-ary \(f\), and \(a_1/\!\!\sim_2,\dots,a_n/\!\!\sim_2\,\in A/\!\!\sim_2\). We see
                \[
                    \begin{aligned}
                    \alpha'f^{\mathcal{A}/\sim_2}(a_1/\!\!\sim_2,\dots,a_n/\!\!\sim_2)&=\alpha'(f^\mathcal{A}(a_1,\dots,a_n)/\!\!\sim_2)\\
                    &=f^\mathcal{A}(a_1,\dots,a_n)/\!\!\sim_1\\
                    &=f^{\mathcal{A}/\sim_1}(a_1/\!\!\sim_1,\dots,a_n/\!\!\sim_1)\\
                    &=f^{\mathcal{A}/\sim_1}(\alpha'(a_1/\!\!\sim_2),\dots,\alpha'(a_n/\!\!\sim_2))
                    \end{aligned}
                \]
                so this is actually a homomorphism as well. Now, take note that
                \[
                    \begin{aligned}
                    \mathrm{ker}\,\alpha'&=\left\{(a/\!\!\sim_2,b/\!\!\sim_2)\in (A/\!\!\sim_2)^2:\alpha'(a/\!\!\sim_2)=\alpha'(b/\!\!\sim_2)\right\}\\
                    &=\left\{(a/\!\!\sim_2,b/\!\!\sim_2)\in (A/\!\!\sim_2)^2:a/\!\!\sim_1=b/\!\!\sim_1\right\}\\
                    &=\left\{(a/\!\!\sim_2,b/\!\!\sim_2)\in (A/\!\!\sim_2)^2:(a,b)\in\sim_1\right\}\\
                    &=\,\sim_1\! /\!\!\sim_2
                    \end{aligned}
                \]
                so by (FIT),
                \[
                    \frac{A/\!\!\sim_2}{\sim_1\! /\!\!\sim_2}\cong A/\!\!\sim_1 
                \]
                and we see indeed taking \(\alpha'=\alpha\circ\nu_{\sim_1/\sim_2}\) gives the claimed mapping."/>
                <p>
                    We now need one more definition. Take an algebra {'\\(\\mathcal{A}\\)'} and take any \(B\subseteq A\). Then, we define
                    {'\\[\n\\bigcap\\left\\{X:B\\subseteq X\\mathrm{\\ and\\ }X\\mathrm{\\ is\\ a\\ subuniverse\\ of\\ }\\mathcal{A}\\right\\}\n\\]'}
                    to be the <strong>subuniverse generated</strong> by \(B\). It is clear this induces a subalgebra, notably the <strong>subalgebra generated</strong> by \(B\). We are interested in one particular instance of this. Let {'\\(\\sim\\,\\in\\mathrm{Con}\\,\\mathcal{A}\\)'}. Define for \(B\subseteq A\) the set 
                    {'\\[B^\\sim=\\left\\{a\\in A:B\\cap a/\\!\\!\\sim\\,\\neq\\varnothing\\right\\}.\\]'}
                    We denote {'\\(\\mathcal{B}^\\sim\\)'} to be the subalgebra generated by \(B^\sim\). If we have a subalgebra {'\\(\\mathcal{B}=(B,F)\\)'}, then we write {'\\(\\mathcal{B}^\\sim\\)'} to describe this process on \(B\). Of note is that in this case our generated subalgebra does not grow:
                </p>
                <Theorem no = '7' statement = '
                 If \(\mathcal{B}\) is a subalgebra of \(\mathcal{A}\) and \(\sim\,\in\mathrm{Con}\,\mathcal{A}\), then the universe of \(\mathcal{B}^\sim\) is \(B^\sim\).
                '/>
                <Proof proof = '
                Take some \(n\)-ary \(f\). Take any \(a_1,\dots,a_n\in B^\sim\). By definition of \(B^\sim\), there is some \(b_i\in B\) so that \((a_i,b_i)\in\,\sim\) for \(1\leq i\leq n\). Thus,
                \[
                    (f^\mathcal{A}(a_1,\dots,a_n),f^\mathcal{A}(b_1,\dots,b_n))\in\,\sim
                \]
                but this means \(f^\mathcal{A}(a_1,\dots,a_n)\in B^\sim\). We know \(B^\sim\) is a subset of our universe, however we have just showed that \(B^\sim\) is a subuniverse of \(A\), and therefore will generate itself. Thus, our universe is indeed \(\mathcal{B}^\sim\).'/>
                <p>
                    Denote for a congruence \(\sim\) on {'\\(\\mathcal{A}\\)'} the <strong>restriction</strong> of \(\sim\) to \(B\subseteq A\) to be the set \(\sim\!\vert_B=\,\sim\cap\,(B\times B)\). If \(B\) is a subuniverse, then this is clearly a congruence \((B,F_B)\).
                </p>
                <Theorem no = '8' name = 'Second Isomorphism Theorem' statement = '
                If \(\mathcal{B}\) is a subalgebra of \(\mathcal{A}\) and \(\sim\,\in\mathrm{Con}\,\mathcal{A}\), then \(\mathcal{B}/\!\!\sim\!\vert_B\cong\mathcal{B}^\sim\! /\!\!\sim\!\vert_{B^\sim}\).' />
                <Proof proof = "
                Consider the map \(\alpha:\mathcal{B}\longrightarrow\mathcal{B}^\sim\! /\!\!\sim\!\vert_{B^\sim}\) defined by \(b\mapsto b/\!\!\sim\!\vert_{B^\sim}\). This map is clearly well-defined. Now take some \(n\)-ary \(f\) and \(b_1,\dots,b_n\in B\) and we see
                \[
                    \begin{aligned}
                    \alpha f^\mathcal{B}(b_1,\dots,b_n)&=f^\mathcal{B}(b_1,\dots,b_n)/\!\!\sim\!\vert_{B^\sim}\\
                    &=f^{\mathcal{B}/\sim\vert_{B^\sim}}(b_1/\!\!\sim\!\vert_{B^\sim},\dots,b_n/\!\!\sim\!\vert_{B^\sim})\\
                    &=f^{\mathcal{B}/\sim\vert_{B^\sim}}(\alpha b_1,\dots,\alpha b_n)
                    \end{aligned}
                \]
                and noting that because \(\mathcal{B}/\!\!\sim\!\vert_{B^\sim}\) is clearly a subalgebra of \(\mathcal{B}^\sim/\!\!\sim\!\vert_{B^\sim}\), we can pull our operation up, thus showing \(\alpha\) is a homomorphism. Now, take some \(b/\!\!\sim\!\vert_{B^\sim}\in B^\sim\! /\!\!\sim\!\vert_{B^\sim}\). We know that there is some \(b'\in B\) so that \(b'\sim b\), by definition of \(B^\sim\). Thus, \(\alpha b'=b/\!\!\sim\!\vert_{B^\sim}\), meaning it is surjective.\[\]
                Naturally, we proceed inspect the kernel of \(\alpha\). As 
                \[
                    \begin{aligned}
                    \mathrm{ker}\,\alpha&=\left\{(b,b')\in B^2:\alpha(b)=\alpha(b')\right\}\\
                    &=\left\{(b,b')\in B^2 : b/\!\!\sim\!\vert_{B^\sim}=b'/\!\!\sim\!\vert_{B^\sim} \right\}\\
                    &=\left\{(b,b')\in B^2:(b,b')\in\,\sim\!\vert_{B^\sim}\right\}
                    \end{aligned}
                \]
                and given \(B\subseteq B^\sim\), this means \(\mathrm{ker}\,\alpha=\,\sim\!\vert_B\). Then, by (FIT), we are done."/>
                <p>
                    That's the three covered! However, there is one more theorem which is often presented alongside the isomorphism theorems - the correspondence theorem - which I will include for completeness. This is where the language of universal algebra takes a slight detour away from the conventional language used in, say, group theory. We call a non-empty set \(L\) endowed with two binary operations - \(\wedge\) (<strong>meet</strong>) and \(\vee\) (<strong>join</strong>) - a lattice if both meet and join are commutative and associative, along with being <strong>idempotent</strong>, meaning
                    \[
                        x\vee x = x\qquad x\wedge x = x
                    \] 
                    and <strong>absorptive</strong>, meaning
                    \[
                        x\vee(x\wedge y)=x\qquad x\wedge(x\vee y)=x.
                    \]
                    A <strong>sublattice</strong> is a non-empty subset of a lattice, closed under meet and join.
                </p>
                <p>
                    A map \(\alpha:L\longrightarrow S\) where \(L\) and \(S\) are lattices is called a <strong>lattice homomorphism</strong> if for \(a,b\in L\),
                    \[
                        \alpha(a\wedge_Lb)=\alpha a\wedge_S\alpha b\qquad \alpha(a\vee_Lb)=\alpha a\vee_S\alpha b.  
                    \]
                </p>
                <p>
                    Next, we call a set \(A\) a <strong>partially-ordered set</strong> (<strong>poset</strong>) if there exists a relation \(\leq\) which is reflexive and transitive, along with being <strong>antisymmetric</strong>, meaning
                   {'\\[a\\leq b\\mathrm{\\ and\\ } b\\leq a\\Rightarrow a=b.\\]'}
                   We write \((A,\leq)\). The only thing separating this from a <strong>total-order</strong> (e.g. the usual definition of \(\leq\) on {'\\(\\mathbb{N}\\)'}) is that a partial-order does not guarantee \(a\leq b\) or \(b\leq a\), in general. On posets, an <strong>interval</strong> \(\left[a,b\right]\) or \((a,b)\), <strong>supremum</strong>, and <strong>infimum</strong> are defined exactly the same as they are for totally-ordered sets.
                </p>
                <p>
                    The reason posets are important is that every lattice has a natural partial-order, namely writing \(a\leq b\) if \(a=a\wedge b\). Verifying this is actually a partial-order is just symbol-pushing, so I will not include it here.
                </p>
                <Theorem no = '9' statement = '
                Every interval of a lattice is a sublattice.' />
                <Proof proof = '
                Take \([a,b]\) to be our interval. Let \(p,q\in [a,b]\). Then,
                \[
                    a\wedge (p\wedge q)=(a\wedge p)\wedge q=a\wedge q=a
                \]
                so \(a\leq p\wedge q\). Similarly, \(p\wedge q\leq b\). Then,
                \[
                    a\wedge(p\vee q)=a\wedge((p\vee (p\wedge a))\vee q)=a\wedge((p\vee a)\vee q)=a\wedge(a\vee(p\vee q))=a
                \]
                meaning \(a\leq p\vee q\), and similarly \(p\vee q\leq b\). Thus, our interval is closed under both meet and join.' />
                <p style = {{textIndent: '0'}}>
                    We write \(\llbracket a,b\rrbracket\) to describe this lattice.
                </p>
                <p>
                Similar to how we take a lattice and impose an ordering, we can take a poset and end up with a lattice by defining meet and join. In particular, we take
                {'\\[\na\\wedge b=\\inf\\left\\{a,b\\right\\}\\qquad a\\vee b=\\sup\\left\\{a,b\\right\\}\n\\]'}
                and verifying these satisfy the conditions for meet and join is straightforward. This all culminates into our final theorem, discussing the lattice {'\\((\\mathrm{Con}\\,\\mathcal{A},\\subseteq)\\)'}.
                </p>
                <Theorem no = '10' name = 'Correspondence Theorem' statement = '
                Let \(\mathcal{A}\) be an algebra and let \(\sim\,\in\mathrm{Con}\,\mathcal{A}\). Then,
                \[
                    \llbracket\sim,\nabla_A\rrbracket\cong\mathrm{Con}\,\mathcal{A}/\!\!\sim
                \]
                as lattices under \(\subseteq\) by \(r\mapsto r/\!\!\sim\)' />
                <Proof proof = '
                Let \(\alpha\) denote this mapping. Take some \(r,s\in[\sim,\nabla_A]\) so that \(r\neq s\). Without loss of generality, take some \(a,b\in A\) so that \((a,b)\in r\setminus s\). This means \((a/\!\!\sim,b/\!\!\sim)\in r/\!\!\sim\!\setminus\, s/\!\!\sim\) meaning \(\alpha r\neq\alpha s\).\[\]
                Now, take some congruence \(r/\!\!\sim\,\in\mathrm{Con}\,\mathcal{A}/\!\!\sim\). Let \(s=\mathrm{ker}(\nu_r\circ\nu_\sim)\). We see that 
                \[
                    (a/\!\!\sim,b/\!\!\sim)\in r/\!\!\sim\,\Leftrightarrow (a,b)\in s\Leftrightarrow (a/\!\!\sim,b/\!\!\sim)\in s/\!\!\sim
                \]
                meaning \(\alpha s=r\). In total, our map is bijective.\[\]
                Now take \(r,s\in[\sim,\nabla_A]\). Without loss of generality, take \(s\subseteq r\). It is clear \(s/\!\!\sim\,\subseteq r/\!\!\sim\). Thus, \(\alpha\) preserves inclusions, meaning it preserves our induced meet and join, and thus is a lattice homomorphism too.' />
                <p>
                    This took far longer than I thought it would. Going in, I assumed that everything would be fairly simple and clean, in the same way the proofs of the isomorphism theorems for specific structures are. However, given the variation between ideals and normal subgroups that I mentioned at the beginning, in hindsight I should have expected the overarching notion (i.e. congruences) to not necessarily be the friendliest or most familiar concept. Nonetheless, it is satisfying to have my curiosity quenched, even if it was slightly confusing at times. 
                </p>
                <p>
                    I have read that, apparently, universal algebra is pretty dead in terms of study today, supposedly having been subsumed into category theory. Although I find the hedonistic study of category theory to be quite sour, I will say that I find the category theory used in algebra to be more interesting and cleaner than universal algebra. It also far more powerful for identifying overarching ideas, whereas universal algebra limits itself to strictly algebra, by definition. However, I peeked into the end of Burris' and Sankappanavar's book and saw a large ampersand used as an operator over some set, so I am going to wager my freshman's opinion is quite ill-informed and there are deeper reasons the field is not very active today (if that's even true at all!).
                </p>
            </div>
        )
    }
}

export default UniversalIsomorphism;