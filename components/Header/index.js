import React from 'react';
import {
  Box,
  Stack,
  Heading,
  Flex,
  Text,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import Link from 'next/link';
import { HamburgerIcon } from '@chakra-ui/icons';

// Note: This code could be better,
// so I'd recommend you to understand how I solved and you could write yours better :)
// Good luck! 🍀
const Header = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={6}
      bg="teal.500"
      color="white"
      style={{ marginBottom: 50 }}
      {...props}
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={'tighter'}>
          <Link href="/tools">Tools</Link>
        </Heading>
      </Flex>

      <Box display={{ base: 'block', md: 'none' }} onClick={handleToggle}>
        <HamburgerIcon />
      </Box>

      <Stack
        direction={{ base: 'column', md: 'row' }}
        display={{ base: isOpen ? 'block' : 'none', md: 'flex' }}
        width={{ base: 'full', md: 'auto' }}
        alignItems="center"
        flexGrow={1}
        mt={{ base: 4, md: 0 }}
      >
        <Text>
          <Link href="/tools/dbformat">Db List Formatter</Link>
        </Text>
        <Text>
          <Link href="/tools/test">Test</Link>
        </Text>
        <Text>
          <Link href="/tools/test">Test</Link>
        </Text>
      </Stack>

      <Box
        display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
        mt={{ base: 4, md: 0 }}
      />
    </Flex>
  );
};

export default Header;
