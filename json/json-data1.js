/**================================== Part 3 ======================================
 * Alayna Johnston
 * created On: 4/27/2021
 * 
 * Intro to working with JSON Data
 */

const fs = require('fs');

const series = {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling'
}

const data = JSON.stringify(series); //takes in javascript objects and returns in JSON string
console.log(data);

//write data to json file
fs.writeFile('data1.json', data, (err, data) => {
    if(err) throw err;
    console.log('Data successfully written');
})


//read file
fs.readFile('data1.json', (err,data) =>{
    if(err) throw err;
    out = JSON.parse(data); //passes JSON data into an object
    console.log(out.author);
})


//edit data in json file
const dataBuffer = (fs.readFileSync('data1.json').toString());

const info = JSON.parse(dataBuffer); //gives syntax error: Unexpected end of JSON input ?

info.title = 'Harry';

const infoJson = JSON.stringify(info); //passes an object into a string
fs.writeFileSync('data1.json', infoJson); //writes data to file

//run in cmd: 'node json/json-data1.js'