//servers.js
const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.get('/api/quotes/random',(req,res,next)=>{
    res.send({quote: getRandomElement(quotes)})
})

app.get('/api/quotes',(req,res,next)=>{
    const person = req.query.person;
    if (person){
        const quotesByPerson = quotes.filter(quote => quote.person === person)
        res.send({
            quotes:quotesByPerson
        })
    }else{
        res.send({quotes:quotes})
    }
})

app.post('/api/quotes',(req,res,next)=>{
    const {quote,person} = req.query;
    if(quote && person){
        quotes.push({id: quotes.length+1 ,quote:quote, person: person})
        res.status(201).send({quote:{quote:quote,person:person}})
    }else{
        res.status(400).send()
    }
})

app.put('/api/quotes/:id',(req,res,next)=>{
    const quoteId = parseInt(req.params.id)
    const {quote,person} = req.query;
    
    const quoteIndex = quotes.findIndex(q => q.id === quoteId)
    if(quoteIndex !== -1 && quote && person){
        quotes[quoteIndex].quote = quote;
        quotes[quoteIndex].person = person;
        res.send(quotes[quoteIndex]);
    }else{
        res.status(400).send()
    }
})

app.delete('/api/quotes/:id',(req,res,next)=>{
    const quoteId = req.params.id;
    const quoteIndex = quotes.findIndex(q => q.id === quoteId)

    if(quoteIndex !== -1){
        const deletedQuote = quotes.splice(quoteIndex,1)
        res.status(204).send(deletedQuote);
    }else{
        res.status(404).send()
    }
})


app.listen(PORT,()=>{
    console.log(`Server listening on port${PORT}`)
})