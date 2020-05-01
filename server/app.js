const express = require('express');
var bodyParser = require("body-parser");
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();
//Body Parser is required to access the JSON data directly to res.body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://pooja:pooja123@grills-kglex.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true  })
.then(() => console.log('Connected to database'))
.catch((err) => console.log('Failed to connect database',err))

app.post("/grill", async (req, res) => {

    //req.body is undefined without body-parser: ref line 9,10
    const grill = new Grills(req.body);

    try {
        await grill.save();
        res.send(grill);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
}));

app.listen(4001, () => { console.log('Now listening on port 4001'); });