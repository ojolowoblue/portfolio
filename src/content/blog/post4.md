---
title: "Should you learn DSA and System Design, or is it too late"
description: "After five years of professional software engineering, here's why I'm suddenly caring about Data Structures and Algorithms again."
pubDate: "Aug 21, 2026"
heroImage: "/blog/neurons.jpg"
tags: ["Coding", "AI", "DSA", "Career"]
keywords:
  [
    "software engineering",
    "data structures",
    "algorithms",
    "AI",
    "career development",
    "leetcode",
  ]
---

<!-- Add Open Graph and Twitter Card meta tags for better sharing -->
<meta property="og:title" content="Should you learn DSA and System Design, or is it too late" />
<meta property="og:description" content="After five years of professional software engineering, here's why I'm suddenly caring about Data Structures and Algorithms again." />
<meta property="og:image" content="/blog/neurons.jpg" />
<meta property="og:url" content="https://ojolowo.com/blog/relearning-dsa-in-the-age-of-ai" />
<meta name="twitter:card" content="/blog/neurons.jpg" />
<meta name="twitter:title" content="Should you learn DSA and System Design, or is it too late" />
<meta name="twitter:description" content="After five years of professional software engineering, here's why I'm suddenly caring about Data Structures and Algorithms again." />
<meta name="twitter:image" content="/blog/neurons.jpg"/>

I have a confession to make.

I’ve been writing software professionally for over five years. I’ve worked at unicorns. I’ve worked at multi-million dollar startups. I’ve built features, shipped products, and solved real-world problems that actually mattered to users.

But if you asked me to reverse a linked list on a whiteboard? Or traverse a graph? I’d probably freeze.

Recently, I’ve been doing some LeetCode interviews. My success rate? About 35%. For an engineer with my experience, that stings a bit. It’s not that you _need_ Data Structures and Algorithms (DSA) to build good software. I’m proof that you don't. But there’s a gap. A subtle difference in pattern recognition and problem-solving approaches that separates a good engineer from a FAANG-level engineer.

So, I’m finally going back to basics.

But why now? After five years of doing this professionally, why am I suddenly caring about binary trees?

Honestly? I’m scared of AI.

Hear me out. We are entering an era where AI can write genuinely good code. It’s not perfect yet, but give it two years. When AI can flawlessly write the boilerplate, fix the React bugs, and wire up the APIs, what exactly is left for us to do?

I’ve spent a lot of time thinking about this. I think the answer is foundation. The future of software engineering won't be about who can write a `for` loop the fastest. It will be about who deeply understands System Design and DSA.

Think about it. System Design is the macro: how do we stitch independent nodes together into a distributed system that scales? DSA is the micro: how do we store, manipulate, and retrieve data efficiently? When the coding gets automated, concepts like memory optimization, time complexity, idempotency, and the CAP theorem become our actual job.

I’ve already started this journey, and I’m writing this because maybe you should, too. If you don't know where to start, here is what’s been working for me:

1. **[takeUforward](https://takeuforward.org)**: Don't just grind random LeetCode questions. Learn the patterns first. This site is incredible for pattern recognition.
2. **[System Design Handbook](https://www.systemdesignhandbook.com/guides/system-design/)**: Everything you need to know about distributed systems and how companies like Netflix and Google actually architect things.

As a bonus, let’s look at a classic problem: Two Sum. You’re given an array of numbers and a target, and you need to find the two numbers that add up to the target.

You could do it the brute-force way. Just check every single pair. But that takes quadratic time — `O(n^2)`. It works, but it doesn't scale.

Or, we could trade a little bit of memory for a lot of speed. If we use a `Map` to remember the numbers we've seen, we can find the answer in a single pass. That’s linear time — `O(n)`.

Here’s what that looks like in JavaScript:

```javascript
// The O(n) approach using a Hash Map
var twoSum = function (nums, target) {
  let sumMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];

    // Have we seen the number we need?
    if (sumMap.has(complement)) {
      return [sumMap.get(complement), i];
    }

    // Remember this number and its index
    sumMap.set(nums[i], i);
  }

  return [];
};

console.log("Two Sum:", twoSum([2, 11, 23, 7], 9));

// The O(n^2) brute-force approach
var twoSumBrute = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

console.log("Brute Force:", twoSumBrute([2, 11, 23, 7], 9));
```

If you've made it this far, thank you for reading!, although this article isn't exactly the longest piece of writing you'd ever read in your life 💀.

It’s easy to feel overwhelmed in our industry. We spend so much of our careers trying to keep up with the next framework, the next abstraction, the next big shift. But the foundations beneath them—the underlying mental models—rarely change. Whether you’re just starting out or you’ve been writing code for a decade, I hope this piece gave you a slightly different lens to look through.

My real hope isn't just that you learned a new fact today, but that you feel a little more empowered to take that next step. To go beneath the surface, to trust yourself enough to learn the hard things, and to build the kind of deep, foundational intuition that no tool or trend can ever replace.
