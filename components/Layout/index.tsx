import Header from '../Header'
import Footer from '../Footer'
import { ReactNode } from 'react'
import { Container } from "@chakra-ui/react"
import Head from 'next/head'

interface LayoutProps {
  children: ReactNode
  pageTitle: string
}

export default function Layout(props: LayoutProps) {
  const { children, pageTitle } = props

  return (
    <>
      <Head>
        <title>Next.js Basic | { ' ' } { pageTitle }</title>
        <meta name="description" content="Next.js basic web application" />
      </Head>
      <Header />
      <Container height="80%" maxW='container.xl' px={10} mt={5}>{ children }</Container>
      <Footer />      
    </>
  )
}
