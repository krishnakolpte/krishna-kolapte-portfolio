import { Button, HStack, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import React from 'react';

import { FaGithub, FaLinkedin, FaInstagramSquare } from 'react-icons/fa';

function Footer() {
  return (
    <footer style={{ backgroundColor: ' #6B46C1' }}>
      <VStack
        maxW={['100%', '1100px']}
        minH={'300px'}
        m={'auto'}
        p={'5'}
        spacing={'8'}
        mt={'4'}
      >
        <Stack
          w={'100%'}
          minH={'200px'}
          direction={['column', 'row']}
          align={'center'}
          justifyContent={'center'}
          spacing={['8', '5']}
        >
          <VStack w={['100%', 'auto']} align={'flex-start'}>
            <Heading color={'white'}>Krishna</Heading>
            <Text color={'white'}>Full Stack Developer</Text>
          </VStack>

          <Text
            color={'white'}
            fontSize={'2xl'}
            fontWeight={'700'}
            fontFamily={'cursive'}
            textAlign={'center'}
          >
            "Innovate, persist, conquer, repeat, succeed endlessly."
          </Text>

          <HStack
            w={['100%', 'auto']}
            align={'center'}
            justifyContent={'space-evenly'}
          >
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/krishnakolpte">
              <Button variant={'ghost'}>
                <FaGithub color={'white'} fontSize={'30'} />
              </Button>
            </a>

            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/krishnakolapte">
              <Button variant={'ghost'}>
                <FaLinkedin color={'white'} fontSize={'30'} />
              </Button>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/mekrishna40?utm_source=qr&igsh=MXZiZDkwbDdyNGt6Ng">
              <Button variant={'ghost'}>
                <FaInstagramSquare color={'white'} fontSize={'30'} />
              </Button>
            </a>
          </HStack>
        </Stack>
        <Text
          pt={'4'}
          w={'full'}
          textAlign={'center'}
          borderTop={'1px solid white'}
          color={'white'}
        >
          &copy; 2023 Krishna. All rights reserved.
        </Text>
      </VStack>
    </footer>
  );
}

export default Footer;
