// Get dependencies.
var mongoose          = require('mongoose'),
    db                = require('server/helpers/db'),
    Schema            = mongoose.Schema,
    bcrypt            = require('bcrypt'),
    SALT_WORK_FACTOR  = 10;

// Get Badge schema.
require('server/models/badge');

// Create the schema.
var userSchema = new Schema({
  username      : { type: String, required: true, unique: true },
  password      : { type: String, required: true },
  badges        : [{ type: Schema.Types.ObjectId, ref: 'Badge'}],
  badgeStatuses : { type:Schema.Types.Mixed, default: {} }
});

// Select what to return.
userSchema.set('toJSON', {
    transform: function(doc, ret, options) {
        var retJson = {
            id      : ret._id,
            username: ret.username,
            badges  : ret.badges
        };
        return retJson;
    }
});

// Hash password before saving.
userSchema.pre('save', function(next) {
    var user = this;

    // Only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // Generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

// Compare password.
userSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

// Export model.
module.exports = db.model('User', userSchema);