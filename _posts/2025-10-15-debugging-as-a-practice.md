---
layout: post
title: "On debugging as a practice"
date: 2025-10-15
---

Debugging is the part of software development that nobody teaches formally and everybody does constantly. Most of what I know about it I learned the hard way, staring at a screen at a time I'd rather have been doing something else.

Over time I've come to think of debugging less as problem-solving and more as a practice — something with principles you can improve at deliberately.

## State a hypothesis before you change anything

The worst debugging sessions I've had started with random changes: add a log here, comment something out there, restart the server. This is not debugging, it is flailing. A hypothesis — even a wrong one — forces you to think about the system rather than poke at it.

## Reproduce it first

If you can't reproduce the bug reliably, you can't know when you've fixed it. Before touching any code, make the bug happen on demand. This step often reveals the cause before you've written a single line.

## The bug is probably in your code

Not in the framework. Not in the database driver. Not in the operating system. It's almost always in your code, and starting from that assumption is faster than the alternative.
