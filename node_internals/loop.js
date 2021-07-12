// This is only a fake process as event loop or threads working in NodeJS

// Lifecycle of NodeJS Application
// From Begining to exit back to terminal

// pending tasks holding array
const pendingTimers = []
const pendingOSTasks = []
const pendingOperations = []

function shouldContinue(){
    // check one: Any pending setTimeout, setInterval and setImmediate?
    // check two: Any pending OS tasks
    // check three: Any pending long running operations? (fs module)

    return pendingTimers.length || pendingOSTasks || pendingOperations
}

// eventLoop in NodeJS is like while loop, if the condition is falsy then it will exit to the terminal not stop
while(shouldContinue()){
    // 1. checking pending timers
    // 2. checking pending OS tasks
    // 3. Pause execution.
    //  - a new pendingOSTask is done...
    //  - a new pendingOperation is done
    //  - a timer is about to complete
    // 4. Call immediate timer

    // 5. Handle any "Close" event
}