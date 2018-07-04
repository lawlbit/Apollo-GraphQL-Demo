const graphql = require('graphql');
const schema = require('../schemas/index');
const PC = require('../../models/pc');
const Player = require('../../models/player');
const Story = require('../../models/story');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt
} = graphql;

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        getStory:{
            type: schema.storyType,
            args: {
                storyID: {type: GraphQLInt},
            },
            resolve(parent, args){
                return Story.findById({storyID: args.storyID});
            }
        },
        getPlayer:{
            type: schema.playerType,
            args: {
                playerID: {type: GraphQLInt},
            },
            resolve(parent, args){
                return Player.find({playerID: args.playerID});
            }
        },
        getCharacter:{
            type: new GraphQLList(schema.pcType),
            args: {
                storyID: {type: GraphQLInt},
                playerID: {type: GraphQLInt},
                name: {type: GraphQLString},
                class: {type: GraphQLString},
            },
            resolve(parent, args){
                return PC.find(args);
            }
        },
        getPlayers:{
            type: new GraphQLList(schema.playerType),
            resolve(parent, args){
                return Player.find();
            }
        },
        getStories:{
            type: new GraphQLList(schema.storyType),
            resolve(parent, args){
                return Story.find();
            }
        }
    }

});

module.exports = {RootQuery};