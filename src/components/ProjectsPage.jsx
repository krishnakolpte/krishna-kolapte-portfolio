import { Heading, SimpleGrid, Stack, Text, VStack } from '@chakra-ui/react';
import ProjectCard from './ProjectCard';
import { allProjects, recentProjects, featuredProjects } from '../data/data';

import Card from './Card';
import PlanningProjectCard from './FeaturedProjects';
import { useEffect, useState } from 'react';

const ProjectsPage = () => {
  const [projectsAll, setAllProjects] = useState([]);
  const [projectsRecent, setRecentProjects] = useState([]);
  const [projectsFeatured, setFeaturedProjects] = useState([]);

  useEffect(() => {
    setAllProjects(allProjects);
    setRecentProjects(recentProjects);
    setFeaturedProjects(featuredProjects);
  }, []);

  return (
    <VStack
      maxW={['100%', '1100px']}
      minH={['40vh', '400px']}
      m={'auto'}
      spacing={['8', '4']}
      mt={['8']}
      p={'4'}
    >
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

      <Text
        fontSize={'larger'}
        fontStyle={'inherit'}
        textTransform={'capitalize'}
        w={'full'}
        mb={['4', '8']}
        textAlign={'start'}
      >
        Recent Projects
      </Text>

      {projectsRecent && (
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          {projectsRecent.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </SimpleGrid>
      )}

      <Text
        fontSize={'larger'}
        fontStyle={'inherit'}
        textTransform={'capitalize'}
        w={'full'}
        mt={['4', '8']}
        mb={['4', '8']}
        textAlign={'start'}
      >
        All Projects
      </Text>

      {projectsAll && (
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          {projectsAll.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </SimpleGrid>
      )}
      <Card />

      <Text
        fontSize={'larger'}
        fontStyle={'inherit'}
        textTransform={'capitalize'}
        w={'full'}
        mt={['4', '8']}
        mb={['4', '8']}
        textAlign={'start'}
      >
        Featured Projects
      </Text>

      {projectsFeatured && (
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={8}
          justify="center"
          wrap="wrap"
        >
          {projectsFeatured.map(project => (
            <PlanningProjectCard key={project.id} project={project} />
          ))}
        </Stack>
      )}
    </VStack>
  );
};

export default ProjectsPage;
