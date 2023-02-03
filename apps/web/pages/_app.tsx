import { AppProps } from 'next/app'
import { ChakraProvider, theme, Layout, SideBar } from 'ui'
import 'ui/styles/styles.css'

const MyApp = ({ Component, pageProps, router }: AppProps) => (
  <ChakraProvider theme={theme}>
    <Layout>
      <SideBar router={router.asPath} />
      <Component {...pageProps} />
    </Layout>
  </ChakraProvider>
)

export default MyApp
