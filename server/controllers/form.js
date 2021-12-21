const db = require("../models"); 
const Form = db.form;

const Vonage = require('@vonage/server-sdk')

const vonage = new Vonage({
  apiKey: process.env.VONAGE_API,
  apiSecret: process.env.VONAGE_SECRET
})

exports.create = (req, res) => {
  // Validate request
  if (!req.body.curLocation) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Entry
  const entry = {
    vetName: req.body.vetName,
    curLocation: req.body.curLocation,
    freqLocation: req.body.freqLocation,
    ping: req.body.ping,
    behavior: req.body.behavior,
    resName: req.body.resName,
    resContact: req.body.resContact
  };

  // Save Tutorial in the database
  Form.create(entry)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the Entry."
    });
  });
  
  const shared = JSON.parse(req.body.ping)
  const lat = shared.coords.latitude
  const lng = shared.coords.longitude
  const from = process.env.PHONEFROM
  const to = process.env.PHONETO
  const text = `Reported -- 
    Name: ${req.body.vetName}, 
    Cur Loc: ${req.body.curLocation}, 
    Freq Loc: ${req.body.freqLocation},
    Map: ${req.body.freqLocation},  
    Behav: ${req.body.behavior}, 
    Reporter: ${req.body.resName}, 
    Rep Contact: ${req.body.resName},
    comgooglemapsurl://maps.google.com/?q=@${lat},${lng} ---`

  vonage.message.sendSms(from, to, text, (err, responseData) => {
      if (err) {
          console.log(err);
      } else {
          if(responseData.messages[0]['status'] === "0") {
              console.log("Message sent successfully.");
          } else {
              console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
          }
      }
  })
  
};


// https://www.google.com/maps/@${lat},${lng} 