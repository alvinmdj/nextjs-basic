import { Container, Text, Stack, useColorModeValue } from "@chakra-ui/react";
import Layout from "../components/Layout";

interface Post {
  id: number
  title: string
  body: string
}

interface BlogProps {
  blogData: Post[]
}

export default function Blog(props: BlogProps) {
  const { blogData } = props
  const cardColor = useColorModeValue('teal.50', 'gray.900')

  return (
    <Layout pageTitle="Blog">
      <Container maxW={'container.xl'} centerContent>
        <Text textAlign={'center'} fontSize='3xl' as='kbd'>Blog List</Text>
        {blogData.map(blog => {
          return (
            <Stack
              width={'100%'}
              key={blog.id}>
              <Stack backgroundColor={cardColor} p="4" boxShadow="lg" m="4" borderRadius="md">
                <Stack direction="row" alignItems="center">
                  <Text as='kbd' fontWeight="semibold">{blog.title}</Text>
                </Stack>
                <Stack
                  direction={{ base: 'column'}}>
                  <Text as='kbd' fontSize={{ base: 'sm' }}>
                  {blog.body}
                  </Text>
                </Stack>
              </Stack>
            </Stack>
          )
        })}
      </Container>
    </Layout>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const blogData = await res.json()

  return {
    props: {
      blogData: blogData
    }
  }
}