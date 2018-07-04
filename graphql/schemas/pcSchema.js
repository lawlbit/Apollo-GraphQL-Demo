const graphql = require('graphql');
const playerType = require('./playerSchema');
const storyType = require('./storySchema');
const Player = require('../../models/player');
const Story = require('../../models/story');

const {
    GraphQLObjectType,
    GraphQLString
} = graphql

const pcType = new GraphQLObjectType({
    name: 'PC',
    fields: ({
        player: {
            type: playerType,
            resolve(parent, args){
                return Player.findById(parent.playerID);
            }
        },
        story: {
            type: storyType,
            resolve(parent, args){
                return Story.findById(parent.storyID);
            }
        },
        name: {type: GraphQLString},
        class: {type: GraphQLString},
        description: {type: GraphQLString}
    })
});

module.exports = pcType;