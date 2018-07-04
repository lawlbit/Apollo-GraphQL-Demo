const graphql = require('graphql');
const pcType = require('./pcSchema');
const PC = require('../../models/pc');

const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString
} = graphql

const storyType = new GraphQLObjectType({
    name: 'Story',
    fields: ({
        id: {type: GraphQLInt},
        name: {type: GraphQLString},
        description: {type: GraphQLString},
        characters: {
            type: new GraphQLList(pcType),
            resolve(parent, args){
                return PC.find({playerID: parent.id});
            }
        }
    })
});