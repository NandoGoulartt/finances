// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react'
import {theme} from '@finances/ui'
import {client} from "@/lib/apollo";
import {ApolloProvider} from "@apollo/client";



export default function MyApp({ Component, pageProps }) {
  return (
      <ApolloProvider client={client}>
          <ChakraProvider theme={theme}>
              <Component {...pageProps} />
          </ChakraProvider>
      </ApolloProvider>
  )
}
