---
layout: post
title: "Notes on writing a compiler from scratch"
date: 2026-01-15
---

I spent the last few months writing a small compiler as a side project. Not because I needed one, but because compilers are one of those things I kept saying I'd understand properly someday. Someday arrived.

These are rough notes on what I built, what surprised me, and what I'd do differently the second time around.

## Start with the simplest possible grammar

I wasted two weeks trying to design the "right" language upfront. The grammar that actually worked was the one I arrived at after cutting everything I thought was essential. Arithmetic expressions and variables. That's it. Add features only when the infrastructure earns them.

## The parser is not the hard part

Everyone warns you about parsing. Parsing is fine. Recursive descent is straightforward enough to write in a weekend. The hard part is the middle — taking a tree and deciding what it means. Semantic analysis and type checking ate more time than everything else combined.

## Write tests before you write code

A compiler with no tests is a compiler you can't refactor. I learned this the expensive way at the code generation stage. Write a test for every construct before you implement it, and run them after every change.
