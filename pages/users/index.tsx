import Layout from "../../components/Layout";
import { useRouter } from 'next/router'
import { Container, Stack, Text, Tooltip, useColorModeValue } from '@chakra-ui/react'

interface UsersProps {
  userData: Array<any>
}

export default function Users(props : UsersProps) {
  const { userData } = props
  const router = useRouter()
  const cardColor = useColorModeValue('teal.50', 'gray.900')

  return (
    <Layout pageTitle="Users">
      <Container maxW={'container.xl'} centerContent>
        <Text fontSize='3xl' as='kbd'>User List</Text>
        {userData.map(user => (
          <Tooltip hasArrow placement='top-start' label="Click me for more details!">
          <Stack
            width={'100%'}
            cursor={'pointer'} 
            key={ user.id } 
            onClick={() => router.push(`/users/${user.id}`)}>
            <Stack backgroundColor={cardColor} p="4" boxShadow="lg" m="4" borderRadius="md">
              <Stack direction="row" alignItems="center">
                <Text as='kbd' fontWeight="semibold">User Information</Text>
              </Stack>
              <Stack
                direction={{ base: 'column'}}>
                <Text as='kbd' fontSize={{ base: 'sm' }}>
                  Name : { user.name }
                </Text>
                <Text as='kbd' fontSize={{ base: 'sm' }}>
                  E- mail : { user.email }
                </Text>
              </Stack>
            </Stack>
          </Stack>
          </Tooltip>
        ))}
      </Container>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const userData = await res.json()

  return {
    props: {
      userData: userData
    }
  }
}