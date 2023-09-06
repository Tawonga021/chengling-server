const mongoose= require('mongoose');

const FundSchema= new mongoose.Schema({
  
  
   
    datePayed:{
        type:Date,
        
    },
    availableamount:{
        type:Number
    },
    targetamount:{
        type:Number
    },
    amountpayed:{
        type:Number
    },
      
      currency:{
        type: String,
        value:["USD","PULA","GBP"]
      },
deadline:{
    type:Date
}


  


   
  
    ,
    name:{
        type:String,
       
    
        
    }
   
  
   
}
,{
    timestamps:true
}
)



        const Fund= mongoose.model("FundSchema",FundSchema);

        module.exports= Fund;