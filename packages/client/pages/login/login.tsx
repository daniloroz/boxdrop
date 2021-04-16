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

  const LoginPage = () => {
  
    return (
      <>
        <LoginForm/>
      </>
    );
  };
  
  export default LoginPage;