import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import {
  FacebookShareButton,
  FacebookIcon,
  GithubShareButton,
  GithubIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from 'next-share';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Eko Nur Arifin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Eko Nur Arifin" />
        <p className="description">
          <code>love coding, enjoy explore and happy to solve problem.</code>
        </p>
        <p className="description">
          Find me here :
        </p>
        <p className="description">
          <GithubShareButton
            url={'https://github.com/ary21/'} >
            <GithubIcon size={32} round />
          </GithubShareButton>
          <LinkedinShareButton
            url={'https://www.linkedin.com/in/eko-nur-arifin/'} >
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>
          <FacebookShareButton
            url={'https://www.facebook.com/eko.nurarifin21/'} >
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <TwitterShareButton
            url={'https://twitter.com/EkonurArifin85'} >
            <TwitterIcon size={32} round />
          </TwitterShareButton>
          <WhatsappShareButton
            url={'https://api.whatsapp.com/send?phone=6281365066430'} >
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
        </p>
      </main>

      <Footer />
    </div>
  )
}
