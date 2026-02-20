# 🚀 The Ultimate JavaScript & React Interview Guide
*A comprehensive tracker and study guide based on the 118 core machine coding questions frequently asked in Frontend Engineering interviews.*

**Status Legend:**
* ⬜️ **Todo:** Not started yet.
* ⏳ **In Progress:** Currently working on this.
* ✅ **Done:** Completed, understood, and interview-ready.

---

## 📑 Table of Contents
- [🚀 The Ultimate JavaScript \& React Interview Guide](#-the-ultimate-javascript--react-interview-guide)
  - [📑 Table of Contents](#-table-of-contents)
  - [1. 🧠 The Promise Combinators: A Comedy (Cheat Sheet)](#1--the-promise-combinators-a-comedy-cheat-sheet)
  - [2. 🏗️ Core JavaScript Pillars (In-Depth)](#2-️-core-javascript-pillars-in-depth)
  - [3. 💻 The 118 Machine Coding Challenges (Topic-Wise)](#3--the-118-machine-coding-challenges-topic-wise)
    - [Part 1: Promises \& Asynchronous JavaScript](#part-1-promises--asynchronous-javascript)
    - [Part 2: Function Utilities \& Closures](#part-2-function-utilities--closures)
    - [Part 3: Data Structures \& Algorithms](#part-3-data-structures--algorithms)
    - [Part 4: Core JS Polyfills \& Timers](#part-4-core-js-polyfills--timers)
    - [Part 5: Objects \& Arrays Manipulation](#part-5-objects--arrays-manipulation)
    - [Part 6: React Custom Hooks](#part-6-react-custom-hooks)
    - [Part 7: React Machine Coding](#part-7-react-machine-coding)
  - [Section 2: JavaScript Promise Managers: A Comedy](#section-2-javascript-promise-managers-a-comedy)
    - [1. The Perfectionist vs. The Therapist](#1-the-perfectionist-vs-the-therapist)
    - [2. The Referee vs. The Desperate Survivor](#2-the-referee-vs-the-desperate-survivor)

---

## 1. 🧠 The Promise Combinators: A Comedy (Cheat Sheet)
*Imagine you throw a party and send four friends to get pizzas. These friends are your Promises.* 

| Method | The Vibe | Succeeds when... | Fails when... |
| :--- | :--- | :--- | :--- |
| **`Promise.all()`** | **The Perfectionist:** *"If even ONE person drops a pizza, the party is ruined! Burn it down!"* | ALL succeed. | ANY one fails (Fast-fails). |
| **`Promise.allSettled()`**| **The Therapist:** *"Let's just wait until everyone gets back and talk about our feelings, win or lose."* | ALL finish. | (Never rejects, just reports) |
| **`Promise.race()`** | **The Referee:** *"First person back determines our fate! I don't care if they bring pizza or disaster!"*| The FIRST finishes. | The FIRST fails. |
| **`Promise.any()`** | **The Survivor:** *"I just need ONE pizza. Ignore the failures, first person with food saves the day!"* | ANY one succeeds. | ALL fail (`AggregateError`). |

---

## 2. 🏗️ Core JavaScript Pillars (In-Depth)
Before diving into the exercises, ensure you understand the engines powering them.

1. **Closures & Lexical Scoping:** A function remembers the variables around it where it was born, even if executed elsewhere. *(Crucial for Debounce, Throttle, Memoization, and React Hooks).*
2. **The Event Loop & Microtasks:** JS is single-threaded. Synchronous code runs first, then the **Microtask Queue** (Promises), then the **Macrotask Queue** (`setTimeout`). 

3. **Prototypal Inheritance & Context (`this`):** `this` is determined by *how* a function is called, not where it's written. *(Crucial for `bind`, `call`, `apply`, and Array polyfills).*
4. **Space-Time Tradeoffs:** Using a `Map` or `Set` costs more memory (Space) but turns slow O(N) array searches into instant O(1) lookups (Time). *(Crucial for LRU Caches and Memoization).*

---

## 3. 💻 The 118 Machine Coding Challenges (Topic-Wise)

### Part 1: Promises & Asynchronous JavaScript
*Mastering the Event Loop, Microtasks, and Concurrency Orchestration.*

| S.No | Name of Exercise | Status | Remarks |
| :--- | :--- | :--- | :--- |
| 1 | `Promise.all()` polyfill | ✅ Done | Fast-fails on the first rejection. |
| 2 | `Promise.any()` polyfill | ✅ Done | Returns `AggregateError` if all fail. |
| 3 | `Promise.race()` polyfill | ✅ Done | Resolves/rejects with the first settled. |
| 4 | `Promise.finally()` polyfill | ✅ Done | Remember value transparency. |
| 5 | `Promise.allSettled()` polyfill | ✅ Done | Maps results to status objects. |
| 6 | Custom Promise Implementation | ⬜️ Todo | Handle internal state and microtasks. |
| 7 | Execute async functions in Series | ✅ Done | Mastered via recursion/reduce. |
| 8 | Execute async functions in Parallel | ✅ Done | Handled via `Promise.all`. |
| 9 | Retry promises N number of times | ✅ Done | Retry failing Promise with delay. |
| 10 | Implement `mapSeries` async function | ✅ Done | Sequential async mapping. |
| 11 | Implement `mapLimit` async function | ✅ Done | Max concurrency using orchestrator. |
| 12 | Implement `asyncFilter` function | ✅ Done | Parallel execution, preserves order. |
| 13 | Implement `asyncReject` function | ✅ Done | Inverse of asyncFilter. |
| 14 | Execute promises with priority | ⬜️ Todo | - |
| 15 | Dependent async tasks | ⬜️ Todo | - |
| 38 | Basic implementations of streams API | ⬜️ Todo | - |

### Part 2: Function Utilities & Closures
*Mastering Lexical Scope, Context (`this`), and Optimization.*

| S.No | Name of Exercise | Status | Remarks |
| :--- | :--- | :--- | :--- |
| 23 | Implement debounce function | ⬜️ Todo | Clear timeout on rapid calls. |
| 24 | Implement debounce with immediate flag| ⬜️ Todo | Execute on leading edge instead of trailing. |
| 25 | Implement throttle function | ⬜️ Todo | Limit execution rate based on time. |
| 29 | Create a toggle function | ⬜️ Todo | Cycle through arguments on each call. |
| 30 | Create a sampling function | ⬜️ Todo | Execute function only once per N calls. |
| 39 | Create a memoizer function | ⬜️ Todo | Cache expensive function calls. |
| 40 | Method chaining - part 1 | ⬜️ Todo | Return `this` to allow `.method().method()`. |
| 41 | Method chaining - part 2 | ⬜️ Todo | - |
| 45 | Currying - problem 1 | ⬜️ Todo | e.g., `sum(1)(2)(3)`. |

### Part 3: Data Structures & Algorithms
*Mastering Space-Time Complexity and Memory Management.*

| S.No | Name of Exercise | Status | Remarks |
| :--- | :--- | :--- | :--- |
| 16 | Create pausable auto incrementor | ⬜️ Todo | - |
| 17 | Implement queue using stack | ⬜️ Todo | Push costs O(1), Pop costs O(N). |
| 18 | Implement stack using queue | ⬜️ Todo | Push costs O(N), Pop costs O(1). |
| 19 | Implement stack with min/max method | ⬜️ Todo | Keep track of min/max in O(1) time. |
| 20 | Implement two stacks with an array | ⬜️ Todo | - |
| 21 | Implement Priority Queue | ⬜️ Todo | - |
| 22 | Implement LRU cache | ⬜️ Todo | O(1) ops using `Map` for order tracking. |
| 28 | Implement hashSet | ⬜️ Todo | - |

### Part 4: Core JS Polyfills & Timers
*Mastering Browser APIs and Prototypal Inheritance.*

| S.No | Name of Exercise | Status | Remarks |
| :--- | :--- | :--- | :--- |
| 26 | Implement custom `instanceof` | ⬜️ Todo | Traverse the `__proto__` chain. |
| 27 | Check if function called with `new` | ⬜️ Todo | Checking `new.target` or prototype link. |
| 31 | Make function sleep | ✅ Done | `await new Promise(r => setTimeout(r, ms))` |
| 42 | Implement clearAllTimeout | ⬜️ Todo | Overwrite `window.setTimeout` to track IDs. |
| 43 | Implement clearAllInterval | ⬜️ Todo | - |
| 44 | Create a fake setTimeout | ⬜️ Todo | - |
| 99 | Time in human readable format | ⬜️ Todo | - |
| 100| Detect overlapping circles | ⬜️ Todo | Math logic / Geometry logic. |

### Part 5: Objects & Arrays Manipulation
*Mastering Deep Traversals, Recursion, and Math.*

| S.No | Name of Exercise | Status | Remarks |
| :--- | :--- | :--- | :--- |
| 32 | Remove cycle from the object | ⬜️ Todo | Use a `WeakSet` to track visited nodes. |
| 33 | Filter multidimensional array | ⬜️ Todo | Recursion required. |
| 34 | Count element in multidimensional array| ⬜️ Todo | Recursion required. |
| 35 | Convert HEX to RGB | ⬜️ Todo | Bitwise operators or `parseInt(hex, 16)`. |
| 36 | Convert RGB to HEX | ⬜️ Todo | `.toString(16)` padding logic. |
| 37 | In-memory filesystem library | ⬜️ Todo | - |

---

### Part 6: React Custom Hooks
*Mastering React Lifecycle and Abstractions.*

| S.No | Name of Exercise | Status | Remarks |
| :--- | :--- | :--- | :--- |
| 101 | `usePrevious()` hook | ⬜️ Todo | Track previous state with `useRef`. |
| 102 | `useIdle()` hook | ⬜️ Todo | Detect user inactivity via event listeners. |
| 103 | `useAsync()` hook | ⬜️ Todo | Manage loading/error/data states. |
| 104 | `useDebounce()` hook | ⬜️ Todo | Delay UI state updates. |
| 105 | `useThrottle()` hook | ⬜️ Todo | Limit execution rate in React. |
| 106 | `useResponsive()` hook | ⬜️ Todo | Track viewport/media queries. |
| 107 | `useWhyDidYouUpdate()` hook | ⬜️ Todo | Debug unnecessary re-renders. |
| 108 | `useOnScreen()` hook | ⬜️ Todo | Uses `IntersectionObserver`. |
| 109 | `useScript()` hook | ⬜️ Todo | Dynamically inject external JS. |
| 110 | `useOnClickOutside()` hook | ⬜️ Todo | Crucial for Modals/Dropdowns. |
| 111 | `useHasFocus()` hook | ⬜️ Todo | - |
| 112 | `useToggle()` hook | ⬜️ Todo | - |
| 113 | `useCopy()` hook | ⬜️ Todo | Clipboard API integration. |
| 114 | `useLockedBody()` hook | ⬜️ Todo | Prevent background scrolling via CSS. |

### Part 7: React Machine Coding
*Mastering Component Architecture and UI State.*

| S.No | Name of Exercise | Status | Remarks |
| :--- | :--- | :--- | :--- |
| 115 | Number Increment counter | ⬜️ Todo | Handle batching and strict mode. |
| 116 | Capture product visible in viewport | ⬜️ Todo | Combine refs with IntersectionObserver. |
| 117 | Highlight text on selection | ⬜️ Todo | Browser Selection API manipulation. |
| 118 | Batch API calls in sequence | ⬜️ Todo | Async UI orchestration. |


---

## Section 2: JavaScript Promise Managers: A Comedy

*Imagine you are throwing a massive party and you send four of your friends out to pick up pizzas. These friends are your Promises.* *Here is the dramatic, foolproof way to remember how they behave:*

### 1. The Perfectionist vs. The Therapist

**`Promise.all()` – The Dramatic Perfectionist**
You tell your four friends, "We need all four pizzas for the party to be perfect."
* **How it works:** You wait by the door. If all four friends come back with pizza, the party is a massive success!
* **The Catch:** If even ONE friend drops their pizza in a puddle (a rejection), you absolutely lose your mind. You flip the table, scream "THE PARTY IS RUINED," and kick everyone out. You don't even care if the other three friends successfully brought their pizzas. One failure = total meltdown.
* **Memory Hook:** *“If it's not 100% perfect, burn it all down!”*

**`Promise.allSettled()` – The Chill Therapist**
You have been going to therapy and you are very at peace with the chaos of the universe.
* **How it works:** You tell your friends to get the pizzas, and then you just... wait. You don't panic. You let everyone finish their journey.
* **The Catch:** None! When all four friends finally return, you have a peaceful debrief. "Okay, Sarah, you brought a pizza, valid. Mike, you got mugged for your pizza, I hear you, your trauma is valid." You compile a neat little report card of who succeeded and who failed, but the party continues either way.
* **Memory Hook:** *“Let's just wait until everyone is finished and talk about our feelings, win or lose.”*

### 2. The Referee vs. The Desperate Survivor

**`Promise.race()` – The Unhinged Referee**
You are holding a stopwatch and you have clearly had too much caffeine. You shout, "I ONLY CARE ABOUT THE FIRST PERSON WHO CROSSES THIS FINISH LINE!"
* **How it works:** The absolute millisecond the door opens, the race is over.
* **The Catch:** You do not care if the first person is bringing good news or bad news. If Dave comes running in first holding a glorious pepperoni pizza (a resolve), you declare Dave the winner and ignore the rest. But if Kevin trips, busts his lip, and slides across the finish line empty-handed and crying (a reject) before anyone else arrives... you blow the whistle, scream "KEVIN FAILED, RACE OVER, WE ALL FAIL," and lock the door on everyone else.
* **Memory Hook:** *“First one back determines our fate, whether they bring pizza or disaster.”*

**`Promise.any()` – The Desperate Survivor**
You haven't eaten in 12 days. You are starving. You don't care about the race, you don't care about perfection, you just need food.
* **How it works:** You wait by the door. Dave trips and ruins his pizza? You ignore him. Kevin gets arrested? You ignore him. You literally do not care about failures.
* **The Catch:** The very first friend who walks through that door with an intact pizza (a resolve) is your hero. You grab the pizza, lock the door, and the other three friends are dead to you. The only way you cry (reject) is if ALL FOUR friends fail to bring you food.
* **Memory Hook:** *“First one back with an ACTUAL PIZZA saves the day. Ignore the failures!”*