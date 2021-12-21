import type { NextPage } from 'next'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <h1>Welcome, Alvin!</h1>
      <Footer />
    </>
  )
}

export default Home
