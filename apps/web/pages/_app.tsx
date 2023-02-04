import type { AppProps } from 'next/app'
import { Inter } from '@next/font/google'
import {
  ChakraProvider,
  theme,
  Layout,
  SideBar,
  NavigationBar,
  MenuItem,
} from 'ui'
import 'ui/styles/styles.css'
import RightArrow from 'ui/assets/RightArrow'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

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
            <RightArrow
              width="12px"
              height="7px"
              marginBottom="2px"
              color={router.asPath === '/#Contact' ? '#838383' : 'white'}
            />
          </MenuItem>
        </Link>
      </NavigationBar>
      <SideBar router={router.asPath} />
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </Layout>
  </ChakraProvider>
)

export default MyApp
