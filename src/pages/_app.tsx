import Head from 'next/head'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return(
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet" />

        <title>Move.it</title>
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
