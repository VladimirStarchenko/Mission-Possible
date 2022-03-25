import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
// import SearchBooks from './pages/SearchBooks';
import SavedCharities from './pages/SavedCharities';
import Navbar from './components/Navbar';
import StripePayment from './components/StripePayment'

const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  },
  uri: '/graphql'
});

function App() {
  return (
    <ApolloProvider client={ client }>
      <Router>
        <>
          <Navbar />
          <Switch>
            {/* <Route exact path='/' component={ SearchBooks } /> */}
            { <Route exact path='/saved' component={ SavedCharities } /> 
            // {/* <Route render={ () => <h1 className='display-2'>Wrong page!</h1> } /> */}
        }</Switch>
        </>
      </Router>

      
  
    </ApolloProvider>
  );
}

export default App;
