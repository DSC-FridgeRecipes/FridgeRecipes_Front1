import React, { useState } from 'react';
import AppRouter from './Router';
import "../css/App.css"
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   HttpLink,
//   from,
// } from "@apollp/client";
import {onError} from "@apollo/client/link/error";
import HeaderContainer from '../css/Header/HeaderContainer'

// const errorLink = onError(({ graphqlErrors, networkError}) => {
//   if(graphqlErrors){
//     graphqlErrors.map(({ message, location, path}) => {
//       alert('Graphql error ${message}');
//     });
//   }
// });

// const link = from([
//   errorLink,
//   new HttpLink({ uri: "http://localhost:3000/graphql"}),
// ]);

// const client = new ApolloClient({
//   cache: new InMemoryCache(),
//   link: link,
// });

function App() {   // 여기서 모든 로직을 다룬다
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    //<ApolloProvider client={client}>
    <div>
      <HeaderContainer/>
      <AppRouter isLoggedIn={isLoggedIn} />
    </div>
    //</ApolloProvider>
  );   //prop 전달
}

export default App;