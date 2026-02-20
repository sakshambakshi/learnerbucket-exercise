# 🚀 The Ultimate JavaScript & React Interview Tracker

**Status Legend:**
* **⬜️ Todo:** Not started yet.
* **⏳ In Progress:** Currently working on this.
* **✅ Done:** Completed and understood.

---

## 📑 Table of Contents
- [🚀 The Ultimate JavaScript \& React Interview Tracker](#-the-ultimate-javascript--react-interview-tracker)
  - [📑 Table of Contents](#-table-of-contents)
  - [Section 1: Machine Coding \& Polyfill Exercises](#section-1-machine-coding--polyfill-exercises)
    - [Part A: Promises \& Asynchronous Execution](#part-a-promises--asynchronous-execution)
    - [Part B: Functions, Context (`this`), \& Timing](#part-b-functions-context-this--timing)
    - [Part C: Arrays, Objects \& Data Structures](#part-c-arrays-objects--data-structures)
    - [Part D: DOM Manipulation \& Browser APIs](#part-d-dom-manipulation--browser-apis)
    - [Part E: Design Patterns \& Architecture](#part-e-design-patterns--architecture)
    - [Part F: React Custom Hooks \& Machine Coding](#part-f-react-custom-hooks--machine-coding)
  - [Section 2: JavaScript Promise Managers: A Comedy](#section-2-javascript-promise-managers-a-comedy)
    - [1. The Perfectionist vs. The Therapist](#1-the-perfectionist-vs-the-therapist)
    - [2. The Referee vs. The Desperate Survivor](#2-the-referee-vs-the-desperate-survivor)

---

## Section 1: Machine Coding & Polyfill Exercises

### Part A: Promises & Asynchronous Execution
| S.No | Name of Exercise | Status | Remarks |
| :--- | :--- | :--- | :--- |
| 1 | [`Promise.prototype.finally`](./01-promise-finally.js) | ✅ Done | Remember `this.constructor` and value transparency. |
| 2 | [`Promise.all`](./02-promise-all.js) | ✅ Done | Fast-fails on the first rejection. *(See Cheat Sheet below!)* |
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