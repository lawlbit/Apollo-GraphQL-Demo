const graphql = require('graphql');
const Player = require('../../models/player');
const Story = require('../../models/story');
const PC = require('../../models/pc');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
} = graphql

const storyType = new GraphQLObjectType({
    name: 'Story',
    fields: ()=>({
        storyID: {type: GraphQLInt},
        name: {type: GraphQLString},
        description: {type: GraphQLString},
        characters: {
            type: new GraphQLList(pcType),
            resolve(parent, args){
                return PC.find({storyID: parent.id});
            }
        }
    })
});

const playerType = new GraphQLObjectType({
    name: 'Player',
    fields: ()=> ({
        playerID: {type: GraphQLInt},
        playerName: {type: GraphQLString},
        characters: {
            type: new GraphQLList(pcType),
            resolve(parent, args){
                return PC.find({playerID: parent.playerID});
            }
        }
    })
});

const pcType = new GraphQLObjectType({
    name: 'PC',
    fields: ()=>({
        player: {
            type: playerType,
            resolve(parent, args){
                return Player.find({playerID: parent.playerID});
            }
        },
        story: {
            type: storyType,
            resolve(parent, args){
                return Story.find({storyID: parent.storyID});
            }
        },
        name: {type: GraphQLString},
        prof: {type: GraphQLString},
        description: {type: GraphQLString}
    })
});

module.exports = {
    pcType,
    playerType,
    storyType
};