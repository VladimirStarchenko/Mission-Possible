const { Schema } = require('mongoose')

const donationSchema = new Schema({
    
        donationId: {
            type:String,
        },

});

module.exports = donationSchema;