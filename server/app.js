const express = require('express');
var graphqlHTTP = require('express-graphql');
const schema = require('./graphql/index');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

//allow cross origin use
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));

mongoose.connect('mongodb://localhost:27017/lunch')
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