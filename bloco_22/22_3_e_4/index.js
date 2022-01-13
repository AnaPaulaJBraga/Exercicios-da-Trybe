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
app.put('/users/:name/:age', (req,res) =>{
    const { name, age } = req.params;
    res.status(200).json({ "message": `Seu nome é ${name} e você tem ${age} anos de idade`})
});

//ex.5
// const express = require('express');
// const bodyParser = require('body-parser');
const rescue = require('express-rescue');

const simpsonsUtils = require('./fs-utils');

app.get('/simpsons', rescue(async (req, res) => {
  const simpsons = await simpsonsUtils.getSimpsons();

  res.status(200).json(simpsons);
}))

//ex.6
app.get('/simpsons/:id',rescue(async  (req, res) =>{
    const simpsons = await simpsonsUtils.getSimpsons();
    const simpson = simpsons.find(({ id }) => id === req.params.id);

    if(!simpson) {
        return res.status(404).json({ message: 'simpson not found' });
    }
    return res.status(202).json(simpson);
})
);



app.use(function(err, req, res, next){
    res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});

app.listen(3001,()=> console.log('ouvindo na porta 3001!'));