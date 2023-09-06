const sendgrid = require ('@sendgrid/mail');
const dotenv= require("dotenv");
dotenv.config()


sendgrid.setApiKey(process.env.api_key);

 const sendEmail = ({ to, from, subject, text, html }) => {
    const msg = { to, from, subject, text, html };
    return sendgrid.send(msg).then(res=>console.log('email has been send')).catch(err=>console.log(err))
    ;
};

module.exports = sendEmail;