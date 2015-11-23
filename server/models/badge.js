// Get dependencies.
var mongoose = require('mongoose'),
    db       = require('server/helpers/db'),
    Schema   = mongoose.Schema;

// Create the schema.
var badgeSchema = new Schema({
  codename    : { type: String, required: true, unique: true },
  name        : { type: String, required: true },
  imagename   : { type: String, required: true },
  info        : { type: String, required: true },
  requirements: { type: Schema.Types.Mixed  }
});

// Make sure that badge doesnt exist.
// Cancel saving if badge exist.
badgeSchema.pre("save", true, function(next, done) {
    var self = this;
    db.models["Badge"].findOne({name : self.name}, function(err, user) {
        if(err) {
            done(err);
        } else if(user) {
            self.invalidate("name", "name must be unique");
            done('username exist');
        } else {
            done();
        }
    });
    next();
});

// Export model.
module.exports = db.model('Badge', badgeSchema);