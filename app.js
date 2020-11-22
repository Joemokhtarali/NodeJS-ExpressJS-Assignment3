// const express = require('express')

const http = require('http')
const express = require('express')
const app = express()

const server = http.createServer((req, res) => {
    console.log('hello')
})

server.listen(3000)
