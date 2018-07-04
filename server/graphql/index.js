const graphql = require('graphql');
const {
	GraphQLSchema
} = graphql;

let {RootQuery} = require('./queries/root');
let {Mutations} = require('./mutations/mutations');

var schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutations
});
module.exports =  schema;
