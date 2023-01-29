// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react'
import {theme} from '@finances/ui'

export default function MyApp({ Component, pageProps }) {
  return (
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
  )
}
