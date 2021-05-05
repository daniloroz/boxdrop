import Head from 'next/head'
import styles from '../styles/Home.module.css'
import LoginPage from "../pages/login/login"
import SignUpPage from "../pages/signup/signup"
import {NavBar} from "../components/Navbar"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Box Drop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*<LoginPage></LoginPage>*/}
      <SignUpPage/>
      

    </div>
  )
}
