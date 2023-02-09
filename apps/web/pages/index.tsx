import Head from 'next/head'
import Contact from '../Sections/contact'
import Home from '../Sections/home'
import Services from '../Sections/services'
import Technologies from '../Sections/technologies'

const Index = () => (
  <>
    <Head>
      <title>λexpress</title>
      <link rel="icon" type="image/png" sizes="16x16" href="/Express.png" />
    </Head>
    <Home />
    <Services />
    <Technologies />
    <Contact />
  </>
)

export default Index
