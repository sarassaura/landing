import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => (
  <Html lang="pt" style={{ scrollBehavior: 'smooth' }}>
    <Head />
    <body style={{ overflow: 'hidden' }}>
      <Main />
      <NextScript />
    </body>
  </Html>
)

export default Document
