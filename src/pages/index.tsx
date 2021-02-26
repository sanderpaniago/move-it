import  Head  from 'next/head'
import { useContext, useEffect } from 'react'
import ChallengeBox from '../components/ChallengeBox'

import CompletedChallenges from '../components/CompletedChallenges'
import Countdown from '../components/Countdown'
import ExperienceBar from '../components/ExperienceBar'
import Footer from '../components/Footer'
import Profile from '../components/Profile'
import { CountdownProvider } from '../contexts/CountdownContext'
import { ThemeContext } from '../contexts/ThemeContext'

import styles from '../styles/pages/home.module.scss'

export default function Home() {

  const {theme} = useContext(ThemeContext)


  return (
    <div className={`app ${theme}`}>
      <div className={`${styles.container}`}>
        <Head>
          <title>Inicio | move.it</title>
        </Head>
        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>

        <Footer />
      </div>
    </div>
  )
}
