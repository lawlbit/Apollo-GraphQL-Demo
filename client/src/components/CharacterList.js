import React, { Component } from 'react';
import {gql} from 'apollo-boost';
import {graphql} from 'react-apollo';

const getCharacterQuery = gql`
{
  getCharacters{
    name
    player
    story
  }
}
`

class CharacterList extends Component {
  displayCharacters(){
    var data = this.props.data;
    if(data.loading){
      return (<div>Loading Characters...</div>)
    } else {
      return (data.characters.map(character =>{
        return (
          <li> {character.name}</li>
        );
      }))
    }
  }
  render() {
    return (
      <div>
          <ul id="character-list "></ul>
            {this.displayCharacters()}
      </div>
    );
  }
}

export default graphql(getCharacterQuery)(CharacterList);
