const mongoose = require('mongoose');
let userSchema = mongoose.userSchema({
    fname: String,
    lname: String,
    email: String,
    phone: Number,
    password: Mixed,
    address: Mixed,
    city: String,
    zipcode: Number,
    state: String,
    datecreated: Date,
    subscribed: true,
    orders: []

})
let User = mongoose.model('User', userSchema);

module.exports = User;