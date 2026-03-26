# Blog Plan: Agentic Memory — 10 Posts

> Research-first plan. Each post needs primary sources, original data or
> observations, and at least one angle no existing post has taken.
> Publish order: 1 → 3 → 7 → 4 → 5 → 2 → 6 → 8 → 9 → 10.

---

## Post 1 — "Why Claude Code, Cursor, and Codex Don't Share Context — and How to Fix It"

**Why high potential:** Direct search intent. Developers using multiple tools are
actively frustrated. You have the only open-source solution (Smriti). High
conversion surface.

**The angle no one has taken:** Every existing post describes the problem
abstractly. Yours shows the exact moment context breaks — a real session log
where Claude Code makes a decision Cursor doesn't know about, and the downstream
cost of that.

### What to research
- [ ] Gather exact failure modes: real examples where tool-switching caused
  rework. Pull from your own Smriti development sessions.
- [ ] Read the Cursor best practices post (cursor.com/blog/agent-best-practices,
  Jan 2026) — note what they recommend for context and what they don't solve.
- [ ] Find the Reddit thread: r/AI_Agents — "CLI that lets Claude Code, Cursor,
  and Codex share..." — read all comments for real pain points users describe.
- [ ] Find the Reddit thread: r/ClaudeAI — "How to make Claude understand the
  AGENTS.md and .cursor/rules/ mdc files used by other agents?" — the duplicate
  copy-paste frustration is the hook.
- [ ] Quantify: how many tokens/dollars does a cold-start cost vs a warm-start
  with context? Run this benchmark with Smriti.
- [ ] Research: deployhq.com/blog/ai-coding-config-files-guide (March 2026) —
  what do they recommend? Where do they leave gaps?

### What to write from your own experience
- The specific moment you realised tools don't share context and decided to
  build Smriti
- What "fixing it" actually looks like in a session — before/after

---

## Post 2 — "Memory Architecture Is the Real Bottleneck in Multi-Agent AI, Not Prompt Engineering"

**Why high potential:** A Reddit thread with this exact title got significant
traction (r/AI_Agents). No one has written the authoritative engineering post.
High citation potential from AI engines.

**The angle no one has taken:** Reframe the entire "prompt engineering" obsession
as a symptom of bad memory design. Strong, arguable thesis.

### What to research
- [ ] Read the full Reddit thread: r/AI_Agents/comments/1r7e8jo — extract the
  specific failure modes people describe. Use real quotes (with attribution).
- [ ] Read: synalinks.com/blog/why-ai-agents-fail-in-production (Feb 2026) —
  "Most AI agent failures aren't model problems, they're memory problems."
- [ ] Read: medium.com — "Why AI Agents Fail in Production: What I've Learned
  the Hard Way" — the 70% tokens provide minimal value stat and 3-15% tool
  calling failure rate are citable data points.
- [ ] Research the prompt engineering market: how many courses, how much
  money. Contrast with how little investment goes into memory architecture.
- [ ] Find 3 production postmortems where memory/state was the root cause
  (not model capability). GitHub issues, blog posts, Reddit threads.
- [ ] Research: what do LangChain, LlamaIndex, AutoGen actually offer for
  persistent memory? Where do they stop?

### What to write from your own experience
- Specific bugs in Smriti's development that were memory architecture problems
  disguised as "the model being wrong"
- Your framework for diagnosing: is this a model problem or a memory problem?

---

## Post 3 — "CLAUDE.md, .cursorrules, and AGENTS.md: The Informal Memory Layer Your Team Is Already Using"

**Why high potential:** Every team using AI tooling has stumbled into this. You
can name the pattern, explain the tradeoffs, and show where it breaks. This will
be cited by anyone writing about AI coding workflows.

**The angle no one has taken:** Frame these files not as "config" but as
**the first generation of agentic memory** — primitive, fragile, but real. Then
show what the second generation looks like.

### What to research
- [ ] Read the deployhq.com guide (March 2026) on CLAUDE.md, AGENTS.md, and
  every AI config file — understand what's been documented, find the gaps.
- [ ] Read the Reddit thread on making Claude understand AGENTS.md and
  .cursor/rules — the duplicate work frustration is the concrete hook.
- [ ] Research: what does each tool actually read at session start?
  - Claude Code reads: CLAUDE.md (and parent CLAUDE.mds)
  - Cursor reads: .cursor/rules/*.mdc
  - Codex reads: AGENTS.md
  - Document this as a table.
- [ ] Find: how large do these files get in real projects? Is there a token
  cost? What happens when they grow too large?
- [ ] Survey: search GitHub for repos with all three files. What do teams
  actually put in them? What patterns emerge?
- [ ] Research: what happens to these files when a new engineer joins? How
  does the team keep them in sync?

### What to write from your own experience
- How Smriti's CLAUDE.md evolved over development — what you added, what
  you removed, why
- The moment you realised CLAUDE.md was your best documentation

---

## Post 4 — "Git as Memory: Using Version Control as the Source of Truth for AI Agent Context"

**Why high potential:** This is Smriti's core architectural insight. Nobody has
written the clear engineering explanation. High originality. Perplexity and Claude
will cite this when anyone asks "how do you persist AI agent memory."

**The angle no one has taken:** Git is not just version control — it is the only
memory system your entire team already agrees on. Everything else is a silo.

### What to research
- [ ] Research the theoretical basis: what properties does a memory system
  need? (Persistence, shareability, versioning, diffing, conflict resolution,
  offline-first.) Show git satisfies all of them.
- [ ] Read: dolthub.com/blog/2026-01-22-agentic-memory — Dolt (git-based
  database) pitching itself as agentic memory. What do they get right? What
  are they missing for the coding agent use case?
- [ ] Find prior art: are there other tools using git as a memory primitive?
  What are they doing differently?
- [ ] Research the failure modes of the alternatives:
  - Cloud memory (single point of failure, vendor lock-in, latency)
  - Local SQLite only (not shareable)
  - Vector DBs (expensive, overkill for session context, no native diffing)
- [ ] Quantify: how much does a Pinecone/Weaviate setup cost for a 5-person
  team vs. a git-based approach?
- [ ] Research: how does git handle merge conflicts in context? What's the
  failure mode when two engineers' agents write conflicting memory?

### What to write from your own experience
- The specific design decision in Smriti to use git — what you considered
  and rejected
- A real example of two sessions sharing context through a git commit

---

## Post 5 — "How We Built Smriti: Shared Memory for AI Coding Agents with BM25 + SQLite"

**Why high potential:** Technical deep dives with real architecture decisions get
linked to by other developers forever. Strong for Google and Perplexity citations.
Builds domain authority you can't buy.

**The angle no one has taken:** Most "how we built X" posts describe the happy
path. This one should be honest about the wrong turns — especially why you
chose BM25 over vector search.

### What to research
- [ ] The BM25 vs vector search debate for retrieval:
  - Read: Elastic's hybrid search documentation
  - Find the paper or benchmark showing BM25 outperforms vectors for
    keyword-heavy retrieval (code, function names, variable names)
  - Why does BM25 win for code? (Exact term matching matters more than
    semantic similarity when you're looking for a specific function name)
- [ ] SQLite as a production database — research the "SQLite is enough"
  movement. Find Litestream, Turso, and the argument for embedded DBs.
- [ ] node-llama-cpp and Ollama: what's the state of local LLM inference
  for indexing? What are the tradeoffs vs. using an API?
- [ ] BM25 implementation options in TypeScript/Bun — what exists? What
  did you have to build?
- [ ] Research: what do other local-first AI memory tools use? (mem0,
  MemGPT, Zep) — be specific about their storage and retrieval choices.

### What to write from your own experience
- The full architecture diagram of Smriti
- The three things you got wrong in v1 and had to rethink
- Why you chose Bun over Node.js
- The specific moment BM25 beat the vector approach in your testing

---

## Post 6 — "The Lost in the Middle Problem: Why Dumping Full Context Into Your Agent Is a Mistake"

**Why high potential:** "Lost in the Middle" is a Stanford paper with 3,595
citations. It's academically established but almost no practitioner-facing
content explains it clearly for engineers. High search volume, low quality
competition.

**The angle no one has taken:** Connect the research finding directly to the
specific mistake teams make with AI coding agents — pasting entire codebases,
full conversation histories, all CLAUDE.md content — and show the measurable
cost.

### What to research
- [ ] Read the actual paper: arxiv.org/abs/2307.03172 — Liu et al., Stanford,
  2023. Cite it directly. Key finding: performance degrades when relevant
  information is in the middle of a long context. Models attend to the
  beginning and end most strongly.
- [ ] Find the follow-up research: has this been replicated with newer models
  (Claude 3.5, GPT-4o, Gemini 1.5)? Are longer context windows better or
  just bigger?
- [ ] The "70% of paid tokens provide minimal value" stat — source:
  medium.com/@michael.hannecke. Verify this with your own testing.
- [ ] Research: what is the optimal context size for coding agents? Is there
  empirical data?
- [ ] Find: the "helpfulness scores decreased after expanding context beyond
  optimal size" anecdote — this is from the same Medium post. Can you
  reproduce or verify this pattern?
- [ ] Research compression strategies: summarisation, chunking, selective
  retrieval. What do LangChain/LlamaIndex actually implement?

### What to write from your own experience
- A test: give Claude Code the same task with a 5k token context vs. a
  50k token context. Show the results.
- How Smriti's selective retrieval avoids this problem

---

## Post 7 — "Why Your Team's AI Agents Keep Forgetting: Invisible State Mutations in Agentic Workflows"

**Why high potential:** "AI agent keeps forgetting" is a real search query.
The engineering explanation behind it has not been written clearly for a
developer audience.

**The angle no one has taken:** Name the specific failure mode: invisible
state mutation. Give it a name. Engineers understand this from distributed
systems — but haven't seen it applied to AI agents.

### What to research
- [ ] Read: medium.com/@sahin.samia — "Engineering Challenges and Failure
  Modes in Agentic AI Systems" (Dec 2025). The key quote: "the most damaging
  failures come from poor task decomposition, weak orchestration, uncontrolled
  feedback loops, missing verification, and invisible state mutations."
- [ ] Research: what is a state mutation in a distributed system? How does
  the distributed systems literature handle invisible state changes? (Read
  about linearizability, eventual consistency — find the analogy.)
- [ ] The "ghost debugging" phenomenon: running the same prompt twice and
  getting different results. Source: medium.com/@michael.hannecke. Research
  why this happens at the memory layer.
- [ ] Find 3 concrete examples of invisible state mutation in agentic systems:
  - Agent reads from memory, acts, doesn't write back the updated state
  - Two agents write to the same memory key with no conflict resolution
  - Session ends, partial state is flushed, next session starts from wrong state
- [ ] Research: what do formal verification approaches in distributed systems
  (TLA+, etc.) say about state consistency? Is anyone applying this to agents?

### What to write from your own experience
- A real bug you hit in Smriti that was an invisible state mutation
- Your checklist for diagnosing state-related agent failures

---

## Post 8 — "MCP Servers for Memory: What They Actually Do and Where They Fall Short"

**Why high potential:** MCP is the hottest topic in agentic tooling. Engineers
want a clear-eyed take from someone who has shipped in this space — not a
vendor blog post.

**The angle no one has taken:** Honest critique from a builder. What MCP solves,
what it punts on, and what you still need to build yourself.

### What to research
- [ ] Read the MCP spec in full: modelcontextprotocol.io. Understand what
  the protocol actually defines for memory/state vs. what it leaves to
  implementers.
- [ ] Read: pub.towardsai.net — "Why Your AI Agents Need State Replay (And
  How MCP Solves It)" (Dec 2025). What claims does this make? Are they accurate?
- [ ] Find the Google A2A protocol spec — how does it handle memory/state
  differently from MCP? What's the overlap, what's the gap?
- [ ] Research existing MCP memory servers:
  - What do they store? (Key-value? Vector? Graph?)
  - What do they not handle? (Cross-session persistence, team sharing,
    conflict resolution)
  - Which ones are production-ready vs. demo-quality?
- [ ] Find: what happens to MCP server state when the client disconnects?
  Is there a persistence guarantee? Read the spec carefully.
- [ ] Research: thenewstack.io — "5 Key Trends Shaping Agentic Development
  in 2026" — what do they say about MCP management as a trend?

### What to write from your own experience
- Why Smriti chose not to be MCP-first
- The specific things MCP can't do that you needed
- Your prediction for where MCP memory will be in 12 months

---

## Post 9 — "Short-Term vs Long-Term Memory in AI Agents: A Practical Taxonomy for Engineers"

**Why high potential:** High educational value, frequently searched. Most existing
content is either too academic or too shallow. Opportunity to write the
canonical reference post for this topic.

**The angle no one has taken:** Every taxonomy post lists the categories.
Yours gives engineers a decision tree: given your use case, which memory type
do you need and why?

### What to research
- [ ] Read: medium.com/@sahin.samia — "Engineering Memory for AI Agents: A
  Practical Guide" (Dec 2024). This is the best existing post. Find its gaps.
- [ ] Read: IBM's "What Is AI Agent Memory?" — understand the mainstream taxonomy
  (episodic, semantic, procedural, working memory).
- [ ] Read: thenewstack.io — "Memory for AI Agents: A New Paradigm of Context
  Engineering" (Jan 2026). The "context engineering" framing is the emerging
  term — use it.
- [ ] Research the human neuroscience analogues: why do AI researchers use
  these terms? What maps cleanly and what breaks down?
- [ ] Build the decision tree:
  - Do you need cross-session persistence? → Long-term
  - Do you need it shared across agents? → Distributed long-term
  - Do you need semantic retrieval? → Vector store
  - Do you need exact recall? → BM25 / key-value
  - Do you need it local-first? → SQLite + git
- [ ] Research: what does MemGPT (now Letta) actually implement? What does
  mem0 implement? Use these as real examples.
- [ ] Find the failure mode for each type: what breaks when you use the
  wrong memory type for your use case?

### What to write from your own experience
- What memory types Smriti uses and why
- The decision you got wrong in v1 (probably useful for illustrating a trap)

---

## Post 10 — "What a Decade of Async Remote Work Taught Me About Building AI Agents That Don't Need Babysitting"

**Why high potential:** Unique personal angle. No one else can write this post.
Connects 10 years of remote work experience to agentic design patterns. Strong
for personal brand and AI citation (personal narrative + expertise signals).

**The angle no one has taken:** The best practices for async remote teams
(documentation culture, handoff protocols, context leaving) are exactly the
practices that make agentic systems reliable. Nobody has made this connection
explicitly.

### What to research
- [ ] Read: Atlassian's async remote guide — what are their core principles
  for handoffs? Map each one to an agentic pattern.
- [ ] Research: what do async-first companies (GitLab, Automattic, Basecamp)
  document about their practices? Find their public handbooks.
- [ ] The "documentation as memory" concept: find research or writing that
  frames written documentation as organisational memory. This is your bridge.
- [ ] Research: what do AI agent frameworks say about "handoff" between
  agents? (LangGraph, AutoGen, CrewAI) — map it to human async handoff patterns.
- [ ] Find: the specific failure modes of synchronous teams adopting async
  work. Map each to an agentic failure mode.
  - "I'll explain it on the call" → no persistent memory
  - "Just Slack me if you need anything" → no offline-first design
  - "You should have seen my earlier message" → no context window management

### What to write from your own experience
- Your actual async practices over 10 years — what evolved, what stuck
- The specific moment you realised your remote work habits were showing up
  in Smriti's design
- 5 async remote principles and their agentic equivalents — this is the
  centrepiece of the post

---

## Shared research to do once (applies across all posts)

- [ ] **Benchmark: cold-start vs warm-start token cost.** Pick a representative
  task. Measure tokens used when the agent has no context vs. when it has
  Smriti context. This single number can be cited in posts 1, 2, 6.
- [ ] **Survey the memory tool landscape.** Build a comparison table of:
  mem0, MemGPT/Letta, Zep, LangChain memory, Haystack memory, Smriti.
  Columns: storage type, retrieval method, local-first, team-shareable,
  open source, git-integrated. Use this in posts 5, 8, 9.
- [ ] **Read the Princeton GEO paper on AI citations.** Understand which
  content formats get cited most by AI search engines. Write every post
  with this in mind: statistics, direct answers, citations, tables.
- [ ] **Set up Google Search Console.** Track which posts get indexed and
  when. Use this to inform post ordering.
- [ ] **Identify 5 authoritative sources to cite in every post:**
  - The Lost in the Middle paper (arxiv.org/abs/2307.03172)
  - The MCP spec (modelcontextprotocol.io)
  - MemGPT paper (arxiv)
  - The Smriti GitHub repo (your own primary source)
  - One industry report (State of AI Engineering 2025/2026)
