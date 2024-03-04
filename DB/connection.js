const mongoose = require('mongoose')
const con_string = process.env.connection_string

mongoose.connect(con_string).then(()=>{
    console.log('mongoDB connected successfully');
}).catch((err)=>{
    console.log('mongoDB Connection failed due to : ',err);
})
