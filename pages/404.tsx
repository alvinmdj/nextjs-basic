import { Text, Container, Divider, Link as ChakraLink, Center } from "@chakra-ui/react"
import { useEffect } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import Layout from "../components/Layout"

export default function NotFound() {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 5000)
  }, [])

  return (
    <Layout pageTitle="404">
      <Container centerContent>
        <Text textAlign={'center'} fontSize='6xl'>Oh no!</Text>
        <Text textAlign={'center'} alignItems={'center'}>The page you're looking cannot be found...</Text>
        <Divider my={5} orientation='horizontal' />
        <Text textAlign={'center'}>
          Redirecting back to {' '}
          <Link href={'/'}>
            <ChakraLink>homepage</ChakraLink>
          </Link>
          {' '} in 5 seconds...
        </Text>
      </Container>
    </Layout>
  )
}
