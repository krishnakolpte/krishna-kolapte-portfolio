import { Button, HStack, Heading, Stack, VStack } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import React, { useEffect, useState } from 'react';
import { MdMenu } from 'react-icons/md';
import { Link } from 'react-router-dom';

function Navbar() {
  const [openModal, setModal] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up scroll listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${scrolled ? 'sticky-header' : ''}`}>
      <Stack
        direction={'row'}
        maxW={['full', '1100px']}
        m={'auto'}
        h={'80px'}
        align={'center'}
        justifyContent={'space-between'}
        p={'4'}
      >
        <Heading
          fontSize={'2xl'}
          textTransform={'capitalize'}
          transition="all 0.3s ease"
        >
          Krishna.
        </Heading>

        <HStack display={['none', 'flex']}>
          <Link to="/">
            <Button variant={'ghost'} colorScheme="purple">
              Home
            </Button>
          </Link>
          <Link to="/projects">
            <Button variant={'ghost'} colorScheme="purple">
              Projects 🚀
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant={'ghost'} colorScheme="purple">
              Contact
            </Button>
          </Link>
        </HStack>

        <HStack>
          <ColorModeSwitcher />
          <Button
            onClick={() => setModal(!openModal)}
            display={['', 'none']}
            variant={'ghost'}
            colorScheme="purple"
          >
            <MdMenu size={'30px'} />
          </Button>
        </HStack>
      </Stack>

      <NavModal setModal={setModal} openModal={openModal} />
    </nav>
  );
}

const NavModal = ({ setModal, openModal }) => (
  <VStack
    className={`navphone ${openModal ? 'navPhoneComes' : ''}`}
    display={['', 'none']}
    w={'100vw'}
    h={'100vh'}
    bgColor={'#6b46c1'}
    position={'fixed'}
    zIndex={'overlay'}
    top={'0'}
    left={'0'}
    p={'8'}
  >
    <HStack w={'full'} justifyContent={'space-between'}>
      <Heading fontSize={'2xl'} textTransform={'capitalize'} color="white">
        Krishna.
      </Heading>

      <Button
        onClick={() => setModal(false)}
        variant={'ghost'}
        color="white"
      >
        Close
      </Button>
    </HStack>

    <VStack
      spacing={'8'}
      w={'full'}
      h={'80%'}
      align={'center'}
      justifyContent={'center'}
    >
      <Link to="/">
        <Button
          onClick={() => setModal(false)}
          variant={'ghost'}
          color="white"
        >
          Home
        </Button>
      </Link>

      <Link to="/projects">
        <Button
          onClick={() => setModal(false)}
          variant={'ghost'}
          color="white"
        >
          Projects
        </Button>
      </Link>

      <Link to="/contact">
        <Button
          onClick={() => setModal(false)}
          variant={'ghost'}
          color="white"
        >
          Contact
        </Button>
      </Link>
    </VStack>
  </VStack>
);

export default Navbar;
