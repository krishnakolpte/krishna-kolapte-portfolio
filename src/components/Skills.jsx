import {
  Heading,
  Stack,
  Text,
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Progress,
  HStack,
} from '@chakra-ui/react';
import React from 'react';

function Skills() {
  return (
    <VStack
      maxW={['100%', '1100px']}
      minH={['40vh', '300px']}
      m={'auto'}
      spacing={['8', '4']}
      mt={['8']}
      p={'4'}
    >
      <VStack w={'full'} spacing={'0'}>
        <Heading textTransform={'capitalize'} fontWeight={'700'}>
          Skills
        </Heading>
        <Text
          fontSize={'xl'}
          textTransform={'capitalize'}
          fontWeight={'700'}
          color={'GrayText'}
        >
          My Technicle Skills
        </Text>
      </VStack>
      <Stack
        direction={['column', 'row']}
        mt={'4'}
        w={'100%'}
        minH={['10vh', '100px']}
        alignItems={'center'}
        justifyContent={'center'}
        spacing={'8'}
        wrap={'wrap'}
      >
        <Accordion defaultIndex={[1]} allowMultiple w={['100%', '40%']}>
          <AccordionItem border={'none'}>
            <AccordionButton border={'2px solid #6B46C1'} rounded={'full'}>
              <Box as="span" flex="1" textAlign="left">
                <Text fontSize={'large'} fontWeight={'md'}>
                  Frontend Developer 🚀
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>

            <AccordionPanel pb={4} mt={'3'}>
              <HStack w={'full'} justifyContent={'space-between'}>
                <Text fontSize={'large'} fontWeight={'md'}>
                  Html
                </Text>
                <Text fontSize={'large'} fontWeight={'md'}>
                  86%
                </Text>
              </HStack>
              <Progress value={86} size="xs" colorScheme="purple" />
            </AccordionPanel>
            <AccordionPanel pb={4} mt={'3'}>
              <HStack w={'full'} justifyContent={'space-between'}>
                <Text fontSize={'large'} fontWeight={'md'}>
                  Css
                </Text>
                <Text fontSize={'large'} fontWeight={'md'}>
                  67%
                </Text>
              </HStack>
              <Progress value={67} size="xs" colorScheme="purple" />
            </AccordionPanel>
            <AccordionPanel pb={4} mt={'3'}>
              <HStack w={'full'} justifyContent={'space-between'}>
                <Text fontSize={'large'} fontWeight={'md'}>
                  Js
                </Text>
                <Text fontSize={'large'} fontWeight={'md'}>
                  70%
                </Text>
              </HStack>
              <Progress value={70} size="xs" colorScheme="purple" />
            </AccordionPanel>
            <AccordionPanel pb={4} mt={'3'}>
              <HStack w={'full'} justifyContent={'space-between'}>
                <Text fontSize={'large'} fontWeight={'md'}>
                  React
                </Text>
                <Text fontSize={'large'} fontWeight={'md'}>
                  86%
                </Text>
              </HStack>
              <Progress value={86} size="xs" colorScheme="purple" />
            </AccordionPanel>
            <AccordionPanel pb={4} mt={'3'}>
              <HStack w={'full'} justifyContent={'space-between'}>
                <Text fontSize={'large'} fontWeight={'md'}>
                  Sass
                </Text>
                <Text fontSize={'large'} fontWeight={'md'}>
                  60%
                </Text>
              </HStack>
              <Progress value={60} size="xs" colorScheme="purple" />
            </AccordionPanel>
            <AccordionPanel pb={4} mt={'3'}>
              <HStack w={'full'} justifyContent={'space-between'}>
                <Text fontSize={'large'} fontWeight={'md'}>
                  Chakra Ui
                </Text>
                <Text fontSize={'large'} fontWeight={'md'}>
                  89%
                </Text>
              </HStack>
              <Progress value={89} size="xs" colorScheme="purple" />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Accordion defaultIndex={[1]} allowMultiple w={['100%', '40%']}>
          <AccordionItem border={'none'}>
            <AccordionButton border={'2px solid #6B46C1'} rounded={'full'}>
              <Box as="span" flex="1" textAlign="left">
                <Text fontSize={'large'} fontWeight={'md'}>
                  Backend Developer 🚀
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>

            <AccordionPanel pb={4} mt={'3'}>
              <HStack w={'full'} justifyContent={'space-between'}>
                <Text fontSize={'large'} fontWeight={'md'}>
                  Express
                </Text>
                <Text fontSize={'large'} fontWeight={'md'}>
                  86%
                </Text>
              </HStack>
              <Progress value={86} size="xs" colorScheme="purple" />
            </AccordionPanel>
            <AccordionPanel pb={4} mt={'3'}>
              <HStack w={'full'} justifyContent={'space-between'}>
                <Text fontSize={'large'} fontWeight={'md'}>
                  Maongo Db
                </Text>
                <Text fontSize={'large'} fontWeight={'md'}>
                  87%
                </Text>
              </HStack>
              <Progress value={87} size="xs" colorScheme="purple" />
            </AccordionPanel>
            <AccordionPanel pb={4} mt={'3'}>
              <HStack w={'full'} justifyContent={'space-between'}>
                <Text fontSize={'large'} fontWeight={'md'}>
                  JWT
                </Text>
                <Text fontSize={'large'} fontWeight={'md'}>
                  70%
                </Text>
              </HStack>
              <Progress value={70} size="xs" colorScheme="purple" />
            </AccordionPanel>
            <AccordionPanel pb={4} mt={'3'}>
              <HStack w={'full'} justifyContent={'space-between'}>
                <Text fontSize={'large'} fontWeight={'md'}>
                  Bcrypt
                </Text>
                <Text fontSize={'large'} fontWeight={'md'}>
                  86%
                </Text>
              </HStack>
              <Progress value={86} size="xs" colorScheme="purple" />
            </AccordionPanel>
            <AccordionPanel pb={4} mt={'3'}>
              <HStack w={'full'} justifyContent={'space-between'}>
                <Text fontSize={'large'} fontWeight={'md'}>
                  Autentication
                </Text>
                <Text fontSize={'large'} fontWeight={'md'}>
                  90%
                </Text>
              </HStack>
              <Progress value={90} size="xs" colorScheme="purple" />
            </AccordionPanel>
            <AccordionPanel pb={4} mt={'3'}>
              <HStack w={'full'} justifyContent={'space-between'}>
                <Text fontSize={'large'} fontWeight={'md'}>
                  Rest API's
                </Text>
                <Text fontSize={'large'} fontWeight={'md'}>
                  89%
                </Text>
              </HStack>
              <Progress value={89} size="xs" colorScheme="purple" />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Stack>
    </VStack>
  );
}

export default Skills;
