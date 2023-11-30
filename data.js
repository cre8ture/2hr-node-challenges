const data = [
    {
      "title": "Event Loop and Microtasks",
      "description": "Understanding the event loop and the order of execution involving `setImmediate`, `setTimeout`, and promises can be tricky.",
      "code": "setImmediate(() => console.log('Immediate'));\nsetTimeout(() => console.log('Timeout'), 0);\nPromise.resolve().then(() => console.log('Promise'));\nconsole.log('Hello');"
    },
    {
      "title": "Closures and `this` Keyword",
      "description": "The value of `this` inside the `setInterval` function can be unexpected due to closure behavior.",
      "code": "function Counter() {\n  this.value = 0;\n  setInterval(function() {\n    this.value++;\n    console.log(this.value);\n  }, 1000);\n}\n\nconst counter = new Counter();"
    },
    {
      "title": "Memory Leaks with Event Emitters",
      "description": "Forgetting to remove event listeners can lead to memory leaks. In this example, the listener is not removed after calling `removeAllListeners`.",
      "code": "const EventEmitter = require('events');\n\nclass CustomEmitter extends EventEmitter {}\n\nconst emitter = new CustomEmitter();\n\nfunction startListening() {\n  emitter.on('event', () => console.log('Event emitted'));\n}\n\nstartListening();\nemitter.removeAllListeners();"
    },
    {
      "title": "Understanding `process.nextTick`",
      "description": "The order of execution involving `process.nextTick` and `setTimeout` might be surprising.",
      "code": "console.log('Start');\n\nprocess.nextTick(() => console.log('Next Tick'));\n\nsetTimeout(() => console.log('Set Timeout'), 0);\n\nconsole.log('End');"
    },
    {
      "title": "Unhandled Promise Rejections",
      "description": "Not handling promise rejections can lead to unhandled promise rejection warnings. In this example, the rejection is not caught.",
      "code": "process.on('unhandledRejection', (reason, promise) => {\n  console.error('Unhandled Rejection:', reason);\n});\n\nPromise.reject('Something went wrong');"
    },
    {
      "title": "Buffer and Binary Data",
      "description": "Dealing with binary data using buffers and understanding different encoding options can be challenging.",
      "code": "const buffer = Buffer.from('Hello, World!', 'utf-8');\nconsole.log(buffer.toString('hex'));"
    }
  ]
  