const { model } = require('mongoose')
const { userProfileSchema, userSchema, GameHistorySchema} = require('../schema/mongooseSchema')

const User = model('User', userSchema);
const UserProfile = model('UserProfile', userProfileSchema);
const GameHistory = model('GameHistory', GameHistorySchema);

module.exports = {
    User, UserProfile, GameHistory
}