const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.listen(3000,(()=>{
    console.log("server running on 3000 port");
}))