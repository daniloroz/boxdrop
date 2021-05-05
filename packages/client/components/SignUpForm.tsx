import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Heading,
    Stack,
    InputGroup,
    InputRightElement,
    Spinner,
    Link,
  } from '@chakra-ui/react';
  import React, { useEffect, useState } from 'react';
  
  import Router from 'next/router';
  import { useSelector } from 'react-redux';
  
  export const SignUpForm = () => {
    
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
  
    return (
      //Login Area
    <Flex minHeight='100vh' width='full' align='center' justifyContent='center'>
    <Box 
      borderWidth={1}
      px={1}
      width='full'
      maxWidth='500px'
      borderRadius={4}
      textAlign='center'
      boxShadow='lg'
    >
      {/*Login Header */}
      <Box p={4} pt={10} pl={10} pr={10}>
        <Box textAlign='left'>
          <Heading as="h3" size="lg">Create an account</Heading>
        </Box>
        {/*Login Form*/}
        <Box my={8} textAlign='left'>
          <form>

            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input type='email' placeholder='Enter your email address' />
            </FormControl>

          <FormControl>
            <FormLabel mt={1} htmlFor='password'>Password</FormLabel>
            <InputGroup>
                <Input
                    id='password'
                    placeholder='Enter your Password'
                    type={showPassword ? 'text' : 'password'}
                    autoComplete='off'
                    required
                    mb={3}
                    boxShadow='0 0 0 1px #63b3ed'
                    onChange={({ target }) => setPassword(target.value)}      
                    />
                <InputRightElement mr={1} ml={1}>
                    <Button
                        size='sm'
                        onClick={() => setShowPassword(!showPassword)}
                        >
                                    {showPassword ? 'Hide' : 'Show'}
                    </Button>
                </InputRightElement>
            </InputGroup>
          </FormControl>

            

            <Button width='full' mt={4} colorScheme="orange">Sign In</Button>
            <Flex mt={2} flexDir='column'>
                <Link href='/' color='orange.500' fontSize="12">Already have an account?</Link>
            </Flex>
          </form>
        </Box>
      </Box>
    </Box>
  </Flex>
    );
  };