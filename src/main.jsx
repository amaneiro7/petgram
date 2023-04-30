import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppProvider } from './context'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import App from './App'

const client = new ApolloClient({
  uri: 'https://petgram-server-amaneiro7.vercel.app/graphql',
  cache: new InMemoryCache()
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </AppProvider>
  </React.StrictMode>
)
