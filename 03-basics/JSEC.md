### JAVASCIRPT EXECUTION CONTEXT (JSEC)

### 1. Introduction

*   JavaScript is a **single-threaded** language, meaning it executes one command at a time .

### 2. Execution Context

*   **Definition:** It is the environment in which the JavaScript code is executed.

*   **Types of Execution Contexts:**
    *   **Global Execution Context (GEC):** Created by default for any code file. It is referenced by the `this` variable. In    browsers, `this` refers to the `window` object.
    *   **Functional Execution Context:** Created whenever a function is invoked .
    *   **Eval Execution Context:** A specialized context related to the `eval()` function .

### 3. Execution Phases

*   JavaScript runs code in two distinct phases:

    *   **Memory Creation Phase (Memory Phase/Creation Phase):** JavaScript scans the code to allocate memory for variables and functions. Variables are initialized as `undefined`, and function definitions are stored in full.
    *   **Execution Phase:** The code is executed line-by-line. Mathematical operations and function calls occur here.

## EXAMPLE:

let val1 = 10
let val2 = 5

function addNum(num1,num2){
  let total = num1 + num2
  return total
}

let result1 = addNum(val1, val2)
let result2 = addNum(10,5)


### 4. The Call Stack

*   **Call Stack:** It acts like a stack data structure that manages the execution contexts of functions. It follows the **LIFO (Last In, First Out)** principle.
*   **Mechanism:**
    *   The **Global Execution Context** is always at the bottom of the stack .
    *   When a function is called, its **Execution Context** is pushed onto the stack .
    *   Once the function completes, its context is popped off (deleted) from the stack .

### 5. Practical Demonstration (Browser Developer Tools)

*   Using the *Sources* tab in Chrome DevTools, the author demonstrates how to visualize the **Call Stack** .
*   By placing **breakpoints**, one can observe how functions like `one()`, `two()`, and `three()` are added to and removed from the call stack sequentially, showing the nested execution process .