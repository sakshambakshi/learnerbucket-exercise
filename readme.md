# 🚀 The Ultimate JavaScript & React Interview Guide
*A comprehensive tracker and study guide based on the 118 core machine coding questions frequently asked in Frontend Engineering interviews.*

**Status Legend:**
* ⬜️ **Todo:** Not started yet.
* ⏳ **In Progress:** Currently working on this.
* ✅ **Done:** Completed, understood, and interview-ready.

---

## 🛠️ How to Run

### Vanilla JavaScript Tests (Parts 1-5)
We use `vitest` to run tests for JavaScript exercises. Tests are co-located with their exercises.
```bash
npm install
npx vitest
```

### React App (Parts 6 & 7)
The React exercises are organized in a Vite React app located in the `react-exercises` folder.
```bash
cd react-exercises
npm install
npm run dev
```

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

> 📝 **Revision Notes:** [View the Promise Combinators Cheat Sheet](./notes/promises.md)

| # | Topic / Exercise | Difficulty | Key Concept to Revise | Links | Status |
|:-:|:---|:---:|:---|:---|:---:|
| 1 | `Promise.all()` polyfill | 🟡 Medium | Fast-fails on the first rejection, tracks resolved states | [Code](./part-01-promises-async/01-promise-all.js) | ✅ |
| 2 | `Promise.any()` polyfill | 🟡 Medium | Returns `AggregateError` if all fail, resolves fast | [Code](./part-01-promises-async/02-promise-any.js) | ✅ |
| 3 | `Promise.race()` polyfill | 🟢 Easy | Resolves/rejects with the first settled promise | [Code](./part-01-promises-async/03-promise-race.js) | ✅ |
| 4 | `Promise.finally()` polyfill | 🟡 Medium | Remember value/rejection transparency | [Code](./part-01-promises-async/04-promise-finally.js) | ✅ |
| 5 | `Promise.allSettled()` polyfill | 🟡 Medium | Maps results to status objects (`{status, value/reason}`) | [Code](./part-01-promises-async/05-promise-allSettled.js) | ✅ |
| 6 | Custom Promise Implementation | 🔴 Hard | Handle internal states, `then`/`catch` chaining, microtasks | [Code](./part-01-promises-async/06-Custom-Promise) | ⬜️ |
| 7 | Execute Async in Series | 🟡 Medium | Mastered via recursion/reduce array methods | [Code](./part-01-promises-async/07-async-series.js) | ✅ |
| 8 | Execute Async in Parallel | 🟢 Easy | Handled natively via `Promise.all` orchestration | - | ✅ |
| 9 | Retry promises N times | 🟡 Medium | Retry failing Promise with recursive delays | [Code](./part-01-promises-async/09-promise-retry.js) | ✅ |
| 10 | `mapSeries` async function | 🟡 Medium | Sequential async mapping of array items | [Code](./part-01-promises-async/10-mapSeries.js) | ✅ |
| 11 | `mapLimit` async function | 🔴 Hard | Max concurrency using orchestration and chunking | [Code](./part-01-promises-async/11-mapLimit.js) | ✅ |
| 12 | `asyncFilter` function | 🟡 Medium | Parallel filtering, preserving array order | [Code](./part-01-promises-async/12-async-filter.js) | ✅ |
| 13 | `asyncReject` function | 🟢 Easy | Inverse logic operation of `asyncFilter` | [Code](./part-01-promises-async/13-async-reject.js) | ✅ |
| 14 | Execute promises with priority | 🔴 Hard | Priority queues mixed with async execution limits | - | ⬜️ |
| 15 | Dependent async tasks | 🔴 Hard | Modeling DAGs for promise resolution dependency | - | ⬜️ |
| 38 | Stream API Basics | 🟡 Medium | Generators, buffering data stream logic | - | ⬜️ |

### Part 2: Function Utilities & Closures
*Mastering Lexical Scope, Context (`this`), and Optimization.*

| # | Topic / Exercise | Difficulty | Key Concept to Revise | Links | Status |
|:-:|:---|:---:|:---|:---|:---:|
| 23 | Implement Debounce | 🟡 Medium | Clear timeout on rapid consecutive calls using closures | - | ⬜️ |
| 24 | Debounce (Immediate Flag) | 🔴 Hard | Execute on leading edge instead of trailing | - | ⬜️ |
| 25 | Implement Throttle | 🔴 Hard | Limit execution rate based on time intervals | - | ⬜️ |
| 29 | Create Toggle function | 🟢 Easy | Cycle through arguments sequentially on each call | - | ⬜️ |
| 30 | Create Sampling function | 🟡 Medium | Execute function only once per N internal calls | - | ⬜️ |
| 39 | Create Memoizer | 🟡 Medium | Cache expensive function results via closures / Maps | - | ⬜️ |
| 40 | Method chaining (Part 1) | 🟢 Easy | Return `this` from class methods `obj.do().do()` | - | ⬜️ |
| 41 | Method chaining (Part 2) | 🟡 Medium | Lazy execution tracking in class structures | - | ⬜️ |
| 45 | Currying | 🔴 Hard | Infinite param syntax (e.g. `sum(1)(2)(3)()`) | - | ⬜️ |

### Part 3: Data Structures & Algorithms
*Mastering Space-Time Complexity and Memory Management.*

| # | Topic / Exercise | Difficulty | Key Concept to Revise | Links | Status |
|:-:|:---|:---:|:---|:---|:---:|
| 16 | Pausable auto-incrementor | 🟡 Medium | `setInterval` wrapped by start/stop closure handlers | - | ⬜️ |
| 17 | Queue using Stacks | 🟡 Medium | Cost shifts: Push O(1), Pop O(N) using double stacks | - | ⬜️ |
| 18 | Stack using Queues | 🔴 Hard | Cost shifts: Push O(N), Pop O(1) via queue rotating | - | ⬜️ |
| 19 | Stack with Min/Max | 🟡 Medium | Keep track of min/max in O(1) using paired structures | - | ⬜️ |
| 20 | Two stacks in an Array | 🟡 Medium | Utilizing `left` and `right` sliding window pointers | - | ⬜️ |
| 21 | Priority Queue | 🔴 Hard | Min-Heap or Max-Heap arrays & `bubbleUp` operations | - | ⬜️ |
| 22 | LRU Cache | 🔴 Hard | O(1) operations combining a `Map` and Doubly Linked List | - | ⬜️ |
| 28 | HashSet | 🟡 Medium | Custom hashing or avoiding dictionary conflicts | - | ⬜️ |

### Part 4: Core JS Polyfills & Timers
*Mastering Browser APIs and Prototypal Inheritance.*

| # | Topic / Exercise | Difficulty | Key Concept to Revise | Links | Status |
|:-:|:---|:---:|:---|:---|:---:|
| 26 | Custom `instanceof` | 🟡 Medium | Traverse the `__proto__` chain until `null` | - | ⬜️ |
| 27 | Called with `new` | 🟢 Easy | Using `new.target` or prototype link comparisons | - | ⬜️ |
| 31 | Make function sleep | 🟢 Easy | `await new Promise(r => setTimeout(r, ms))` trick | - | ✅ |
| 42 | `clearAllTimeout` | 🔴 Hard | Intercepting `window.setTimeout` to track all generated IDs | - | ⬜️ |
| 43 | `clearAllInterval` | 🔴 Hard | Intercepting `window.setInterval`, same as Timeouts | - | ⬜️ |
| 44 | Fake setTimeout | 🔴 Hard | Jest internal timer manipulation concepts | - | ⬜️ |
| 99 | Human readable Time | 🟢 Easy | String manipulating modulo remainders for Date conversions | - | ⬜️ |
| 100| Detect overlapping circles| 🟡 Medium | Euclidean distance between centers vs sum of radii | - | ⬜️ |

### Part 5: Objects & Arrays Manipulation
*Mastering Deep Traversals, Recursion, and Math.*

| # | Topic / Exercise | Difficulty | Key Concept to Revise | Links | Status |
|:-:|:---|:---:|:---|:---|:---:|
| 32 | Remove cycle from object | 🟡 Medium | Use a `WeakSet` to track visited node cyclic references | - | ⬜️ |
| 33 | Filter N-dimensional array | 🟡 Medium | Deep recursive walks combined with standard `filter` | - | ⬜️ |
| 34 | Count in N-dimensional | 🟡 Medium | Recursion logic to return sub-tree sums to the root | - | ⬜️ |
| 35 | Convert HEX to RGB | 🟢 Easy | String splitting and `parseInt(hex, 16)` extraction | - | ⬜️ |
| 36 | Convert RGB to HEX | 🟢 Easy | Number `.toString(16)` and padding zeros via `.padStart` | - | ⬜️ |
| 37 | In-memory filesystem | 🔴 Hard | Abstract syntax trees or nested object directory graphs | - | ⬜️ |

### Part 6: React Custom Hooks
*Mastering React Lifecycle and Abstractions (In `react-exercises/src`)*

| # | Topic / Exercise | Difficulty | Key Concept to Revise | Links | Status |
|:-:|:---|:---:|:---|:---|:---:|
| 101 | `usePrevious()` | 🟢 Easy | Return previous state value via `useRef` | - | ⬜️ |
| 102 | `useIdle()` | 🟡 Medium | Global window event listeners, timeout debouncing | - | ⬜️ |
| 103 | `useAsync()` | 🟡 Medium | Encapsulate loading, error, and data payload states | - | ⬜️ |
| 104 | `useDebounce()` | 🟡 Medium | Delay UI state updates (search inputs) using effects | - | ⬜️ |
| 105 | `useThrottle()` | 🟡 Medium | Limit re-render execution rate using stored references | - | ⬜️ |
| 106 | `useResponsive()` | 🟡 Medium | Track component resizes or viewport media queries | - | ⬜️ |
| 107 | `useWhyDidYouUpdate`| 🔴 Hard | Object shallow comparison debugging for unnecessary renders | - | ⬜️ |
| 108 | `useOnScreen()` | 🟡 Medium | Leveraging `IntersectionObserver` on bound DOM refs | - | ⬜️ |
| 109 | `useScript()` | 🟢 Easy | Dynamically appending external `<script>` tags via effect | - | ⬜️ |
| 110 | `useOnClickOutside()`| 🟡 Medium | Crucial for Modals/Dropdowns `document` click tracking | - | ⬜️ |
| 113 | `useCopy()` | 🟢 Easy | Asynchronous Clipboard API integrations via `navigator` | - | ⬜️ |
| 114 | `useLockedBody()` | 🟢 Easy | Prevent background scrolling toggling CSS `overflow` | - | ⬜️ |

### Part 7: React Machine Coding
*Mastering Component Architecture and UI State (In `react-exercises/src`)*

| # | Topic / Exercise | Difficulty | Key Concept to Revise | Links | Status |
|:-:|:---|:---:|:---|:---|:---:|
| 115 | Number Incrementer | 🟢 Easy | React `StrictMode` closures and functional state updates | - | ⬜️ |
| 116 | Capture products | 🟡 Medium | Feed lists into `IntersectionObserver` tracking refs | - | ⬜️ |
| 117 | Highlight text range | 🔴 Hard | Native window Selection API node boundary transformations | - | ⬜️ |
| 118 | Batch API sequence | 🟡 Medium | Async queuing decoupled from standard UI rendering loops | - | ⬜️ |

