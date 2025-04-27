import {
  Box,
  Button,
  HStack,
  Heading,
  Img,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { FaGithub, FaLinkedin, FaInstagramSquare } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import krishnaImage from '../assests/krishna.png';
import About from './About';
import Skills from './Skills';
import Education from './Education';
import Services from './Services';
import Projects from './Projects';
import Card from './Card';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section id="home">
      <Stack
        direction={['column', 'row']}
        align={'center'}
        justifyContent={'space-evenly'}
        maxW={['100%', '1100px']}
        minH={['100vh', '500px']}
        m={'auto'}
        spacing={['8', '4']}
        mt={['8']}
        p={'4'}
      >
        <HStack
          w={['100%', '50%']}
          height={'full'}
          justifyContent={'space-evenly'}
          spacing={['2', '4']}
        >
          <VStack align={'center'} spacing={'4'}>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/krishnakolpte">
              <Button
                size={['md', 'lg']}
                variant={'ghost'}
                colorScheme="purple"
              >
                <FaGithub fontSize={'30'} />
              </Button>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/krishnakolapte">
              <Button
                size={['md', 'lg']}
                variant={'ghost'}
                colorScheme="purple"
              >
                <FaLinkedin fontSize={'30'} />
              </Button>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/mekrishna40?utm_source=qr&igsh=MXZiZDkwbDdyNGt6Ng">
              <Button
                size={['md', 'lg']}
                variant={'ghost'}
                colorScheme="purple"
              >
                <FaInstagramSquare fontSize={'30'} />
              </Button>
            </a>
          </VStack>
          <VStack
            w={['95%', '70%']}
            pr={['2', '0']}
            h={'full'}
            align={'flex-start'}
            justifyContent={'center'}
            spacing={'4'}
          >
            <VStack w={'full'} align={'flex-start'} spacing={'4'}>
              <Heading textTransform={'capitalize'} fontWeight={'700'}>
                Hi, I'am{' '}
                <Text as={'span'} color={'#6b46c1'}>
                  Krishna
                </Text>
              </Heading>
              <Text
                fontSize={'xl'}
                textTransform={'capitalize'}
                fontWeight={'700'}
                color={'GrayText'}
              >
                Frontend Developer
              </Text>
              <Text
                color={'GrayText'}
                fontSize={'md'}
                textTransform={'capitalize'}
                fontWeight={'500'}
              >
                Creative React developer transforming designs into vibrant,
                intuitive user interfaces with a passion for seamless
                experiences.
              </Text>
              <Link to={"/contact"}>
                <Button
                  mt={'8'}
                  size={'lg'}
                  variant={'solid'}
                  colorScheme={'purple'}
                >
                  <Text textTransform={'capitalize'} mr={'2'}>
                    Contact Me
                  </Text>
                  <SiGmail />
                </Button>
              </Link>
            </VStack>
          </VStack>
        </HStack>
        <Box w={['350px', '40%']} position={'relative'}>
          <svg viewBox="0 0 200 200">
            <path
              fill="#8A3FFC"
              d="M47.6,-53.4C55.8,-39.4,52.4,-19.7,52.1,-0.3C51.9,19.2,54.7,38.3,46.5,48.7C38.3,59.2,19.2,60.8,1.2,59.7C-16.8,58.5,-33.6,54.5,-49.3,44.1C-64.9,33.6,-79.2,16.8,-79.6,-0.4C-80,-17.6,-66.5,-35.3,-50.9,-49.3C-35.3,-63.3,-17.6,-73.7,1,-74.8C19.7,-75.8,39.4,-67.5,47.6,-53.4Z"
              transform="translate(100 100)"
            />
          </svg>

          <Img
            position={'absolute'}
            bottom={'10%'}
            left={'10%'}
            w={'300px'}
            h={'300px'}
            src={krishnaImage}
            alt="Krishnas Image"
          />
        </Box>
      </Stack>
      <About />
      <Skills />
      <Education />
      <Services />
      <Projects />
      <Card />
    </section>
  );
}

export default Home;
