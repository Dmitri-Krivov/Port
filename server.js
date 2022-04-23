import express from 'express'
// const express = require('express')
import catalog from './catalog.js';

const server = express();

server.get('/catalog', (req, res)=>{
    
    res.json(catalog)

})

server.listen(8000, ()=>{
    console.log('Server is running')
})

