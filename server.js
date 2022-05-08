const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenev = require("dotenv");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(express.json());

const URL= process.env.MONGODB_URL;

mongoose.connect(URL,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const connection = mongoose.connection

connection.once("open", () => {
    console.log("MongoDB Connection Success!!!")
})


//instructor

const instructorRouter = require("./routes/instructorRoutes/instructors.js");

app.use("/instructor",instructorRouter);

//workshop

const workshopRouter = require("./routes/workshopRoutes/workshops.js");

app.use("/workshop",workshopRouter);


app.listen(PORT, () => {
    console.log(`Server is up and running on port number: ${PORT}`)
})