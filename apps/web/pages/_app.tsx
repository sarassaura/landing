import { AppProps } from 'next/app'
import { ChakraProvider, theme, Layout } from 'ui'
import 'ui/styles/styles.css'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider theme={theme}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ChakraProvider>
)

export default MyApp
