const mongoose= require('mongoose');

const MinistrySchema= new mongoose.Schema({
    members:[{
        forename:{
            type:String
           
        },
        
        surname:{
            type:String
        },
        idNumber:{
            type:String
        },
        age:{
            type:Date
        },
        maritalStatus:{
            type:String,
            
            value:["Married","Single","Widower","Widow"]
        },
        nextOfkin:{
            type:String,
            required:true,
           
        },
    occupation:{
            type:String
           
        },
        employmentStatus:{
            type:String,
            
            value:["Employed","Unemployed","Student"]
        },
        employerName:{
            type:String
            
        },
        company:{
            type:String
            
        },
        contactNumber:{
            type:String
        },
        email:{
            type:String
        },
        nextOfKinNumber:{
            type:String
        },
        address:{
            type:String
        },
    city:{
            type:String
        },
    surbub:{
            type:String
        },
        baptized:{
            type:String,
           
            value:["Yes","No"]
        },
        confirmed:{
            type:String,
            
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
            
        },
memberId:{
    type:String
}
      
      
     

    }]
  
    ,
   
    ministryName:{
        type:String,
        required:true,
      
        
    },
    ministryLeader:{
        type:String,
        required:true,
    },
    ministryLeaderContact:{
        type:String,
        required:true,
    },
   
}
,{
    timestamps:true
}
)



        const Ministry= mongoose.model("Ministry",MinistrySchema);

        module.exports=Ministry;