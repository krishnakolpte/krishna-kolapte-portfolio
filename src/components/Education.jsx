import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import '../styles/timeline.css';

function Education() {
  return (
    <VStack
      maxW={['100%', '1100px']}
      minH={['40vh', '400px']}
      m={'auto'}
      spacing={['8', '4']}
      mt={['8']}
      p={'4'}
    >
      <VStack w={'full'} spacing={'0'}>
        <Heading textTransform={'capitalize'} fontWeight={'700'}>
          Education
        </Heading>
        <Text
          fontSize={'xl'}
          textTransform={'capitalize'}
          fontWeight={'700'}
          color={'GrayText'}
        >
          My Education
        </Text>
      </VStack>
      {/* timeline container */}
      <Box
        mt={'4'}
        w={'100%'}
        minH={'400px'}
        position={'relative'}
        className="timeline"
      >
        {/* timeline content box */}
        <Box
          w={['100%', '50%']}
          position={'relative'}
          p={'10px 50px'}
          left={['', '0']}
          pl={['80px', '50px']}
          pr={['25px', '50px']}
        >
          <Box
            w={'40px'}
            h={'40px'}
            bgColor={'#6b46c1'}
            rounded={'full'}
            position={'absolute'}
            right={['', '-20px']}
            top={'32px'}
            zIndex={'10'}
            className="ball-left"
          ></Box>
          <VStack p={'20px 30px'} shadow={'xl'} rounded={'md'}>
            <Text
              fontSize={'xl'}
              textTransform={'capitalize'}
              fontWeight={'700'}
            >
              Kls collage of computer application.
            </Text>
            <Text
              fontSize={'xl'}
              textTransform={'capitalize'}
              fontWeight={'700'}
              color={'GrayText'}
            >
              2021 - 2024
            </Text>
          </VStack>
        </Box>
        <Box
          w={['100%', '50%']}
          position={'relative'}
          p={'10px 50px'}
          left={['', '50%']}
          pl={['80px', '']}
          pr={['25px', '']}
        >
          <Box
            w={'40px'}
            h={'40px'}
            bgColor={'#6b46c1'}
            rounded={'full'}
            position={'absolute'}
            left={['20px', '-20px']}
            right={['', '-20px']}
            top={'32px'}
            zIndex={'10'}
          ></Box>
          <VStack p={'20px 30px'} shadow={'xl'} rounded={'md'}>
            <Text
              fontSize={'xl'}
              textTransform={'capitalize'}
              fontWeight={'700'}
            >
              Kls PU science and Commerce Collage Haliyal.
            </Text>
            <Text
              fontSize={'xl'}
              textTransform={'capitalize'}
              fontWeight={'700'}
              color={'GrayText'}
            >
              2018 - 2020
            </Text>
          </VStack>
        </Box>
        <Box
          w={['100%', '50%']}
          position={'relative'}
          p={'10px 50px'}
          left={['', '0']}
          pl={['80px', '50px']}
          pr={['25px', '50px']}
        >
          <Box
            w={'40px'}
            h={'40px'}
            bgColor={'#6b46c1'}
            rounded={'full'}
            position={'absolute'}
            right={['', '-20px']}
            top={'32px'}
            zIndex={'10'}
            className="ball-left"
          ></Box>
          <VStack p={'20px 30px'} shadow={'xl'} rounded={'md'}>
            <Text
              fontSize={'xl'}
              textTransform={'capitalize'}
              fontWeight={'700'}
            >
              Shree Shivaji mahavidhyalay Haliyal.
            </Text>
            <Text
              fontSize={'xl'}
              textTransform={'capitalize'}
              fontWeight={'700'}
              color={'GrayText'}
            >
              2017 - 2018
            </Text>
          </VStack>
        </Box>
        <Box
          w={['100%', '50%']}
          position={'relative'}
          p={'10px 50px'}
          left={['', '50%']}
          pl={['80px', '']}
          pr={['25px', '']}
        >
          <Box
            w={'40px'}
            h={'40px'}
            bgColor={'#6b46c1'}
            rounded={'full'}
            position={'absolute'}
            left={['20px', '-20px']}
            right={['', '-20px']}
            top={'32px'}
            zIndex={'10'}
          ></Box>
          <VStack p={'20px 30px'} shadow={'xl'} rounded={'md'}>
            <Text
              fontSize={'xl'}
              textTransform={'capitalize'}
              fontWeight={'700'}
            >
              Gov No.1 School Haliyal.
            </Text>
            <Text
              fontSize={'xl'}
              textTransform={'capitalize'}
              fontWeight={'700'}
              color={'GrayText'}
            >
              2015 - 2017
            </Text>
          </VStack>
        </Box>
      </Box>
    </VStack>
  );
}

export default Education;
