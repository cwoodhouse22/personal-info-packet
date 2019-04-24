const express = require('express');
const app = express.Router();   
const myContract = require('../../contract/contract');
 
 
app.get('/', (req,res)=>{
    res.render('layouts/home');
});


function getPersonInfo(req,res,next){
  
    myContract.getPerson(req.body.ssn,function(err,response){
        if(err) {
            req.err=err;
        } 
        else{
            req.personInfo = response;
        }
        
        return next();
       
    })
}

function getFamilyInfo(req,res,next){
    myContract.getFamily(req.body.ssn,function(err,response){
        if(err) {
            req.err=err;
        } 
        else{
            req.familyInfo = response;
        }
        
        return next();
       
    })
}

function getAddress(req,res,next){
    myContract.getAddress(req.body.ssn,function(err,response){
        if(err) {
            req.err=err;
        } 
        else{
            req.address = response;
        }
        
        return next();
       
    })
}

function getEducation(req,res,next){
    myContract.getEducation(req.body.ssn,function(err,response){
        if(err) {
            req.err=err;
        } 
        else{
            req.education = response;
        }
        
        return next();
       
    })
}





app.post('/',getPersonInfo,getFamilyInfo,getAddress,getEducation,(req,res)=>{
  
     if(req.err){throw err;}
     else{
       
        res.render('layouts/dashboard',
        {person : req.personInfo,
         family : req.familyInfo,
         address : req.address,
         education:req.education})
     }
    

})


 module.exports = app;