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
        <Text fontSize='6xl'>Oh no!</Text>
        <Text alignItems={'center'}>The page you're looking cannot be found...</Text>
        <Divider my={5} orientation='horizontal' />
        <Text>
          Redirecting back to <span> </span>
          <Link href={'/'}>
            <ChakraLink>homepage</ChakraLink>
          </Link>
          <span> </span> in 5 seconds...
        </Text>
      </Container>
    </Layout>
  )
}
