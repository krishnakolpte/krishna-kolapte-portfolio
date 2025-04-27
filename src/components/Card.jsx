import { Button, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import krishnaImage from '../assests/krishna.png';
import { Link } from "react-router-dom";

function Card() {
  return (
    <Stack
      maxW={['90%', '1100px']}
      h={['400px', '300px']}
      m="8"
      mx="auto"
      p={['4', '6']}
      bgColor="#6b46c1"
      rounded="30px"
      backgroundImage={["none", krishnaImage]}
      backgroundRepeat="no-repeat"
      backgroundSize="contain"
      backgroundPosition={['center', 'right']}
    >
      <VStack
        w={['100%', '60%']}
        h="100%"
        alignItems="flex-start"
        justifyContent="space-evenly"
        spacing="4"
      >
        <Heading fontSize="3xl" color="white" textTransform="capitalize">
          Elevate your brand with innovation
        </Heading>

        <Text fontSize="xl" color="white" textTransform="capitalize">
          Embrace challenges as opportunities, failures as lessons, and let your
          passion drive you to new heights. Your journey is the masterpiece
          you're creating.
        </Text>

        <Link to="/contact">
          <Button variant="solid" colorScheme="yellow">
            Hurry Up 🚀
          </Button>
        </Link>
      </VStack>
    </Stack>
  );
}

export default Card;
