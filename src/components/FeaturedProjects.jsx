import React from 'react';
import { Box, Heading, Text, Stack, Button, useBreakpointValue } from '@chakra-ui/react';
import { FaGithub} from 'react-icons/fa'; // Icons for GitHub and task board links

const PlanningProjectCard = ({ project }) => {
  const boxShadow = useBreakpointValue({
    base: 'sm', // Small shadow on mobile
    md: 'lg',  // Larger shadow on medium and above
  });

  return (
    <Box
      p={6}
      borderRadius="lg"
      boxShadow={boxShadow}
      transition="all 0.3s ease"
      _hover={{
        transform: 'scale(1.05)',
        boxShadow: '2xl',
        transition: 'all 0.3s ease',
      }}
      border={"Highlight"}
      maxW="350px"
      mx="auto"
      my={4}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      {/* Project Title */}
      <Heading fontSize="xl" mb={2} fontWeight="700">
        {project.title}
      </Heading>

      {/* Project Status */}
      <Text fontSize="md" color="black.200" mb={4}>
        Status: <strong>{project.status}</strong>
      </Text>

      {/* Project Description */}
      <Text fontSize="sm" color="black.700" mb={4}>
        {project.description}
      </Text>

      {/* Links to Task Board and GitHub */}
      <Stack direction="row" spacing={4} justify="center">
        <Button
          as="a"
          href={project.githubLink}
          target="_blank"
          colorScheme="gray"
          variant="outline"
          leftIcon={<FaGithub />}
        >
          GitHub
        </Button>
      </Stack>
    </Box>
  );
};

export default PlanningProjectCard;
