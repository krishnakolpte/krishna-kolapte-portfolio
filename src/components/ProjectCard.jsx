import React from 'react';
import { Box, Button, Heading, Image, Stack, Text, Badge, Flex, useColorModeValue } from "@chakra-ui/react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  const cardBg = useColorModeValue("white", "gray.800");
  const cardHoverBg = useColorModeValue("purple.50", "purple.900");
  const textSecondary = useColorModeValue("gray.600", "gray.400");
  const buttonColorScheme = "purple"; // Purple theme for buttons

  return (
    <Box
      key={project.id}
      bg={cardBg}
      borderRadius="2xl"
      overflow="hidden"
      boxShadow="lg"
      transition="all 0.3s ease"
      _hover={{
        bg: cardHoverBg,
        transform: "scale(1.02)",
        boxShadow: "xl",
      }}
    >
      <Box overflow="hidden">
        <Image
          src={project.image}
          alt={project.title}
          objectFit="cover"
          w="100%"
          h="250px"
          transition="transform 0.3s ease"
          _hover={{ transform: "scale(1.05)" }}
        />
      </Box>

      <Box p={6}>
        <Heading fontSize="2xl" mb={2}>
          {project.title}
        </Heading>

        <Text fontSize="md" mb={4} color={textSecondary}>
          {project.description}
        </Text>

        <Flex wrap="wrap" gap={2} mb={6}>
          {project.techStack.map((tech, idx) => (
            <Badge key={idx} colorScheme="purple" variant="subtle" px={2} py={1} borderRadius="md">
              {tech}
            </Badge>
          ))}
        </Flex>

        <Stack direction="row" spacing={4}>
          <Button
            as="a"
            href={project.liveLink}
            target="_blank"
            colorScheme={buttonColorScheme}
            leftIcon={<FaExternalLinkAlt />}
            size="sm"
            variant="solid"
            transition="transform 0.2s"
            _hover={{ transform: "scale(1.05)" }}
          >
            Live Demo
          </Button>
          <Button
            as="a"
            href={project.githubLink}
            target="_blank"
            colorScheme={buttonColorScheme}
            leftIcon={<FaGithub />}
            size="sm"
            variant="outline"
            transition="transform 0.2s"
            _hover={{ transform: "scale(1.05)" }}
          >
            GitHub
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default ProjectCard;
