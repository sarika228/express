const mongoose = require('mongoose');
var studentSchema=mongoose.Schema({
    studentId:Number,
    firstName:String,
    lastName:String,
    age:Number,
    dob:String,
    department:String
});
var StudentModel = mongoose.model("student",studentSchema);
module.exports=StudentModel;