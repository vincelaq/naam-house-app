// const Form = require('../models/form');

// const getAllEntries = async (req, res) => {
    
// }

// const createEntry = async (req, res) => {
//     const { 
//         vetName, 
//         curLocation, 
//         freqLocation, 
//         ping, 
//         behavior, 
//         resName, 
//         resContact 
//     } = req.body

//     return Form.create(({
//         vetName, 
//         curLocation, 
//         freqLocation, 
//         ping, 
//         behavior, 
//         resName, 
//         resContact 
//     }))
//     .then(() => {
//         res.status(200).json({ message: "Entry Saved!"})
//     })
//     .catch(err => {
//         console.log(err)
//         res.status(502).json({ message: "Error while creating entry."})
//     })

// }

// module.exports = { createEntry } ;

const db = require("../models"); 
const Form = db.form;

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
};