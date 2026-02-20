# Promises Cheat Sheet

*This is a template file for your revision notes.*

## Key Concepts
* **Event Loop Basics**: What pushes callbacks into the Microtask vs Macrotask queue?
* **Pipelining**: Why `then().then()` avoids nested callback hell.
* **State Machine**: Pending -> Fulfilled or Rejected.

## Important Definitions
- **Settled**: A promise is settled if it is either fulfilled or rejected.
- **Resolved**: Means it is matching the state of another promise or thenable (not necessarily fulfilled yet).

## Common Interview Questions
1. Write a `sleep` function.
2. What is the difference between `Promise.all` and `Promise.allSettled`?
3. How can you execute an array of async functions sequentially?

---

## The Promise Combinators: A Comedy
*(Moved from README Section 2)*

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


