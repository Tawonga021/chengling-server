const express= require('express');
const app= express();
const cors= require('cors');


const dotenv= require('dotenv');
const sendgrid = require ('@sendgrid/mail');
const sendEmail = require('./utils/sendEmail');
dotenv.config()
sendgrid.setApiKey(process.env.api_key);




const port=process.env.Port|| 5000;
dotenv.config();



//middleware
app.use(cors());
app.use(express.json());




app.post('/book-car',async(req,res)=>{
   
        const  {from,name,contactNumber,
        pickUpPlace,destination,carType,proposedRate,hiringDate,returnDate,
        numberOfPasengers,specialRequest,serviceType,preferedCar
      
    }=req.body;

  try {
    const send_to=process.env.EMAIL_RECIEVING;
    const sent_from=process.env.EMAIL_USER;
    const reply_to=process.env.EMAIL_RECIEVING;
    let subject=`Booking for a ${carType}`;
    const message=`<p>
    <b>
    Good Day
    </b> 
    <p>
   May I enquire the availability of 
   ${carType} preferrably the ${preferedCar}.
   I want to hire the car from ${hiringDate} to
   ${returnDate} at a rate of ${proposedRate} per day, I want to travel to ${destination}.
   I would prefer to pickup the car at ${pickUpPlace}.
   I have ${numberOfPasengers} with me.I would prefer ${serviceType}.




    </p>
    <section>
    ${specialRequest}
    </section>
    <p>
    Good Regards <br/>
    ${name} <br/>
    ${contactNumber} - ${from}

    </p>

       </p>`

await    sendEmail(subject,message,send_to,sent_from,reply_to)
res.status(200).json({success:true,msg:'email sent'}) 
} catch (error) {
    res.status(500).json(error.message)
}
 

    
})
app.post('/car-listing',async(req,res)=>{
   
        const  {from,name,contactNumber,
            carName,proposedRate,carType,specialRequest
      
    }=req.body;
  
    const subject="Request for car listing";
    const message=`
      
    Good Day
    
   May you please  list my ${carName} its a ${carType}.I would propose to  charge it for  USD$${proposedRate} per day.
   
   Special Request: ${specialRequest}
    Good Regards 
    ${name} 
    ${contactNumber}- ${from}

  
        `


      try {
        const send_to=process.env.EMAIL_RECIEVING;
        const sent_from=process.env.EMAIL_USER;
        const reply_to=process.env.EMAIL_RECIEVING;

        
    await    sendEmail(subject,message,send_to,sent_from,reply_to)
    res.status(200).json({success:true,msg:'email sent'}) 
    } catch (error) {
        res.status(500).json(error.message)
    }
    
});



app.post('/send-message',async(req,res)=>{
    
    const  {  from,  name,contactNumber,
        text
  
}=req.body;

    try {
        const send_to=process.env.EMAIL_RECIEVING;
        const sent_from=process.env.EMAIL_USER;
        const reply_to=process.env.EMAIL_RECIEVING;
        const subject=`Email From ${name} `;
        const message=`
        <h3>Hello </h3>
        <p>
        ${text}
        </p>


        <p>Good Regards - ${name} <br/>${contactNumber} <br/> ${from} </p> 
        `

    await    sendEmail(subject,message,send_to,sent_from,reply_to)
res.status(200).json({success:true,msg:'email sent'}) 
} catch (error) {
        res.status(500).json(error.message)
    }
})


app.listen(port,(req,res)=>{
    console.log(`Server is Running at Server ${port} connected to the db`)
    })
    


