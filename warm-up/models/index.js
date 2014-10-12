// http://mongoosejs.com/docs/guide.html
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    count: { type: Number, default: 1 }
});

// http://mongoosejs.com/docs/api.html#schematype_SchemaType-validate
function usernameValidator(val) {
    return val.length >= 5 && val.length <= 20;
}
function passwordValidator(val) {
    return val.length >= 8 && val.length <= 20;
}
userSchema.path('username').validate(usernameValidator, 'The user name should be 5~20 characters long. Please try again.');
userSchema.path('password').validate(passwordValidator, 'The password should be 5~20 characters long. Please try again.');

exports.User = userSchema;
