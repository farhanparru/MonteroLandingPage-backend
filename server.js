const express = require('express')
const cors = require('cors')
require('dotenv').config();
const signupRoute = require('./routes/signup')


//Middleware
const app = express()
// Middleware
app.use(cors({
    origin: ['https://montero-landing.onrender.com'],
    methods: "GET,POST,PUT,DELETE,PATCH",
    credentials: true, 
    allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use(express.json())

app.use("/api/signup", signupRoute)

// Welcome route for Montero landing page
app.get('/', (req, res) => {
    res.send('Welcome Montero Landing page')
})


const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>console.log(`Server running on http://localhost:${PORT}`));
