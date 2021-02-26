import '../styles/globals.scss'

import { ChallengesProvider } from "../contexts/ChallengesContext";
import { ThemeProvaider } from '../contexts/ThemeContext';

function MyApp({ Component, pageProps }) {
  return(
    <ThemeProvaider>
      <ChallengesProvider >
          <Component {...pageProps} />
      </ChallengesProvider>
    </ThemeProvaider>
  )
}

export default MyApp
