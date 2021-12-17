/* ==== External Modules ==== */
const express = require("express");
const cors = require("cors");

/* ==== Internal Modules ==== */
const db = require('./models')
const routes = require('./routes/routes');

/* ==== Instanced Modules  ==== */
const app = express();

/* ====  Configuration  ==== */
const PORT = process.env.PORT || 8000;
const corsOptions = { origin: "http://localhost:8081" }

/* ====  Middleware  ==== */
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



/* ====  Sequelize  ==== */
db.sequelize.sync({ force: true }).then(() => {

    console.log("Drop and re-sync db.");
    
});

require("./routes/routes")(app);

/* ====  Server Listener / Connection ==== */
app.listen(PORT, () => {
    console.log(`Server started on port 8000! Dope!`);
});