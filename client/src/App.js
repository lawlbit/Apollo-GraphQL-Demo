import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
 
//components
import CharacterList from './components/CharacterList';

//apollo setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})
class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div id="main">
          <h1>Character Watch List</h1>
          <CharacterList/>
          
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
