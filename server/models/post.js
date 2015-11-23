// Get dependencies.
var mongoose = require('mongoose'),
    db       = require('server/helpers/db'),
    Schema   = mongoose.Schema;

// Get User schema.
require('server/models/user');

// Create the schema.
var postSchema = new Schema({
  title  : { type: String, required: true },
  text   : { type: String, required: true },
  date   : { type: Date, default: Date.now },
  author : { type: Schema.Types.ObjectId, ref: 'User' }
});

// Select what to return.
postSchema.set('toJSON', {
    transform: function(doc, ret, options) {
        var retJson = {
            id    : ret._id,
            title : ret.title,
            text  : ret.text,
            author: ret.author
        };
        return retJson;
    }
});

// Export model.
module.exports = db.model('Post', postSchema);