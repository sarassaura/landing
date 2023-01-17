import { ChakraProvider, theme } from 'ui'

const MyApp = ({ Component, pageProps }: any) => (
  <ChakraProvider theme={theme}>
    <Component {...pageProps} />
  </ChakraProvider>
)

export default MyApp
