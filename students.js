var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const StudentModel = require('../models/student');

router.get('/', function(req,res,next){
    res.send('students Route Works');
});

router.post('/add', function(req,res,next){

    let newStudent = new StudentModel({
        
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        age:req.body.age,
        dob:req.body.dob,
        department:req.body.department
    })
    newStudent.save(function(err,newStudent){
        if(err){
            res.send(err);
            // console.log('err');
        }
        else{
        res.send({ message:'User Added Successfully', studentObj:newStudent});
            console.log('newStudent');
        }
    });

});

router.get('/list', function(req,res,next){
    StudentModel.find(function(err,response){
        if(err){
            res.send(err);
            // console.log('err');
        }
        else{
        res.send({ students:response});
            console.log('newStudent');
        }
    });

});

// router.put('/update',function(req,res,next){
//     const department = req.query.department;
//     const id = req.query.userID;
//     StudentModel.findByIdAndUpdate(id,{department: department}, function(err,response){
//         if(err){
//             res.send(err);
//         }
//         else{
//             res.send({students:response});
//         }
//     });
// });
//     router.put('/update',function(req,res,next){
//     const id = req.query.userID;
//     const fname = req.query.firstName;
//     StudentModel.findByIdAndUpdate(id, { firstName: fname }, function (err, response) {
//     if (err)
//         res.send(err)
//     else
//         res.send({ status: 200, response })

//     });
// });


router.delete('/deleteUser',function(req,res,next){
    const id=req.query.userId;
    StudentModel.remove({firstName: 'sarika'},function(err,response){
        if(err){
            res.send(err);
        }
        else{
            res.send({students:response});
        }
    });
});
module.exports = router;