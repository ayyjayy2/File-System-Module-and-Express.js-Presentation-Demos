/** =================================== Part 2 =========================================================
 *  file structure operations: open, get, write, read append, rename, delete
 * 
 *  Alayna Johnston
 *  created on: 4/27/2021
 * 
 *  notes: 
 *      pass multiple arguments by intalling Yargs package. Yargs helps to build interactive cmd tools, by parsing
 *      args and generating an elegant user interface
 *          npm i yargs@12.0.2
 *          user by 'console.log(yargs.argv)'
 */ 
 var fs = require('fs');

 //open file and confirm
 fs.open('myfile.txt', 'r+', function(err,fd){
     if(err){
         console.log((err));
     }else{
         console.log("File opened successfully!");
     }
 }); //create myfile.txt then cmd 'node fileStructure.js' to run


 //get file
fs.stat('myfile.txt', function(err, stats) {
    if(err){
        return console.error(err);
    }
    console.log(stats);
    console.log("Got file info successfully");
    //check file type -> returns boolean
    console.log("is it a File ? " + stats.isFile());
    console.log("is it a Directory ? " + stats.isDirectory());
}) //cmd 'node fileStructure.js' to run


//write file
fs.writeFile('myfile.txt', 'This is second node.js tutorial', function(err){
    if(err){
        return console.error(err);
    }else{
        console.log("Data written successfully into myfile.txt \n")
    }
})


//read file     -> outputs into cmd
fs.readFile('myfile.txt', function(err,data){
    if(err){
        return console.error(err);
    }else{
        console.log(data.toString());
    }
})


//rename file
fs.rename('myfile.txt', 'mynotes.txt', function(err, data){
    if(err){
        console.log(err)
    }else{
        console.log('File renamed successfully from myfile.txt -> mynotes.txt')
    }
})


//append file
fs.appendFile('mynotes.txt', '\n This is teh 2nd session of Node.js on file structure and express', function(err){
    if(err){
        console.log(err)
    }else{
        console.log('Data appended successfully in mynotes.txt')
    }
})


//delete file
fs.unlink('mynotes.txt', function(err,data){
    if(err){
        console.log(err)
    }else{
        console.log('mynotes.txt file deleted successfully')
    }
})