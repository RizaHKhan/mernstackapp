const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3003;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('You made it!!'))

app.listen(port, () => console.log(`listening to port ${port}`));