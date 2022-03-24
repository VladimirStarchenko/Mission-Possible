const { Schema } = require('moongoose')
const { stringify } = require('querystring')

const charitySchema = new Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    link: {
        type: String,
    }
})


module.exports = charitySchema;