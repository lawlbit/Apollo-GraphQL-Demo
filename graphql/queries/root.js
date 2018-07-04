const graphql = require('graphql');
const schema = require('../schemas/index');
const PC = require('../../models/pc');
const Player = require('../../models/player');
const Story = require('../../models/story');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLList
} = graphql;

const RootQuery = new GraphQLObjectType({
    name: RootQuery,
    fields: {
        getStory:{
            type: schema.storyType,
            args: {
                id: {type: GraphQLID},
            },
            resolve(parent, args){
                return Story.findById(args.id);
            }
        },
        getPlayer:{
            type: schema.playerType,
            args: {
                id: {type: GraphQLID},
            },
            resolve(parent, args){
                return Player.findById(args.id);
            }
        },
        getCharacter:{
            type: new GraphQLList(schema.pcType),
            args: {
                storyID: {type: GraphQLID},
                playerID: {type: GraphQLID},
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