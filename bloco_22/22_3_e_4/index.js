const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

//ex.1
app.get('/ping', (_req, res)=> res.json({"message": "pong"}));

//ex.2
app.post('/hello'), (req, res) => {
    const {name} = req.body;
    res.status(200).json({"message": `Hello, ${name}!`})
};

//ex. 3
app.post('/greetings', (req, res)=>{
    const {name, age} = req.body;
    if(parseInt(age,10) <= 17){
        return res.status(401).json({message: `Unauthorized`});
    }

    return res.status(200).json({message: `Hello, ${name}!`})
});

//ex.4


app.use(function(err, req, res, next){
    res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});

app.listen(3001,()=> console.log('ouvindo na porta 3001!'));