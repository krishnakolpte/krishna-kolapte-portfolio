import {
  Box,
  Button,
  Heading,
  Img,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { totalProjectsDane } from "../data/data.js";
import aboutImage from '../assests/about.jpg';
import { Link } from 'react-router-dom';

function About() {
  return (
    <section id="about">
      <VStack
        maxW={['100%', '1100px']}
        minH={['100vh', '500px']}
        m="auto"
        spacing={['8', '4']}
        mt="8"
        p="4"
      >
        <VStack w="full" spacing="0">
          <Heading textTransform="capitalize" fontWeight="700">
            About Me
          </Heading>
          <Text
            fontSize="xl"
            textTransform="capitalize"
            fontWeight="700"
            color="GrayText"
          >
            My Introduction
          </Text>
        </VStack>

        <Stack
          w="full"
          mt="4"
          justifyContent="space-evenly"
          direction={['column', 'row']}
          spacing={['8', '0']}
        >
          <Box width={['350px', '40%']}>
            <Img
              w="350px"
              h="350px"
              rounded="lg"
              objectFit="cover"
              src={aboutImage}
              alt="Krishna's Image"
            />
          </Box>

          <VStack
            width={['100%', '50%']}
            alignItems="flex-start"
            justifyContent="center"
            spacing="8"
          >
            <Text
              color="GrayText"
              fontSize="md"
              textTransform="capitalize"
              fontWeight="500"
            >
              Hi I am Krishna Kolapte, a skilled software developer with
              expertise in web and mobile development, specializing in React,
              React Native, and Node.js. I focus on creating efficient,
              user-friendly applications and strive to write clean, scalable
              code. With a passion for continuous learning and problem-solving,
              I aim to build innovative solutions that deliver value and enhance
              user experiences.
            </Text>

            <Stack
              direction="row"
              width="full"
              alignItems="flex-start"
              justifyContent={['center', 'space-evenly']}
              wrap="wrap"
              spacing="3"
            >
              <Box textAlign="center" w="150px" h="130px" p="4">
                <Heading textTransform="capitalize" fontWeight="700">
                  01+
                </Heading>
                <Text
                  color="GrayText"
                  fontSize="md"
                  textTransform="capitalize"
                  fontWeight="500"
                >
                  YOE
                </Text>
              </Box>

              <Box textAlign="center" w="150px" h="130px" p="4">
                <Heading textTransform="capitalize" fontWeight="700">
                  {totalProjectsDane}+
                </Heading>
                <Text
                  color="GrayText"
                  fontSize="md"
                  textTransform="capitalize"
                  fontWeight="500"
                >
                  Projects Done
                </Text>
              </Box>

              <Box textAlign="center" w="150px" h="130px" p="4">
                <Heading textTransform="capitalize" fontWeight="700">
                  02+
                </Heading>
                <Text
                  color="GrayText"
                  fontSize="md"
                  textTransform="capitalize"
                  fontWeight="500"
                >
                  Clients Closed
                </Text>
              </Box>
            </Stack>

            <Link to={"/contact"}>
              <Button size="lg" variant="solid" colorScheme="purple">
                <Text textTransform="capitalize">Contact Me</Text>
              </Button>
            </Link>
          </VStack>
        </Stack>
      </VStack>
    </section>
  );
}

export default About;
