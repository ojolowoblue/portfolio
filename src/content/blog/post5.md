---
title: "Introducing Lamba: Swap Environment Variables Without Touching Your .env"
description: "I built Lamba — a lightweight developer tool that lets you securely inspect and swap environment variables to simulate different test scenarios, without altering your local .env configurations."
pubDate: "Sep 12, 2026"
heroImage: "/blog/lamba.jpg"
tags: ["Open Source", "Developer Tools", "Node.js", "DX"]
keywords:
  [
    "environment variables",
    "developer experience",
    "DX",
    "test environments",
    "Node.js",
    "open source",
    "npm",
    "lamba",
  ]
---

<!-- Add Open Graph and Twitter Card meta tags for better sharing -->
<meta property="og:title" content="Introducing Lamba: Swap Environment Variables Without Touching Your .env" />
<meta property="og:description" content="I built Lamba — a lightweight developer tool that lets you securely inspect and swap environment variables to simulate different test scenarios, without altering your local .env configurations." />
<meta property="og:image" content="/blog/lamba.jpg" />
<meta property="og:url" content="https://ojolowo.com/blog/introducing-lamba" />
<meta name="twitter:card" content="/blog/lamba.jpg" />
<meta name="twitter:title" content="Introducing Lamba: Swap Environment Variables Without Touching Your .env" />
<meta name="twitter:description" content="I built Lamba — a lightweight developer tool that lets you securely inspect and swap environment variables to simulate different test scenarios, without altering your local .env configurations." />
<meta name="twitter:image" content="/blog/lamba.jpg"/>

I've built something that's been on my mind for a while: **Lamba**.

For some time, I wanted to create a developer tool to improve the developer experience when working with test environments. If you've ever had to manually edit your `.env` file, restart your dev server, test one scenario, and then undo all of your changes just to test another — you know exactly the friction I'm talking about.

## The Problem

Working with multiple test environments is a constant source of low-grade pain. You're bouncing between staging, QA, and local dev. You need to simulate different scenarios — a webhook hitting a test endpoint, a feature flag pointing at a mock service, an API key for a sandbox account. Every time, you're either:

1. Manually editing `.env` and hoping you remember to revert it
2. Juggling multiple `.env.local`, `.env.staging`, `.env.test` files and trying to keep them in sync
3. Hardcoding values directly into your code (please don't do this)

None of these are good. They're error-prone, slow, and worst of all — they clutter your local config with changes that should never have touched it.

## What Lamba Does

Lamba is a lightweight tool that lets you **securely inspect and swap environment variables**, allowing you to simulate different test scenarios without altering your local `.env` configurations — either on your local server or in a deployed test environment.

The idea is simple: instead of permanently modifying your environment, Lamba lets you apply a temporary, scoped override. You get the scenario you need, you test it, and your baseline configuration is untouched.

Key capabilities:
- **Inspect** your current environment variable state at any point
- **Swap** variables for a targeted session or test run
- **Restore** to your original state automatically — no manual cleanup
- Works on both **local dev servers** and **deployed test environments**
- Lightweight and non-invasive — no heavy dependencies, no daemon processes

## Why I Built It

The idea came from a pattern I kept seeing across projects. QA would need to test a specific payment gateway. A developer would need to point a service at a mock API for one PR. An environment variable that was correct in staging was wrong in local dev. Every time, the solution was the same clunky, manual process.

I wanted something that felt like it belonged in the terminal. Something that a developer could reach for in the same way they'd reach for `curl` or `jq` — fast, composable, and purposeful.

So I built Lamba.

## Check It Out

Lamba is live on npm and available to use today.

```bash
npm install @ojolowoblue/lamba
```

👉 [View on npm](https://www.npmjs.com/package/@ojolowoblue/lamba)

I'm actively working on it, so feedback, issues, and contributions are very welcome. If you've ever felt the pain of environment variable juggling in a test workflow, give it a try and let me know what you think.
