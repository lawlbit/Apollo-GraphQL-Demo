const graphql = require('graphql');
const pcType = require('./pcSchema');
const PC = require('../../models/pc');

const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList
} = graphql

const playerType = new GraphQLObjectType({
    name: 'Player',
    fields: ({
        id: {type: GraphQLInt},
        playerName: {type: GraphQLString},
        characters: {
            type: new GraphQLList(pcType),
            resolve(parent, args){
                return PC.find({playerID: parent.id});
            }
        }
    })
});

module.exports = playerType;