import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Spinner,
    Text,
  } from '@chakra-ui/react';
  import React, { useState } from 'react';
  import { LoginForm } from '../../components/LoginForm';

  const VARIANT_COLOR = 'teal'


  const LoginPage = () => {
  
    return (
      <>
        <Flex minHeight='100vh' width='full' align='center' justifyContent='center'>
          <Box 
              borderWidth={1}
              px={4}
              width='full'
              maxWidth='500px'
              borderRadius={4}
              textAlign='center'
              boxShadow='lg'
            >
            <Box p={4}>
              <Box textAlign='center'>
                <Heading>Sign In to Your Account</Heading>
              </Box>
              <LoginForm/>
            </Box>
          </Box>
          <Text>
            Or <Link color={`${VARIANT_COLOR}.500`}>start your 14 days trial</Link>
          </Text>
        </Flex>
      </>
    );
  };
  
  export default LoginPage;