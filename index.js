const express = require('express');
const conectarBD = require('./config/db')
const config = require('./config/global');
const cors = require('cors');

const app = express();

conectarBD();

app.use(cors());
app.use(express.json());

app.use('/api/create-user', require('./routers/usuario'))
app.use('/api/login', require('./routers/usuario'))

app.listen(config.port, () => {
    console.log(`El servidor esta corriendo en el puerto: ${config.port}`);
})