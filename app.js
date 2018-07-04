const express = require('express');
var graphqlHTTP = require('express-graphql');
const schema = require('./graphql/schemas/index');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

mongoose.connect('mongodb://localhost:27017/local')
mongoose.connection.once('open', () => {
    console.log('conneted to database');
});

app.use('/graphql', graphqlHTTP({
	schema: schema,
	graphiql: true
}));


app.listen(4000, function() {
    console.log("purchaseInsights server has started on port 4000");
} );