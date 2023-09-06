const mongoose= require('mongoose');

const FundPayerSchema= new mongoose.Schema({
  
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
    fundId:{
        type:String,
      
        }
   ,
    amountPayed:{
        type:Number
    },
    currency:{
        type:String,
        value:["USD","GBP","PULA"]
    }

   
  
   
}
,{
    timestamps:true
}
)



        const FundPayer= mongoose.model("FundPayerSchema",FundPayerSchema);

        module.exports= FundPayer;