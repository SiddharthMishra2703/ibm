const mongooose = require('mongoose');

const productSchema = new mongooose.Schema({
    Name: {
        type: String,
        required:true
    },
    Price: {
         type: String,
        required:true
    },
    Description: {
        type: String,
        required:true
    },
    Image : {
        type: String,
        required:true
    }
})

// collection creation
const Product = mongooose.model('Product', productSchema);

module.exports = { productSchema,
    Product
}