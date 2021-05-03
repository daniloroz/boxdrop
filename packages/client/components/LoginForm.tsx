import {
  Link,
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset,
  Box,
  Flex,
  IconButton,
  useColorMode,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Checkbox,
  Button,
  
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

export const LoginForm = () => {

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
        <Box p={4} pt={10} pl={10}>
          <Box textAlign='left'>
            <Heading as="h3" size="lg">Sign in to your account</Heading>
          </Box>
          {/*Login Form*/}
          <Box my={8} textAlign='left'>
            <form>

              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input type='email' placeholder='Enter your email address' />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Password</FormLabel>
                <Input type='password' placeholder='Enter your password' />
              </FormControl>

              <Stack isInline justifyContent='space-between' mt={4}>
                  <Box>
                    <Checkbox colorScheme="orange">Remember Me</Checkbox>
                  </Box>
                  <Box>
                    <Link fontSize="12" color="orange.500">Forgot your password?</Link>
                  </Box>
              </Stack>

              <Button colorScheme="orange"  width='full' mt={4}>Sign In</Button>
            </form>
            <Text fontSize="12" pt={3}>
              Don't have an account?{" "}
              <Link fontSize="12" color="orange.500" href="#">
                Sign Up.
              </Link>
            </Text>
          </Box>
        </Box>
      </Box>
    </Flex>
    
  )
};



export default LoginForm;
