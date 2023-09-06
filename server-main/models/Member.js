const mongoose =require('mongoose');

const MemberSchema= mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    forename:{
        type:String,
        required:true
    },
    
    surname:{
        type:String,
        required:true
    },
    idNumber:{
        type:String,
        required:true
    },
    age:{
        type:Date,
        required:true
    },
    maritalStatus:{
        type:String,
        required:true,
        value:["Married","Single","Widower","Widow"]
    },
    nextOfkin:{
        type:String,
        required:true,
       
    },
occupation:{
        type:String,
        required:true,
       
    },
    employmentStatus:{
        type:String,
        required:true,
        value:["Employed","Unemployed","Self Employed","Retired","Student","N/A"]
    },
    employerName:{
        type:String,
        required:true,
        
    },
    company:{
        type:String,
        required:true,
        
    },
    contactNumber:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    nextOfKinNumber:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
city:{
        type:String,
        required:true,
    },
surbub:{
        type:String,
        required:true,
    },
    baptized:{
        type:String,
        required:true,
        value:["Yes","No"]
    },
    confirmed:{
        type:String,
        required:true,
        value:["Yes","No"]
    },
    ministry:{
        type:String,
        
    }
    ,
    dateJoinedministry:{
        type:String,
        
    },
    community:{
        type:String,
        
    }


},
{
    timestamps:true
}
);

const Member= mongoose.model("MemberSchema",MemberSchema);

module.exports=Member;