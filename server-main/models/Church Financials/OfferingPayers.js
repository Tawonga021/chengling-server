const mongoose= require('mongoose');

const OfferingPayerSchema= new mongoose.Schema({
  
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
    ,  
    datePayed:{
        type:Date,
        
    },
    amount:{
        type:Number
    }
      ,
      currency:{
        type: String,
        value:["USD","PULA","GBP"]
      }

  


   
  
    ,
    name:{
        type:String,
       
    
        value:["Offering"]
    }
   
  
   
}
,{
    timestamps:true
}
)



        const OfferingPayer= mongoose.model("OfferingPayerSchema",OfferingPayerSchema);

        module.exports=OfferingPayer;