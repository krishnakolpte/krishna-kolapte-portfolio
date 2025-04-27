import { Box, Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import ProjectCard from './ProjectCard';
import { recentProjects } from '../data/data';
import { useEffect, useState } from 'react';

const Projects = () => {
  const [projectsRecent, setRecentProjects] = useState([]);

  useEffect(() => {
    setRecentProjects(recentProjects);
  }, []);

  return (
    <Box p={{ base: 6, md: 12 }} maxW={['100%', '1100px']} mx="auto">
      <Heading textAlign="center" mb={12}>
        <VStack w={'full'} spacing={'0'}>
          <Heading textTransform={'capitalize'} fontWeight={'700'}>
            Project's
          </Heading>
          <Text
            fontSize={'xl'}
            textTransform={'capitalize'}
            fontWeight={'700'}
            color={'GrayText'}
            mt={'inherit'}
          >
            My Project's
          </Text>
        </VStack>
      </Heading>

      {projectsRecent && (
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          {projectsRecent.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
};

export default Projects;
