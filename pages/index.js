import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <titleOmer Dahan Suck D*ck!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Omer Dahan Suck D*ck" />
        <p className="description">
         I just create this just to make a fucking point  
        </p>
      </main>

      <Footer />
    </div>
  )
}
