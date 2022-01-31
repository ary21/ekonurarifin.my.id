import { SocialIcon } from 'react-social-icons'
import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container" style={{ height: '100%' }}>
      <Head>
        <title>Eko Nur Arifin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header title="Eko Nur Arifin" />
        <p className="description">
          <code>LOVE CODING, ENJOY EXPLORING AND SHARING. HAPPY SOLVING PROBLEMS.</code>
        </p>
        <p className="description" style={{ maxWidth: '80%', textAlign: 'center' }}>
          From Indonesia, since 2016 working as a software developer, bachelor of informatics engineering graduate. Completed some projects as official work also as freelance mostly as Fullstack Web Developer but preferably more like as Backend.
        </p>
        <div style={{ textAlign: 'center' }}>
          <h5 className="description">Working with :</h5>
          <p className="description">NodeJS, ExpressJS, Typescript, NestJS, GraphQL,</p>
          <p className="description">ReactJS, MaterialUI, Tailwind,</p>
          <p className="description">Sequelize, TypeORM, Mongoose,</p>
          <p className="description">DB: MySQL/MariaDB, MongooDB, Postgre,</p>
          <p className="description">PHP: Codeigniter, Laravel,</p>
          <p className="description">HTML, CSS, Javascript, JQuery, Bootstrap</p>
        </div>
        <h5 className="description">Find me here :</h5>
        <p className="description">
          <SocialIcon target="_blank" url="https://github.com/ary21/" />
          <SocialIcon target="_blank" url="https://www.linkedin.com/in/eko-nur-arifin/" />
          <SocialIcon target="_blank" url="https://twitter.com/EkonurArifin85" />
          <SocialIcon target="_blank" url="https://www.facebook.com/eko.nurarifin21/" />
          <SocialIcon target="_blank" url="https://www.instagram.com/ekonurarifin58/" />
          <SocialIcon target="_blank" url="https://t.me/ekonurarifin21" network="telegram" />
        </p>
        <h5 className="description">Experiences :</h5>
        <p className="description"><a href="https://cvintermedia.com/" target="_blank">CV. Intermedia Solusindo</a> (2016)</p>
        <p className="description"><a href="https://www.ardanhosting.com/" target="_blank">CV. Ardantus Group Sejahtera</a> (Freelance)</p>
        <p className="description"><a href="https://hpwebdesign.id" target="_blank">Halal Pro Web Design</a> (Freelance)</p>
        <p className="description"><a href="https://dokterwebsite.id/" target="_blank">Dokterwebsite.id</a> (Freelance)</p>
        <p className="description"><a href="https://hoscloud.co.id/" target="_blank">Hoscloud.co.id</a> - CV.Mitra Teknologi Digital (2019)</p>
        <p className="description"><a href="http://orenda.co.id/" target="_blank">Orenda.co.id</a> - PT. Prima Nusa Digital (2020)</p>
      </main>
      <Footer />
    </div>
  )
}
