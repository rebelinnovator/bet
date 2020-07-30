module.exports.getOtp = function(phoneNumber){

    var options = {
        method: 'GET',
       url: 'http://2factor.in/API/V1/' + process.env.API_KEY + '/SMS/+917428730930/AUTOGEN',
       headers: { 'content-type': 'application/x-www-form-urlencoded' },
       form: {} 
   }

   request(options, (error, response, body) => {
    if (error) {
        console.log(error)
         res.json({
            code: 50,
            msg: 'Generated verification code unsuccessfully',
            tip: 'Please click OTP button again'
        })
    }
        console.log("Overcom")
        console.log(body)
        otpSession.push({
            phonenumber:"+917428730930",
            serviceSeesion:body.Details
        })

     res.json({
        code: 200,
        sessionId: body.Details,
        msg: 'Generated verification code successfully',
        tip: 'Please check your phone.'
    })
})
}
