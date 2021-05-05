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
  } from '@chakra-ui/react';
  import React, { useState } from 'react';
  import { SignUpForm } from '../../components/SignUpForm';

  
  const SignUpPage = () => {
  
    return (
      <>
        <SignUpForm/>
      </>
    );
  };
  
  export default SignUpPage;