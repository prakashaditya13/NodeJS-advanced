// Lifecycle of NodeJS Application
// From Begining to exit back to terminal

// pending tasks holding array
const pendingTimers = []
const pendingOSTasks = []
const pendingOperations = []

function shouldContinue(){
    // check one: Any pending setTimeout, setInterval and setImmediate?
    // check two: Any pending OS tasks
    // check three: Any pendinglong running operations? (fs module)

    return pendingTimers.length || pendingOSTasks || pendingOperations
}

// eventLoop in NodeJS is like while loop, if the condition is falsy then it will exit to the terminal not stop
while(shouldContinue){
    // 
}