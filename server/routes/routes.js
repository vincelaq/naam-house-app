module.exports = app => {
    const form = require("../controllers/form.js");
  
    var router = require("express").Router();
  
    router.post("/", form.create);

    app.use('/api/form', router);
};