# The Ultimate JavaScript & React Interview Tracker

**Status Legend:**
* **⬜️ Todo:** Not started yet.
* **⏳ In Progress:** Currently working on this.
* **✅ Done:** Completed and understood.

---

## Section 1: Machine Coding & Polyfill Exercises

### Part A: Promises & Asynchronous Execution
| S.No | Name of Exercise | Status | Remarks |
| :--- | :--- | :--- | :--- |
| 1 | [`Promise.prototype.finally`](./01-promise-finally.js) | ✅ Done | Remember `this.constructor` and value transparency. |
| 2 | [`Promise.all`](./02-promise-all.js) | ✅ Done | Fast-fails on the first rejection. |
| 3 | [`Promise.allSettled`](./03-promise-allSettled.js) | ✅ Done | Waits for all; maps results to `{ status, value/reason }`. |
| 4 | [`Promise.race`](./04-promise-race.js) | ✅ Done | Resolves/rejects with the very first settled promise. |
| 5 | [`Promise.any`](./05-promise-any.js) | ✅ Done | Returns an `AggregateError` if every single promise rejects. |
| 6 | [`Promise.try`](./06-promise-try.js) | ✅ Done | Executes synchronously, wraps everything safely in a Promise. |
| 7 | [`Promise.withResolvers`](./07-promise-withResolvers.js) | ✅ Done | Extracts `resolve` and `reject` to the outer scope cleanly. |
| 8 | [**Custom Promise Implementation**](./08-Custom-Promise) | ⬜️ Todo | Manage internal state, handle chaining, and use microtasks. |
| 9 | [Execute Async Functions in Series](./09-async-series.js) | ✅ Done | Mastered via recursion, `withResolvers`, and `Array.reduce`. |
| 10 | Implement `mapSeries` (Async Map) | ⏳ In Progress | Wait for the previous item to finish before mapping the next. |
| 11 | Async Tasks with Concurrency Limit | ⬜️ Todo | e.g., run max 3 tasks at a time out of 10 (`Promise.pool`). |
| 12 | Promisify (`util.promisify`) | ⬜️ Todo | Convert a callback-style function into a Promise-returning one. |
| 13 | [Promise Retry Mechanism](./13-promise-retry.js) | ✅ Done | Retry a failing Promise `N` times with a delay mechanism. |
| 14 | `sleep` / Delay Utility | ✅ Done | Used `Promise` + `setTimeout` (Mastered inside the Retry exercise). |

### Part B: Functions, Context (`this`), & Timing
| S.No | Name of Exercise | Status | Remarks |
| :--- | :--- | :--- | :--- |
| 15 | `Function.prototype.bind` | ⬜️ Todo | Must handle currying and the `new` keyword edge cases. |
| 16 | `Function.prototype.call` | ⬜️ Todo | Attach the function to the context object temporarily to run it. |
| 17 | `Function.prototype.apply` | ⬜️ Todo | Similar to `call`, but spreads the array arguments. |
| 18 | `new` Keyword Polyfill | ⬜️ Todo | Object linking via `__proto__` and handling constructor returns. |
| 19 | `Object.create` Polyfill | ⬜️ Todo | Prototypal inheritance without executing the constructor. |
| 20 | Debounce Utility | ⬜️ Todo | Clears the timeout on subsequent rapid calls. |
| 21 | Throttle Utility | ⬜️ Todo | Tracks the last executed time or uses a boolean flag. |
| 22 | Memoization Function | ⬜️ Todo | Cache expensive function calls based on arguments. |
| 23 | Currying Utility | ⬜️ Todo | e.g., `sum(1)(2)(3)`. Handle arbitrary numbers of arguments. |
| 24 | Lodash `_.once` | ⬜️ Todo | Ensure a function can only be called exactly one time. |
| 25 | `pipe()` and `compose()` | ⬜️ Todo | Pass the output of one function as the input to the next. |
| 26 | `setInterval` via `setTimeout` | ⬜️ Todo | Ensure intervals don't overlap if execution takes too long. |
| 27 | `clearAllTimers` Utility | ⬜️ Todo | Overwrite `window.setTimeout` to track and clear all active timers. |

### Part C: Arrays, Objects & Data Structures
| S.No | Name of Exercise | Status | Remarks |
| :--- | :--- | :--- | :--- |
| 28 | `Array.prototype.map` | ⬜️ Todo | Pass `thisArg`, `index`, and `array` to the callback. |
| 29 | `Array.prototype.filter` | ⬜️ Todo | Only push items to the new array if the callback is truthy. |
| 30 | `Array.prototype.reduce` | ⬜️ Todo | Handle the missing `initialValue` edge case correctly. |
| 31 | Array Flatten (`Array.flat`) | ⬜️ Todo | Use recursion or an iterative stack for deep nesting. |
| 32 | Lodash `_.chunk` | ⬜️ Todo | Split an array into groups the length of `size`. |
| 33 | Deep Clone Object | ⬜️ Todo | Handle nested objects, arrays, Dates, and circular references. |
| 34 | Deep Equal (`isEqual`) | ⬜️ Todo | Recursively check if two objects/arrays have identical keys/values. |
| 35 | `Object.assign` Polyfill | ⬜️ Todo | Copy enumerable own properties from source to target objects. |
| 36 | Lodash `_.get` & `_.set` | ⬜️ Todo | Safely access/set deeply nested object properties via string paths. |
| 37 | `JSON.stringify` Polyfill | ⬜️ Todo | Recursively convert JS objects/arrays/primitives to JSON strings. |

### Part D: DOM Manipulation & Browser APIs
| S.No | Name of Exercise | Status | Remarks |
| :--- | :--- | :--- | :--- |
| 38 | Find Corresponding Node | ⬜️ Todo | Find the exact same node in a cloned DOM tree using tree traversal. |
| 39 | Get Elements by Class Name | ⬜️ Todo | Polyfill `document.getElementsByClassName` using DFS/BFS. |
| 40 | Virtual DOM to Real DOM | ⬜️ Todo | Write a `render()` function that turns a nested JS object into HTML. |
| 41 | Event Delegation Utility | ⬜️ Todo | Attach a single listener to a parent to manage dynamically added children. |
| 42 | Infinite DOM Scroll | ⬜️ Todo | Use `IntersectionObserver` to load more nodes as the user scrolls. |

### Part E: Design Patterns & Architecture
| S.No | Name of Exercise | Status | Remarks |
| :--- | :--- | :--- | :--- |
| 43 | Event Emitter (Pub/Sub) | ⬜️ Todo | Implement `on`, `emit`, `off`, and `once` methods. |
| 44 | LRU Cache | ⬜️ Todo | Use `Map` for order preservation and $O(1)$ operations. |
| 45 | Observable via ES6 `Proxy` | ⬜️ Todo | Intercept object property getters/setters to trigger UI updates. |

### Part F: React Custom Hooks & Machine Coding
| S.No | Name of Exercise | Status | Remarks |
| :--- | :--- | :--- | :--- |
| 46 | `useDebounce` Hook | ⬜️ Todo | Delay value updates; clear timeout on unmount. |
| 47 | `usePrevious` Hook | ⬜️ Todo | Use `useRef` to store and access the previous render's state. |
| 48 | `useInterval` Hook | ⬜️ Todo | The correct way to handle `setInterval` in React (Dan Abramov's pattern). |
| 49 | `useFetch` Hook | ⬜️ Todo | Handle loading, errors, and `AbortController` for race conditions. |
| 50 | `useLocalStorage` Hook | ⬜️ Todo | Sync state to `window.localStorage` and handle cross-tab events. |
| 51 | `useOnClickOutside` Hook | ⬜️ Todo | Detect clicks outside a referenced element (crucial for dropdowns/modals). |
| 52 | Polyfill `useState` | ⬜️ Todo | Conceptual: Replicate React's closure-based state array mechanism. |
| 53 | **Traffic Light Component** | ⬜️ Todo | Auto-cycle through Red, Yellow, Green with different durations. |
| 54 | Accordion Component | ⬜️ Todo | Manage expandable/collapsible state and accessible ARIA labels. |
| 55 | Star Rating Widget | ⬜️ Todo | Handle hover state vs. clicked (locked) state dynamically. |
| 56 | Autocomplete / Typeahead | ⬜️ Todo | Combine input handling, debouncing, and highlighting matched text. |
| 57 | Modal / Dialog | ⬜️ Todo | Use `ReactDOM.createPortal` to render outside the main DOM tree. |
| 58 | Toast Notification System | ⬜️ Todo | Manage a queue of auto-dismissing alerts globally. |
| 59 | Progress Bar Component | ⬜️ Todo | Handle percentage fills, queued animations, and concurrency. |
| 60 | Pagination Component | ⬜️ Todo | Calculate total pages, handle ellipses (`1 ... 4 5 6 ... 10`), and navigation. |
| 61 | Tic-Tac-Toe Game | ⬜️ Todo | 2D array state manipulation and calculating win conditions. |
| 62 | File Explorer (Tree View) | ⬜️ Todo | Render a deeply nested JSON structure using **Recursive Components**. |
| 63 | Carousel / Image Slider | ⬜️ Todo | Handle next/prev navigation, auto-play, and boundary wrapping. |
| 64 | Virtualized List | ⬜️ Todo | Render only the visible items in a massive list of 10,000+ elements. |

---

## Section 2: Core Concepts & Applications (In-Depth)

This section contains the theoretical engines that power every JavaScript and React interview question. If you understand these 8 pillars, you can solve any of the 64 exercises above.

### 1. Closures & Lexical Scoping
* **The Concept:** When a function is created, it takes a "snapshot" of the variables in the scope surrounding it (its Lexical Environment). Even if you return that inner function and execute it completely outside of its original file or block, it retains access to that snapshot.
* **The "Stale Closure" Trap:** In React, if a closure captures a state variable, it holds onto the value from that *specific render*. If the state updates, the old closure still sees the old value unless properly managed with `useRef` or dependency arrays.
* **Mapped Exercises:**
  * **React Hooks Under the Hood (Ex: 52):** Replicating `useState` requires an array of state variables hidden inside a module-level closure.
  * **Data Privacy / Caching (Ex: 20-24):** Debounce, Throttle, Memoize, and `_.once` all rely on returning a closure that "remembers" a private `timerId`, `lastRan` timestamp, or a `cache` object.
  * **Stale Closures (Ex: 47, 48):** `usePrevious` and `useInterval` specifically test your ability to bypass closure traps using `useRef` to maintain a mutable, up-to-date reference.

### 2. Prototypal Inheritance & The `this` Context
* **The Concept:** JavaScript doesn't have traditional classes; it has objects linked to other objects via a hidden `[[Prototype]]` chain. When you call a method, the `this` keyword is determined entirely by **how** the function is called, not where it was written.
  * *Implicit:* `user.getName()` (`this` is `user`).
  * *Explicit:* `getName.call(admin)` (`this` is forced to be `admin`).
  * *Arrow Functions:* They have no `this` of their own; they permanently inherit `this` from the surrounding scope.
* **Mapped Exercises:**
  * **Polyfilling Built-ins (Ex: 18, 19, 28-30):** Writing `Array.prototype.map` or `Object.create` tests your iteration over `this` and linking prototypes.
  * **Explicit Binding (Ex: 15-17):** Writing `bind`, `call`, and `apply` from scratch tests your understanding of manipulating the context object dynamically.
  * **Chaining (Ex: 1, 8):** Returning `this` or a new instance of `this.constructor` to keep a Promise chain alive.

### 3. The Event Loop & Concurrency Model
* **The Concept:** JavaScript is single-threaded but non-blocking. It achieves this via a queueing system:
  1. **Call Stack:** Executes synchronous code.
  2. **Microtask Queue:** Executes high-priority async code (Promises, `queueMicrotask`, MutationObserver).
  3. **Macrotask Queue:** Executes low-priority async code (`setTimeout`, `setInterval`, DOM Events).
  * *Rule:* The engine completely empties the Microtask queue immediately after the current synchronous code finishes, *before* moving to the next Macrotask.
* **Mapped Exercises:**
  * **Custom Promises (Ex: 8):** You must wrap `.then` callbacks in `queueMicrotask()` to match the spec.
  * **Async Orchestration (Ex: 9-11):** Executing tasks in series, mapping them, or capping concurrency limits requires managing the Microtask queue without blocking the main thread.
  * **Timer Polyfills (Ex: 26, 27):** Why is `setInterval` dangerous? If the main thread is blocked, macrotasks pile up and fire all at once. Polyfilling it with recursive `setTimeout` fixes this.

### 4. Recursion & Tree Traversal
* **The Concept:** A function calling itself to break a large problem into identical, smaller sub-problems. It requires a **Base Case** (when to stop) and a **Recursive Step** (going deeper). In web development, this is heavily used to traverse trees (like the DOM or deeply nested JSON).
* **Mapped Exercises:**
  * **Data Structures (Ex: 31-34, 37):** Deep Clone, Deep Equal, Flatten Array, and `JSON.stringify` all require recursively checking `typeof val === 'object'` and diving deeper.
  * **DOM Searching (Ex: 38, 39):** Finding nodes by class name requires Depth-First Search (DFS) or Breadth-First Search (BFS) through `element.children`.
  * **React Recursion (Ex: 62):** A File Explorer requires a Component that renders *itself* if a folder contains nested folders.

### 5. The Observer Pattern & Reactive Proxies
* **The Concept:** Decoupling triggers from reactions. Instead of a UI component constantly checking if data changed, the data "pushes" a notification to the UI component when it changes. 
* ES6 `Proxy` allows you to intercept basic object operations (like `get` and `set`) to trigger these notifications automatically.
* **Mapped Exercises:**
  * **Event Emitters (Ex: 43):** The classic Pub/Sub implementation (managing an array of subscribed callbacks).
  * **Custom Promises (Ex: 8):** A Promise is an Observer pattern where `.then()` registers subscribers, and `resolve()` broadcasts the result.
  * **Data Binding (Ex: 45):** Using `new Proxy(obj, handler)` to automatically trigger a DOM update whenever someone does `obj.value = 'new'`.

### 6. Space-Time Tradeoffs (Caching & Hashing)
* **The Concept:** In computer science, you can often make code run drastically faster (better Time Complexity) by using more memory (worse Space Complexity). In JavaScript, Objects and Maps provide $O(1)$ instant lookups.
* **Mapped Exercises:**
  * **LRU Cache (Ex: 44):** Using a `Map` (which remembers key insertion order, unlike standard Objects) to maintain both instant $O(1)$ lookups and order tracking for eviction.
  * **Memoization (Ex: 22):** Storing the arguments of a function as a stringified Object key, bypassing the need to recalculate if the key already exists.

### 7. Browser APIs & The Rendering Pipeline
* **The Concept:** The browser has to calculate layout (Reflow) and paint pixels (Repaint) whenever the DOM changes. Reading layout properties (like `offsetHeight`) or adding thousands of event listeners can cause severe performance jank.
* **Mapped Exercises:**
  * **Event Delegation (Ex: 41):** Attaching 1000 click listeners to 1000 list items crashes the browser. Attaching *one* listener to the parent `<ul>` and checking `event.target` is highly efficient.
  * **Infinite Scroll (Ex: 42):** Using `window.onscroll` fires hundreds of times a second. Using the `IntersectionObserver` API pushes the calculation to the browser's background thread.
  * **Portals (Ex: 57):** Using `ReactDOM.createPortal` to physically move a Modal to `document.body` so it escapes CSS `overflow: hidden` or `z-index` traps of its parent containers.

### 8. React State, Lifecycle, & Reconciliation
* **The Concept:** React UI is a function of state: `UI = f(state)`. When state changes, React builds a new Virtual DOM, diffs it against the old one, and calculates the minimum necessary real DOM patches. 
* **Mapped Exercises:**
  * **Cleanups (Ex: 46, 49):** A `useFetch` hook must return a cleanup function utilizing an `AbortController`. If the component unmounts before the network request finishes, you must abort the fetch to prevent memory leaks and React state warnings.
  * **Complex State Machines (Ex: 53, 54, 59):** The Traffic Light, Accordion, and Progress Bar test your ability to manage derived state and orchestrating `useEffect` timers to auto-advance state without causing infinite render loops.
  * **Windowing (Ex: 64):** Building a Virtualized List bypasses React's diffing limits by only rendering the 10 nodes currently visible on the screen out of a massive array, simulating scrolling via CSS padding.