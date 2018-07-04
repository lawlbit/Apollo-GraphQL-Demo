const graphql = require('graphql');
const schema = require('../schemas/index');
const PC = require('../../models/pc');
const Player = require('../../models/player');
const Story = require('../../models/story');

const {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLID,
    GraphQLInt
} = graphql;

const Mutations = new GraphQLObjectType({
    name: 'Mutations',
    fields: {
        addPlayer:{
            type: schema.playerType,
            args: {
                playerID: {type: new GraphQLNonNull(GraphQLInt)},
                playerName: {type: new GraphQLNonNull(GraphQLString)}
            },
            resolve(parent, args){
                let player = new Player({
                    playerID: args.playerID,
                    name: args.name
                });
                return player.save();
            }
        },
        addPC:{
            type: schema.pcType,
            args: {
                playerID: {type: new GraphQLNonNull(GraphQLInt)},
                storyID: {type: new GraphQLNonNull(GraphQLInt)},
                name: {type: new GraphQLNonNull(GraphQLString)},
                prof: {type: new GraphQLNonNull(GraphQLString)},
                description: {type: GraphQLString}
            },
            resolve(parent, args){
                let pc = new PC({
                    playerID: args.playerID,
                    storyID: args.storyID,
                    name: args.name,
                    prof: args.prof,
                    description: args.description
                });
                return pc.save();
            }
        },
        addStory:{
            type: schema.storyType,
            args: {
                storyID: {type: new GraphQLNonNull(GraphQLInt)},
                name: {type: new GraphQLNonNull(GraphQLString)},
                description: {type: new GraphQLNonNull(GraphQLString)}
            },
            resolve(parent, args){
                let story = new Story({
                    storyID: args.storyID,
                    name: args.name,
                    description: args.description
                });
                return story.save();
            }
        }
    }
});

module.exports = {Mutations};