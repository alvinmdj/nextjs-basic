import { Container, Text } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/react'
import styles from './Footer.module.css'

export default function Footer() {
  const color = useColorModeValue('gray.400', 'gray.500')

  return (
    <Container pb={5} className={styles.footer}>
      <Text color={color} className={styles.title}>
        Made with love
      </Text>
    </Container>
  )
}
