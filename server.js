require('dotenv').config()
require('./config/db')

const express = require("express");
const cors = require("cors");
const app = express();

const MemberRouter = require("./routes/memberRoutes")
const CoronaRouter = require("./routes/coronaRoutes")
const path = require('path');

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname, 'public')));

app.use("/member", MemberRouter);
app.use("/corona", CoronaRouter)

const PORT = process.env.PORT || 5000; 

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

