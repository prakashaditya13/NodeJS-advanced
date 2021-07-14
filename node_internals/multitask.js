const https = require('https')
const crypto = require('crypto')
const fs = require('fs')

const start = Date.now()
 
function doRequest(){
https.request('https://www.google.com', (res) => {
    res.on('data', () => {})
    res.on('end', () => {
        console.log("REQ:", Date.now()-start)
    })
}).end()
}

function doHash(){
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
        console.log('Hash: ', Date.now() - start)
    })
}

doRequest()

fs.readFile('multitask.js', 'utf8', () => {
    console.log("FS: ", Date.now()-start)
})

doHash()
doHash()
doHash()
doHash()

// Output will be:-
// REQ object is always executed first because https called outside the threadpool, it will be executed over OS level
// This execution depends on 4 size threadpool so if size will increases then FS system executed extremely fast from harddrive