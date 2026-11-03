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
     
# JavaScript Execution Context

JavaScript code execution can be understood through three main steps:

## 1. Global Execution Context

When JavaScript code starts executing, it creates a **Global Execution Context**.

* In the Global Execution Context, `this` is created.
* JavaScript then proceeds to the Memory Phase.

## 2. Memory Phase (Creation Phase)

During the Memory Phase, JavaScript allocates memory for variables and functions.

**Code:**

```javascript
let val1 = 10;
let val2 = 5;

function addNum(num1, num2) {
    let total = num1 + num2;
    return total;
}

let result1 = addNum(val1, val2);
let result2 = addNum(10, 2);
```

During the Memory Phase, the variables declared using `let` are initially uninitialized. They are in the **Temporal Dead Zone (TDZ)** until their declarations are evaluated.

| Variable/Function | Memory Phase        |
| ----------------- | ------------------- |
| `val1`            | Uninitialized       |
| `val2`            | Uninitialized       |
| `addNum`          | Function definition |
| `result1`         | Uninitialized       |
| `result2`         | Uninitialized       |

## 3. Execution Phase

During the Execution Phase, JavaScript executes the code line by line and assigns values to variables.

### Step 1: Global Variables

```javascript
let val1 = 10;
let val2 = 5;
```

The values are assigned as follows:

* `val1` → `10`
* `val2` → `5`

### Step 2: First Function Call

```javascript
let result1 = addNum(val1, val2);
```

Here, `addNum(10, 5)` is called.

A **new Function Execution Context** is created for the function call.

#### Execution Context

| Variable | Value |
| -------- | ----- |
| `num1`   | `10`  |
| `num2`   | `5`   |
| `total`  | `15`  |

Inside the function:

```javascript
let total = num1 + num2;
return total;
```

Calculation:

`total = 10 + 5 = 15`

The function returns `15`, so:

`result1` → `15`

After the function returns, its execution context is removed from the call stack.

### Step 3: Second Function Call

```javascript
let result2 = addNum(10, 2);
```

A new Function Execution Context is created.

#### Execution Context

| Variable | Value |
| -------- | ----- |
| `num1`   | `10`  |
| `num2`   | `2`   |
| `total`  | `12`  |

Calculation:

`total = 10 + 2 = 12`

The function returns `12`, so:

`result2` → `12`

After the function returns, its execution context is removed from the call stack.

## 4. Final Output

| Variable  | Final Value |
| --------- | ----------- |
| `val1`    | `10`        |
| `val2`    | `5`         |
| `result1` | `15`        |
| `result2` | `12`        |

## 5. Important Concepts

**Global Execution Context:** The environment created for executing global code.

**Memory Phase:** The stage in which JavaScript prepares bindings for variables and functions.

**Execution Phase:** The stage in which JavaScript executes statements and assigns values.

**Function Execution Context:** A new execution context is created whenever a function is called.

**Execution Context Removal:** After a function finishes executing, its execution context is removed from the call stack.


### 4. The Call Stack

*   **Call Stack:** It acts like a stack data structure that manages the execution contexts of functions. It follows the **LIFO (Last In, First Out)** principle.
*   **Mechanism:**
    *   The **Global Execution Context** is always at the bottom of the stack .
    *   When a function is called, its **Execution Context** is pushed onto the stack .
    *   Once the function completes, its context is popped off (deleted) from the stack .

### 5. Practical Demonstration (Browser Developer Tools)

*   Using the *Sources* tab in Chrome DevTools, the author demonstrates how to visualize the **Call Stack** .
*   By placing **breakpoints**, one can observe how functions like `one()`, `two()`, and `three()` are added to and removed from the call stack sequentially, showing the nested execution process .