import { Heading, Stack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { FaCode, FaDatabase } from 'react-icons/fa';
import { MdWeb } from 'react-icons/md';

function Services() {
  return (
    <section id="services">
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
            Services's
          </Heading>
          <Text
            fontSize={'xl'}
            textTransform={'capitalize'}
            fontWeight={'700'}
            color={'GrayText'}
          >
            My Services's
          </Text>
        </VStack>
        <Stack
          direction={['column', 'row']}
          w={'100%'}
          wrap={'wrap'}
          align={'center'}
          justifyContent={'center'}
          spacing={'8'}
          mt={'4'}
        >
          <VStack
            border={'1px dashed gray'}
            rounded={'md'}
            padding={'20px'}
            shadow={'xl'}
            spacing={'3'}
          >
            <FaCode fontSize={'50px'} />
            <Text
              fontSize={'2xl'}
              textTransform={'capitalize'}
              fontWeight={'700'}
            >
              Frontend Dev 🚀
            </Text>
            <Text
              fontSize={'md'}
              textTransform={'capitalize'}
              fontWeight={'700'}
              color={'GrayText'}
            >
              My Services's
            </Text>
          </VStack>

          <VStack
            border={'1px dashed gray'}
            rounded={'md'}
            padding={'20px'}
            shadow={'xl'}
            spacing={'3'}
          >
            <FaDatabase fontSize={'50px'} />
            <Text
              fontSize={'2xl'}
              textTransform={'capitalize'}
              fontWeight={'700'}
            >
              Backend Dev 🚀
            </Text>
            <Text
              fontSize={'md'}
              textTransform={'capitalize'}
              fontWeight={'700'}
              color={'GrayText'}
            >
              My Services's
            </Text>
          </VStack>

          <VStack
            border={'1px dashed gray'}
            rounded={'md'}
            padding={'20px'}
            shadow={'xl'}
            spacing={'3'}
          >
            <MdWeb fontSize={'50px'} />
            <Text
              fontSize={'2xl'}
              textTransform={'capitalize'}
              fontWeight={'700'}
            >
              Fullstack Dev 🚀
            </Text>
            <Text
              fontSize={'md'}
              textTransform={'capitalize'}
              fontWeight={'700'}
              color={'GrayText'}
            >
              My Services's
            </Text>
          </VStack>
        </Stack>
      </VStack>
    </section>
  );
}

export default Services;
