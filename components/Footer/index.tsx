import { Container, Text } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/react'

export default function Footer() {
  const color = useColorModeValue('gray.400', 'gray.500')

  return (
    <Container pb={5} centerContent>
      <Text as='kbd' color={color}>
        Made with Love • Next.js • Chakra UI
      </Text>
    </Container>
  )
}