const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();

// Allow corss-origin request
app.use(cors());

// connect to mlab database

mongoose.connect('mongodb://iceverge:656verge@ds127644.mlab.com:27644/gql-iceverge', { useNewUrlParser: true });
mongoose.connection.once('open', () => {
  console.log('Connected to database');
});


app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('App listen on port 4000');
});