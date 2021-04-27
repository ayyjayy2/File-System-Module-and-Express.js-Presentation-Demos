/** ============================= Part 4 ================================== 
 * how to make a server listen to port
 * 
 * Alayna Johnston
 * 4/27/2021
*/

//first in cmd: npm i express

const express = require('express');
const app = express();
const port = 6500;

/**
 * Route Methods
 * 
 * GET : used to request data from a specified resource. it's request param is appended in URL string. can be cached and 
 *      also be bookmarked. never use it while dealing with sensitive data. GET requests have length restrictions, max
 *      URL length is 2048 characters
 *       
 * POST : used to send data to a server to create/update a resource. carries request param in message body. it cannot 
 *      be cached and neither can be bookmarked. POST requests have no restrictions on data length. it's a bit safer
 *      than GET bc the params can't be stored in browser history or in web server logs
 */

//define default route with express
app.get('/', (req,res) => {
    res.send('<h1>Intro to express server</h1>')
})

//read file using express server
app.get('/getMovies', (req, res) => {
    fs.readFile('./data/db.json', (err, result) => {
        if(err){
            throw err;
        }else {
            console.log(JSON.parse(result))
        }
    })
})

//create server to listen on port
app.listen(port, (err) => {
    if(err) throw err;
    console.log('server is running on\t' + port)
})

//run with cmd: 'node express.js'

