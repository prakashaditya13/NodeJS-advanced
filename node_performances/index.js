// performing cluster and worker threads
const cluster = require('cluster')

if(cluster.isMaster){
    // index.js file executed again but in child mode
    cluster.fork()
    // cluster.fork()
    // cluster.fork()
    // cluster.fork()
}else{
    // child mode is executed just like a node server 
    const express = require('express')
const app = express()

function doWork(duration){
    const start = Date.now()
    while(Date.now() - start < duration){}
}

// check the req in two tabs and see the difference when you make a req on both tabs at same time they can take little bit more time to execute another req until the first req gets completed
app.get('/', (req, res) => {
    doWork(5000)
    res.send("Hi there!")
})

app.get('/fast', (req,res) => {
    res.send("This is fast!")
})

app.listen(3000)

// The PORT number should always be less than 65536
}

