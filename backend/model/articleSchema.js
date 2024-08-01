const mongooose = require('mongoose');

const articleSchema = new mongooose.Schema({
    title: {
        type: String,
        required:true
    },
    content: {
         type: String,
        required:true
    },
    topic: {
        type: String,
        required:true
    },
    date : {
        type: Date,
        default: Date.now
    }
})

// collection creation
const Article = mongooose.model('ARTICLE', articleSchema);

module.exports = { articleSchema,
    Article
}