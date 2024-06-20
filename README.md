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

## Streams
- node.js process streams of data in chuncks as they arrive instead of waiting for the entire data to be available before processing
- Example: Transferring file contents from fileA to fileB. The contents arrive in chuncks and you transfer in chuncks while the remaining contents arrive over time. With this way you prevent data downloads and memory usage
- For that we use Buffers

## fs module
- Allows you to work with the file system
- Show how to create a file, read and write with syncronous and asyncronous way

## promises module
- It is part of fs module
- The syntax is stream based
- Uses then and catch

## libuv
- Library that handles time consuming tasks without blocking the main thread. That because it contails a pool of threads
- Javascript is single thread and blocking. For avoiding crashes and frozen apps we need libuv

## crypto
- Contains a pool of thread. 
- crypto.pbkdf2
- By default contains 4 threads but we can increase the size with process.env.UV_THREADPOOL_SIZE = 5

## Build CLI Tools
- Create a basic CLI tool using node and npm
- Pass options to the CLI
- Install yargs for passing argv
- Add interactivity to the CLI. For that you need "inquirer" module. You do not need the yargs module anymore


