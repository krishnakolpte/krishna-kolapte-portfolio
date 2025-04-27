// components/CustomToast.jsx
import { Box, Text, Flex, useBreakpointValue } from '@chakra-ui/react';
import { MdCheckCircle, MdWarning } from 'react-icons/md'; // Using react-icons

const CustomToast = ({ message, type = 'success' }) => {
  const iconSize = useBreakpointValue({ base: 18, md: 24 }); // Adjust size based on screen size
  
  return (
    <Box
      p={6}
      bg={type === 'success' ? 'green.500' : 'red.500'}
      color="white"
      borderRadius="lg"
      boxShadow="lg"
      minW="280px"
      maxW="350px"
      transition="all 0.3s ease-in-out"
      _hover={{ transform: 'scale(1.05)', boxShadow: 'xl' }}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Flex align="center">
        <Box mr={4}>
          {type === 'success' ? (
            <MdCheckCircle size={iconSize} />
          ) : (
            <MdWarning size={iconSize} />
          )}
        </Box>
        <Text fontWeight="bold" fontSize="lg">
          {message}
        </Text>
      </Flex>
    </Box>
  );
};

export default CustomToast;
