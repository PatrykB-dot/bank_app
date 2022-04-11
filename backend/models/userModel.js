const mongoose = require('mongoose');
const crypto = require('crypto'); 


const userSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    hash: String,
    salt: String,   

},{
    timestamps: true,

});

userSchema.methods.setPassword = function(password) {
    // Creating a unique salt for a particular user 
    this.salt = crypto.randomBytes(16).toString('hex'); 
  
    // Hashing user's salt and password with 1000 iterations, 
     
    this.hash = crypto.pbkdf2Sync(password, this.salt,  
    1000, 64, `sha512`).toString(`hex`); 
};

userSchema.methods.validPassword = function(password) { 
    let hash = crypto.pbkdf2Sync(password,  
    this.salt, 1000, 64, `sha512`).toString(`hex`); 
    return this.hash === hash; 
};

module.exports = mongoose.model('User', userSchema);