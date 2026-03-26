# Blog Writing Strategy

> Every post follows this process in order. Do not skip phases.
> The goal is not to publish — it is to be found, read, and cited.

---

## Phase 1 — Validate Demand Before Writing a Word

A post idea is a hypothesis. Validate it first.

### 1.1 Find the real search query

Go to Google. Type the first 3–4 words of your idea. Do not press enter.

- What does autocomplete suggest? That is how people actually phrase this.
- Rewrite your working title to match the autocomplete phrasing.
- Now press enter. Check "People also ask." These are sub-topics to cover.

**Write down:** The exact search phrase you are targeting. One per post.

### 1.2 Confirm the pain on Reddit

Search your topic on these subreddits:

- r/AI_Agents
- r/ClaudeAI
- r/LocalLLaMA
- r/MachineLearning
- r/webdev
- r/devops (if infrastructure-adjacent)

Look for threads where people describe the frustration, not ask for tutorials.
Read every comment. Extract the exact language people use. Use that language
in your post — not your own vocabulary, theirs.

**Green light signals:**
- Thread exists with 30+ comments
- Multiple threads on the same problem
- Top comments say "I haven't found a good answer to this"
- The existing answers are partial, outdated, or vendor-driven

**Red light signals:**
- No threads exist (demand is low or the audience isn't on Reddit)
- Threads exist but are fully resolved with high-quality answers

### 1.3 Check HackerNews

Go to hn.algolia.com. Search the topic.

- Has a post on this gotten 100+ points? Audience is real.
- Has nobody written it? You can be first.
- Is the highest-voted comment a complaint about existing content? That is your brief.

### 1.4 Check Twitter/X

Search the frustration, not the topic.

- Search: "claude code cursor context" or "agents forgetting" or "MCP memory"
- Filter to last 3 months
- Count how many people are describing the same pain independently
- Note any phrases or framings that get high engagement

### 1.5 Score the idea

Answer these four questions with yes/no:

| Question | Yes | No |
|---|---|---|
| Is there a Reddit thread confirming the pain? | +2 | 0 |
| Does Google autocomplete suggest this query? | +2 | 0 |
| Are the top 3 Google results weak (shallow, vendor, outdated)? | +2 | 0 |
| Can only you write this (data, experience, tool you built)? | +2 | -2 |

**Score 6–8:** Write it now. High demand, real gap, you have the angle.
**Score 4–5:** Write it, but only after higher-scoring posts are done.
**Score 2–3:** Rethink the angle. The demand or gap is weak.
**Score 0–1:** Do not write this yet. Wrong timing or no gap.

---

## Phase 2 — Research

Do this before opening a text editor.

### 2.1 Read what already exists

Find the top 5 results for your target query. For each one, document:

- What they cover well (do not repeat this without adding more)
- What they miss (this is your gap to fill)
- What is outdated or wrong (this is your correction)
- What data or examples they cite (find better ones)

**Your post must do one of:** go deeper, add data, correct something, or bring
a first-person angle that cannot be replicated.

### 2.2 Find your primary sources

Every compelling post is built on at least two primary sources:

**Academic / research papers**
- Google Scholar for your topic
- ArXiv for AI/ML topics
- Cite the paper directly, not a summary of it

**Real data you generate yourself**
- Run a benchmark
- Count something (tokens, failures, cost, time)
- Before/after comparison from your own work
- A number no one else has is worth more than ten citations

**Community evidence**
- Direct quotes from Reddit threads (link to them)
- GitHub issues showing the failure mode
- Real error messages, not hypothetical ones

**Official documentation**
- MCP spec, tool changelogs, release notes
- What the spec actually says vs. what people assume it says

### 2.3 Extract the language

Go back to the Reddit threads and Twitter searches from Phase 1.
Copy the exact phrases people use to describe the problem.
These phrases go in your introduction and subheadings.

Engineers should read your first paragraph and think: "this person understands
exactly what I am dealing with."

---

## Phase 3 — Structure the Post

### 3.1 Decide the one-sentence thesis

Your post argues one thing. Write it in one sentence before writing anything else.

Examples:
- "Memory architecture, not prompt engineering, is why most AI agents fail in production."
- "CLAUDE.md and .cursorrules are the same file with a different name, and that is a problem."
- "Git already has everything you need for agentic memory — most teams just haven't realised it yet."

If you cannot write the thesis in one sentence, you do not understand the post
well enough yet. Go back to research.

### 3.2 Answer-first structure

AI engines and busy engineers both want the answer at the top. Use this structure:

```
1. The direct answer / thesis (first 100 words)
2. Why this matters (the cost of not knowing this)
3. The evidence (research, data, your own experience)
4. The practical application (what to do with this)
5. The edge cases and caveats
6. A direct conclusion that restates the thesis differently
```

Do not build to the answer. State it, then prove it.

### 3.3 Subheadings are search queries

Every H2 and H3 should be phrased as a question someone would search for or
a direct answer to that question.

Good: "Why does context get lost between sessions?"
Bad: "The Context Problem"

Good: "BM25 outperforms vector search for code retrieval"
Bad: "Retrieval Approaches"

### 3.4 Required elements in every post

- [ ] One data point or benchmark (a real number)
- [ ] One direct citation (linked paper, spec, or documented source)
- [ ] One concrete example (real code, real error, real session log)
- [ ] One table or comparison (makes the post citable and shareable)
- [ ] One direct answer to "what should I actually do?" (the takeaway)

---

## Phase 4 — Write

### 4.1 The introduction

Three paragraphs maximum. Covers:

1. The situation: name the exact thing your reader is dealing with right now
2. The problem with the current answers: why existing resources fail them
3. What this post gives them: the specific thing they will know or be able to do

Do not start with "In this post I will..." or "As AI becomes more prevalent..."
Start with the pain or the fact.

### 4.2 Tone

- Write to one person: a senior developer who is skeptical but open
- State opinions as opinions ("I think X because Y"), not as facts
- State facts as facts with a source
- Use short sentences when making the key point
- Use longer sentences for nuance and qualification
- Never use: "it's worth noting", "in conclusion", "as we've seen"

### 4.3 Length

Write until the post is complete. Not before, not after.

A post is complete when:
- The thesis is proven
- The practical application is clear
- The edge cases are addressed

As a rough guide: 1,200 words minimum (too short to be authoritative),
2,500 words maximum for most topics (beyond this, split into two posts).
Technical deep dives (architecture, how-we-built) can go to 4,000.

### 4.4 Code and examples

- Every code block must be runnable or clearly marked as pseudocode
- Show the failure case before the fix
- Annotate the non-obvious lines
- Keep examples minimal — the smallest code that proves the point

---

## Phase 5 — Before Publishing

### 5.1 The read-aloud test

Read the post out loud. Every sentence that makes you stumble is unclear.
Rewrite it.

### 5.2 The citation check

Every number, claim, and fact needs a source or a caveat ("in my testing",
"anecdotally"). Remove any stat you cannot source.

### 5.3 The skimmer test

A developer will skim your post before committing to reading it. Check:

- Does the first paragraph make the value clear?
- Do the subheadings tell the story on their own?
- Is there at least one visual element (table, code block, list)?
- Is the conclusion worth reading even if you skimmed the middle?

### 5.4 The AI citation test

Read your post as if you are an AI engine deciding whether to cite it.
Ask: does this post contain a direct, citable answer to a specific question?

The most citable sentence structure is:
> "[Specific thing] [does/is/causes] [specific outcome] because [specific reason]."

Add at least three sentences in this structure to every post.

---

## Phase 6 — Distribution

Distribution is not promotion. It is putting the answer where the question lives.

### 6.1 Reddit

Find the thread where people are asking this question. Not a generic subreddit
post — the specific thread.

Reply to that thread with a 2–3 sentence answer and link to the post as
"I went deep on this here." Do not post the link without the answer.

If no thread exists, create one as a question ("Has anyone solved X?") and
answer it yourself after a day, linking to the post.

**Target subreddits by post type:**
- Agentic memory / AI agents: r/AI_Agents, r/LocalLLaMA
- Claude Code / Cursor tooling: r/ClaudeAI, r/cursor (if it exists)
- Developer tools: r/webdev, r/programming
- Open source tool launch: r/opensource

### 6.2 HackerNews

Submit as "Show HN" only if the post contains something you built, a benchmark
you ran, or a tool you are releasing alongside it. "Show HN" posts with working
things get 10x the traction of link posts.

Plain link submissions work for high-quality analytical posts (memory
bottleneck, Lost in the Middle for practitioners). Submit between 8–10am ET
on weekdays.

### 6.3 Twitter/X

One thread per post. Structure:

```
Tweet 1: The thesis as a strong claim (not a question)
Tweet 2: The data point or surprising finding
Tweet 3: The practical implication
Tweet 4: Link to the full post
```

Tag the tools you mention (@cursor_ai, @AnthropicAI). Do not ask for retweets.

### 6.4 Newsletter and community mentions

After publishing, search for newsletters that have previously linked to content
on this topic. Email the author: one sentence on what the post covers, one
sentence on why their readers would find it useful.

Do not mass-email. Do not use templates.

### 6.5 Internal linking

Every new post links to at least two previous posts. Every previous post gets
updated to link to the new one where relevant. This is not optional — it is
how the site builds topical authority on agentic memory as a subject.

---

## Phase 7 — After Publishing

### 7.1 Index it

Submit the URL to Google Search Console immediately after publishing.
Use the URL Inspection tool → Request indexing.

### 7.2 Track within 48 hours

Check:
- Did Google index it? (Search Console)
- Did the Reddit post get upvotes or comments?
- Did anyone share it on Twitter without you asking?

Organic sharing within 48 hours is the strongest signal that the post hit.

### 7.3 Iterate

If the post gets traffic but low time-on-page: the introduction is not
delivering what the title promises. Rewrite the intro.

If the post gets no traffic after 2 weeks: the SEO targeting is wrong.
Check the H1 and first 100 words. Add the exact search phrase.

If the post gets traffic but no shares: the thesis is not strong enough.
Add a bolder claim or a more surprising data point.

---

## Checklist — One Page Summary

**Before writing:**
- [ ] Target search query identified (exact phrase)
- [ ] Reddit thread confirming the pain found
- [ ] Top 3 existing posts reviewed and gaps documented
- [ ] Primary sources collected (paper / data / official docs)
- [ ] One-sentence thesis written

**While writing:**
- [ ] Answer-first structure followed
- [ ] One data point or benchmark included
- [ ] One table or comparison included
- [ ] One concrete example (code / log / error) included
- [ ] Subheadings phrased as queries or direct answers

**Before publishing:**
- [ ] Read aloud — no stumbling sentences
- [ ] Every stat has a source
- [ ] Skimmer test passed
- [ ] At least three citable sentences in the "X does Y because Z" structure

**After publishing:**
- [ ] URL submitted to Google Search Console
- [ ] Posted in the relevant Reddit thread (not subreddit home)
- [ ] Twitter thread published
- [ ] At least two internal links added
- [ ] Previous posts updated to link to this one
