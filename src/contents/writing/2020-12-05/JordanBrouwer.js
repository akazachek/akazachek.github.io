import React, { Component } from 'react';
/* environments */
import Figure from '../../../components/Figure';
import Theorem from '../../../components/Theorem';
import Proof from '../../../components/Proof';
/* figures */
import Fig1Koch from './fig1(koch).png';
import Fig2Transv from './fig2(transv).png';

class JordanBrouwer extends Component {
    
    componentDidMount() {
        window.KaTeXRender();
    }

    render() {
        return (
            <div class = 'postContent'>
                <p>
                    If I were to draw a circle or some polygon, like a square, on a piece of paper, and ask you to identify the inside and outside, you would likely look at me as if I had gone mad. It is incredibly easy to both define what the inside is and identify where it lies, as these curves can be described by a product of intervals, or some simple parametrization. But what of, say, the Koch snowflake, as in figure 1? The precise curve is actually the limit case of the figure - a fractal. The curve is still continuous, being without holes, and does not overlap (except at the beginning and end). However, its perimetre is infinite, and its parametrization is nowhere differentiable. How would you formally describe what lies inside it? In fact, for a curve like this it is not unreasonable to suspect that may not be well-defined in the first place; perhaps some point behaves weirdly in the limit case and cannot be simply classified.
                </p>
                <Figure no = '1' src = {Fig1Koch} caption = 'Koch snowflake' />
                <p>
                    Thankfully someone, specifically Jordan, proved we don't need to worry about such a thing. His result on these curves gave them a special name, <strong>Jordan curves</strong>. These are simple closed curves on the plane, meaning they are continuous curves in {'\\(\\mathbb{R}^2\\)'} with no self-intersections, except at the start and end. His precise result was as follows.
                </p>
                <Theorem name = 'Jordan' statement = 'Every Jordan curve divides the plane into two components, an unbounded exterior and a bounded interior, such that the curve is the boundary of each component.' />
                <p>
                    What is interesting is that such a seemingly "obvious" result, something that every school child understands implicitly when they are told to "colour inside the lines", has an entirely non-obvious proof. Indeed, even today there are no easy proofs of it. They all span multiple pages, and use machinery which, at least on the surface, appears to be overkill for such a simple sounding statement.
                </p>
                <p>
                    This can actually be considered as a special case of a stronger result proved by Brouwer a few decades after Jordan's initial publication. However, to get there we will need a few definitions. I have already discussed manifolds in the past, however there is an object which slightly generalizes them. We call these <strong>manifolds with boundary</strong>. While a \(k\)-manifold is diffeomorphic to {'\\(\\mathbb{R}^k\\)'}, we require only that manifolds with boundary are diffeomorphic to the <strong>upper-half plane </strong>
                    {'\\[\\mathcal{H}^k:=\\{(x_1,\\dots x_k)\\in\\mathbb{R}^k : x_k\\geq 0\\}.\\]'}
                </p>
                <p>
                    Visually, the obvious notion of a boundary on the upper-half plane occurs precisely where \(x_k=0\), and we denote it by {'\\(\\partial\\mathcal{H}^k\\)'}. It is important to note that this is completely different from a topological boundary, even though we use the same notation. A manifold with boundary \(X\) of dimension \(k\), then, has a neighbourhood around each point diffeomorphic to {'\\(\\mathcal{H}^k\\)'}, and its boundary \(\partial X\) is the set of points which lie in {'\\(\\partial\\mathcal{H}^k\\)'} under some set of local coordinates (one can show this is well-defined and will in fact be identical for any arbitrary system). It is immediate the boundary then is itself a manifold of dimension \(k-1\), as we can parametrize it to {'\\(\\mathbb{R}^{k-1}\\)'} by cutting off the last coordinate (as it will always be \(0\)), and composing.
                </p>
                <p>
                    Of note is that any compact, connected \(1\)-manifold with boundary is diffeomorphic to the unit interval \([0,1]\) or to the unit circle \(S^1\) (visually, compactness and connectedness means you can only end somewhere or loop back to where you started). This is actually non-trivial to show as well, much like the Jordan curve theorem, despite being intuitively quite obvious. We will take it for granted, as we will need the following fact later.
                </p>
                <Theorem no = '1' statement = 'Every compact \(1\)-manifold with boundary has an even number of points in its boundary.' />
                <Proof proof = 'Every component will be diffeomorphic to \([0,1]\) or \(S^1\), which have \(2\) and \(0\) points in the boundary, respectively.' />
                <p>
                    This is the only definition we need to generalize Jordan's result. We call a manifold {'\\(X\\subseteq\\mathbb{R}^n\\)'} a <strong>hypersurface</strong> if it is of dimension \(n-1\) (note that this can be generalized to submanifolds and codimensions, but we will not need that).
                </p>
                <Theorem name = 'Jordan-Brouwer' statement = 'If \(X\) is a compact, connected hypersurface in \(\mathbb{R}^n\), then \(\mathbb{R}^n\setminus X\) consists of two open connected components, \(D_0\) and \(D_1\), such that \(\overline{D_0}\) is a compact manifold with boundary, and in particular \(\partial\overline{D_0}=X\).' />
                <p>
                    Perhaps being slightly misleading, I will not be talking about the Jordan-Brouwer theorem itself in this post. Instead, I will be talking about something intimately related to it. To prove this theorem, we must at some point have candidates for \(D_0\) and \(D_1\), and this is what I will be discussing: how do we define inside and outside in the first place?
                </p>
                <p>
                    The first stop is at the intersections of curves. Recall that there is a nice condition for when the preimage of a map \(f\colon X\to Y\) would have \(f^{-1}(y)\) be a manifold. Specifically, it was when \(y\) was a regular value, meaning \(df_x\) was surjective at each point {'\\(x\\in f^{-1}(y)\\)'}. This is, in fact, a special case of the more general concept of <strong>transversal intersections</strong>. In particular, \(f\) is transversal to a submanifold \(Z\subseteq Y\), written \(f\pitchfork Z\), if {'\\(T_{f(x)}(Z)+\\operatorname{im}df_x=T_{f(x)}(Y)\\)'} for every {'\\(x\\in f^{-1}(Z)\\)'}.
                </p>
                <Theorem no = '2' statement = 'For smooth \(f\colon X\to Y\) with \(Z\) a submanifold of \(Y\), then \(f^{-1}(Z)\) is a submanifold of \(X\) if \(f\pitchfork Z\).' />
                <Proof proof = 'Consider some \(x\in f^{-1}(Z)\), and let \(y=f(x)\). Let \(\ell=\operatorname{codim}Z\). Take local coordinates around \(y\) such that the last \(\ell\) coordinates vanish on \(Y\setminus Z\) (locally); call these last \(\ell\) coordinates \(g=(g_1,\dots,g_\ell)\). Consider the composition \(g\circ f\colon f^{-1}(Z)\to\mathbb{R}^\ell\), and note \[d(g\circ f)_x=dg_y\circ df_x.\] As\(f\pitchfork Z\), this derivative is surjective at \(x\). However, \(x\) was an arbitrary point in the preimage and we have \((g\circ f)(x)=0\), meaning \(0\) is a regular value of \(f\). Then, \(f^{-1}(Z)=(g\circ f)^{-1}(0)\) is a submanifold. '/>
                <p>
                    This is a very visual idea, essentially meaning that tangent spaces add up to the ambient space. However, this has the caveat of therefore being dependent on the ambient space, and so intersections transversal in one setting may not be transversal elsewhere. This is demonstrated in figure 2 below.
                </p>
                <Figure no = '2' src = {Fig2Transv} caption = 'Transversal intersection (left) and non-transversal intersection (right)' />
                <p>
                    This is quite a nice, simple condition to verify if a preimage will be a submanifold, and captures the spirit of differential topology: for us to learn about behaviour globally (being a manifold), we reduce it to local linear behaviour (a union of vector spaces). However, there is the very real question of whether intersections like this exist, in general. After all, intersections can be very tricky. If we take any function {'\\(\\mathbb{R}\\to\\mathbb{R}\\)'} which crosses the \(x\)-axis, any slight variation of that function will undoubtedly move that crossing point, and so it is very hard, in general, to find a function which has a root at a specific value (outside of contrived examples). Might it be the same for transversal intersections? Thankfully, no; in fact, essentially all intersections are transversal, and these intersections are not affected by perturbations. To formalize this idea, we introduce homotopy.
                </p>
                <p>
                    Two maps \(f_0,f_1\colon X\to Y\) are <strong>homotopic</strong>, written \(f_0\sim f_1\), if there exists some smooth map \(F\colon X\times [0,1]\to Y\) such that \(F(x,0)=f_0(x)\) and \(F(x,1)=f_1(x)\). A property of \(f_0\) is said to be <strong>stable</strong> if for any homotopy \(F(x,t)\eqqcolon f_t(x)\), there exists some \(\varepsilon \gt 0\) such that \(f_t\) has that property when \(t \lt \varepsilon\). A great deal of interesting properties are stable, such as embeddings, submersions, etc. In particular, as transversal intersections at the heart rely on submersions, it follows that they are stable as well. The proofs for these all essentially rely on these conditions being a statement about the determinant of some matrix, by the inverse function theorem, and the determinant function being continuous. 
                </p>
                <p>
                    What is far more interesting is that transversality is generic, meaning that given any smooth map \(f\) and any submanifold \(Z\), we can find some \(g\) homotopic to \(f\) so \(g\pitchfork Z\). This is quite remarkable given that the behaviour of \(f\) with respect to \(Z\) can be as pathological as we want - we need only to slightly wiggle it to get a nice intersection. Proving transversal intersections are generic is dry and lengthy (it would involve numerous technical lemmas, all for a rather technical result). It could be a whole post in and of itself, so instead I will simply state the two results we will need.
                </p>
                <Theorem no = '2' name = 'Transversality-Homotopy' statement = 'Let \(f\colon X\to Y\) be smooth between a manifold \(X\) and a boundaryless manifold \(Y\). If \(Z\) is a boundaryless submanifold of \(Y\), there is some smooth \(g\sim f\) such that \(g\pitchfork Z\) and \(\partial g\pitchfork Z\), where \(\partial g :\equiv g\vert_{\partial X}\).' />
            </div>
        )
    }

}

export default JordanBrouwer