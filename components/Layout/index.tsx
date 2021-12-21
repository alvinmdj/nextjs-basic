import Header from '../Header'
import Footer from '../Footer'
import { ReactNode } from 'react';
import { Container } from "@chakra-ui/react";

interface LayoutProps {
  children: ReactNode
}

export default function Layout(props: LayoutProps) {
  const { children } = props

  return (
    <>
      <Header />
      <Container height="80%" maxW='container.xl' px={20} mt={5}>{children}</Container>
      <Footer />      
    </>
  )
}
