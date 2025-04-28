import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Heading,
  Stack,
  VStack,
  Text,
} from '@chakra-ui/react';
import { toast } from 'react-hot-toast';

const ContactPage = () => {
  const [myEmail, setMyEmail] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setMyEmail(process.env.REACT_APP_MY_EMAIL || '');
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendMailFunction = async (formData) => {
    try {
      const response = await fetch(process.env.REACT_APP_FIREBASE_SEND_MAIL_FUNCTION_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast.error(data.message || 'Something went wrong.');
      }
    } catch (error) {
      console.error(error);
      toast.error('Error sending message: ' + error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill all fields.');
      return;
    }

    const toastId = toast.loading('Sending message...');
    setIsSubmitting(true);

    await sendMailFunction(formData);

    setIsSubmitting(false);
    toast.dismiss(toastId);
  };

  return (
    <Box p={{ base: 6, md: 12 }} maxW={['100%', '1100px']} mx="auto">
      {/* Top Title Section */}
      <VStack w="full" spacing={0}>
        <Heading textTransform="capitalize" fontWeight="700">
          Contact Me
        </Heading>
        <Text fontSize="xl" textTransform="capitalize" fontWeight="700" color="GrayText">
          Feel free to reach out
        </Text>
      </VStack>

      {/* Contact and Form Section */}
      <Stack w="full" direction={{ base: 'column' }} spacing={8} align="center" justify="center" mt={12}>
        {/* Email Me Section */}
        <Box w="full" textAlign="center">
          <Heading fontSize="2xl" mb={4}>
            Have a question or just want to say hi?
          </Heading>
          <Button
            colorScheme="purple"
            variant="solid"
            size="lg"
            as="a"
            href={`mailto:${myEmail}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Email Me
          </Button>
        </Box>

        {/* Form Section */}
        <Box
          w={{ base: 'full', md: '60%' }}
          p={8}
          borderRadius="lg"
          boxShadow="lg"
          border="1px"
          borderColor="gray.300"
        >
          <Heading fontSize="xl" mb={6}>
            Send me a Message
          </Heading>

          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <FormControl id="name" isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                />
              </FormControl>

              <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                />
              </FormControl>

              <FormControl id="message" isRequired>
                <FormLabel>Message</FormLabel>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={4}
                />
              </FormControl>

              <Button
                type="submit"
                colorScheme="purple"
                isLoading={isSubmitting}
                loadingText="Sending"
                size="lg"
                w="full"
              >
                Send Message
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>

      {/* Social Media Section */}
      <Box textAlign="center" mt={12}>
        <Heading fontSize="2xl" mb={4}>
          Or connect with me on social media
        </Heading>
        <Stack direction="row" justify="center" spacing={6}>
          <Button
            target="_blank"
            rel="noopener noreferrer"
            as="a"
            href="https://github.com/krishnakolpte"
            colorScheme="gray"
            variant="outline"
          >
            GitHub
          </Button>
          <Button
            target="_blank"
            rel="noopener noreferrer"
            as="a"
            href="https://linkedin.com/in/krishnakolapte"
            colorScheme="blue"
            variant="outline"
          >
            LinkedIn
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default ContactPage;
