const dotenv = require("dotenv");
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();
app.use(cookieParser());
app.use(cors());

dotenv.config({ path: './config.env' });

require('./db/conn');

app.use(express.json());

// we link the router file
app.use(require('./router/routes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server is runnig at port no ${PORT}`);
})