import React, { Component } from "react";

class HeisigKanji extends Component {

  render() {
    return (
      <div class="postContent leftMargin">
        <p>
          <i>
            As a preface to everything I say below: I am no expert in Japanese.
            I am still learning, and still very early in my learning too. Below
            are just my personal experiences, and this post is not in any way an
            authoritative recommendation.
          </i>
        </p>
        <p>
          In the Japanese language-learning community (which is surprisingly
          large for a language so localized), Heisig's{" "}
          <i>Remembering the Kanji</i> ('RTK') is an incredibly divisive book.
          Even worse, it's a clean division: most people either blindly swear by
          it and insist it's the only way to begin learning Japanese, or
          denounce the book and aver it's a complete waste of time. For me,
          community sentiment was irrelevant when I began learning, simply
          because I wasn't aware of it. Rather, I asked a friend of mine who
          went from no Japanese to passing N1 in a little over a year, and
          simply planned to emulate his journey. However, I can imagine if
          someone is planning to learn the language and they're getting their
          advice strictly online, it would be very hard to consolidate all of
          these inconsistent views. Should they read it? Should they not? The
          situation is not so simple as to warrant a blanket "Yes" or "No", in
          my opinion, and I aim to elucidate my reasoning as to why in this
          post, as well as how I think it should be answered instead.
        </p>
        <p>
          I will assume you are familiar with what kanji are. If not, there are
          plenty of explanations online about the difference between the three
          Japanese scripts. To many, kanji are a fairly intimidating aspect of
          Japanese. I find this is related to that fact that language is, of
          course, solely an oral construction, and completely disjoint from
          orthography. Thus, even if you have a very strong vocabulary and solid
          understanding of grammar, you will remain functionally illiterate if
          you do not know kanji. In particular, this means that even if your
          knowledge of the <i>language</i> surpasses a level, that does not
          necessarily mean you can also <i>read</i> the next level, as more
          difficult texts begin to use both more kanji and less furigana. This
          gap in orthography exists for quite a while; depending on the
          end-material you wish to read it can require you to learn somewhere
          between 1500-3000 kanji until it goes away. Of course, Japanese people
          don't have (too many - character amnesia is an interesting phenomenon)
          issues with this, because the level of material they can understand
          will generally match their orthographic knowledge as they grow up.
          However, as an adult, it can be frustrating enough to read children's
          books when learning any language, but being limited to children's
          books even though you could read more complex material if it was
          written <i>in a different script</i> is even more frustrating, and not
          an issue that is even possible in most languages. Most do not have an
          orthography that works like this - you can learn how to nearly
          fluently read Hangul over lunch, or even both kanas over the weekend.
          However, Japanese people don't care how difficult it is for foreigners
          to learn their orthography (and rightfully so) because, like I said,
          they don't usually encounter such a gap, and kanji have many benefits
          for Japanese (e.g. density:「こころよい」versus「快い」;
          disambiguation: look up「かける」in a dictionary). Thus, you will
          eventually have to learn kanji, and quite a few: at least 1000 at a
          bare minimum, but realistically far more.
        </p>
        <p>
          This is where Heisig's book comes in. He took a list of the 2136 Jōyō
          kanji (plus a few extra), broke them down into their component
          sub-kanji, and then broke those sub-kanji down again, and continued
          until he arrived at atomic kanji - radicals. He then took a few basic
          radicals, and found all kanji which are combinations of those or
          combinations of the combinations (c.f. the sub-kanji). Once that list
          was exhausted, he introduced a new radical and repeated the process,
          continuing until he ordered all of the kanji. Afterward, Heisig{" "}
          <u>assigned</u> (the phrasing here is important and I will recount it
          later) all of these kanji a unique keyword. Now, given his ordering
          process, each kanji has with it a minimal list of sub-kanji or
          radicals, which also have a unique keyword assigned. His technique
          then was to take a kanji, look at its keyword, look at the list of
          keywords that compose it, and then come up with some sort of visual
          imagery based on that list to remind him of the greater keyword.
          Repeat this for each kanji, and you end up with a process which,
          certainly at least mathematically, is the most efficient way to learn
          the kanji.
        </p>
        <p>
          So then, where is the criticism? Surely the most efficient way is the
          best way, right? Well, as in economics, theoretically efficiency here
          does not (necessarily) translate to pragmatism. The thing is, if your
          goal is literally to just learn the kanji, there is absolutely no
          question - Heisig's method is the only way to go. However, most (and
          in fact, I would wager all) people who are looking to learn kanji are
          doing it in the context of the greater goal of{" "}
          <i>learning Japanese</i>. And the thing is, RTK does absolutely
          nothing to help in that regard, on the surface (as I mentioned before,
          this is just orthography). At around 5 minutes per character, going
          through the book will take 180 hours <i>not including reviews</i>, and
          you will understand just as much Japanese content at hour 180 as you
          did at hour 0.
        </p>
        <p>
          If you have not gone through the book you might be confused as to how
          this is possible. Aren't the keywords teaching you the meaning of
          kanji? What does it even mean to learn kanji if that isn't it? Doesn't
          this mean RTK is useless? I certainly wondered this. Well, recall how
          I specified Heisig <u>assigned</u> keywords to the kanji. The purpose
          of these keywords is primarily to distinguish the kanji from each
          other - a memory and bookkeeping tool. It doesn't actually matter
          exactly what they are; they're not super special or sacred words. Take
          any set of 2200 words, biject those to the kanji, and you have a new
          set of keywords that will work just as well as the keywords Heisig
          gave (in terms of completing the book). This is because many kanji
          have multiple meanings, or their meanings are very abstract. For
          example, Heisig assigns「重」the keyword "Heavy". This appears in many
          words, from「
          <ruby>
            重<rt>おも</rt>
          </ruby>
          い」, also meaning <strong>Heavy</strong>, to「
          <ruby>
            重<rt>じゅう</rt>要<rt>よう</rt>
          </ruby>
          」meaning <strong>Important</strong>, or「
          <ruby>
            重<rt>かさ</rt>
          </ruby>
          なる」meaning <strong>To be piled up</strong>. In some sense these all
          come from the keyword, but as you can see it's a very vague idea; you
          can easily replace it with something like "Large", "Stacked", or
          "Multiple" and you don't lose nor gain any information. On the other
          hand, we can take「本」which is assigned the word "Book" and see it
          appears in the word「
          <ruby>
            日<rt>に</rt>本<rt>ほん</rt>
          </ruby>
          」meaning <strong>Japan</strong>,「
          <ruby>
            本<rt>ほん</rt>
          </ruby>
          」meaning <strong>Book</strong>,「
          <ruby>
            本<rt>ほん</rt>能<rt>のう</rt>
          </ruby>
          」meaning <strong>Instinct</strong>, or「
          <ruby>
            本<rt>ほん</rt>気<rt>き</rt>
          </ruby>
          」meaning <strong>Earnestness</strong>. Here, it's quite obvious that
          not all of its uses are accounted for by the keyword.
        </p>
        <p>
          Of course though, some keywords are better than others, and Heisig's
          are overall pretty good. Although the keyword "Heavy" doesn't
          communicate all of the ideas 「重」 gives off, it <i>did</i> come
          pretty close in most of them, and sometimes exactly matched the
          meaning, as seen in「重い」. This is something I think a lot of people
          neglect to bring up. Sure, a kanji like「本」doesn't solely mean
          "Book", but can also mean something like "Main", "Reality", or
          "Japan", but that doesn't change that it <i>does</i> does sometimes
          mean "Book". Overall, it does a really good job at helping you
          understand what basic words mean, and certainly what words using just
          the kanji alone mean.
        </p>
        <p>
          What this means is that going through RTK makes it easier to learn
          Japanese, but it alone doesn't teach you anything. The payoff in
          trudging through the mind-numbing memorization isn't when you finish
          the book. It isn't even when you first start learning grammar and
          words. For me, I only appreciated it after I memorized several hundred
          words and could begin to read basic texts by myself. This is where I
          began to realize that I wasn't burdened by kanji at all. One reason is
          that I had the ability to learn every word in its kanji-form from the
          get-go, meaning I do not have to worry about how frequently a word is
          written in kanji nor at what reading level the kanji is preferred over
          the kana. For example, I have seen both「暫く」and「しばらく」(
          <strong>For a while</strong>), as well as「きれい」and「綺麗」(
          <strong>Pretty</strong> or <strong>Pure</strong>), while reading
          pretty basic texts despite both words being listed as "Usually kana"
          in dictionaries. Another is that knowing keywords gave huge a huge
          boost to my effective word-count. One of the first sentence cards I
          made exemplifies this:「
          <ruby>
            屋根<rt>やね</rt>
          </ruby>
          の
          <ruby>
            虫<rt>むし</rt>
          </ruby>
          が
          <ruby>
            鳴<rt>な</rt>
          </ruby>
          くぞよ。」. This was my first time seeing the words「屋根」(
          <strong>Roof</strong>), 「虫」(<strong>Insect</strong>), or「鳴く」(
          <strong>To chirp</strong>) (which is literally every single word in
          sentence), yet I knew exactly what the sentence meant because I could
          read the kanji as "Roof... roots", "Insect", and "Chirp". Of course,
          not every word is this straightforward. For example, good luck with「
          <ruby>
            立<rt>りっ</rt>派<rt>ぱ</rt>
          </ruby>
          」(<strong>Exquisite</strong>) being parsed as "Stand up... faction",
          or「
          <ruby>
            機<rt>き</rt>関<rt>かん</rt>
          </ruby>
          」(<strong>Engine</strong> or <strong>Institution</strong>) being
          parsed as "Mechanism... connection". However, I find that many words
          are, particularly in very short or very long compounds. Furthermore, I
          noticed that I never mistook certain kanji for others, even though
          they may look similar on the surface, due to the fact that rigorously
          going through them means they all look completely unique.
        </p>
        <p>
          However, RTK does not somehow eliminate the need to worry about kanji.
          It merely repositions it. And that is where its largest downfall comes
          in. Going through the book <i>sucks</i>. A <i>lot</i>. Recall that I
          said it takes around 180 hours total. This means that I read the book
          for, on average, 6 hours a day. My review time was usually around 2
          hours a day (~250 cards at ~25 seconds per). I could only do this
          because I was an unemployed student during the summer. If I had a job?
          Then I could only keep this pace on the days I worked less than 4
          hours - any more and I have to start swapping work for reading,
          meaning a full 8 hour day leaves only 2 hours of studying. If I was in
          school? I could maybe pull 2 hours a day during a slow part of the
          semester (but as I will show you, this would require it being
          exceptionally slow). Now, there's nothing inherently wrong with taking
          longer to get through RTK. After all, the kanji aren't going anywhere.
          However, it becomes so much harder when you do. I know this from
          personal experience. I originally started the book during the school
          year, and on an average (read: light) day I could read for maybe 30
          minutes. At that pace, it would take a full <i>year</i> to finish the
          book (obviously this is false because the school year only lasts 8
          months, but this is irrelevant given what I'm about to say right now)
          and I ended up giving up 3 months in, having finished ~200 kanji,
          simply because I could not maintain any motivation in this journey to
          "learn Japanese" as I was seeing no progress -{" "}
          <i>because that wasn't what I was doing.</i> Getting it done in a
          month was doable, and 2 or 3 months might even be easier because it's
          less work every day, but going past 4 months seems like you would be
          pushing it dangerously close to the territory I was in.
        </p>
        <p>
          When I started again, having forgotten basically everything more
          intricate than「口」, I realized that if I wanted to get this done, I
          need to get it done as fast as possible, so that this burnout cannot
          catch up to me again. I initially set a goal to do at least 40 kanji a
          day. As I ended up doing closer to 50, I upped my goal to do a minimum
          of 60. In the end, I was doing around 80 per day. The good thing is
          that despite being boring, RTK is not hard or stressful. Memorizing
          kanji becomes fairly easy after your first 100, and although
          diminishing returns set in pretty quickly afterward, it does become
          slightly easier with each extra one you learn. This means that whether
          I spent 4 hours or 8 hours reading the book and creating these
          stories, I was just as effective at the beginning as I was at the end,
          and I didn't feel mentally fatigued. A digression: I wish reading
          maths textbooks was this easy - I start becoming antsy and frustrated
          after around an hour of reading and struggle to comprehend anything
          after the second. Even with breaks, it is hard to do anything more
          than 2-4 hours in a day.
        </p>
        <p>
          However, I would occasionally encounter kanji for which I could not
          come up with a compelling story. Interestingly, this had nothing to do
          with the number of strokes, position in the book, ambiguity in the
          keyword, or anything like that. It seemed to happen at random. Notable
          examples that I recorded
          were「敏」,「河」,「貼」,「読」,「判」,「錯」, and, rather
          embarrassingly,「引」. However, I obviously know all of these now, so
          what did I do to make the story compelling? Well, I slightly ignored
          Heisig. For some of these, I just brute-forced them in Anki until I
          got them. I really do not recommend doing this, because if you forget
          them later, you're screwed, as you have nothing to fall back on. There
          are a handful (literally, as in less than 10) of kanji for which I did
          this. For others, I used some cheap tricks such as verbal mnemonics.
          Heisig covers in detail why these shouldn't be the primary approach
          (basically it's because visual imagery is usually an intuitive
          response to the words, whereas verbal tricks have no basis), however
          if the words prompt nothing, it's better than brute-force. The most
          helpful backup, however, was{" "}
          <a className="linkPurple" href="https://kanji.koohii.com/">Kanji Koohii</a> (however I used
          it indirectly through{" "}
          <a className="linkPurple" href="https://hochanh.github.io/rtk/">rtk-search</a>). Although
          those stories weren't my personal stories, they were stories
          nonetheless, and oftentimes I didn't need to rip a full one from a
          user, but just read some to get inspired.
        </p>
        <p>
          There is another reason to use these websites, and that is to correct
          some of Heisig's mistakes. There are a few suspicious keywords, such
          as using "Ghost" for「鬼」instead of just saying "Oni",
          giving「校」the keyword "Exam" despite it appearing in every single
          word involving schools <i>and</i> the word "School" never being used
          as a keyword elsewhere, or teaching only the simplified kanji for{" "}
          <strong>Dragon</strong>,「
          <ruby>
            竜<rt>りゅう</rt>
          </ruby>
          」, despite「龍」also being extremely common (enough to be a top-1800
          kanji despite not being jōyō) and looking sick (it's the only kanji
          I've memorized through stroke-order alone). There are also better
          meanings to give to kanji as radicals: assigning「糸」the meaning of
          "Spiderman" on the left and "Venom" on the bottom, rather than the
          dull "Thread" wherever, makes all its derivatives fairly easy. There
          are also a few ingenious stories made by some users, such as user
          fiminor coming up with one story to
          encapsulate「陸」,「睦」,「勢」,「熱」,「菱」, and「陵」. In general,
          I would check the user-submitted stories for each kanji before I moved
          on, even if I made a good story myself, to make sure I would be aware
          of these things.
        </p>
        <p>
          In order to come up with these good stories in the first place, there
          are a few things I found helpful to keep in mind. The biggest, by far,
          is to try to combine multiple kanji into one story. Heisig's book
          orders the kanji in a way that naturally lends itself to this, and
          there are around 100-200 kanji that I learned "for free", as I didn't
          have to come up with a separate story for them. For example, I did
          this for「監」,「覧」,「濫」, and「鑑」, and I continue to do this
          today when I encounter new kanji (which I will discuss in detail soon)
          such as appending「綾」to fiminor's saga. I also found it important to
          give very specific images. For example, I struggled to
          distinguish「帝」and「王」because both of their keywords ("Sovereign"
          and "King", respectively) are pretty similar and I pictured generic
          male royalty for both. I solved this by emphasizing a sceptre held in
          the latter (as I took it to be a pictograph of one), and picturing
          Julius Caesar in the former. When the primitive "Altar" came up, it
          appears to the left as in「視」or underneath as in「款」, and I always
          pictured the former as more of a statue and the latter as an offering
          table, in order to identify their physical position in the kanji. I
          also tried to include real-life components, such as friends or
          recounting events, to have a stronger and more grounded story. For
          example, for「梢」the keyword "Treetop" and components "Tree...
          extinguish" reminded me of the time I went to the Arashiyama grove
          with my friend, who insisted there would be lights on, only to get off
          the train at night and walk to a completely pitch-black set of
          treetops. Be aware though that sometimes you <i>don't</i> need
          intricate stories for kanji. Something like「分」with the keyword
          "Part" can be taken instantly as a pictograph of a dagger splitting a
          board (or something). In general, I felt that it was only around kanji
          1000 or so that I got a feel for kanji and could feel that certain
          combinations or positions were unnatural, and began to play
          fast-and-loose with my stories; before that I kept everything very
          deliberate.
        </p>
        <p>
          That is essentially all the advice I can give. Going through RTK is a
          fairly personal journey, and like I mentioned before, you will
          struggle at seemingly random points that others will not, and likely
          find kanji someone else finds exceedingly hard to be quite
          straightforward. Overall, I found the hardest part of the book to be
          the section of around 20 kanji beginning at number 595, where Heisig
          introduces the "Turkey" primitive (funnily enough, I use the memory of
          my struggle here to remember the later-learned「難」, given the
          keyword "Difficult"). The hardest kanji to come up with stories for
          were「藍」and「璽」, although I don't think either of these took
          longer than 15 minutes. Mentally, the hardest parts were around kanji
          700 and 1400, where I really wanted to quit for no particular reason
          other than being sick of the book and doing flashcards.
        </p>
        <p>
          The kanji「璽」brings up an important critique of Heisig's RTK too. An
          analysis of around 800 million kanji uses,{" "}
          <a className="linkPurple" href="http://scriptin.github.io/kanji-frequency/">
            available here
          </a>
          , lists it as the 2938th most used character in the best case,
          Wikipedia, and in one week of Twitter analysis it never came up at
          all. For some context, 1500 kanji generally gives you 97-99% coverage,
          depending on the material. So why is it in Heisig's book? Because the
          jōyō list has nothing to do with frequency. Sure, some (actually, a
          supermajority of) parts conveniently overlap, but the list is just a
          set of characters approved for general-use (as is the literal name).
          Due to the nature of kanji and literacy that I discussed at the
          beginning, it should be clear that the government needs some official
          list to which they can adhere, and so they need to ensure political
          topics are covered, which is why that kanji (keyword "Imperial Seal")
          made the cut. Do you need to know it? I doubt it. Thankfully, it's
          near the end of the book, so you can skip it without a loss. However,
          there are many kanji like this that appear throughout Heisig's book,
          and in general, the order in which they are presented in RTK has
          nothing to do with how important they are. This poses to me a problem
          much more significant than learning a few scores of uncommon kanji -
          an absurdly large amount of the most common kanji appear near the end
          of the book. And unfortunately, you can't skip to them and do them
          first (generally speaking), because they are built upon kanji learned
          earlier, so the method won't work. Plus, the first 500 or so kanji in
          the book have exposition written by Heisig through which he slowly
          teaches you how to come up with stories on your own; immediately
          skipping to「帰」and reading "Spear... broom... apron" will seem
          impossible to handle. This means Heisig's book loses a lot of its
          usefulness unless you're willing to push to at least the 1600 or 1800
          mark.
        </p>
        <p>
          This also means a few fairly simple kanji that <i>aren't</i> jōyō,
          such as the「嬉」of「
          <ruby>
            嬉<rt>うれ</rt>
          </ruby>
          しい」(<strong>Pleased</strong>) or both kanji in「
          <ruby>
            喧<rt>けん</rt>嘩<rt>か</rt>
          </ruby>
          」(<strong>Argument</strong>), hence are not in RTK. However, this
          doesn't really matter, because there aren't too many of them, and once
          you've gotten that far learning new kanji is very easy. Whenever they
          come up, I don't need to sit down for 5 minutes again and try to look
          up stories online. The whole process (plus coming up with a keyword on
          my own!) - identifying components and making a story - rarely takes
          more than 45 seconds. And since you are learning at most 5 new ones in
          a day, you won't forgot them. This is another thing that I refer to
          when I say I don't have to worry about kanji anymore: that handling
          them now is second nature.
        </p>
        <p>
          Those are my thoughts on Heisig's <i>Remembering the Kanji</i>. I
          found it incredibly helpful. I was free for a summer, grinded out the
          book in a very short amount of time, and began learning Japanese with
          a large effective-vocabulary, an easy time memorizing new words, never
          stressing when I encountered new kanji - which happened fairly rarely
          anyways - and never having to worry about not knowing enough kanji to
          read a piece of literature. At the same time, I tried it beforehand
          and (thankfully only temporarily) gave up on learning the language and
          wasted a few months of my time, but potentially could've turned a
          blind-eye to Japanese for the rest of my life. Is it worth it? That's
          for you to decide. I've experienced the good and the bad, and laid out
          to you why and when that happened. Hopefully that makes the decision
          simple for you. And if you choose to go through with it, hopefully my
          advice can help you through from learning「一」all the way to「巳」.
        </p>
      </div>
    );
  }

}

export default HeisigKanji;