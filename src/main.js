import { createApp, h, provide } from 'vue'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import App from "./App.vue"
import { ApolloClients } from "@vue/apollo-composable";

const httpLink = createHttpLink({
    // You should use an absolute URL here
    uri: 'http://localhost:8081/graphql',
  })
  
  // Cache implementation
  const cache = new InMemoryCache()
  
  // Create the apollo client
  const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
  })
  
    const app = createApp({
      setup() {
        provide(ApolloClients, {
          default: apolloClient,
        });
      },
      render: () => h(App),
    });
    
    app.mount("#app");
