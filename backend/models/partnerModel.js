const mongoose = require('mongoose');
let partnerSchema = mongoose.userSchema({
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

let Partner = mongoose.model('Partner', partnerSchema);

module.exports = Partner;