const { Schema } = require('mongoose')

const userSchema = new Schema({
    username:String,
    password:String,
    email:String,
    role:String
})

const userProfileSchema = new Schema({
    userId:Schema.Types.ObjectId,
    firstname:String,
    lastname:String,
    fullname:String,
    umur:Number,
    tanggalLahir:{ type: Date, default: Date.now },
    gender:String
})

const GameHistorySchema = new Schema({
    userId:Schema.Types.ObjectId,
    result:String,
    playerChoice:String,
    datePlay:{ type: Date, default: Date.now }
})

module.exports={
    userSchema,userProfileSchema,GameHistorySchema
}