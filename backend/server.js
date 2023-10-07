require("dotenv").config()

const express = require("express")
const mongoose = require("mongoose")
const app = express()
const studentRouter = require("./routes/studentRoutes")
const cors = require("cors")
app.use(cors())
// middleware
app.use(express.json())

app.use(studentRouter)

const PORT = 8000
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("DB connected");
        app.listen(PORT, () => {
            console.log("Server running on " + PORT);
        })
    })
    .catch(e => console.log(e))



