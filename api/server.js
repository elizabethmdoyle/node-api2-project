// implement your server here
// require your posts router and connect it here
const express = require('express');

const server = express();

server.use(express.json());

//SET ROUTES 
// const postRouter = require('./posts/posts-router');

// server.use('post routes', postRouter);


server.use('*', (req, res) => {
    res.status(404).json({
        message: 'Endpoint does not exist'
    })
})



module.exports = server
