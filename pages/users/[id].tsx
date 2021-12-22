import { Container, Text, Stack, useColorModeValue, Button } from "@chakra-ui/react"
import { useRouter } from "next/router"
import Layout from "../../components/Layout"

interface UserDetail {
  id: number
  name: string
  email: string
  phone: string
  website: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
  }
}

interface UserDetailProps {
  userDetail: UserDetail
}

export default function UserDetail(props: UserDetailProps) {
  const router = useRouter()
  // const { id } = router.query
  const { userDetail } = props
  const cardColor = useColorModeValue('teal.50', 'gray.900')

  return (
    <Layout pageTitle="User Detail">
      <Container maxW={'container.xl'} centerContent>
        <Text textAlign={'center'} fontSize={'4xl'} as='kbd'>User Information</Text>
        <Stack backgroundColor={cardColor} p="4" boxShadow="lg" m="4" borderRadius="md">
          <Text textAlign={'center'} as='kbd' fontWeight="semibold" fontSize={'xl'}>User Information</Text>
          <Text textAlign={'center'} as='kbd'>Name : { userDetail.name}</Text>
          <Text textAlign={'center'} as='kbd'>E-mail : { userDetail.email}</Text>
          <Text textAlign={'center'} as='kbd'>Phone Number : { userDetail.phone}</Text>
          <Text textAlign={'center'} as='kbd'>Website : { userDetail.website}</Text>
          <Text textAlign={'center'} as='kbd'>
            Address :
            {' '}
            { userDetail.address.street }
            {', '}
            { userDetail.address.suite }
            {', '}
            { userDetail.address.city }
            {', '}
            { userDetail.address.zipcode }
          </Text>
        </Stack>
        <Button cursor={'pointer'} as='kbd' onClick={() => router.push('/users')}>
          Back to user list
        </Button>
      </Container>
    </Layout>
  )
}

export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const userData = await res.json()

  const paths = userData.map((user: UserDetail) => {
    return {
      params: {
        id: user.id.toString(),
      }
    }
  })

  return {
    paths,
    fallback: false
  }
}

interface GetStaticProps {
  params: {
    id: string
  }
}

export const getStaticProps = async (context: GetStaticProps) => {
  const id = context.params.id
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const userDetail = await res.json()

  return {
    props: {
      userDetail: userDetail
    }
  }
}