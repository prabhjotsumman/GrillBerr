const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://pooja:pooja123@grills-kglex.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true  })
.then(() => console.log('Connected to database'))
.catch((err) => console.log('Failed to connect database',err))

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
}));

app.listen(4001, () => { console.log('Now listening on port 4001'); });