import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Hallo Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          <code>My name Eko Arifin, love explore and code to solve problem. happy coding</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
