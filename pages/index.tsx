import type { NextPage } from 'next'
import { Container, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Layout from '../components/Layout'

const Home: NextPage = () => {
  return (
    <Layout pageTitle='Home'>
      <Container maxW={'container.xl'} centerContent>
        <Text my={10} as='kbd' fontSize={'5xl'}>Welcome to my first Next.js App!</Text>
        <Image src="/dio.png" width={200} height={200} alt='Dio from Grand Chase' />
        <Text my={3} as='kbd' fontSize={'xl'}>Dio</Text>
      </Container>
    </Layout>
  )
}

export default Home
