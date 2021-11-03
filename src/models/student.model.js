import mongoose from 'mongoose';

const StudentSchema = new mongoose.Schema({
    firstName: {
       type: String,
       required:true},
    lastName: {
       type: String,
       required:true
    },
    yearOfBirth: Number,
    adress: String
});

export default mongoose.model('student', StudentSchema);