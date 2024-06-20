# 📈 node.js basics

## Modules
- In node.js each file is a module that is isolated by default
- To load a module into another file, we use the **require** function
- When index.js is executed, the code in the module is also executed
- The right way to use a module is with module.exports

## Path module
- Provides utilities for working with file and directory paths


## Async callbacks
- A callback that is used to continue or resume code after an async operation has completed
- Callbacks are used to delay the execution of a function until a particular time or event has occured
- Common examples: Reading data from a file, fetching data from a db or handling network request

## Events library
- The module returns an EventsEmiter() class
- You can register as many listeners as you want using the on method
- You can emit an event using the emit method. It accepts an event name passing in arguments
- It helps to create non blocking code
- Example code with inheritance pattern
