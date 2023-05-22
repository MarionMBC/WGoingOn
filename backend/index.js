const express = require('express')
const cors = require('cors')
const axios = require("axios");

//Dotenv
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors({origin: true}))

app.post('/authenticate', async (req, res) => {
    const {username} = req.body;
    try {
        const request = await axios.put(
            'https://api.chatengine.io/users/',
            {
                username: username, secret:username, first_name:username
            },
            {
                headers: {
                    "private-key":"d456240f-2c3e-4862-ae08-383704ee0340"
                }
            }
        )
        return res.status(request.status).json(request.data)

    } catch (e) {

    }
})

app.listen(
    process.env.PORT || 8092
    , () => {
    console.log('Server running')
})