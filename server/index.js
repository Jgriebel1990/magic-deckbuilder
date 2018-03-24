const express = require('express');
const axios = require('axios');

//configuration
require('dotenv').config();
const { API_KEY } = process.env

//creation
const serverApp = express();
const port = process.env.PORT || 5000;