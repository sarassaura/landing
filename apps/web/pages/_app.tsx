import { AppProps } from 'next/app'
import {
  ChakraProvider,
  theme,
  Layout,
  SideBar,
  NavigationBar,
  MenuItem,
} from 'ui'
import RightArrow from 'ui/assets/RightArrow'
import DarkRightArrow from 'ui/assets/DarkRightArrow'
import Link from 'next/link'

const MyApp = ({ Component, pageProps, router }: AppProps) => (
  <ChakraProvider theme={theme}>
    <Layout>
      <NavigationBar router={router.asPath}>
        <Link href="#Home" scroll={false}>
          <MenuItem router={router.asPath}>Home</MenuItem>
        </Link>
        <Link href="#Technologies" scroll={false}>
          <MenuItem router={router.asPath}>About</MenuItem>
        </Link>
        <Link href="#Services" scroll={false}>
          <MenuItem router={router.asPath}>Services</MenuItem>
        </Link>
        <Link href="#Contact" scroll={false}>
          <MenuItem router={router.asPath}>
            Contact &nbsp;
            {router.asPath === '/#Contact' ? (
              <DarkRightArrow width="12px" height="7px" marginBottom="2px" />
            ) : (
              <RightArrow width="12px" height="7px" marginBottom="2px" />
            )}
          </MenuItem>
        </Link>
      </NavigationBar>
      <SideBar router={router.asPath} />
      <Component {...pageProps} />
    </Layout>
  </ChakraProvider>
)

export default MyApp
