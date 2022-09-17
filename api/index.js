const express = require('express');
const app = express();
const bodyParser = require('body-parser'); 
const cors = require('cors');
const port = 1515;
const rotas = require('./routes');


app.use(express.json());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(cors());

app.use('/', rotas);
app.use('/user', rotas);


app.listen(port, () => {
    console.log("api funcionando na porta: ", `${port}`)
});
