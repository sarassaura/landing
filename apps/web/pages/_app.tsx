import { AppProps } from 'next/app'
import { ChakraProvider, theme } from 'ui'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider theme={theme}>
    <Component {...pageProps} />
  </ChakraProvider>
)

export default MyApp
