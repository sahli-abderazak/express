const express = require('express');
const app = express();
const port = 1919;
app.listen(port,(err)=>{
     err
     ? console.log(err)
     : console.log(`the server is running on port   ${port}...`)
 })
 const verifDate = (req , res , next) => {
    let days = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"]
    let hours = new Date ().getHours() 
    if (
        days [new Date ().getDay ()] !== "saturday" && 
        days [new Date ().getDay ()] !== "Sunday" && hours > 9 && hours < 17
    )
    {next ()} else  
    {res.send ('<h3> we are not working , come back later</h3> ') } 
}


app.use (verifDate) 


app.use (express.static('Public'))
