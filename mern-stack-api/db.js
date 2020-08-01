const mongoose = require('mongoose')
const uri = "mongodb+srv://shashanksaxena18:shasha182@cluster0.mu9to.mongodb.net/sampledb?retryWrites=true&w=majority"
mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology:true},
    err => {
        if (!err)
            console.log('Mongodb connection succeeded.')
        else
            console.log('Error while connecting MongoDB : ' + JSON.stringify(err, undefined, 2))
    })