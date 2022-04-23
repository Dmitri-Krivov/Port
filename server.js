import express from 'express'
// const express = require('express')

const server = express();

server.listen(8000, ()=>{
    console.log('Server is running')
})

