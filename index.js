const express = require('express');
const connectDB = require('./database/connection');
const User = require('./database/user');
const Product = require('./database/product');
const cors =require("cors")

const app = express()
app.use(cors());
connectDB()

app.use(express.json())
app.post("/createUser", async (req, res) => {
    try {
        console.log(req.body, "req.body")
        let { name, email, mobile } = req.body
        let user = await User.create({ name, email, mobile })
        res.status(201).json({ message: "User have been created", data: user })
    } catch (error) {
        let time = new Date().toISOString()
        console.error(`time :${time}Error: ${error.message}`);
        res.status(500).json({ message: "Internal Server Error" })
    }
})
app.post("/createproduct", async (req, res) => {
    try {
        console.log(req.body, "req.body")
        let { manufacturer, quantity, model } = req.body
        let product = await Product.create({ manufacturer, quantity, model })
        res.status(201).json({ message: "product have been created", data: product })
    } catch (error) {
        let time = new Date().toISOString()
        console.error(`time :${time}Error: ${error.message}`);
        res.status(500).json({ message: "Internal Server Error" })
    }
})

app.get("/healthcheck", (req, res) => {
    let respnseObj = {
        message: "Server is healthy"
    }
    res.send(respnseObj)
})

app.listen(3000, () => {
    console.log('server is running on port 3000')
})