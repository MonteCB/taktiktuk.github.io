var User = require('../models/user');
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

User.update(
         { email: "sunil@gmail.com" },
         { $push: { wonItems: "Hi" } }
    ).then((result)=>{console.log(result);});


mongoose.disconnect();
