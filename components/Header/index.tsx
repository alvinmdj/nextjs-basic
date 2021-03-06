import { ReactNode } from 'react';
import {
  Text,
  Box,
  Flex,
  HStack,
  Link as ChakraLink,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  useColorMode,
  Stack,
  Tooltip,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import Link from 'next/link';

const Links : { [key: string]: any } = {
  home: { title: 'Home', url: '/' },
  blog: { title: 'Blog', url: '/blog' },
  users: { title: 'Users', url: '/users' }
}

const NavLink = ({ href, children }: { href: string, children: ReactNode }) => (
  <Link href={href}>
    <ChakraLink
      as='kbd'
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}>
        {children}
    </ChakraLink>
  </Link>
);

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { colorMode, toggleColorMode } = useColorMode()
  const bgColor = useColorModeValue('gray.100', 'gray.900')

  return (
    <>
      <Box bg={bgColor} px={10}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box><Text as='kbd' fontWeight={'semibold'}>Next.js Basic</Text></Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
                {Object.keys(Links).map((key) => (
                  <NavLink href={Links[key].url} key={Links[key].title}>{Links[key].title}</NavLink>
                ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Tooltip hasArrow placement='auto' label="Toggle Theme">
                <Button onClick={toggleColorMode}>
                  {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </Button>
              </Tooltip>
            </Stack>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Object.keys(Links).map((key) => (
                <NavLink href={Links[key].url} key={Links[key].title}>{Links[key].title}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}

// import Link from "next/link"
// import styles from './Header.module.css'

// export default function Header() {
//   return (
//     <div>
//       <header className={styles.container}>
//         <ul className={styles.list}>
//           <li className={styles.item}><Link href="/"><a>Home</a></Link></li>
//           <li className={styles.item}><Link href="/blog"><a>Blog</a></Link></li>
//           <li className={styles.item}><Link href="/users"><a>Users</a></Link></li>
//         </ul>
//       </header>      
//     </div>
//   )
// }