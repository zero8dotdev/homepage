# A Better ArgoCD UI
### One-Page Pitch

---

## The Problem

ArgoCD runs **60% of all Kubernetes clusters** in production. 97% of its users depend on it daily. It is the de-facto standard for GitOps — not by a narrow margin, but by an overwhelming one.

Its UI is widely considered broken.

Not broken in the sense that it crashes. Broken in the sense that:

- It **falls apart past 500 applications**. Teams managing 1,500+ apps report the UI becoming unusable — slow to load, slow to update, slow to do anything.
- It has **no concept of environment promotion**. The #1 pain point from the 2025 official CNCF user survey (185 respondents). If you run staging and production, there is no native UI workflow to promote a release from one to the other. You script it, or you cobble together a third tool.
- It **cannot show you all your clusters in one place**. Multi-cluster organizations lose the dashboard entirely.
- It **rejects Helm edits** if your chart takes more than 5–10 seconds to compile. The workaround is to edit the Kubernetes resource directly — bypassing the UI entirely.
- The resource graph and application list have had missing labels, confusing state displays, and UX friction logged as open issues since **2020**.

The community has been complaining loudly: GitHub issues, Reddit threads, and now the official survey confirm this is not a fringe opinion.

**The market tolerates the UI because there is no alternative — not because the UI is good.**

---

## Why No One Has Fixed It

Three companies have tried. All three went in the same direction.

**Akuity** (founded by ArgoCD's creators) built a better UI — but bundled it into a fully managed cloud platform. You get the better UI only if you hand over your infrastructure.

**Codefresh** built an enterprise wrapper around the entire Argo suite. Same story: you get better UX only by migrating to their platform.

**Devtron** built an open-source UI layer on top of ArgoCD — but it's a complete CI/CD platform, heavy, opinionated, and operationally complex to run.

**Kargo** (also Akuity) built a promotion-specific UI. It's promising but narrow. It solves one workflow, not the full experience.

The gap is clear: **nobody has shipped a lightweight, self-hosted, drop-in UI that just makes ArgoCD better.** Every attempt became a platform play. The incremental, UI-only path was left open.

---

## The Opportunity

- **~3,300+ companies** actively using ArgoCD
- **~2–3 million individual engineers** who interact with it — Platform Engineers (37%) and DevOps Engineers (36%) per the 2025 user survey
- **$1.62B GitOps market in 2024**, growing at 22.4% CAGR toward $12.28B by 2033
- Proven commercial appetite: Akuity hit 100+ enterprise customers and 43 million deployments in 2025 selling a better ArgoCD experience

This is a large, technically-sophisticated, budget-having audience that is already demonstrating willingness to pay for tooling that works.

---

## Why I'm The Person To Build This

My name is **Ashutosh Tripathi**. I've spent a decade building software at the intersection of developer tooling and frontend engineering.

**What makes this mine to build:**

**I understand the UX problem at the root level.** My entire career has been about software people can reason about. That's not a tagline — it's the thesis. I've spent years thinking about the gap between powerful and learnable, about how you design interfaces that make complex systems transparent rather than opaque. ArgoCD's UI fails exactly this test: it has enormous power underneath and almost no legibility on top.

**I build developer tooling.** Smriti, my most recent project, is a shared memory layer for AI-powered engineering teams — capturing Claude Code, Cursor, and Codex sessions locally and sharing team knowledge through git. Building it taught me a specific thing: the hardest problem in developer tooling is not the technical layer, it's the interaction layer. How do you make complex state visible? How do you make workflows that engineers actually want to follow? That's the ArgoCD problem.

**I understand distributed systems UI.** The ArgoCD UI problem is fundamentally a distributed state visualization problem — how do you render the health, sync status, and history of hundreds of applications across multiple clusters in a way that humans can parse? I've worked on video streaming infrastructure, where you're managing complex real-time state across distributed components and making it legible to operators. The mental models transfer directly.

**I work async and remote.** The ArgoCD UI's biggest enterprise failure — no multi-cluster view, no promotion workflow — is fundamentally a collaboration problem. Teams need a shared view of deployment state that works across time zones and org boundaries. I've spent a decade working in async-first environments and building tools for them. This is the problem space I live in.

**I know how to ship incrementally.** This is not a two-year platform play. The right approach is an extension of ArgoCD's own UI extension API (which already exists), shipped as a self-hostable tool that installs alongside your current ArgoCD setup. No migration. No lock-in. Start with the top three complaints, validate with the community, expand.

---

## What We Build

**Phase 1 — Fix the obvious pain (months 1–3)**

A self-hosted UI companion to ArgoCD that addresses the top community complaints:

- Application list with real filtering, sorting, and column labels
- Performance-optimized views for 500–5,000 app deployments (virtual scroll, lazy load)
- Diff view improvements (currently raw YAML, should be structured and annotated)

**Phase 2 — The workflow layer (months 4–6)**

- Visual environment promotion: see what version is in staging, promote to production, require approvals
- Multi-cluster dashboard: aggregate health and sync status across all clusters in one view
- Deployment history timeline: what changed, when, who triggered it

**Phase 3 — The intelligence layer (months 7–12)**

- Natural language app queries: "show me everything that drifted in the last 24 hours"
- Drift explanation: not just "OutOfSync" but why, in human language
- AI-assisted promotion: surface which releases are safe based on rollout history and health signals

**Business model:** Open core. The self-hosted base is free and open source, building community trust and distribution. Enterprise features (SSO/RBAC integration, audit logs, team dashboards, AI features) are commercial.

---

## The One-Line Version

**ArgoCD runs 60% of the world's Kubernetes clusters. Its UI is broken. No one has built a lightweight fix. I have the frontend + tooling background to do it — and the right mental model to do it well.**

---

*Ashutosh Tripathi — zero8.dev — ashutosh@zero8.dev*
