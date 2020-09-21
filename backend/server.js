const express = require('./node_modules/express');
const mongoose = require('mongoose');

// mongoose.connect(mongodb+srv://david-john:<password>@mowur-pqgqo.mongodb.net/admin?retryWrites=true&w=majority
//     , ).then(() => {
//     console.log('Connection to Databse established')
//   }).catch(error () => console.log( error + ' Error connecting to Database'))
    
//   }
// }  
const app = express();
require('dotenv').config();
app.listen(5500, (err) => {
    if(err){
        console.log( err + ' Error connecting to Port')
    }else{
    console.log('Server is listening on Port ' + 5500)
    }
})


// app.get('../public/index.html', (req, res) => {
//     console.log('index route');
// })

