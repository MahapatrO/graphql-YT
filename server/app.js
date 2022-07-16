const express = require ('express');
const { graphqlHTTP } = require('express-graphql');
const mongoose =require('mongoose');


const schema = require('./schema/schema');


const uri = "mongodb+srv://gql-yt:gql-yt@cluster0.y52j7.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri);
mongoose.connection.once('open', () => {
    console.log('Connected to gql-yt db');
})


const app = express();
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000,() => {
    console.log('Running on port 4000!');
})