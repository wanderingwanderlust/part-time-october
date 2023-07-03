import mongoose from "mongoose";
import bcrypt from 'bcryptjs'

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
    },
    email: {
        type: String,
        unique: true
    },
    password: String,
    created_at: Date,
    deleted_at: Date,
    updated_at: Date
});

UserSchema.pre('save', function(next) {
    const user = this; // Object passed in from react
    if(user.isModified('password') || user.isNew) {
        bcrypt.genSalt(10, function(saltError, salt) {
            if(saltError) {
                return next(saltError)
            } else {
                //user.password  User { password: 'password' }
                //goal is for password to become encyrpted
                bcrypt.hash(user.password, salt, function(hashErrors, hash) {
                    if(hashErrors){
                        return next(hashErrors)
                    }
                    user.password = hash
                    return next()
                })
            }
        })
    }
})

UserSchema.methods.comparePassword = function(usersPassword, cb) {
    bcrypt.compare(usersPassword, this.password, function(err, isMatch) {
        if(err) return cb(err)
        cb(null, isMatch)
    })
}

// Create a method the modal can use to comparePasswords


export default mongoose.model('user', UserSchema)