import Header from '../Header'
import Footer from '../Footer'
import { ReactNode } from 'react'
import { Container } from "@chakra-ui/react"
import Head from 'next/head'
import styles from './Layout.module.css'

interface LayoutProps {
  children: ReactNode
  pageTitle: string
}

export default function Layout(props: LayoutProps) {
  const { children, pageTitle } = props

  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js Basic | { ' ' } { pageTitle }</title>
        <meta name="description" content="Next.js basic web application" />
      </Head>
      <Header />
      <Container className={styles.content} maxW='container.xl' px={10} my={5}>
        { children }
      </Container>
      <Footer />
    </div>
  )
}
